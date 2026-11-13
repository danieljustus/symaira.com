import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Zap, Brain } from './icons';

export const Vision: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <ShieldCheck size={28} style={{ color: 'var(--text-primary)' }} />,
      titleKey: 'visionPillar1Title' as const,
      descKey: 'visionPillar1Desc' as const,
    },
    {
      icon: <Zap size={28} style={{ color: 'var(--text-primary)' }} />,
      titleKey: 'visionPillar2Title' as const,
      descKey: 'visionPillar2Desc' as const,
    },
    {
      icon: <Brain size={28} style={{ color: 'var(--text-primary)' }} />,
      titleKey: 'visionPillar3Title' as const,
      descKey: 'visionPillar3Desc' as const,
    },
  ];

  return (
    <section 
      id="vision" 
      className="constrained-box" 
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Vision Headers */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 2.5rem, 40px)',
          fontFamily: 'var(--font-title)',
          fontWeight: 700,
          letterSpacing: '0',
          marginBottom: '16px',
          color: 'var(--text-primary)',
        }}>
          {t('visionTitle')}
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          {t('visionSubtitle')}
        </p>
      </div>

      {/* Grid Pillars */}
      <div className="vision-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: '24px',
        marginTop: '20px',
      }}>
        {pillars.map((pillar, idx) => (
          <div 
            key={idx} 
            className="glass-panel" 
            style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--border-glass)',
            }}
          >
            {/* Icon Wrapper */}
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              backgroundColor: 'transparent',
              border: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '28px',
              position: 'relative',
              zIndex: 1,
            }}>
              {pillar.icon}
            </div>

            {/* Pillar Content */}
            <h3 style={{
              fontSize: '19px',
              fontFamily: 'var(--font-tech)',
              fontWeight: 600,
              marginBottom: '16px',
              color: 'var(--text-primary)',
              position: 'relative',
              zIndex: 1,
              letterSpacing: '0.2px',
            }}>
              {t(pillar.titleKey)}
            </h3>
            <p style={{
              fontSize: '14.5px',
              color: 'var(--text-secondary)',
              lineHeight: '1.65',
              position: 'relative',
              zIndex: 1,
            }}>
              {t(pillar.descKey)}
            </p>
          </div>
        ))}
      </div>

      <div className="brand-meaning-panel" style={{
        marginTop: '42px',
        padding: '34px',
        borderRadius: '18px',
        border: '1px solid var(--border-glass)',
        color: 'var(--text-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
          gap: '28px',
          alignItems: 'center',
        }} className="brand-meaning-content">
          <div>
            <h3 style={{
              fontSize: 'clamp(24px, 2rem, 32px)',
              fontFamily: 'var(--font-title)',
              fontWeight: 700,
              letterSpacing: '0',
              color: 'var(--text-primary)',
              marginBottom: '12px',
            }}>
              {t('brandMeaningTitle')}
            </h3>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}>
              {t('brandMeaningDesc')}
            </p>
          </div>

          <div className="brand-meaning-parts" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '12px',
          }}>
            {[t('brandMeaningSym'), t('brandMeaningAi'), t('brandMeaningRa')].map((part) => (
              <div key={part} style={{
                padding: '18px 16px',
                borderRadius: '12px',
                border: '1px solid var(--border-glass)',
                background: 'transparent',
                fontFamily: 'var(--font-tech)',
                fontSize: '12px',
                color: 'var(--text-primary)',
                lineHeight: 1.45,
              }}>
                {part}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
