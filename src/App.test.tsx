import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, render } from '@testing-library/react';
import App from './App';

// The route-mapping behavior under test lives in App's own routing logic
// (hash → view + document.title). The heavy page components are stubbed so
// the suite stays focused on routing and titles, matching the audit's
// "Test observable behavior, not implementation details" guidance.
// Note: App.tsx imports these as named exports, so the mocks must mirror that.
vi.mock('./components/SandBackground', () => ({ SandBackground: () => null }));
vi.mock('./components/Navigation', () => ({ Navigation: () => null }));
vi.mock('./components/Hero', () => ({ Hero: () => null }));
vi.mock('./components/Vision', () => ({ Vision: () => null }));
vi.mock('./components/Tools', () => ({ Tools: () => null }));
vi.mock('./components/Contact', () => ({ Contact: () => null }));
vi.mock('./components/Stack', () => ({ Stack: () => null }));
vi.mock('./components/VaultPage', () => ({ VaultPage: () => null }));
vi.mock('./components/ToolPage', () => ({ ToolPage: () => null }));
vi.mock('./components/Footer', () => ({ Footer: () => null }));
vi.mock('./components/LegalPages', () => ({ LegalPages: () => null }));
vi.mock('./components/CookieConsent', () => ({ CookieConsent: () => null }));

const DEFAULT_TITLE = 'Symaira | Open-Source, Local-First AI Tools & MCP Servers';

const setHash = (hash: string) => {
  act(() => {
    window.location.hash = hash;
    window.dispatchEvent(new Event('hashchange'));
  });
};

afterEach(() => {
  cleanup();
  window.location.hash = '';
  vi.unstubAllGlobals();
});

describe('App routing and document titles', () => {
  it('renders the landing view and default title on the root hash', () => {
    window.location.hash = '';
    render(<App />);

    expect(document.title).toBe(DEFAULT_TITLE);
  });

  it('maps known tool routes to their ROUTE_TITLES entry', () => {
    window.location.hash = '';
    render(<App />);

    setHash('#/stack');
    expect(document.title).toBe(
      'The Symaira AI Stack — MCP Servers & Local-First Agent Tools | Symaira',
    );

    setHash('#/seek');
    expect(document.title).toBe('Symaira Seek — Local Hybrid Search (BM25 + Vectors, RRF)');

    setHash('#/tune');
    expect(document.title).toBe(
      'Symaira Tune — Automatic Display, Focus, Energy & Cooling Profiles for Mac | Symaira',
    );
  });

  it('falls back to the default title for unknown hashes', () => {
    window.location.hash = '';
    render(<App />);

    setHash('#/does-not-exist');
    expect(document.title).toBe(DEFAULT_TITLE);
  });

  it('keeps the default title for the hidden Pro route when SHOW_PRO is false', () => {
    // VITE_SHOW_PRO is unset in the test environment, so SHOW_PRO is false.
    window.location.hash = '';
    render(<App />);

    setHash('#/vault-pro');
    expect(document.title).toBe(DEFAULT_TITLE);
  });

  it('uses the Pro title for the vault-pro route when SHOW_PRO is true', async () => {
    vi.resetModules();
    vi.stubEnv('VITE_SHOW_PRO', 'true');
    const { default: AppWithPro } = await import('./App');

    window.location.hash = '#/vault-pro';
    render(<AppWithPro />);

    expect(document.title).toBe(
      'Symaira Vault Pro — Secrets Management for Teams & AI Agents',
    );
  });

  it('handles the legal pages with legal titles', () => {
    window.location.hash = '';
    render(<App />);

    setHash('#/privacy');
    expect(document.title).toBe('Privacy Policy | Symaira');

    setHash('#/impressum');
    expect(document.title).toBe('Imprint | Symaira');
  });
});
