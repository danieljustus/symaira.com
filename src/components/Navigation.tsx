import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Cpu } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: '20px',
      zIndex: 100,
      margin: '20px auto',
      width: 'calc(100% - 40px)',
      maxWidth: '1200px',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
    }}>
      {/* Brand Logo & Name */}
      <a href="#hero" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontWeight: 'bold',
        fontFamily: 'var(--font-tech)',
        fontSize: '22px',
        letterSpacing: '2px',
        background: 'linear-gradient(45deg, var(--text-primary), var(--gold-primary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        <Cpu size={24} style={{ color: 'var(--gold-primary)', strokeWidth: 1.5 }} />
        SYMAIRA
      </a>

      {/* Nav Links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        marginLeft: 'auto',
      }}>
        <a href="#vision" style={{
          fontSize: '15px',
          fontWeight: 500,
          color: 'var(--text-secondary)',
        }} className="nav-link">
          {t('navVision')}
        </a>
        <a href="#tools" style={{
          fontSize: '15px',
          fontWeight: 500,
          color: 'var(--text-secondary)',
        }} className="nav-link">
          {t('navTools')}
        </a>

        {/* Vertical Divider */}
        <div style={{
          width: '1px',
          height: '20px',
          backgroundColor: 'rgba(212, 165, 116, 0.2)',
        }} />

        {/* Language Toggler */}
        <div style={{
          display: 'flex',
          gap: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          padding: '2px',
          borderRadius: '20px',
          border: '1px solid rgba(212, 165, 116, 0.15)',
        }}>
          <button 
            onClick={() => setLanguage('en')}
            style={{
              padding: '6px 12px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '12px',
              fontFamily: 'var(--font-tech)',
              fontWeight: 700,
              backgroundColor: language === 'en' ? 'var(--gold-primary)' : 'transparent',
              color: language === 'en' ? '#000' : 'var(--text-secondary)',
              transition: 'var(--transition-fast)',
            }}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('de')}
            style={{
              padding: '6px 12px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '12px',
              fontFamily: 'var(--font-tech)',
              fontWeight: 700,
              backgroundColor: language === 'de' ? 'var(--gold-primary)' : 'transparent',
              color: language === 'de' ? '#000' : 'var(--text-secondary)',
              transition: 'var(--transition-fast)',
            }}
          >
            DE
          </button>
        </div>

        {/* GitHub Button */}
        <a 
          href="https://github.com/danieljustus/symaira-vault"
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(212, 165, 116, 0.1)',
            color: 'var(--text-primary)',
          }}
          className="icon-button"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
        </a>
      </div>
    </nav>
  );
};
