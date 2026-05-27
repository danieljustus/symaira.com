import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Zap, Brain } from 'lucide-react';

export const Vision: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <ShieldCheck size={32} style={{ color: 'var(--gold-primary)', strokeWidth: 1.5 }} />,
      titleKey: 'visionPillar1Title' as const,
      descKey: 'visionPillar1Desc' as const,
    },
    {
      icon: <Zap size={32} style={{ color: 'var(--purple-accent)', strokeWidth: 1.5 }} />,
      titleKey: 'visionPillar2Title' as const,
      descKey: 'visionPillar2Desc' as const,
    },
    {
      icon: <Brain size={32} style={{ color: 'var(--gold-light)', strokeWidth: 1.5 }} />,
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
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontFamily: 'var(--font-tech)',
          fontWeight: 700,
          letterSpacing: '-0.5px',
          marginBottom: '16px',
          background: 'linear-gradient(180deg, #fff 0%, #a1a1aa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
            }}
          >
            {/* Visual glow element behind icon */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: idx === 1 ? 'var(--purple-glow)' : 'var(--gold-glow)',
              filter: 'blur(20px)',
              zIndex: 0,
              pointerEvents: 'none',
            }} />

            {/* Icon Wrapper */}
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(212, 165, 116, 0.15)',
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
              fontSize: '20px',
              fontFamily: 'var(--font-tech)',
              fontWeight: 600,
              marginBottom: '16px',
              color: 'var(--text-primary)',
              position: 'relative',
              zIndex: 1,
            }}>
              {t(pillar.titleKey)}
            </h3>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 1,
            }}>
              {t(pillar.descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
