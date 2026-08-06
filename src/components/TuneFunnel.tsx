import React, { useState } from 'react';
import {
  Check,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  Mail,
  ShieldCheck,
  Undo2,
  Apple,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationMap } from '../context/LanguageContext';
import {
  TUNE_FUNNEL_ENABLED,
  TUNE_TRIAL_AVAILABLE,
  TUNE_PREORDER_AVAILABLE,
  TUNE_DOWNLOAD_URL,
  TUNE_BREW_INSTALL,
  TUNE_SUPPORTED_MACOS,
  TUNE_DRAFT_PRICING,
} from '../config/tune';
import type { TuneEditionId } from '../config/tune';
import { trackEvent } from '../config/analytics';

/** Editions the interest selector offers (Store Free is not a paid candidate). */
const INTEREST_OPTIONS: { id: TuneEditionId; selectKey: keyof TranslationMap }[] = [
  { id: 'store-pro', selectKey: 'tuneFunnelInterestSelectStorePro' },
  { id: 'hardware-pro', selectKey: 'tuneFunnelInterestSelectHardware' },
];

/** Draft price variant string for an interest option (matches the edition cards). */
const priceVariantFor = (id: TuneEditionId): string => {
  if (id === 'store-pro') return TUNE_DRAFT_PRICING.storePro;
  return `${TUNE_DRAFT_PRICING.hardwareMin}–${TUNE_DRAFT_PRICING.hardwareMax}`;
};

/** botsafe decode info@symaira.com — same pattern as Contact.tsx. */
const getEmail = (): string => atob('aW5mb0BzeW1haXJhLmNvbQ==');

/**
 * Paid-demand validation funnel for Symaira Tune. Rendered only on the Tune
 * product page, directly after the editions comparison.
 *
 * Honesty contract:
 * - The primary CTA is the genuinely available action: the v0.8.1 direct
 *   build (brew cask + release link). Nothing else is sold today.
 * - Trial and preorder CTAs render ONLY when TUNE_TRIAL_AVAILABLE /
 *   TUNE_PREORDER_AVAILABLE flip to true — both are false right now.
 * - The pricing-interest action is explicitly NOT a purchase: it records the
 *   selected edition + draft price and opens the visitor's own mail app.
 * - All analytics events respect the site's cookie consent gate
 *   (hasAnalyticsConsent inside trackEvent) and carry only edition, locale,
 *   cta_type, and price_variant — no device or hardware data.
 */
export const TuneFunnel: React.FC = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [selected, setSelected] = useState<TuneEditionId>('store-pro');
  const [interestSent, setInterestSent] = useState(false);

  // Configuration switch: the whole funnel can be disabled without removing
  // any page code (TUNE_FUNNEL_ENABLED in src/config/tune.ts).
  if (!TUNE_FUNNEL_ENABLED) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(TUNE_BREW_INSTALL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrimaryCta = () => {
    trackEvent('tune_cta_click', {
      cta_type: 'download_primary',
      edition: 'hardware-pro',
      locale: language,
    });
    handleCopy();
  };

  const handleDownloadClick = () => {
    trackEvent('tune_download_click', {
      edition: 'hardware-pro',
      locale: language,
    });
  };

  const handleInterest = () => {
    const option = INTEREST_OPTIONS.find(o => o.id === selected) ?? INTEREST_OPTIONS[0];
    trackEvent('tune_pricing_interest', {
      edition: option.id,
      price_variant: priceVariantFor(option.id),
      locale: language,
    });
    const subject = `${t('tuneFunnelInterestSubject')} — ${t(option.selectKey)}`;
    window.location.href = `mailto:${getEmail()}?subject=${encodeURIComponent(subject)}`;
    setInterestSent(true);
  };

  const trustItems: { icon: React.ReactNode; text: string }[] = [
    { icon: <Cpu size={16} />, text: t('tuneFunnelTrustLocal') },
    { icon: <ShieldCheck size={16} />, text: t('tuneFunnelTrustNotarized') },
    { icon: <Apple size={16} />, text: `${t('tuneFunnelTrustMacos')}: ${TUNE_SUPPORTED_MACOS}` },
    { icon: <Undo2 size={16} />, text: t('tuneFunnelTrustRestore') },
  ];

  return (
    <div className="constrained-box" style={{ marginBottom: '100px' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 700,
        marginBottom: '16px',
        fontFamily: 'var(--font-title)',
      }}>
        {t('tuneFunnelTitle')}
      </h2>
      <p style={{
        textAlign: 'center',
        fontSize: '15px',
        color: 'var(--text-secondary)',
        maxWidth: '760px',
        margin: '0 auto 48px auto',
        lineHeight: 1.6,
      }}>
        {t('tuneFunnelIntro')}
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        alignItems: 'stretch',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {/* Primary: available action (v0.8.1 direct build) */}
        <div className="glass-panel" style={{
          padding: '36px',
          borderRadius: '16px',
          border: '1px solid rgba(229, 195, 151, 0.25)',
          backgroundColor: 'rgba(229, 195, 151, 0.03)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Download size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
            <h3 style={{ fontSize: '19px', fontWeight: 700, margin: 0 }}>{t('tuneFunnelCtaDownload')}</h3>
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
            {t('tuneFunnelCtaDownloadSub')}
          </p>
          <button
            type="button"
            onClick={handlePrimaryCta}
            style={{
              width: '100%',
              border: '1px solid rgba(229, 195, 151, 0.16)',
              borderRadius: '8px',
              background: 'rgba(229, 195, 151, 0.045)',
              color: 'var(--cyan-primary)',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              fontFamily: 'var(--font-tech)',
              fontSize: '12.5px',
              textAlign: 'left',
            }}
          >
            <span style={{ overflowWrap: 'anywhere', minWidth: 0 }}>{TUNE_BREW_INSTALL}</span>
            <small style={{ color: 'var(--text-muted)', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
              {copied ? <Check size={11} /> : <Copy size={11} />}
              {copied ? t('copiedCommandLabel') : t('copyCommandLabel')}
            </small>
          </button>
          {copied && (
            <p style={{ fontSize: '12.5px', color: 'var(--gold-primary)', margin: 0 }}>{t('tuneFunnelInstallCopied')}</p>
          )}
          <a
            href={TUNE_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadClick}
            className="action-button-secondary"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid rgba(229, 195, 151, 0.3)',
              color: 'var(--text-primary)',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 600,
              backgroundColor: 'rgba(229, 195, 151, 0.08)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxSizing: 'border-box',
            }}
          >
            {t('tuneFunnelReleaseLink')}
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Secondary: pricing interest — clearly NOT a purchase */}
        <div className="glass-panel" style={{
          padding: '36px',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.06)',
          backgroundColor: 'rgba(18, 17, 14, 0.45)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
            <h3 style={{ fontSize: '19px', fontWeight: 700, margin: 0 }}>{t('tuneFunnelInterestTitle')}</h3>
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
            {t('tuneFunnelInterestDesc')}
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {INTEREST_OPTIONS.map(option => {
              const active = selected === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(option.id)}
                  style={{
                    flex: '1 1 200px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: active ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.12)',
                    background: active ? 'rgba(229, 195, 151, 0.08)' : 'rgba(255,255,255,0.03)',
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                  }}
                >
                  <span>{t(option.selectKey)}</span>
                  <strong style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-tech)', fontSize: '13px' }}>
                    {priceVariantFor(option.id)}
                  </strong>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={handleInterest}
            className="action-button-primary"
            style={{
              width: '100%',
              padding: '12px 20px',
              borderRadius: '8px',
              color: '#000',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              border: 'none',
            }}
          >
            {t('tuneFunnelInterestButton')}
            <Mail size={14} />
          </button>
          {interestSent && (
            <p style={{ fontSize: '12.5px', color: 'var(--gold-primary)', margin: 0 }}>{t('tuneFunnelInterestSent')}</p>
          )}
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
            {t('tuneFunnelPrivacyNote')}
          </p>
        </div>
      </div>

      {/* Trust strip */}
      <div className="glass-panel" style={{
        maxWidth: '1100px',
        margin: '24px auto 0 auto',
        padding: '22px 28px',
        borderRadius: '14px',
        border: '1px solid rgba(255,255,255,0.05)',
        backgroundColor: 'rgba(18, 17, 14, 0.3)',
      }}>
        <p style={{
          fontSize: '12px',
          fontFamily: 'var(--font-tech)',
          color: 'var(--text-muted)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          margin: '0 0 14px 0',
        }}>
          {t('tuneFunnelTrustTitle')}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
        }}>
          {trustItems.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold-primary)', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
              <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Conditional trial / preorder CTAs — both flags are false today, so
          neither renders. Wired anyway so flipping the config flag in
          src/config/tune.ts is the only change needed to activate them. */}
      {(TUNE_TRIAL_AVAILABLE || TUNE_PREORDER_AVAILABLE) && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '14px',
          flexWrap: 'wrap',
          marginTop: '24px',
        }}>
          {TUNE_TRIAL_AVAILABLE && (
            <a
              href={TUNE_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('tune_trial_click', { locale: language })}
              className="action-button-secondary"
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid rgba(229, 195, 151, 0.3)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '14px',
                backgroundColor: 'rgba(229, 195, 151, 0.08)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {t('tuneFunnelTrialCta')}
            </a>
          )}
          {TUNE_PREORDER_AVAILABLE && (
            <button
              type="button"
              onClick={() => trackEvent('tune_preorder_click', {
                edition: 'store-pro',
                price_variant: TUNE_DRAFT_PRICING.storePro,
                locale: language,
              })}
              className="action-button-secondary"
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid rgba(229, 195, 151, 0.3)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '14px',
                backgroundColor: 'rgba(229, 195, 151, 0.08)',
                cursor: 'pointer',
              }}
            >
              {t('tuneFunnelPreorderCta')}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
