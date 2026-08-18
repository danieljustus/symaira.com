import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, render, screen } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { ToolPage } from './ToolPage';

// --- Mocks ---

const { trackEvent } = vi.hoisted(() => ({
  trackEvent: vi.fn(),
}));

vi.mock('../config/analytics', () => ({ trackEvent }));

vi.mock('./TuneEditions', () => ({ TuneEditions: () => <div data-testid="tune-editions" /> }));
vi.mock('./TuneFunnel', () => ({ TuneFunnel: () => <div data-testid="tune-funnel" /> }));
vi.mock('./MeetTerminalDemo', () => ({ MeetTerminalDemo: () => <div data-testid="meet-demo" /> }));

// --- Helpers ---

beforeEach(() => {
  vi.useFakeTimers();
  trackEvent.mockClear();
});

afterEach(() => {
  cleanup();
  // Restore clipboard if it was defined in a test
  if (Object.getOwnPropertyDescriptor(navigator, 'clipboard')?.configurable) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (navigator as any).clipboard;
  }
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('ToolPage', () => {
  // ---------- Route-to-product match ----------

  it('renders the product page for a known route', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="vault" />
      </LanguageProvider>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
    expect(screen.getByText('Back to Tools')).toBeTruthy();
  });

  it('shows "Tool not found" for an unknown toolId', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="nonexistent-tool" />
      </LanguageProvider>,
    );

    expect(screen.getByText('Tool not found')).toBeTruthy();
    expect(screen.getByText('Back to home')).toBeTruthy();
  });

  // ---------- FAQ toggle ----------

  it('toggles FAQ answers on click', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="vault" />
      </LanguageProvider>,
    );

    // With SHOW_PRO=false, only FAQ3 is shown: "Is the local core really free?"
    const faqBtn = screen.getByText('Is the local core really free?');
    const btn = faqBtn.closest('button')!;
    expect(btn).toBeTruthy();

    // Click to open
    act(() => {
      btn.click();
    });

    // Answer should be visible
    expect(screen.getByText(/100% open-source/i)).toBeTruthy();

    // Click again to close
    act(() => {
      btn.click();
    });

    // Answer should be hidden
    expect(screen.queryByText(/100% open-source/i)).toBeNull();
  });

  // ---------- Copy-to-clipboard ----------

  it('copies command to clipboard and shows "Copied!" feedback', () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    });

    render(
      <LanguageProvider>
        <ToolPage toolId="vault" />
      </LanguageProvider>,
    );

    // The vault demo has a copy button with the command text; it also
    // appears in the terminal output <p>, so use getAllByText.
    const cmdText = 'symvault run --env API_KEY=prod -- deploy';
    const allMatches = screen.getAllByText(cmdText);
    const copyBtn = allMatches.find(el => el.closest('button'))!;
    expect(copyBtn).toBeTruthy();

    act(() => {
      (copyBtn as HTMLElement).closest('button')!.click();
    });

    expect(writeText).toHaveBeenCalledWith(cmdText);

    // "Copied!" text should appear
    const copiedLabel = screen.getByText(/Copied/i);
    expect(copiedLabel).toBeTruthy();

    // After 2 seconds, "Copied!" should reset
    act(() => {
      vi.advanceTimersByTime(2000);
    });

    // The label should revert to "Copy"
    expect(screen.getByText(/Copy/i)).toBeTruthy();
  });

  // ---------- Consent-gated tracking ----------

  it('fires tune_page_view only for the symtune product', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="tune" />
      </LanguageProvider>,
    );

    expect(trackEvent).toHaveBeenCalledWith('tune_page_view', expect.objectContaining({
      locale: expect.any(String),
    }));
  });

  it('does not fire tune_page_view for non-tune products', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="vault" />
      </LanguageProvider>,
    );

    expect(trackEvent).not.toHaveBeenCalled();
  });

  // ---------- Product sections ----------

  it('renders specifications and features for a known product', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="vault" />
      </LanguageProvider>,
    );

    expect(screen.getByText('Specifications')).toBeTruthy();
    expect(screen.getByText('Key Capabilities')).toBeTruthy();
  });

  it('renders FAQ section', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="vault" />
      </LanguageProvider>,
    );

    expect(screen.getByText('Frequently Asked Questions')).toBeTruthy();
  });

  // ---------- proHint parsing (getProFeaturesList) ----------

  it('does not show pricing comparison when SHOW_PRO is false', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="vault" />
      </LanguageProvider>,
    );

    // With SHOW_PRO=false, the pricing comparison should not render
    expect(screen.queryByText('Compare Core vs. Pro Features')).toBeNull();
  });

  // ---------- Different demo types render ----------

  it('renders the tune demo section for symtune', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="tune" />
      </LanguageProvider>,
    );

    expect(screen.getByText(/CPU Temp/i)).toBeTruthy();
  });

  it('renders TuneEditions and TuneFunnel for symtune', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="tune" />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('tune-editions')).toBeTruthy();
    expect(screen.getByTestId('tune-funnel')).toBeTruthy();
  });

  it('renders the seek demo section for symseek', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="seek" />
      </LanguageProvider>,
    );

    // The seek demo shows "Search query: \"security policy\""
    expect(screen.getByText(/Search query/)).toBeTruthy();
  });

  it('renders the fetch demo section for symfetch', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="fetch" />
      </LanguageProvider>,
    );

    // The fetch demo renders the input line with the URL
    expect(document.querySelector('.fetch-input-line')).toBeTruthy();
  });

  it('renders the scope demo section for symscope', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="scope" />
      </LanguageProvider>,
    );

    // The scope demo shows "Scanning ports & processes..."
    expect(screen.getByText(/Scanning ports/)).toBeTruthy();
  });

  it('renders the memory demo section for symmemory', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="memory" />
      </LanguageProvider>,
    );

    expect(screen.getByText(/symmemory sync/i)).toBeTruthy();
  });
});
