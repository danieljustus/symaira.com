/**
 * Single configuration source for Symaira Tune editions, pricing, and
 * availability. The TuneEditions component reads every price, status badge,
 * and edition from here — do not hardcode prices or availability labels in
 * components or translations.
 */

import type { TranslationMap } from '../context/LanguageContext';

export type TuneEditionId = 'store-free' | 'store-pro' | 'hardware-pro';

export interface TuneEditionFeature {
  /** Translation key for the feature line (EN + DE in LanguageContext). */
  key: keyof TranslationMap;
  /**
   * True when the capability exists ONLY in the direct hardware edition
   * (SMC/fan control, charge limiting, CLI, MCP server).
   */
  directOnly?: boolean;
}

export interface TuneEditionConfig {
  id: TuneEditionId;
  /** Translation key for the edition name. */
  nameKey: keyof TranslationMap;
  /** Translation key for the price line label. */
  priceKey: keyof TranslationMap;
  /** Translation key for the price sub-line. */
  priceSubKey: keyof TranslationMap;
  /** 'available' = downloadable today; 'planned' = not for sale yet. */
  status: 'available' | 'planned';
  /** Translation key for the status badge text. */
  badgeKey: keyof TranslationMap;
  /** Feature lines; directOnly flags hardware-only capabilities. */
  features: TuneEditionFeature[];
}

export const TUNE_EDITIONS: TuneEditionConfig[] = [
  {
    id: 'store-free',
    nameKey: 'tuneEditionStoreFreeName',
    priceKey: 'tuneEditionStoreFreePrice',
    priceSubKey: 'tuneEditionStoreFreePriceSub',
    status: 'planned',
    badgeKey: 'tuneEditionBadgePlanned',
    features: [
      { key: 'tuneEditionsFeatureDisplayAutomation' },
      { key: 'tuneEditionsFeatureFocusPresets' },
      { key: 'tuneEditionsFeatureMenuBar' },
    ],
  },
  {
    id: 'store-pro',
    nameKey: 'tuneEditionStoreProName',
    priceKey: 'tuneEditionStoreProPrice',
    priceSubKey: 'tuneEditionStoreProPriceSub',
    status: 'planned',
    badgeKey: 'tuneEditionBadgePlanned',
    features: [
      { key: 'tuneEditionsFeatureStoreFreeEverything' },
      { key: 'tuneEditionsFeatureAdvancedProfiles' },
      { key: 'tuneEditionsFeatureAutomationRules' },
    ],
  },
  {
    id: 'hardware-pro',
    nameKey: 'tuneEditionHardwareName',
    priceKey: 'tuneEditionHardwarePrice',
    priceSubKey: 'tuneEditionHardwarePriceSub',
    status: 'available',
    badgeKey: 'tuneEditionBadgeAvailable',
    features: [
      { key: 'tuneEditionsFeatureSmcFan', directOnly: true },
      { key: 'tuneEditionsFeatureChargeLimit', directOnly: true },
      { key: 'tuneEditionsFeatureCli', directOnly: true },
      { key: 'tuneEditionsFeatureMcp', directOnly: true },
      { key: 'tuneEditionsFeatureExtendedDisplay' },
      { key: 'tuneEditionsFeatureSafetyRestore' },
    ],
  },
];

/**
 * Draft validation prices — NOT final commitments. The component formats the
 * hardware range from these values and labels every priced edition as draft.
 */
export const TUNE_DRAFT_PRICING = {
  storePro: '€24.99',
  hardwareMin: '€29',
  hardwareMax: '€39',
} as const;

/** When true, the upgrade-credit policy note is rendered in the section. */
export const TUNE_UPGRADE_CREDIT_POLICY = true;

/** Primary "available" destination for the direct hardware edition. */
export const TUNE_REPO_URL = 'https://github.com/danieljustus/symaira-tune';

/**
 * Master switch for the paid-demand validation funnel (TuneFunnel section).
 * Flip to false to disable the whole funnel without removing any page code.
 */
export const TUNE_FUNNEL_ENABLED = true;

/**
 * Availability state machine for the funnel CTAs. Both default to false:
 * there is NO signed trial build and NO preorder/payment infrastructure.
 * - Set VITE_TUNE_TRIAL_AVAILABLE=true once a signed trial build exists; the
 *   funnel then renders the trial CTA automatically (fires tune_trial_click).
 * - Set VITE_TUNE_PREORDER_AVAILABLE=true once preorder/payment exists; the
 *   funnel then renders the preorder CTA automatically (fires tune_preorder_click).
 * The three states (trial / preorder / pricing interest) can never be
 * confused: exactly one CTA type renders per flag, and the interest action
 * is always labeled as interest, never as a purchase.
 */
export const TUNE_TRIAL_AVAILABLE = import.meta.env.VITE_TUNE_TRIAL_AVAILABLE === 'true';
export const TUNE_PREORDER_AVAILABLE = import.meta.env.VITE_TUNE_PREORDER_AVAILABLE === 'true';

/**
 * The genuinely available action today: the v0.8.1 direct hardware build
 * (notarized direct distribution, macOS Sonoma or newer). This is the only
 * purchase-adjacent destination that exists; everything else is planned.
 */
export const TUNE_DOWNLOAD_URL = 'https://github.com/danieljustus/symaira-tune/releases/tag/v0.8.1';

/** Homebrew cask install command for the direct hardware edition. */
export const TUNE_BREW_INSTALL = 'brew install danieljustus/tap/symtune';

/** Supported macOS for the direct hardware edition (used by trust content). */
export const TUNE_SUPPORTED_MACOS = 'macOS Sonoma or newer';
