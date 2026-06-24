import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Cloud, Key, Users, Check, HelpCircle, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export const VaultPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // CTA Links
  const proConsoleUrl = 'http://localhost:3000'; // local URL for dashboard dev, can also point to app.symaira.com
  const githubUrl = 'https://github.com/danieljustus/symaira-vault';

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const features = [
    {
      icon: <Shield size={24} style={{ color: 'var(--gold-primary)' }} />,
      title: t('vaultPageFeatureEncryption'),
      desc: t('vaultPageFeatureEncryptionDesc'),
    },
    {
      icon: <Cloud size={24} style={{ color: 'var(--gold-primary)' }} />,
      title: t('vaultPageFeatureSync'),
      desc: t('vaultPageFeatureSyncDesc'),
    },
    {
      icon: <Users size={24} style={{ color: 'var(--gold-primary)' }} />,
      title: t('vaultPageFeatureSSO'),
      desc: t('vaultPageFeatureSSODesc'),
    },
    {
      icon: <Key size={24} style={{ color: 'var(--gold-primary)' }} />,
      title: t('vaultPageFeatureWeb'),
      desc: t('vaultPageFeatureWebDesc'),
    },
    {
      icon: <Check size={24} style={{ color: 'var(--gold-primary)' }} />,
      title: t('vaultPageFeatureMcp'),
      desc: t('vaultPageFeatureMcpDesc'),
    },
  ];

  const faqs = [
    {
      q: t('vaultPageFAQ1Q'),
      a: t('vaultPageFAQ1A'),
    },
    {
      q: t('vaultPageFAQ2Q'),
      a: t('vaultPageFAQ2A'),
    },
    {
      q: t('vaultPageFAQ3Q'),
      a: t('vaultPageFAQ3A'),
    },
  ];

  return (
    <div className="vault-page-container animate-fade-in" style={{
      paddingTop: '60px',
      paddingBottom: '120px',
      position: 'relative',
      zIndex: 2,
    }}>
      {/* Back Button */}
      <div className="constrained-box" style={{ marginBottom: '40px' }}>
        <a href="#hero" className="back-link" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-tech)',
          transition: 'var(--transition-fast)',
        }}>
          <ArrowLeft size={16} />
          {t('stackBackToTools')}
        </a>
      </div>

      {/* Hero Header */}
      <div className="constrained-box" style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div className="vault-hero-shield-wrapper" style={{
          display: 'inline-flex',
          padding: '20px',
          borderRadius: '50%',
          backgroundColor: 'rgba(229, 195, 151, 0.05)',
          border: '1px solid rgba(229, 195, 151, 0.15)',
          marginBottom: '24px',
          boxShadow: '0 0 30px rgba(229, 195, 151, 0.1)',
        }}>
          <Shield size={48} style={{ color: 'var(--gold-primary)' }} />
        </div>
        <h1 style={{
          fontSize: 'clamp(32px, 3.5rem, 52px)',
          fontWeight: 800,
          marginBottom: '20px',
          background: 'linear-gradient(180deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {t('vaultPageTitle')}
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 1.2rem, 20px)',
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          margin: '0 auto 40px auto',
          lineHeight: 1.6,
        }}>
          {t('vaultPageSubtitle')}
        </p>

        {/* Action CTAs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <a
            href={proConsoleUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '14px 28px',
              borderRadius: '8px',
              color: '#000',
              fontWeight: 600,
              fontSize: '15px',
              boxShadow: '0 4px 20px rgba(229, 195, 151, 0.2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            className="action-button-primary"
          >
            {t('vaultPageCTA')}
            <ExternalLink size={16} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '14px 28px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              color: 'var(--text-primary)',
              fontWeight: 500,
              fontSize: '15px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            className="action-button-secondary"
          >
            {t('vaultPageCTAFree')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Pricing Sektion */}
      <div className="constrained-box" style={{ marginBottom: '100px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          alignItems: 'stretch',
        }}>
          {/* Card 1: Core (Free) */}
          <div className="glass-panel" style={{
            padding: '40px',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(255,255,255,0.05)',
            backgroundColor: 'rgba(18, 17, 14, 0.45)',
          }}>
            <div>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Open Source
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginTop: '8px', marginBottom: '16px' }}>
                {t('vaultPageFreeTitle')}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
                <span style={{ fontSize: '40px', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {t('vaultPageFreePrice')}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)', marginLeft: '8px' }}>
                  {t('vaultPageFreePriceSub')}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Age-encrypted local storage
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Terminal-native CLI & TUI (`symvault`)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Scoped MCP server for AI agents
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  TOTP, Autotype & Git sync built-in
                </li>
              </ul>
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}
              className="action-button-secondary"
            >
              Get Free Core
            </a>
          </div>

          {/* Card 2: Vault Pro (Target Product) */}
          <div className="glass-panel" style={{
            padding: '40px',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid var(--gold-primary)',
            backgroundColor: 'rgba(229, 195, 151, 0.03)',
            boxShadow: '0 10px 40px rgba(229, 195, 151, 0.08)',
            position: 'relative',
          }}>
            <div className="pricing-badge" style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'var(--gold-primary)',
              color: '#000',
              fontSize: '11px',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '12px',
              fontFamily: 'var(--font-tech)',
            }}>
              RECOMMENDED
            </div>
            <div>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-tech)', color: 'var(--gold-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Cloud Solution
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginTop: '8px', marginBottom: '16px' }}>
                {t('vaultPageProTitle')}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
                <span style={{ fontSize: '40px', fontWeight: 800, color: 'var(--gold-primary)' }}>
                  {t('vaultPageProPrice')}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)', marginLeft: '8px' }}>
                  {t('vaultPageProPriceSub')}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 500 }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Everything in Local-First Core
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Secure Cloud Sync (Encrypted blobs)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Multi-Device Secure Backup
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Enterprise Single Sign-On (SSO)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Team Membership Access Control
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Premium Web Control Center
                </li>
              </ul>
            </div>
            <a
              href={proConsoleUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                backgroundColor: 'var(--gold-primary)',
                color: '#000',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 600,
                boxShadow: '0 4px 15px rgba(229, 195, 151, 0.15)',
              }}
              className="action-button-primary"
            >
              {t('vaultPageCTA')}
            </a>
          </div>

          {/* Card 3: AI Suite Bundle */}
          <div className="glass-panel" style={{
            padding: '40px',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(255,255,255,0.05)',
            backgroundColor: 'rgba(18, 17, 14, 0.35)',
            opacity: 0.85,
          }}>
            <div>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Full Package
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginTop: '8px', marginBottom: '16px' }}>
                {t('vaultPageSuiteTitle')}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
                <span style={{ fontSize: '40px', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {t('vaultPageSuitePrice')}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)', marginLeft: '8px' }}>
                  {t('vaultPageSuitePriceSub')}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Vault Pro (Secrets Sync)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Memory Pro (Agent Memory Sync)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Seek Pro (Cloud Vector retrieval)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  EraseMe Pro (Automated campaigns)
                </li>
              </ul>
            </div>
            <button
              disabled
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                color: 'var(--text-muted)',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'rgba(255,255,255,0.01)',
                cursor: 'not-allowed',
              }}
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      {/* Detailed comparison grid */}
      <div className="constrained-box" style={{ marginBottom: '100px' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '48px',
          fontFamily: 'var(--font-title)',
        }}>
          {t('vaultPageCompareTitle')}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {features.map((f, i) => (
            <div key={i} className="glass-panel" style={{
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.04)',
              backgroundColor: 'rgba(18, 17, 14, 0.25)',
              transition: 'var(--transition-smooth)',
            }}>
              <div style={{ marginBottom: '16px' }}>{f.icon}</div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>{f.title}</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Sektion */}
      <div className="constrained-box" style={{ maxWidth: '800px' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '48px',
          fontFamily: 'var(--font-title)',
        }}>
          {t('vaultPageFAQTitle')}
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="glass-panel"
                style={{
                  borderRadius: '8px',
                  border: '1px solid rgba(229,195,151,0.08)',
                  backgroundColor: 'rgba(18, 17, 14, 0.3)',
                  overflow: 'hidden',
                  transition: 'var(--transition-fast)',
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <HelpCircle size={18} style={{ color: 'var(--gold-primary)' }} />
                    {faq.q}
                  </span>
                  <span style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    color: 'var(--gold-primary)',
                    fontSize: '18px',
                  }}>
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px 54px',
                    color: 'var(--text-secondary)',
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(255,255,255,0.03)',
                    paddingTop: '16px',
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
