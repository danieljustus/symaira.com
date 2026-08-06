import React, { useEffect, useRef } from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  TUNE_EDITIONS,
  TUNE_DRAFT_PRICING,
  TUNE_UPGRADE_CREDIT_POLICY,
  TUNE_REPO_URL,
} from '../config/tune';
import type { TuneEditionId } from '../config/tune';
import { trackEvent } from '../config/analytics';

const TUNE_USE_CASES = [
  'tuneUseCaseSunlight',
  'tuneUseCaseEvening',
  'tuneUseCaseFocus',
  'tuneUseCaseVideoCall',
  'tuneUseCaseRendering',
  'tuneUseCaseDeskMode',
] as const;

/** Draft price string for an edition card, or null when unpriced (Store Free). */
const priceFor = (id: string): string | null => {
  if (id === 'store-pro') return TUNE_DRAFT_PRICING.storePro;
  if (id === 'hardware-pro') {
    return `${TUNE_DRAFT_PRICING.hardwareMin}–${TUNE_DRAFT_PRICING.hardwareMax}`;
  }
  return null;
};

const isDraftPriced = (id: string): boolean => id === 'store-pro' || id === 'hardware-pro';

/** Stable price-variant identifier for analytics ('free' when unpriced). */
const priceVariantFor = (id: TuneEditionId): string => priceFor(id) ?? 'free';

/**
 * Editions & pricing comparison for Symaira Tune. Rendered only on the Tune
 * product page. Every price and availability label is read from
 * src/config/tune.ts — nothing here is hardcoded.
 */
export const TuneEditions: React.FC = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const compareFired = useRef(false);
  const exposureFired = useRef<Set<string>>(new Set());

  // Visibility instrumentation: fires tune_edition_compare once when the
  // section becomes visible and tune_price_exposure once per edition card.
  // Once-flags prevent duplicates across re-renders and locale switches;
  // browsers without IntersectionObserver fall back to firing on mount.
  useEffect(() => {
    const cleanupObservers: Array<() => void> = [];
    const fireCompare = () => {
      if (compareFired.current) return;
      compareFired.current = true;
      trackEvent('tune_edition_compare', { locale: language });
    };
    const fireExposure = (id: TuneEditionId) => {
      if (exposureFired.current.has(id)) return;
      exposureFired.current.add(id);
      trackEvent('tune_price_exposure', {
        edition: id,
        price_variant: priceVariantFor(id),
        locale: language,
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      fireCompare();
      TUNE_EDITIONS.forEach(edition => fireExposure(edition.id));
      return;
    }

    const section = sectionRef.current;
    if (section) {
      const compareObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fireCompare();
            compareObserver.disconnect();
          }
        });
      }, { threshold: 0.25 });
      compareObserver.observe(section);
      // The compare observer disconnects itself after firing; keep a
      // reference for cleanup below when the effect re-runs (locale change).
      cleanupObservers.push(() => compareObserver.disconnect());
    }

    const exposureObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = (entry.target as HTMLElement).dataset.edition;
        if (id === 'store-free' || id === 'store-pro' || id === 'hardware-pro') {
          fireExposure(id);
        }
      });
    }, { threshold: 0.25 });
    cardRefs.current.forEach(card => {
      if (card) exposureObserver.observe(card);
    });

    return () => {
      cleanupObservers.forEach(cleanup => cleanup());
      exposureObserver.disconnect();
    };
  }, [language]);

  return (
    <div ref={sectionRef} className="constrained-box" style={{ marginBottom: '100px' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 700,
        marginBottom: '16px',
        fontFamily: 'var(--font-title)',
      }}>
        {t('tuneEditionsTitle')}
      </h2>
      <p style={{
        textAlign: 'center',
        fontSize: '15px',
        color: 'var(--text-secondary)',
        maxWidth: '760px',
        margin: '0 auto 48px auto',
        lineHeight: 1.6,
      }}>
        {t('tuneEditionsIntro')}
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        alignItems: 'stretch',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {TUNE_EDITIONS.map((edition, index) => {
          const isAvailable = edition.status === 'available';
          const draftPrice = priceFor(edition.id);
          return (
            <div
              key={edition.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-edition={edition.id}
              className="glass-panel"
              style={{
                padding: '40px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: isAvailable ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.05)',
                backgroundColor: isAvailable ? 'rgba(229, 195, 151, 0.03)' : 'rgba(18, 17, 14, 0.45)',
                boxShadow: isAvailable ? '0 10px 40px rgba(229, 195, 151, 0.08)' : undefined,
                position: 'relative',
              }}
            >
              <div>
                <span
                  className={isAvailable ? 'pricing-badge' : 'product-badge'}
                  style={isAvailable ? {
                    display: 'inline-block',
                    backgroundColor: 'var(--gold-primary)',
                    color: '#000',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontFamily: 'var(--font-tech)',
                    marginBottom: '12px',
                  } : {
                    borderColor: 'rgba(255,255,255,0.12)',
                    color: 'var(--text-muted)',
                    background: 'rgba(255,255,255,0.03)',
                    marginBottom: '12px',
                  }}
                >
                  {t(edition.badgeKey)}
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '20px' }}>
                  {t(edition.nameKey)}
                </h3>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <span style={{ fontSize: '34px', fontWeight: 800, color: isAvailable ? 'var(--gold-primary)' : 'var(--text-primary)' }}>
                    {draftPrice ?? t(edition.priceKey)}
                  </span>
                  {isDraftPriced(edition.id) && (
                    <span style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-tech)',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                    }}>
                      {t('tuneEditionsDraftTag')}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '0 0 2px 0' }}>
                  {draftPrice !== null ? t(edition.priceKey) : null}
                </p>
                <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '0 0 24px 0' }}>
                  {t(edition.priceSubKey)}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {edition.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: 1.45 }}>
                      <Check size={14} style={{ color: 'var(--gold-primary)', marginTop: '2px', flexShrink: 0 }} />
                      <span>
                        {t(feature.key)}
                        {feature.directOnly && (
                          <span style={{
                            display: 'inline-block',
                            marginLeft: '8px',
                            fontSize: '10px',
                            fontFamily: 'var(--font-tech)',
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            padding: '1px 6px',
                            borderRadius: '8px',
                            verticalAlign: 'middle',
                          }}>
                            {t('tuneEditionsDirectOnlyTag')}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {isAvailable ? (
                <a
                  href={TUNE_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  }}
                  className="action-button-secondary"
                >
                  {t('tuneBtn')}
                  <ExternalLink size={14} />
                </a>
              ) : (
                <button
                  disabled
                  type="button"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'not-allowed',
                  }}
                >
                  {t('tuneEditionBadgePlanned')}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Outcome scenarios served by the direct edition */}
      <div className="glass-panel" style={{
        maxWidth: '1100px',
        margin: '32px auto 0 auto',
        padding: '28px 32px',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.05)',
        backgroundColor: 'rgba(18, 17, 14, 0.3)',
      }}>
        <p style={{ fontSize: '13px', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
          {t('tuneEditionsUseCasesTitle')}
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {TUNE_USE_CASES.map(useCase => (
            <button
              key={useCase}
              type="button"
              className="product-badge"
              onClick={() => trackEvent('tune_use_case_click', { use_case: useCase, locale: language })}
              style={{
                borderColor: 'rgba(229, 195, 151, 0.25)',
                color: 'var(--text-secondary)',
                background: 'rgba(229, 195, 151, 0.05)',
                cursor: 'pointer',
                fontFamily: 'var(--font-tech)',
              }}
            >
              {t(useCase)}
            </button>
          ))}
        </div>
      </div>

      {TUNE_UPGRADE_CREDIT_POLICY && (
        <p style={{
          maxWidth: '760px',
          margin: '32px auto 0 auto',
          textAlign: 'center',
          fontSize: '13.5px',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          padding: '16px 24px',
          borderRadius: '10px',
          border: '1px solid rgba(229, 195, 151, 0.15)',
          background: 'rgba(229, 195, 151, 0.04)',
        }}>
          {t('tuneEditionsUpgradeCredit')}
        </p>
      )}

      <p style={{
        maxWidth: '760px',
        margin: '24px auto 0 auto',
        textAlign: 'center',
        fontSize: '12.5px',
        color: 'var(--text-muted)',
        lineHeight: 1.6,
      }}>
        {t('tuneEditionsDraftNote')}
      </p>
    </div>
  );
};
