import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Zap, Brain } from 'lucide-react';

export const Vision: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <ShieldCheck size={28} style={{ color: 'var(--cyan-primary)', strokeWidth: 1.5 }} />,
      titleKey: 'visionPillar1Title' as const,
      descKey: 'visionPillar1Desc' as const,
    },
    {
      icon: <Zap size={28} style={{ color: 'var(--blue-accent)', strokeWidth: 1.5 }} />,
      titleKey: 'visionPillar2Title' as const,
      descKey: 'visionPillar2Desc' as const,
    },
    {
      icon: <Brain size={28} style={{ color: 'var(--cyan-secondary)', strokeWidth: 1.5 }} />,
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
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontFamily: 'var(--font-title)',
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
              border: '1px solid rgba(0, 245, 255, 0.08)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
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
              background: idx === 1 ? 'var(--blue-glow)' : 'var(--cyan-glow)',
              filter: 'blur(20px)',
              zIndex: 0,
              pointerEvents: 'none',
            }} />

            {/* Tech line markings in corners to match Antigravity aesthetic */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '12px',
              height: '12px',
              borderTop: '1px solid rgba(0, 245, 255, 0.25)',
              borderRight: '1px solid rgba(0, 245, 255, 0.25)',
            }} />

            {/* Icon Wrapper */}
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(0, 245, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '28px',
              position: 'relative',
              zIndex: 1,
              boxShadow: 'inset 0 0 10px rgba(0, 245, 255, 0.05)',
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
    </section>
  );
};
