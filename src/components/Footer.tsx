import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RefreshCw, Heart } from 'lucide-react';

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
        backgroundColor: 'rgba(3, 3, 4, 0.4)',
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
            fontFamily: 'var(--font-tech)',
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '1px',
            color: 'var(--text-primary)',
            marginBottom: '4px',
          }}>
            SYMAIRA
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            © {currentYear} Symaira. {t('footerRights')}
          </div>
        </div>

        {/* Sync pipeline notice */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: 'rgba(16, 185, 129, 0.05)',
          border: '1px solid rgba(16, 185, 129, 0.15)',
        }}>
          <RefreshCw size={12} style={{ color: '#10b981' }} className="animate-slow-spin" />
          <span style={{
            fontSize: '11px',
            fontFamily: 'var(--font-tech)',
            color: '#10b981',
            letterSpacing: '0.5px',
          }}>
            {t('footerSync')}
          </span>
        </div>

        {/* Right Side: Signature / Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: '13px',
          color: 'var(--text-muted)',
        }}>
          <span>
            Made with <Heart size={10} style={{ color: 'var(--cyan-primary)', fill: 'var(--cyan-primary)', display: 'inline', margin: '0 2px' }} /> in Symbiosis
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
