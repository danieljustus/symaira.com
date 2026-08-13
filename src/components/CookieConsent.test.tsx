import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, render, screen } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { CookieConsent } from './CookieConsent';

const { initGA } = vi.hoisted(() => ({ initGA: vi.fn() }));

vi.mock('../config/analytics', () => ({ initGA }));

const CONSENT_STORAGE_KEY = 'symaira-cookie-consent';

beforeEach(() => {
  vi.useFakeTimers();
  initGA.mockClear();
});

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('CookieConsent', () => {
  it('shows the consent banner after the delayed slide-in when no consent is stored', () => {
    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    // The banner is mounted (hidden via CSS) but not yet visible.
    const panel = () => screen.getByText('Cookie Preferences').closest('.glass-panel');
    expect((panel() as HTMLElement).style.bottom).toBe('-500px');

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect((panel() as HTMLElement).style.bottom).toBe('24px');
    expect(screen.getByText('Accept All')).toBeTruthy();
    expect(screen.getByText('Essential Only')).toBeTruthy();
  });

  it('renders German copy when the language is de', () => {
    window.localStorage.setItem('symaira-language', 'de');

    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(screen.getByText('Cookie-Einstellungen')).toBeTruthy();
    expect(screen.getByText('Alle akzeptieren')).toBeTruthy();
    expect(screen.getByText('Nur Notwendige')).toBeTruthy();
  });

  it('does not inject GA before explicit opt-in', () => {
    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(initGA).not.toHaveBeenCalled();
  });

  it('accepting all persists consent, hides the banner, and loads GA', () => {
    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    act(() => {
      screen.getByText('Accept All').click();
    });

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('accepted');
    expect(initGA).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Cookie Preferences')).toBeNull();
  });

  it('declining persists consent and hides the banner without loading GA', () => {
    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    act(() => {
      screen.getByText('Essential Only').click();
    });

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('declined');
    expect(initGA).not.toHaveBeenCalled();
    expect(screen.queryByText('Cookie Preferences')).toBeNull();
  });

  it('automatically loads GA when consent was accepted in a previous session', () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');

    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    expect(initGA).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Cookie Preferences')).toBeNull();
  });

  it('stays hidden when consent was declined in a previous session', () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'declined');

    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    expect(initGA).not.toHaveBeenCalled();
    expect(screen.queryByText('Cookie Preferences')).toBeNull();
  });

  it('revokes consent and re-opens the banner on the reset-cookie-consent event', () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');

    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    expect(screen.queryByText('Cookie Preferences')).toBeNull();

    act(() => {
      window.dispatchEvent(new Event('reset-cookie-consent'));
    });

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBeNull();
    expect(screen.getByText('Cookie Preferences')).toBeTruthy();
  });

  it('falls back to showing the banner when storage access throws (strict mode)', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });

    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(screen.getByText('Cookie Preferences')).toBeTruthy();
  });

  it('still hides the banner after a save attempt when storage writes throw', () => {
    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });

    act(() => {
      screen.getByText('Accept All').click();
    });

    expect(initGA).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Cookie Preferences')).toBeNull();
  });

  it('saving preferences with analytics unchecked declines consent', () => {
    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    act(() => {
      screen.getByText('Customize').click();
    });

    act(() => {
      screen.getByText('Save Selection').click();
    });

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('declined');
    expect(initGA).not.toHaveBeenCalled();
    expect(screen.queryByText('Cookie Preferences')).toBeNull();
  });

  it('saving preferences with analytics checked accepts consent', () => {
    render(
      <LanguageProvider>
        <CookieConsent />
      </LanguageProvider>,
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    act(() => {
      screen.getByText('Customize').click();
    });

    // The analytics checkbox is visually hidden but still a real input.
    const checkbox = document.querySelector('input[type="checkbox"]');
    expect(checkbox).not.toBeNull();

    act(() => {
      (checkbox as HTMLInputElement).click();
    });

    act(() => {
      screen.getByText('Save Selection').click();
    });

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('accepted');
    expect(initGA).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Cookie Preferences')).toBeNull();
  });
});
