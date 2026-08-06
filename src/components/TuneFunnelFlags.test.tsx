import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { TuneFunnel } from './TuneFunnel';
import { TUNE_DOWNLOAD_URL } from '../config/tune';

const { trackEvent } = vi.hoisted(() => ({ trackEvent: vi.fn() }));

// Flip the availability state machine: with payment/trial infrastructure
// still missing the flags stay false in src/config/tune.ts, but flipping
// them must render the CTAs — that contract is what this file pins.
vi.mock('../config/tune', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../config/tune')>();
  return { ...actual, TUNE_TRIAL_AVAILABLE: true, TUNE_PREORDER_AVAILABLE: true };
});

vi.mock('../config/analytics', () => ({ trackEvent }));

afterEach(() => {
  cleanup();
  trackEvent.mockClear();
});

describe('TuneFunnel flag-driven CTAs', () => {
  it('renders the trial and preorder CTAs when their flags are enabled', () => {
    render(
      <LanguageProvider>
        <TuneFunnel />
      </LanguageProvider>,
    );

    const trialLink = screen.getByText('Try Tune free for 14 days').closest('a');
    expect(trialLink?.getAttribute('href')).toBe(TUNE_DOWNLOAD_URL);
    expect(screen.getByText('Pre-order the Store Pro edition')).toBeTruthy();
  });

  it('fires tune_trial_click from the trial CTA', () => {
    render(
      <LanguageProvider>
        <TuneFunnel />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByText('Try Tune free for 14 days'));

    expect(trackEvent).toHaveBeenCalledWith('tune_trial_click', { locale: 'en' });
  });

  it('fires tune_preorder_click from the preorder CTA', () => {
    render(
      <LanguageProvider>
        <TuneFunnel />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByText('Pre-order the Store Pro edition'));

    expect(trackEvent).toHaveBeenCalledWith('tune_preorder_click', {
      edition: 'store-pro',
      price_variant: '€24.99',
      locale: 'en',
    });
  });
});
