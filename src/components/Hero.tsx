import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const markStageRef = useRef<HTMLDivElement>(null);
  const wasSplitRef = useRef(false);

  const triggerShockwave = () => {
    const stage = markStageRef.current;
    if (!stage) return;

    // Calculate absolute viewport center of the interlocking logo stage
    const rect = stage.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Dispatch the custom event to propagate physical ripple into background canvas
    window.dispatchEvent(new CustomEvent('logo-shockwave', { detail: { x, y } }));

    const shockwaves = stage.querySelectorAll('.hero-mark-shockwave');
    shockwaves.forEach((shockwave) => {
      const el = shockwave as HTMLElement;
      el.classList.remove('active');
      void el.offsetWidth; // Force DOM reflow to reset/restart animation
      el.classList.add('active');
    });
  };

  useEffect(() => {
    const stage = markStageRef.current;
    if (!stage) return;

    let frameId = 0;
    let lastProgress = -1;

    const updateLogoProgress = () => {
      frameId = 0;
      const scrollY = window.scrollY;
      // Scroll split progress: 0 at top, linearly scaling to 1 at 450px scrolled down
      const progress = Math.round(Math.min(scrollY / 450, 1) * 1000) / 1000;

      if (progress !== lastProgress) {
        stage.style.setProperty('--logo-scroll-progress', progress.toString());
        
        // Dynamic scroll-up convergence trigger
        if (progress > 0.15) {
          wasSplitRef.current = true;
        } else if (progress === 0 && wasSplitRef.current) {
          wasSplitRef.current = false;
          triggerShockwave();
        }

        lastProgress = progress;
      }
    };

    const handleScroll = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateLogoProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize position in case page was loaded or refreshed while scrolled down
    updateLogoProgress();

    // Trigger initial impact shockwave at the exact merge moment (1.65s of 2.2s animation)
    const initialTimer = setTimeout(() => {
      if (window.scrollY < 20) {
        triggerShockwave();
      }
    }, 1650);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

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
          marginBottom: '14px',
          fontWeight: 400,
        }}>
          {t('heroSubtitle')}
        </p>

        <p className="hero-name-explainer">
          {t('heroNameExplainer')}
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
              color: '#000',
              fontWeight: 600,
              fontSize: '15px',
              boxShadow: '0 4px 20px rgba(229, 195, 151, 0.2)',
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

      {/* Symaira split mark visual */}
      <div 
        style={{
          flex: '1 1 45%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
        }}
      >
        <div ref={markStageRef} className="hero-mark-stage" aria-hidden="true">
          <div className="hero-mark-aura" />
          <div className="hero-mark-grid" />
          <div className="hero-mark-ring hero-mark-ring-outer" />
          <div className="hero-mark-ring hero-mark-ring-inner" />
          
          {/* Shockwave energy ripples (rendered under the logo parts but on top of rings) */}
          <div className="hero-mark-shockwave wave-1" />
          <div className="hero-mark-shockwave wave-2" />
          <div className="hero-mark-shockwave wave-3" />

          <img
            src="/logo-top.png"
            alt=""
            className="hero-mark-half hero-mark-half-top"
            draggable="false"
          />
          <img
            src="/logo-bottom.png"
            alt=""
            className="hero-mark-half hero-mark-half-bottom"
            draggable="false"
          />
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
