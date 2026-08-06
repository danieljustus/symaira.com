import { describe, expect, it } from 'vitest';
import {
  TUNE_BREW_INSTALL,
  TUNE_DOWNLOAD_URL,
  TUNE_DRAFT_PRICING,
  TUNE_EDITIONS,
  TUNE_FUNNEL_ENABLED,
  TUNE_PREORDER_AVAILABLE,
  TUNE_REPO_URL,
  TUNE_SUPPORTED_MACOS,
  TUNE_TRIAL_AVAILABLE,
  TUNE_UPGRADE_CREDIT_POLICY,
} from './tune';

/**
 * Mirrors the components' private priceVariantFor helpers (TuneEditions.tsx
 * line 34, TuneFunnel.tsx line 34). The variant strings are a shared
 * analytics contract between the edition cards and the funnel's interest
 * selector, so the tests pin the mapping (and the 'free' fallback for
 * unpriced editions) with literal expectations.
 */
const priceVariantFor = (id: string): string => {
  if (id === 'store-pro') return TUNE_DRAFT_PRICING.storePro;
  if (id === 'hardware-pro') {
    return `${TUNE_DRAFT_PRICING.hardwareMin}–${TUNE_DRAFT_PRICING.hardwareMax}`;
  }
  return 'free';
};

describe('TUNE_EDITIONS', () => {
  it('exposes exactly the three variants in page order', () => {
    expect(TUNE_EDITIONS.map(e => e.id)).toEqual(['store-free', 'store-pro', 'hardware-pro']);
  });

  it('marks only hardware-pro as available; both store editions are planned', () => {
    expect(Object.fromEntries(TUNE_EDITIONS.map(e => [e.id, e.status]))).toEqual({
      'store-free': 'planned',
      'store-pro': 'planned',
      'hardware-pro': 'available',
    });
    expect(TUNE_EDITIONS.filter(e => e.status === 'available')).toHaveLength(1);
  });

  it('gives every edition the config fields the section renders', () => {
    for (const edition of TUNE_EDITIONS) {
      expect(typeof edition.nameKey).toBe('string');
      expect(typeof edition.priceKey).toBe('string');
      expect(typeof edition.priceSubKey).toBe('string');
      expect(typeof edition.badgeKey).toBe('string');
      expect(edition.features.length).toBeGreaterThan(0);
    }
  });

  it('flags the hardware-only capabilities with directOnly on hardware-pro only', () => {
    const hardware = TUNE_EDITIONS.find(e => e.id === 'hardware-pro');
    expect(hardware?.features.filter(f => f.directOnly).map(f => f.key)).toEqual([
      'tuneEditionsFeatureSmcFan',
      'tuneEditionsFeatureChargeLimit',
      'tuneEditionsFeatureCli',
      'tuneEditionsFeatureMcp',
    ]);
    for (const edition of TUNE_EDITIONS) {
      if (edition.id !== 'hardware-pro') {
        expect(edition.features.some(f => f.directOnly)).toBe(false);
      }
    }
  });
});

describe('draft pricing', () => {
  it('holds the draft validation prices (not final commitments)', () => {
    expect(TUNE_DRAFT_PRICING).toEqual({
      storePro: '€24.99',
      hardwareMin: '€29',
      hardwareMax: '€39',
    });
  });

  it('maps the priced editions to their draft price variants', () => {
    expect(priceVariantFor('store-pro')).toBe('€24.99');
    expect(priceVariantFor('hardware-pro')).toBe('€29–€39');
    expect(priceVariantFor('store-pro')).toBe(TUNE_DRAFT_PRICING.storePro);
    expect(priceVariantFor('hardware-pro')).toBe(
      `${TUNE_DRAFT_PRICING.hardwareMin}–${TUNE_DRAFT_PRICING.hardwareMax}`,
    );
  });

  it('falls back to the free variant for the unpriced store-free edition', () => {
    expect(priceVariantFor('store-free')).toBe('free');
  });

  it('falls back to the free variant for unknown ids (unpriced => free)', () => {
    expect(priceVariantFor('unknown-edition')).toBe('free');
    expect(priceVariantFor('')).toBe('free');
  });
});

describe('funnel state machine and trust content', () => {
  it('keeps the funnel enabled with trial and preorder locked', () => {
    expect(TUNE_FUNNEL_ENABLED).toBe(true);
    expect(TUNE_TRIAL_AVAILABLE).toBe(false);
    expect(TUNE_PREORDER_AVAILABLE).toBe(false);
  });

  it('points the primary CTA at the pinned v0.8.1 release', () => {
    expect(TUNE_DOWNLOAD_URL).toBe(
      'https://github.com/danieljustus/symaira-tune/releases/tag/v0.8.1',
    );
    expect(TUNE_REPO_URL).toBe('https://github.com/danieljustus/symaira-tune');
    expect(TUNE_BREW_INSTALL).toBe('brew install danieljustus/tap/symtune');
    expect(TUNE_SUPPORTED_MACOS).toBe('macOS Sonoma or newer');
    expect(TUNE_UPGRADE_CREDIT_POLICY).toBe(true);
  });
});
