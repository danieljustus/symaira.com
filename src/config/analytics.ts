declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
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
