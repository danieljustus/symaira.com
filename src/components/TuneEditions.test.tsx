import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { TuneEditions } from './TuneEditions';
import { TUNE_DRAFT_PRICING, TUNE_REPO_URL } from '../config/tune';

const { trackEvent } = vi.hoisted(() => ({ trackEvent: vi.fn() }));

vi.mock('../config/analytics', () => ({ trackEvent }));

/**
 * Controllable stand-in for IntersectionObserver: instances capture their
 * callbacks so tests can fire synthetic intersections deterministically.
 * happy-dom ships a real IO, but it never fires in a headless environment,
 * which would leave the visibility instrumentation untested.
 */
class IntersectionObserverMock {
  static instances: IntersectionObserverMock[] = [];
  readonly callback: IntersectionObserverCallback;
  readonly targets: Element[] = [];

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    IntersectionObserverMock.instances.push(this);
  }

  observe(target: Element) {
    this.targets.push(target);
  }

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }

  fire(target: Element, isIntersecting = true) {
    this.callback(
      [{ isIntersecting, target } as unknown as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }
}

beforeEach(() => {
  IntersectionObserverMock.instances = [];
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  trackEvent.mockClear();
});

describe('TuneEditions', () => {
  it('renders all three editions with status badges, draft prices, and the repo CTA', () => {
    render(
      <LanguageProvider>
        <TuneEditions />
      </LanguageProvider>,
    );

    // Section + edition names (EN strings, read from the real config).
    expect(screen.getByText('Editions & Pricing')).toBeTruthy();
    expect(screen.getByText('Store — Free')).toBeTruthy();
    expect(screen.getByText('Store Pro')).toBeTruthy();
    expect(screen.getByText('Hardware Pro')).toBeTruthy();

    // Draft prices come from TUNE_DRAFT_PRICING, not from components.
    expect(screen.getByText(TUNE_DRAFT_PRICING.storePro)).toBeTruthy();
    expect(
      screen.getByText(`${TUNE_DRAFT_PRICING.hardwareMin}–${TUNE_DRAFT_PRICING.hardwareMax}`),
    ).toBeTruthy();

    // Only hardware-pro is available: one available badge + four "Planned"
    // texts (badge + disabled button on each of the two planned editions).
    expect(screen.getByText('Available now')).toBeTruthy();
    expect(screen.getAllByText('Planned')).toHaveLength(4);

    // The only purchase-adjacent path links to the Tune repository.
    const repoLink = screen.getByText('View Tune on GitHub').closest('a');
    expect(repoLink?.getAttribute('href')).toBe(TUNE_REPO_URL);
  });

  it('fires visibility events once when the section and cards intersect', () => {
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

    render(
      <LanguageProvider>
        <TuneEditions />
      </LanguageProvider>,
    );

    const [compareObserver, exposureObserver] = IntersectionObserverMock.instances;
    expect(compareObserver).toBeTruthy();
    expect(exposureObserver).toBeTruthy();

    const cards = document.querySelectorAll('[data-edition]');
    expect(cards).toHaveLength(3);
    // The section observer watches the section, the exposure observer the cards.
    expect(compareObserver?.targets).toHaveLength(1);
    expect(exposureObserver?.targets).toHaveLength(3);

    act(() => {
      compareObserver.fire(document.querySelector('.constrained-box') as Element);
      exposureObserver.fire(cards[0] as Element);
      exposureObserver.fire(cards[1] as Element);
      exposureObserver.fire(cards[2] as Element);
    });

    expect(trackEvent).toHaveBeenCalledWith('tune_edition_compare', { locale: 'en' });
    expect(trackEvent).toHaveBeenCalledWith('tune_price_exposure', {
      edition: 'store-free',
      price_variant: 'free',
      locale: 'en',
    });
    expect(trackEvent).toHaveBeenCalledWith('tune_price_exposure', {
      edition: 'store-pro',
      price_variant: TUNE_DRAFT_PRICING.storePro,
      locale: 'en',
    });
    expect(trackEvent).toHaveBeenCalledWith('tune_price_exposure', {
      edition: 'hardware-pro',
      price_variant: `${TUNE_DRAFT_PRICING.hardwareMin}–${TUNE_DRAFT_PRICING.hardwareMax}`,
      locale: 'en',
    });

    // Once-flags must prevent duplicates on repeated intersections.
    act(() => {
      compareObserver.fire(document.querySelector('.constrained-box') as Element);
      exposureObserver.fire(cards[0] as Element);
    });
    expect(trackEvent).toHaveBeenCalledTimes(4);
  });

  it('falls back to mount-time visibility events without IntersectionObserver', () => {
    vi.stubGlobal('IntersectionObserver', undefined);

    render(
      <LanguageProvider>
        <TuneEditions />
      </LanguageProvider>,
    );

    expect(trackEvent).toHaveBeenCalledWith('tune_edition_compare', { locale: 'en' });
    expect(trackEvent).toHaveBeenCalledWith('tune_price_exposure', {
      edition: 'store-free',
      price_variant: 'free',
      locale: 'en',
    });
    expect(trackEvent).toHaveBeenCalledTimes(4);
  });

  it('fires tune_use_case_click with the selected use case', () => {
    render(
      <LanguageProvider>
        <TuneEditions />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByText('Sunlight'));

    expect(trackEvent).toHaveBeenCalledWith('tune_use_case_click', {
      use_case: 'tuneUseCaseSunlight',
      locale: 'en',
    });
  });
});
