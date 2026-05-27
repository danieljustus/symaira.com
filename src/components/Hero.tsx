import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section 
      id="hero" 
      className="constrained-box animate-fade-in" 
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '48px',
        paddingTop: '100px',
        paddingBottom: '120px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="hero-logo-watermark"
      />

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
          background: 'rgba(229, 195, 151, 0.05)',
          border: '1px solid rgba(229, 195, 151, 0.25)',
          marginBottom: '28px',
          boxShadow: '0 0 20px rgba(229, 195, 151, 0.08)',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--cyan-primary)',
            boxShadow: '0 0 8px var(--cyan-primary)',
          }} className="animate-pulse" />
          <span style={{
            fontFamily: 'var(--font-tech)',
            fontSize: '11px',
            letterSpacing: '1.5px',
            color: 'var(--cyan-primary)',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}>
            {t('heroBadge')}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(38px, 4rem, 64px)',
          lineHeight: 1.1,
          fontFamily: 'var(--font-title)',
          fontWeight: 800,
          letterSpacing: '0',
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
            background: 'linear-gradient(90deg, var(--cyan-primary) 20%, var(--blue-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 60px rgba(229, 195, 151, 0.15)',
          }}>
            {t('heroTitle3')}
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '17px',
          color: 'var(--text-secondary)',
          lineHeight: '1.65',
          maxWidth: '540px',
          marginBottom: '40px',
          fontWeight: 400,
        }}>
          {t('heroSubtitle')}
        </p>

        <div className="name-explainer" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '10px',
          width: '100%',
          maxWidth: '570px',
          marginBottom: '34px',
        }}>
          {t('heroNameExplainer').split('. ').map((part) => (
            <div key={part} style={{
              padding: '12px 14px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.025)',
              border: '1px solid rgba(229, 195, 151, 0.14)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-tech)',
              fontSize: '11px',
              lineHeight: 1.45,
            }}>
              {part.replace(/\.$/, '')}
            </div>
          ))}
        </div>

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
              color: theme === 'dark' ? '#000' : '#fff',
              fontWeight: 600,
              fontSize: '15px',
              boxShadow: theme === 'dark' ? '0 4px 20px rgba(229, 195, 151, 0.2)' : '0 4px 20px rgba(134, 104, 64, 0.25)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              color: 'var(--text-primary)',
              fontWeight: 500,
              fontSize: '15px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'var(--transition-fast)',
            }}
            className="action-button-secondary"
          >
            {t('heroButtonVision')}
          </a>
        </div>
      </div>

      {/* Interactive Gravity Grid Network SVG */}
      <div 
        style={{
          flex: '1 1 45%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Antigravity grid graphic container */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          aspectRatio: '1',
          padding: '20px',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.04)',
          background: 'rgba(5, 5, 8, 0.3)',
          boxShadow: 'inset 0 0 40px rgba(229, 195, 151, 0.02)',
          overflow: 'visible',
        }} className="glass-panel animate-float">
          <img
            src="/logo-top.png"
            alt=""
            aria-hidden="true"
            className="hero-orbit-half hero-orbit-half-top"
          />
          <img
            src="/logo-bottom.png"
            alt=""
            aria-hidden="true"
            className="hero-orbit-half hero-orbit-half-bottom"
          />
          
          {/* Interactive Splitting Logo in the center of the Gravity Field */}
          <div className="hero-logo-container" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '168px',
            height: '168px',
            zIndex: 5,
          }}>
            <img 
              src="/logo-top.png" 
              alt="Symaira Gold Half" 
              className="hero-logo-half top symaira-mark-half"
              style={{
                width: '140px',
                height: '78px',
                objectFit: 'contain',
              }}
            />
            <img 
              src="/logo-bottom.png" 
              alt="Symaira Ice-Blue Half" 
              className="hero-logo-half bottom symaira-mark-half"
              style={{
                width: '140px',
                height: '78px',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Dashboard overlay data ticks */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '18px',
            fontFamily: 'var(--font-tech)',
            fontSize: '9px',
            color: 'var(--cyan-primary)',
            letterSpacing: '1px',
            zIndex: 3,
            opacity: 0.8,
          }}>
            SYM.AI.RA // ACTIVE
          </div>

          <div style={{
            position: 'absolute',
            top: '16px',
            right: '18px',
            fontFamily: 'var(--font-tech)',
            fontSize: '9px',
            color: 'var(--text-muted)',
            letterSpacing: '1px',
            zIndex: 3,
          }}>
            BOUNDARY.MODE
          </div>

          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '18px',
            fontFamily: 'var(--font-tech)',
            fontSize: '9px',
            color: 'var(--text-muted)',
            letterSpacing: '0.5px',
            zIndex: 3,
            lineHeight: '1.2',
            textAlign: 'left',
          }}>
            HUMAN: IN LOOP<br />
            AI: SCOPED<br />
            TRUST: ACTIVE
          </div>

          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 400 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
          >
            {/* Coordinate Grid Planes */}
            <path d="M 0 100 H 400" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
            <path d="M 0 200 H 400" stroke="rgba(229, 195, 151, 0.08)" strokeWidth="1" />
            <path d="M 0 300 H 400" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
            
            <path d="M 100 0 V 400" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
            <path d="M 200 0 V 400" stroke="rgba(229, 195, 151, 0.08)" strokeWidth="1" />
            <path d="M 300 0 V 400" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />

            {/* Circular Orbiting Channels */}
            <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx="200" cy="200" r="110" stroke="rgba(229, 195, 151, 0.06)" strokeWidth="1" />
            <circle cx="200" cy="200" r="80" stroke="rgba(174, 200, 230, 0.1)" strokeWidth="1.5" strokeDasharray="6 6" />

            {/* Pulsing gravitational vector lines */}
            <path 
              d="M 200 200 L 90 90 M 200 200 L 310 90 M 200 200 L 90 310 M 200 200 L 310 310" 
              stroke="rgba(229, 195, 151, 0.1)" 
              strokeWidth="1.5" 
              strokeDasharray="4 8"
            />
            
            {/* Dynamic rotating outer system */}
            <g className="animate-slow-spin" style={{ transformOrigin: '200px 200px' }}>
              {/* Outer nodes */}
              <circle cx="200" cy="60" r="5" fill="var(--cyan-primary)" filter="url(#cyanGlow)" />
              <line x1="200" y1="60" x2="200" y2="200" stroke="rgba(229, 195, 151, 0.05)" strokeWidth="1" />
              
              <circle cx="310" cy="200" r="4" fill="var(--blue-accent)" />
              <line x1="310" y1="200" x2="200" y2="200" stroke="rgba(174, 200, 230, 0.04)" strokeWidth="1" />
              
              <circle cx="90" cy="200" r="4" fill="var(--cyan-secondary)" />
              <circle cx="200" cy="340" r="5" fill="var(--cyan-primary)" filter="url(#cyanGlow)" />
            </g>

            {/* Core Gravity Node */}
            <circle cx="200" cy="200" r="42" fill="url(#coreGlow)" />
            <circle cx="200" cy="200" r="26" fill="var(--bg-dark)" stroke="rgba(229, 195, 151, 0.2)" strokeWidth="1.5" />
            
            {/* Expanding pulse animation */}
            <circle cx="200" cy="200" r="26" fill="none" stroke="var(--cyan-primary)" strokeWidth="1" opacity="0.8">
              <animate attributeName="r" values="26;65;26" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="6s" repeatCount="indefinite" />
            </circle>

            {/* Definitions */}
            <defs>
              <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--cyan-primary)" stopOpacity="0.45" />
                <stop offset="55%" stopColor="var(--blue-accent)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero {
            flex-direction: column !important;
            padding-top: 40px !important;
            padding-bottom: 60px !important;
            text-align: center !important;
          }
          #hero h1 {
            font-size: 46px !important;
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
