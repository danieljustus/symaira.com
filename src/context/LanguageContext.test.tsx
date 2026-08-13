import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { LanguageProvider, useLanguage, type TranslationMap } from './LanguageContext';

const LANGUAGE_STORAGE_KEY = 'symaira-language';

/** Probe that surfaces the language, a real translation, and the fallback chain. */
function Probe() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <span data-testid="language">{language}</span>
      <span data-testid="translated">{t('navVision')}</span>
      <span data-testid="missing">{t('does-not-exist' as keyof TranslationMap)}</span>
      <button data-testid="set-de" onClick={() => setLanguage('de')}>
        set-de
      </button>
      <button data-testid="set-en" onClick={() => setLanguage('en')}>
        set-en
      </button>
    </div>
  );
}

/** Sets navigator.languages for the browser-language detection path. */
const stubBrowserLanguages = (languages: string[]) => {
  Object.defineProperty(window.navigator, 'languages', {
    configurable: true,
    value: languages,
  });
  Object.defineProperty(window.navigator, 'language', {
    configurable: true,
    value: languages[0] ?? 'en-US',
  });
};

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('detectInitialLanguage', () => {
  it('prefers a stored valid language over the browser language', () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'de');
    stubBrowserLanguages(['en-US']);

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('language').textContent).toBe('de');
  });

  it('falls back to browser-language detection when the stored value is invalid', () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'fr');
    stubBrowserLanguages(['de-DE', 'en-US']);

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('language').textContent).toBe('de');
  });

  it('detects German from a German browser language without a stored value', () => {
    stubBrowserLanguages(['de-DE', 'en-US']);

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('language').textContent).toBe('de');
  });

  it('detects English from a non-German browser language', () => {
    stubBrowserLanguages(['fr-FR', 'en-US']);

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('language').textContent).toBe('en');
  });

  it('handles a missing languages array via the single-language fallback', () => {
    Object.defineProperty(window.navigator, 'languages', {
      configurable: true,
      value: undefined,
    });
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      value: 'de-AT',
    });

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('language').textContent).toBe('de');
  });

  it('defaults to English when storage access throws', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });
    stubBrowserLanguages(['fr-FR']);

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('language').textContent).toBe('en');
  });
});

describe('t()', () => {
  it('returns the translation of the active language', () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'de');
    stubBrowserLanguages(['de-DE']);

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('translated').textContent).toBe('Vision');
  });

  it('returns the English translation for an English language', () => {
    stubBrowserLanguages(['en-US']);

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('translated').textContent).toBe('Vision');
  });

  it('returns an empty string for an unknown key (fallback chain ends)', () => {
    stubBrowserLanguages(['en-US']);

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('missing').textContent).toBe('');
  });
});

describe('setLanguage', () => {
  it('switches the language and persists it to storage', () => {
    stubBrowserLanguages(['en-US']);

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByTestId('set-de'));
    expect(screen.getByTestId('language').textContent).toBe('de');
    expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('de');

    fireEvent.click(screen.getByTestId('set-en'));
    expect(screen.getByTestId('language').textContent).toBe('en');
    expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en');
  });

  it('keeps the in-memory selection when persisting throws', () => {
    stubBrowserLanguages(['en-US']);
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByTestId('set-de'));
    expect(screen.getByTestId('language').textContent).toBe('de');
  });
});
