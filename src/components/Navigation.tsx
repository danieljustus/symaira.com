import React from 'react';
import { GitHubIcon } from './GitHubIcon';
import type { Language } from '../context/LanguageContext';
import { useLanguage } from '../context/LanguageContext';

const languageOptions: Language[] = ['en', 'de'];

export const Navigation: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="glass-panel site-nav" style={{
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
      <a href="#hero" className="site-nav-brand" style={{
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
      <div className="site-nav-actions" style={{
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
        <a href="#/stack" style={{
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-tech)',
          letterSpacing: '0.5px',
        }} className="nav-link">
          {t('navStack')}
        </a>
        <a href="#/vault" style={{
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--gold-primary)',
          fontFamily: 'var(--font-tech)',
          letterSpacing: '0.5px',
        }} className="nav-link">
          {t('navVaultPro')}
        </a>
        <a href="#contact" style={{
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-tech)',
          letterSpacing: '0.5px',
        }} className="nav-link">
          {t('navContact')}
        </a>

        <div className="language-toggle" role="group" aria-label={t('languageToggleLabel')}>
          {languageOptions.map((languageOption) => (
            <button
              key={languageOption}
              type="button"
              className={language === languageOption ? 'language-toggle-option active' : 'language-toggle-option'}
              onClick={() => setLanguage(languageOption)}
              aria-pressed={language === languageOption}
              aria-label={languageOption === 'en' ? t('languageEnglish') : t('languageGerman')}
            >
              {languageOption.toUpperCase()}
            </button>
          ))}
        </div>

        {/* GitHub Button */}
        <a 
          href="https://github.com/danieljustus"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={t('navGithubProfile')}
          title={t('navGithub')}
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
          <GitHubIcon size={16} />
        </a>
      </div>
    </nav>
  );
};
