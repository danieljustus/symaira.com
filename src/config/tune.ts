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
