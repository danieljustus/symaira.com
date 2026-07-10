import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Heart, ShieldCheck } from 'lucide-react';
import { SHOW_PRO } from '../config/features';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        borderTop: '1px solid var(--border-glass)',
        paddingTop: '40px',
        paddingBottom: '40px',
        marginTop: '80px',
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'var(--bg-footer)',
      }}
    >
      <div 
        className="constrained-box"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {/* Left Side: Brand Name & Rights */}
        <div style={{ textAlign: 'left' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-tech)',
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '1px',
            color: 'var(--text-primary)',
            marginBottom: '4px',
          }}>
            <img 
              src="/logo.png" 
              alt="Symaira Logo" 
              style={{ 
                height: '20px', 
                width: '20px', 
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 4px rgba(229, 195, 151, 0.2))' 
              }} 
            />
            SYMAIRA
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            © {currentYear} Symaira. {t('footerRights')}
          </div>
        </div>

        {/* Brand statement & Compliance badges */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '20px',
            backgroundColor: 'rgba(229, 195, 151, 0.06)',
            border: '1px solid rgba(229, 195, 151, 0.18)',
          }}>
            <ShieldCheck size={12} style={{ color: 'var(--cyan-primary)' }} />
            <span style={{
              fontSize: '11px',
              fontFamily: 'var(--font-tech)',
              color: 'var(--cyan-primary)',
              letterSpacing: '0.5px',
            }}>
              {t('footerMessage')}
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '20px',
            backgroundColor: 'rgba(229, 195, 151, 0.06)',
            border: '1px solid rgba(229, 195, 151, 0.18)',
          }}>
            <span style={{ fontSize: '12px', lineHeight: 1 }}>🇩🇪</span>
            <span style={{
              fontSize: '11px',
              fontFamily: 'var(--font-tech)',
              color: 'var(--cyan-primary)',
              letterSpacing: '0.5px',
            }}>
              {t('footerMadeInGermany')}
            </span>
          </div>
        </div>

        {/* Right Side: Signature / Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '13px',
          color: 'var(--text-muted)',
        }}>
          {SHOW_PRO && (
            <a href="#/vault" className="nav-link" style={{ transition: 'var(--transition-fast)' }}>
              {t('navVaultPro')}
            </a>
          )}
          <a href="#/impressum" className="nav-link" style={{ transition: 'var(--transition-fast)' }}>
            {t('footerImpressum')}
          </a>
          <a href="#/privacy" className="nav-link" style={{ transition: 'var(--transition-fast)' }}>
            {t('footerPrivacy')}
          </a>
          <span>
            {t('footerSignature')} <Heart size={10} style={{ color: 'var(--cyan-primary)', fill: 'var(--cyan-primary)', display: 'inline', margin: '0 2px' }} />
          </span>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          footer > div {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
            gap: 24px !important;
          }
          footer div {
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};
