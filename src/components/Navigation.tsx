import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: '20px',
      zIndex: 100,
      margin: '20px auto',
      width: 'calc(100% - 40px)',
      maxWidth: '1200px',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      border: '1px solid rgba(229, 195, 151, 0.15)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(229, 195, 151, 0.02)',
    }}>
      {/* Brand Logo & Name */}
      <a href="#hero" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontWeight: 800,
        fontFamily: 'var(--font-tech)',
        fontSize: '20px',
        letterSpacing: '2.5px',
        background: 'linear-gradient(45deg, var(--text-primary) 30%, var(--cyan-primary) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        <img 
          src="/logo.png" 
          alt="Symaira Logo" 
          style={{ 
            height: '26px', 
            width: '26px', 
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 6px rgba(229, 195, 151, 0.25))' 
          }} 
        />
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
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-tech)',
          letterSpacing: '0.5px',
        }} className="nav-link">
          {t('navVision')}
        </a>
        <a href="#tools" style={{
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-tech)',
          letterSpacing: '0.5px',
        }} className="nav-link">
          {t('navTools')}
        </a>

        {/* Vertical Divider */}
        <div style={{
          width: '1px',
          height: '18px',
          backgroundColor: 'rgba(229, 195, 151, 0.15)',
        }} />

        {/* Theme Toggler (Dark/Light Mode) */}
        <button 
          onClick={toggleTheme}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(229, 195, 151, 0.15)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            marginRight: '4px',
          }}
          className="icon-button"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? (
            <Sun size={16} style={{ color: 'var(--cyan-primary)', filter: 'drop-shadow(0 0 4px rgba(229, 195, 151, 0.3))' }} />
          ) : (
            <Moon size={16} style={{ color: 'var(--cyan-primary)', filter: 'drop-shadow(0 0 4px rgba(229, 195, 151, 0.3))' }} />
          )}
        </button>

        {/* Language Toggler */}
        <div style={{
          display: 'flex',
          gap: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          padding: '2px',
          borderRadius: '20px',
          border: '1px solid rgba(229, 195, 151, 0.15)',
        }}>
          <button 
            onClick={() => setLanguage('en')}
            style={{
              padding: '5px 12px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontFamily: 'var(--font-tech)',
              fontWeight: 700,
              backgroundColor: language === 'en' ? 'var(--cyan-primary)' : 'transparent',
              color: language === 'en' ? '#000' : 'var(--text-secondary)',
              transition: 'var(--transition-fast)',
              boxShadow: language === 'en' ? '0 0 10px rgba(229, 195, 151, 0.35)' : 'none',
            }}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('de')}
            style={{
              padding: '5px 12px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontFamily: 'var(--font-tech)',
              fontWeight: 700,
              backgroundColor: language === 'de' ? 'var(--cyan-primary)' : 'transparent',
              color: language === 'de' ? '#000' : 'var(--text-secondary)',
              transition: 'var(--transition-fast)',
              boxShadow: language === 'de' ? '0 0 10px rgba(229, 195, 151, 0.35)' : 'none',
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
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(229, 195, 151, 0.12)',
            color: 'var(--text-primary)',
          }}
          className="icon-button"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
        </a>
      </div>
    </nav>
  );
};
