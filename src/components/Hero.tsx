import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="hero" 
      className="constrained-box animate-fade-in" 
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        paddingTop: '80px',
        paddingBottom: '100px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Hero Content */}
      <div style={{
        flex: '1 1 50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
      }}>
        {/* Glow Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '30px',
          background: 'rgba(212, 165, 116, 0.08)',
          border: '1px solid rgba(212, 165, 116, 0.3)',
          marginBottom: '28px',
          boxShadow: '0 0 20px rgba(212, 165, 116, 0.1)',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--gold-primary)',
            boxShadow: '0 0 8px var(--gold-primary)',
          }} />
          <span style={{
            fontFamily: 'var(--font-tech)',
            fontSize: '11px',
            letterSpacing: '1.5px',
            color: 'var(--gold-primary)',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}>
            {t('heroBadge')}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 62px)',
          lineHeight: 1.1,
          fontFamily: 'var(--font-tech)',
          fontWeight: 800,
          letterSpacing: '-1px',
          marginBottom: '24px',
          color: 'var(--text-primary)',
        }}>
          <span style={{
            display: 'block',
            color: 'var(--text-primary)',
          }}>
            {t('heroTitle1')}
          </span>
          <span style={{
            display: 'block',
            color: 'var(--text-secondary)',
            fontSize: '80%',
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            margin: '6px 0',
          }}>
            {t('heroTitle2')}
          </span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(90deg, var(--gold-primary) 30%, var(--purple-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 60px rgba(212, 165, 116, 0.2)',
          }}>
            {t('heroTitle3')}
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          maxWidth: '540px',
          marginBottom: '40px',
          fontWeight: 400,
        }}>
          {t('heroSubtitle')}
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <a 
            href="#tools" 
            style={{
              padding: '14px 28px',
              borderRadius: '8px',
              backgroundColor: 'var(--gold-primary)',
              color: '#000',
              fontWeight: 600,
              fontSize: '15px',
              boxShadow: '0 4px 20px rgba(212, 165, 116, 0.25)',
              transition: 'var(--transition-fast)',
            }}
            className="action-button-primary"
          >
            {t('heroButtonTools')}
          </a>
          <a 
            href="#vision" 
            style={{
              padding: '14px 28px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-primary)',
              fontWeight: 500,
              fontSize: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'var(--transition-fast)',
            }}
            className="action-button-secondary"
          >
            {t('heroButtonVision')}
          </a>
        </div>
      </div>

      {/* Symbiosis Animated Node SVG */}
      <div 
        style={{
          flex: '1 1 45%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        className="animate-float"
      >
        <svg 
          width="400" 
          height="400" 
          viewBox="0 0 400 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: '100%', height: 'auto', overflow: 'visible' }}
        >
          {/* Ambient Outer Glow */}
          <circle cx="200" cy="200" r="130" fill="url(#outerGlow)" opacity="0.4" />
          
          {/* Background orbital rings */}
          <circle cx="200" cy="200" r="140" stroke="rgba(212, 165, 116, 0.08)" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="200" cy="200" r="110" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="80" stroke="rgba(212, 165, 116, 0.15)" strokeWidth="2" strokeDasharray="20 180" className="animate-slow-spin" />

          {/* Glowing central paths */}
          <path 
            d="M 120 200 C 120 120, 280 120, 280 200 C 280 280, 120 280, 120 200 Z" 
            stroke="url(#infinityGrad1)" 
            strokeWidth="1.5" 
            opacity="0.6"
            style={{ transformOrigin: 'center', transform: 'rotate(45deg)' }}
          />
          <path 
            d="M 120 200 C 120 120, 280 120, 280 200 C 280 280, 120 280, 120 200 Z" 
            stroke="url(#infinityGrad2)" 
            strokeWidth="1.5" 
            opacity="0.6"
            style={{ transformOrigin: 'center', transform: 'rotate(-45deg)' }}
          />

          {/* Outer rotating node rings */}
          <g className="animate-slow-spin" style={{ transformOrigin: '200px 200px' }}>
            <circle cx="200" cy="60" r="6" fill="var(--gold-primary)" filter="url(#glowFilter)" />
            <circle cx="200" cy="340" r="4" fill="var(--purple-accent)" />
            <circle cx="60" cy="200" r="5" fill="var(--gold-light)" />
            <circle cx="340" cy="200" r="4" fill="var(--purple-accent)" filter="url(#glowFilter)" />
          </g>

          {/* Core Energy Pulse */}
          <circle cx="200" cy="200" r="45" fill="url(#coreGlow)" />
          <circle cx="200" cy="200" r="28" fill="var(--bg-dark)" stroke="var(--border-glass)" strokeWidth="1.5" />
          
          {/* Inner core glyph */}
          <path 
            d="M 190 200 Q 200 185 210 200 Q 200 215 190 200 Z" 
            fill="var(--gold-primary)" 
            filter="url(#glowFilter)"
            opacity="0.8" 
          />
          <circle cx="200" cy="200" r="2" fill="#fff" />

          {/* Definitions */}
          <defs>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--gold-primary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--purple-accent)" stopOpacity="0" />
            </radialGradient>
            
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--gold-primary)" stopOpacity="0.4" />
              <stop offset="60%" stopColor="var(--purple-accent)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="infinityGrad1" x1="120" y1="200" x2="280" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--purple-accent)" />
              <stop offset="100%" stopColor="var(--gold-primary)" />
            </linearGradient>

            <linearGradient id="infinityGrad2" x1="120" y1="200" x2="280" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--gold-primary)" />
              <stop offset="100%" stopColor="var(--purple-accent)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Extra glowing dynamic orbs in background */}
        <div style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.05) 0%, transparent 70%)',
          filter: 'blur(30px)',
          zIndex: -1,
        }} />
      </div>

      {/* Responsive mobile adjustments embedded directly via standard CSS in index.css or simple inline media helper */}
      <style>{`
        @media (max-width: 900px) {
          #hero {
            flex-direction: column-reverse !important;
            padding-top: 40px !important;
            padding-bottom: 60px !important;
            text-align: center !important;
          }
          #hero > div {
            align-items: center !important;
            text-align: center !important;
          }
          #hero p {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
