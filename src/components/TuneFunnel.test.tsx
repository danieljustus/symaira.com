import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { TuneFunnel } from './TuneFunnel';
import { TUNE_BREW_INSTALL, TUNE_DOWNLOAD_URL, TUNE_DRAFT_PRICING } from '../config/tune';

const { trackEvent } = vi.hoisted(() => ({ trackEvent: vi.fn() }));

vi.mock('../config/analytics', () => ({ trackEvent }));

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  trackEvent.mockClear();
});

describe('TuneFunnel', () => {
  it('renders the download CTA, brew command, interest selector, and trust strip', () => {
    render(
      <LanguageProvider>
        <TuneFunnel />
      </LanguageProvider>,
    );

    expect(screen.getByText('Get Tune — or register interest')).toBeTruthy();
    expect(screen.getByText('Get Tune v0.8.1')).toBeTruthy();
    expect(screen.getByText(TUNE_BREW_INSTALL)).toBeTruthy();

    const releaseLink = screen.getByText('Download the v0.8.1 release').closest('a');
    expect(releaseLink?.getAttribute('href')).toBe(TUNE_DOWNLOAD_URL);

    // Interest selector offers the two paid candidates with draft variants.
    expect(screen.getByText('Register pricing interest — not a purchase')).toBeTruthy();
    expect(screen.getByText(TUNE_DRAFT_PRICING.storePro)).toBeTruthy();
    expect(
      screen.getByText(`${TUNE_DRAFT_PRICING.hardwareMin}–${TUNE_DRAFT_PRICING.hardwareMax}`),
    ).toBeTruthy();

    // Trust strip renders the supported-macOS line from config.
    expect(screen.getByText(/macOS Sonoma or newer/)).toBeTruthy();
  });

  it('does not render trial or preorder CTAs while their flags are false', () => {
    render(
      <LanguageProvider>
        <TuneFunnel />
      </LanguageProvider>,
    );

    expect(screen.queryByText('Try Tune free for 14 days')).toBeNull();
    expect(screen.queryByText('Pre-order the Store Pro edition')).toBeNull();
  });

  it('fires tune_cta_click from the primary CTA', () => {
    render(
      <LanguageProvider>
        <TuneFunnel />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByText(TUNE_BREW_INSTALL));

    expect(trackEvent).toHaveBeenCalledWith('tune_cta_click', {
      cta_type: 'download_primary',
      edition: 'hardware-pro',
      locale: 'en',
    });
  });

  it('fires tune_download_click from the release link', () => {
    render(
      <LanguageProvider>
        <TuneFunnel />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByText('Download the v0.8.1 release'));

    expect(trackEvent).toHaveBeenCalledWith('tune_download_click', {
      edition: 'hardware-pro',
      locale: 'en',
    });
  });

  it('records pricing interest with the selected edition draft variant', () => {
    // Replace window.location so the mailto: hand-off cannot navigate.
    vi.stubGlobal('location', { href: '' });

    render(
      <LanguageProvider>
        <TuneFunnel />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByText('Hardware Pro edition'));
    fireEvent.click(screen.getByText("I'm interested — send pricing update"));

    expect(trackEvent).toHaveBeenCalledWith('tune_pricing_interest', {
      edition: 'hardware-pro',
      price_variant: `${TUNE_DRAFT_PRICING.hardwareMin}–${TUNE_DRAFT_PRICING.hardwareMax}`,
      locale: 'en',
    });
    expect(
      screen.getByText('Done — your mail app opened with a pre-filled interest email.'),
    ).toBeTruthy();
  });
});
