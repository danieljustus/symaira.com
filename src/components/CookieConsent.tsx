import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initGA } from '../config/analytics';
import { Cookie, Settings, Check } from 'lucide-react';

const CONSENT_STORAGE_KEY = 'symaira-cookie-consent';

export const CookieConsent: React.FC = () => {
  const { language } = useLanguage();
  
  // Consent states: null = not chosen, 'accepted' = opt-in for all, 'declined' = opt-out (essential only)
  const [consent, setConsentState] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    // 1. Check existing consent state on mount
    try {
      const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
      setConsentState(storedConsent);
      
      if (storedConsent === 'accepted') {
        // Automatically load GA4 if consent was already given in a previous session
        initGA();
      } else if (storedConsent === null) {
        // Trigger elegant delayed slide-in after 1.5 seconds if consent is not decided
        const timer = setTimeout(() => {
          setVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // Storage blocked (e.g. strict private mode), trigger fallback display
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen to external custom events (for revocation triggers from privacy policy)
  useEffect(() => {
    const handleResetConsent = () => {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      setConsentState(null);
      setAnalyticsChecked(false);
      setShowSettings(false);
      setVisible(true);
    };

    window.addEventListener('reset-cookie-consent', handleResetConsent);
    return () => window.removeEventListener('reset-cookie-consent', handleResetConsent);
  }, []);

  const saveConsent = (status: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, status);
    } catch (e) {
      // Fallback if localStorage is unavailable
    }
    setConsentState(status);
    setVisible(false);

    if (status === 'accepted') {
      initGA();
    }
  };

  const handleAcceptAll = () => {
    saveConsent('accepted');
  };

  const handleDecline = () => {
    saveConsent('declined');
  };

  const handleSavePreferences = () => {
    if (analyticsChecked) {
      saveConsent('accepted');
    } else {
      saveConsent('declined');
    }
  };

  // Do not render anything if consent has already been decided and modal is closed
  if (consent !== null && !visible) {
    return null;
  }

  // Bilingual text dictionary
  const text = {
    title: language === 'de' ? 'Cookie-Einstellungen' : 'Cookie Preferences',
    desc: language === 'de' 
      ? 'Wir nutzen Cookies und Web-Technologien, um die Leistung unserer Seite zu analysieren und dein Nutzungserlebnis zu optimieren. Google Analytics wird erst nach deiner ausdrücklichen Einwilligung geladen.'
      : 'We use cookies and web technologies to analyze page performance and refine your digital experience. Google Analytics will only load after your explicit opt-in consent.',
    essentialTitle: language === 'de' ? 'Notwendige Cookies (Immer aktiv)' : 'Essential Cookies (Always Active)',
    essentialDesc: language === 'de'
      ? 'Ermöglichen grundlegende Webseiten-Funktionen wie die Sprachwahl, das Farbschema und die lokale Speicherung deiner Präferenzen. Sie speichern keine persönlichen Daten.'
      : 'Enable core website functionalities like language preference, color schemes, and local setting persistence. They do not store personal details.',
    analyticsTitle: language === 'de' ? 'Analyse & Statistik (Google Analytics 4)' : 'Analytics & Statistics (Google Analytics 4)',
    analyticsDesc: language === 'de'
      ? 'Hilft uns zu verstehen, wie Besucher mit Symaira interagieren. Ermöglicht anonymisierte Besuchsstatistiken. Die Datenübermittlung erfolgt verschlüsselt.'
      : 'Helps us understand how visitors interact with Symaira. Enables fully anonymized visitor metrics. All data transmission is securely encrypted.',
    btnAcceptAll: language === 'de' ? 'Alle akzeptieren' : 'Accept All',
    btnDecline: language === 'de' ? 'Nur Notwendige' : 'Essential Only',
    btnCustomize: language === 'de' ? 'Einstellungen' : 'Customize',
    btnSave: language === 'de' ? 'Auswahl speichern' : 'Save Selection',
    privacyLink: language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy',
    imprintLink: language === 'de' ? 'Impressum' : 'Imprint',
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: visible ? '24px' : '-500px',
        right: '24px',
        maxWidth: '460px',
        width: 'calc(100% - 48px)',
        zIndex: 9999,
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: visible ? 1 : 0,
      }}
      className="glass-panel"
    >
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(229, 195, 151, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cyan-primary)',
              border: '1px solid rgba(229, 195, 151, 0.15)',
            }}
          >
            <Cookie size={20} />
          </div>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: 700,
              fontFamily: 'var(--font-title)',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            {text.title}
          </h3>
        </div>

        {/* Description Section */}
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          {text.desc}
        </p>

        {/* Advanced Settings Checkboxes (Expandable Panel) */}
        {showSettings && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: '8px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            {/* Essential Category */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '4px',
                  background: 'rgba(229, 195, 151, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan-primary)',
                  marginTop: '2px',
                  flexShrink: 0,
                }}
              >
                <Check size={14} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {text.essentialTitle}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                  {text.essentialDesc}
                </span>
              </div>
            </div>

            {/* Analytics Category */}
            <label
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <div style={{ marginTop: '2px', position: 'relative', flexShrink: 0 }}>
                <input
                  type="checkbox"
                  checked={analyticsChecked}
                  onChange={(e) => setAnalyticsChecked(e.target.checked)}
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer',
                  }}
                />
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    border: analyticsChecked
                      ? '1px solid var(--cyan-primary)'
                      : '1px solid rgba(255, 255, 255, 0.2)',
                    background: analyticsChecked
                      ? 'rgba(229, 195, 151, 0.1)'
                      : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyan-primary)',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  {analyticsChecked && <Check size={14} />}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {text.analyticsTitle}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                  {text.analyticsDesc}
                </span>
              </div>
            </label>
          </div>
        )}

        {/* Buttons and footer navigation */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '8px',
          }}
        >
          {/* Main Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
            {showSettings ? (
              <>
                <button
                  onClick={handleSavePreferences}
                  className="action-button-primary"
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 0,
                    color: '#050504',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {text.btnSave}
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="action-button-secondary"
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    color: 'var(--text-primary)',
                    fontSize: '13px',
                    fontWeight: 650,
                    cursor: 'pointer',
                  }}
                >
                  {language === 'de' ? 'Zurück' : 'Back'}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="action-button-primary"
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 0,
                    color: '#050504',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {text.btnAcceptAll}
                </button>
                <button
                  onClick={handleDecline}
                  className="action-button-secondary"
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    color: 'var(--text-secondary)',
                    fontSize: '13px',
                    fontWeight: 650,
                    cursor: 'pointer',
                  }}
                >
                  {text.btnDecline}
                </button>
              </>
            )}
          </div>

          {/* Subordinate Options & Legal Links */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '11px',
              color: 'var(--text-muted)',
              marginTop: '4px',
            }}
          >
            {!showSettings && (
              <button
                onClick={() => setShowSettings(true)}
                style={{
                  background: 'none',
                  border: 0,
                  color: 'var(--cyan-primary)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: 0,
                  fontSize: '11px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-tech)',
                }}
              >
                <Settings size={12} />
                {text.btnCustomize}
              </button>
            )}

            <div style={{ display: 'flex', gap: '10px', marginLeft: 'auto', fontFamily: 'var(--font-tech)' }}>
              <a
                href="#/impressum"
                className="nav-link"
                style={{ fontSize: '11px', textDecoration: 'underline' }}
              >
                {text.imprintLink}
              </a>
              <a
                href="#/privacy"
                className="nav-link"
                style={{ fontSize: '11px', textDecoration: 'underline' }}
              >
                {text.privacyLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
