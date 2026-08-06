declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Default fallback GA4 Measurement ID for Symaira.com
// This can be easily overwritten in production using a .env file containing VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-EPSEKHTYYL';

/**
 * Dynamically initializes Google Analytics 4 (GA4) by inserting the script tag
 * into the DOM and setting up the tracking configuration.
 * Under DSGVO guidelines, this must only be executed AFTER active user consent.
 */
export const initGA = (): void => {
  if (typeof window === 'undefined') return;

  // Prevent multiple injections of the analytics script
  if (document.getElementById('google-analytics-script')) {
    return;
  }

  // 1. Create and inject the gtag.js script tag
  const script = document.createElement('script');
  script.id = 'google-analytics-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // 2. Initialize the global dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  // 3. Configure tracking setup
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true, // Forces IP anonymization (standard in GA4, but good to state explicitly)
    cookie_flags: 'SameSite=None;Secure', // Modern cookie security flags
  });
};

/** Storage key shared with the CookieConsent component. */
const CONSENT_STORAGE_KEY = 'symaira-cookie-consent';

/**
 * True only when the user explicitly accepted analytics cookies
 * (localStorage 'symaira-cookie-consent' === 'accepted'). This mirrors the
 * CookieConsent component's storage contract exactly, so events can never
 * fire for users who declined or never chose. Any storage error returns
 * false (fail closed).
 */
export const hasAnalyticsConsent = (): boolean => {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === 'accepted';
  } catch {
    return false;
  }
};

/**
 * Fires a GA4 event, but only after explicit analytics consent AND only when
 * the gtag function is actually loaded. A pure no-op otherwise — it never
 * throws and never queues events.
 *
 * Params are deliberately restricted to string | number | boolean so no
 * device identifiers, hardware data, or PII can be sent accidentally; the
 * Tune funnel only ever passes edition, locale, cta_type, price_variant, and
 * use_case values.
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void => {
  if (!hasAnalyticsConsent() || typeof window.gtag !== 'function') return;
  if (params) {
    window.gtag('event', eventName, params);
  } else {
    window.gtag('event', eventName);
  }
};
