import { afterEach, describe, expect, it, vi } from 'vitest';
import { GA_MEASUREMENT_ID, hasAnalyticsConsent, initGA, trackEvent } from './analytics';

const CONSENT_STORAGE_KEY = 'symaira-cookie-consent';

afterEach(() => {
  window.localStorage.clear();
  document.getElementById('google-analytics-script')?.remove();
  window.dataLayer = [];
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('hasAnalyticsConsent', () => {
  it('returns false when no consent is stored (fail closed)', () => {
    expect(hasAnalyticsConsent()).toBe(false);
  });

  it('returns true only for the exact "accepted" value', () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    expect(hasAnalyticsConsent()).toBe(true);

    for (const value of ['declined', 'dismissed', '', 'true', 'Accepted']) {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
      expect(hasAnalyticsConsent()).toBe(false);
    }
  });

  it('returns false when storage access throws (fail closed)', () => {
    vi.spyOn(window.localStorage, 'getItem').mockImplementationOnce(() => {
      throw new Error('storage blocked');
    });
    expect(hasAnalyticsConsent()).toBe(false);
  });
});

describe('trackEvent', () => {
  it('is a no-op without consent even when gtag is loaded', () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'declined');
    const gtag = vi.fn();
    vi.stubGlobal('gtag', gtag);

    trackEvent('tune_cta_click', { cta_type: 'download_primary' });

    expect(gtag).not.toHaveBeenCalled();
  });

  it('is a no-op when gtag is not loaded even with consent, and never throws', () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    vi.stubGlobal('gtag', undefined);

    expect(() => trackEvent('tune_page_view')).not.toThrow();
  });

  it('pushes typed params via gtag when consent is given', () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    const gtag = vi.fn();
    vi.stubGlobal('gtag', gtag);

    trackEvent('tune_cta_click', {
      cta_type: 'download_primary',
      edition: 'hardware-pro',
      locale: 'en',
    });

    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag).toHaveBeenCalledWith('event', 'tune_cta_click', {
      cta_type: 'download_primary',
      edition: 'hardware-pro',
      locale: 'en',
    });
  });

  it('passes string | number | boolean params through unmodified', () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    const gtag = vi.fn();
    vi.stubGlobal('gtag', gtag);

    trackEvent('tune_metric', { label: 'x', count: 3, valid: true });

    expect(gtag).toHaveBeenCalledWith('event', 'tune_metric', {
      label: 'x',
      count: 3,
      valid: true,
    });
  });

  it('calls gtag with the event name only when no params are given', () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    const gtag = vi.fn();
    vi.stubGlobal('gtag', gtag);

    trackEvent('tune_page_view');

    expect(gtag).toHaveBeenCalledWith('event', 'tune_page_view');
  });
});

describe('initGA', () => {
  it('injects the gtag script and initializes dataLayer with js + config', () => {
    initGA();

    const script = document.getElementById('google-analytics-script');
    expect(script).toBeTruthy();
    expect(script?.getAttribute('async')).not.toBeNull();
    expect((script as HTMLScriptElement).src).toContain(GA_MEASUREMENT_ID);
    expect(typeof window.gtag).toBe('function');
    expect(window.dataLayer.length).toBe(2);
    expect((window.dataLayer[0] as unknown[])[0]).toBe('js');
    expect((window.dataLayer[1] as unknown[])[0]).toBe('config');
    expect((window.dataLayer[1] as unknown[])[1]).toBe(GA_MEASUREMENT_ID);
  });

  it('does not inject a second script or re-push when called again', () => {
    initGA();
    initGA();

    expect(document.querySelectorAll('#google-analytics-script')).toHaveLength(1);
    expect(window.dataLayer.length).toBe(2);
  });
});
