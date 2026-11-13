import React, { useState } from 'react';
import { Mail, Copy, Check, ShieldCheck } from './icons';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const getEmail = () => {
    // botsafe decode info@symaira.com
    return atob('aW5mb0BzeW1haXJhLmNvbQ==');
  };

  const handleSend = () => {
    window.location.href = `mailto:${getEmail()}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getEmail());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="constrained-box"
      style={{
        paddingTop: '60px',
        paddingBottom: '100px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        className="glass-panel"
        style={{
          padding: '50px 40px',
          borderRadius: '24px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--border-glass)',
        }}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Icon */}
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--sym-primary-soft)',
              border: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cyan-primary)',
              margin: '0 auto 24px',
            }}
          >
            <Mail size={28} />
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: 'clamp(26px, 2.2rem, 36px)',
              fontFamily: 'var(--font-title)',
              fontWeight: 700,
              marginBottom: '16px',
              color: 'var(--text-primary)',
            }}
          >
            {t('contactTitle')}
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              margin: '0 auto 36px',
              lineHeight: 1.6,
            }}
          >
            {t('contactSubtitle')}
          </p>

          {/* Action Row */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            {/* Send Mail Button */}
            <button
              onClick={handleSend}
              className="action-button-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 28px',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 650,
                fontFamily: 'var(--font-tech)',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                border: 'none',
                backgroundColor: 'var(--cyan-primary)',
                color: 'var(--sym-surface)',
              }}
            >
              <Mail size={18} />
              {t('contactSendBtn')}
            </button>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="action-button-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '13px 26px',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 650,
                fontFamily: 'var(--font-tech)',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid var(--border-glass)',
                background: copied ? 'var(--sym-primary-soft)' : 'var(--sym-raised)',
                color: copied ? 'var(--cyan-primary)' : 'var(--text-primary)',
                borderColor: copied ? 'var(--sym-primary)' : 'var(--border-glass)',
              }}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? t('contactCopied') : t('contactCopyBtn')}
            </button>
          </div>

          {/* Shield Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '20px',
              backgroundColor: 'var(--sym-primary-soft)',
              border: '1px solid var(--border-glass)',
            }}
          >
            <ShieldCheck size={14} style={{ color: 'var(--cyan-primary)', opacity: 0.8 }} />
            <span
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-tech)',
                color: 'var(--text-muted)',
                letterSpacing: '0.3px',
              }}
            >
              {t('contactShield')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
