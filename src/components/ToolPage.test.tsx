import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, render, screen } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { ToolPage } from './ToolPage';

// --- Mocks ---

// --- Helpers ---

beforeEach(() => {
  vi.useFakeTimers();
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

    // FAQ3 is the only FAQ: "Is the local core really free?"
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

  // ---------- Different demo types render ----------

  it('renders the cockpit demo section for symcockpit', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="cockpit" />
      </LanguageProvider>,
    );

    expect(screen.getByText(/local ports inventoried/i)).toBeTruthy();
  });

  it('renders the browse demo section for symbrowse', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="browse" />
      </LanguageProvider>,
    );

    expect(document.querySelector('.fetch-input-line')).toBeTruthy();
  });

  it('renders the brain demo section for symbrain', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="brain" />
      </LanguageProvider>,
    );

    expect(screen.getByText(/symbrain profile/i)).toBeTruthy();
  });

  it('renders the desktop demo section for symdesk', () => {
    render(
      <LanguageProvider>
        <ToolPage toolId="desktop" />
      </LanguageProvider>,
    );

    expect(screen.getByText(/symdesk web dashboard/i)).toBeTruthy();
  });
});
