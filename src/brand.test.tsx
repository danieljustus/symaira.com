/// <reference types="node" />
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import * as icons from './components/icons';

// Guards for the approved Liquid Topography brand contract (symaira-appkit
// DESIGN.md): tokens, original Google Sans Flex, opaque web surfaces, AppKit
// icons and the metadata/stub pages that carry the brand outside React.
const root = resolve(__dirname, '..');
const read = (relative: string) => readFileSync(join(root, relative), 'utf8');

const sourceFiles = (dir: string): string[] =>
  readdirSync(join(root, dir), { withFileTypes: true }).flatMap((entry) => {
    const relative = join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(relative);
    return /\.(tsx?|css)$/.test(entry.name) && !/\.test\./.test(entry.name) ? [relative] : [];
  });

afterEach(cleanup);

describe('tokens and typography', () => {
  const tokens = read('src/liquid-topography/tokens.css');

  it('carries the approved canvas, surface and champagne roles', () => {
    expect(tokens).toContain('--sym-canvas: #EEEDEA');
    expect(tokens).toContain('--sym-canvas: #1C1C1B');
    expect(tokens).toContain('--sym-surface: #141413');
    expect(tokens).toContain('--sym-primary: #E0D2BA');
  });

  it('pins Google Sans Flex at opsz 18 with the shared fallback chain', () => {
    expect(tokens).toContain('--sym-font: "Google Sans Flex", -apple-system');
    expect(tokens).toContain("font-variation-settings: 'opsz' 18 !important");
  });

  it('ships the unmodified original font with licence and trademark notice', () => {
    const dir = 'src/assets/fonts/google-sans-flex';
    const font = readFileSync(join(root, dir, 'GoogleSansFlex.ttf'));
    expect(createHash('sha256').update(font).digest('hex')).toBe(
      'a9ac770798857d5e8ac593ced42b22e40a7c08cec98319f92b0eccc2783a77ba',
    );
    expect(read(`${dir}/GoogleSansFlex-OFL.txt`)).toContain('SIL OPEN FONT LICENSE');
    expect(read(`${dir}/GoogleSansFlex-TRADEMARKS.md`)).toContain('trademarks of Google LLC');
  });

  it('loads the font locally and never from a CDN or a retired family', () => {
    const css = read('src/index.css');
    expect(css).toContain('font-family: "Google Sans Flex"');
    expect(css).toContain('./assets/fonts/google-sans-flex/GoogleSansFlex.ttf');
    for (const file of [...sourceFiles('src'), 'index.html']) {
      const text = read(file);
      expect(text, file).not.toMatch(/fonts\.(googleapis|gstatic)\.com|roboto flex|SF Pro/i);
    }
  });
});

describe('web surfaces', () => {
  it('uses no glass imitation, gradients or glow shadows in source', () => {
    for (const file of sourceFiles('src').filter((f) => !f.includes('liquid-topography'))) {
      const text = read(file);
      expect(text, file).not.toMatch(/backdrop-filter|backdropFilter|-gradient\(|drop-shadow|text-shadow|textShadow/);
    }
  });

  it('keeps a global keyboard focus ring and no off-palette status greens', () => {
    const css = read('src/index.css');
    expect(css).toMatch(/:focus-visible\s*\{[^}]*outline: 2px solid var\(--sym-focus\)/);
    expect(css).not.toMatch(/#10b981|#86efac|#f59e0b|#6366f1|#c4b5fd/i);
  });

  it('reserves real touch-target space instead of overlapping pseudo-elements', () => {
    const css = read('src/index.css');
    expect(css).toMatch(/@media \(pointer: coarse\)[\s\S]*?min-width: 44px !important;[\s\S]*?min-height: 44px;/);
    expect(css).not.toContain('.language-toggle-option::before');
  });
});

describe('AppKit icons', () => {
  it('renders every exported icon as an inline SVG at the requested size', () => {
    const names = Object.keys(icons).filter((name) => name !== 'Cookie');
    expect(names.length).toBeGreaterThanOrEqual(20);
    for (const name of names) {
      const Icon = (icons as unknown as Record<string, (p: { size: number }) => React.ReactElement>)[name];
      const { container, unmount } = render(<Icon size={18} />);
      const wrapper = container.firstElementChild as HTMLElement;
      expect(wrapper.querySelector('svg'), name).not.toBeNull();
      expect(wrapper.getAttribute('aria-hidden'), name).toBe('true');
      expect(wrapper.style.width, name).toBe('18px');
      unmount();
    }
  });

  it('uses the shared 2px stroke and currentColor from the vendored SVG', () => {
    const { container } = render(<icons.Vault />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('stroke')).toBe('currentColor');
    expect(svg.getAttribute('stroke-width')).toBe('2');
    expect(svg.getAttribute('class')).toBe('si-product-vault');
  });
});

describe('metadata outside React', () => {
  const html = read('index.html');

  it('pins the dark canvas and points social previews at og-image.png', () => {
    expect(html).toContain('<html lang="en" data-theme="dark">');
    expect(html).toContain('<meta name="theme-color" content="#1C1C1B" />');
    expect(html).toContain('property="og:image" content="https://symaira.com/og-image.png"');
    expect(html).toContain('property="twitter:image" content="https://symaira.com/og-image.png"');
    expect(html).toContain('og:image:width" content="1200"');
    expect(html).toContain('og:image:height" content="630"');
  });

  it('keeps the /vault redirect stub on the approved palette and still redirecting', () => {
    const stub = read('public/vault/index.html');
    expect(stub).toContain('url=../#/vault');
    expect(stub).toContain("window.location.replace('/#/vault')");
    expect(stub).toContain('#1C1C1B');
    expect(stub).toContain('#E0D2BA');
  });
});
