import React, { useState } from 'react';
import { ArrowRight, Eye, Shield, ShieldCheck, Terminal, Workflow } from 'lucide-react';
import { GitHubIcon } from './GitHubIcon';
import { useLanguage } from '../context/LanguageContext';

export const Tools: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const commandToCopy = 'symvault run --env API_KEY=prod -- deploy';

  const copyCommand = () => {
    navigator.clipboard.writeText(commandToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const products = [
    {
      badge: t('vaultBadge'),
      title: t('vaultTitle'),
      desc: t('vaultDesc'),
      bestFor: t('vaultBestFor'),
      automates: t('vaultAutomates'),
      features: [t('vaultFeature1'), t('vaultFeature2'), t('vaultFeature3'), t('vaultFeature4')],
      href: 'https://github.com/danieljustus/symaira-vault',
      button: t('vaultBtn'),
      icon: <Shield size={24} />,
      tone: 'gold',
    },
    {
      badge: t('erasemeBadge'),
      status: t('erasemeStatus'),
      title: t('erasemeTitle'),
      desc: t('erasemeDesc'),
      bestFor: t('erasemeBestFor'),
      automates: t('erasemeAutomates'),
      features: [t('erasemeFeature1'), t('erasemeFeature2'), t('erasemeFeature3'), t('erasemeFeature4')],
      href: 'https://github.com/danieljustus/symaira-eraseme',
      button: t('erasemeBtn'),
      icon: <Eye size={24} />,
      tone: 'ice',
    },
  ];

  return (
    <section
      id="tools"
      className="constrained-box tools-section"
      style={{
        paddingTop: '100px',
        paddingBottom: '120px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <img src="/logo-top.png" alt="" aria-hidden="true" className="section-logo-accent section-logo-accent-top" />
      <img src="/logo-bottom.png" alt="" aria-hidden="true" className="section-logo-accent section-logo-accent-bottom" />

      <div style={{
        textAlign: 'center',
        marginBottom: '58px',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 2.5rem, 40px)',
          fontFamily: 'var(--font-title)',
          fontWeight: 700,
          letterSpacing: '0',
          marginBottom: '16px',
          background: 'linear-gradient(180deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {t('toolsTitle')}
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '680px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          {t('toolsSubtitle')}
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article
            key={product.title}
            className={`glass-panel product-card product-card-${product.tone}`}
          >
            <div className="product-card-content">
              <div className="product-card-header">
                <div className="product-icon">
                  {product.icon}
                </div>
                <div className="product-badge-group">
                  <span className="product-badge" style={{ borderColor: 'rgba(229, 195, 151, 0.3)', color: 'var(--text-primary)', background: 'rgba(229, 195, 151, 0.05)' }}>
                    Open Source
                  </span>
                  <span className="product-badge">
                    {product.badge}
                  </span>
                  {product.status ? (
                    <span className="product-status-badge">
                      {product.status}
                    </span>
                  ) : null}
                </div>
              </div>

              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.desc}</p>

              <div className="product-context">
                <div className="product-context-row">
                  <span>{t('bestForLabel')}</span>
                  <p>{product.bestFor}</p>
                </div>
                <div className="product-context-row">
                  <span>{t('automatesLabel')}</span>
                  <p>{product.automates}</p>
                </div>
              </div>

              <div className="product-features">
                {product.features.map((feature) => (
                  <div key={feature} className="product-feature">
                    <span>//</span>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button-primary product-link"
                style={{
                  color: '#000',
                }}
              >
                <GitHubIcon size={16} />
                {product.button}
                <ArrowRight size={14} />
              </a>
            </div>

            {product.tone === 'gold' ? (
              <div className="product-demo product-demo-terminal">
                <div className="demo-header">
                  <div className="demo-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="demo-title">
                    <Terminal size={12} />
                    symvault
                  </div>
                </div>
                <button className="terminal-command" onClick={copyCommand} type="button">
                  <span>{commandToCopy}</span>
                  <small>{copied ? t('copiedCommandLabel') : t('copyCommandLabel')}</small>
                </button>
                <div className="terminal-lines">
                  <p><span>$</span> {commandToCopy}</p>
                  <p>{t('vaultDemoLine1')}</p>
                  <p>{t('vaultDemoLine2')}</p>
                  <p>{t('vaultDemoLine3')}</p>
                  <p className="success">{t('vaultDemoSuccess')}</p>
                </div>
              </div>
            ) : (
              <div className="product-demo product-demo-privacy" aria-hidden="true">
                <div className="privacy-row">
                  <Workflow size={15} />
                  <span>{t('erasemeDemoCampaign')}</span>
                  <strong>{t('erasemeDemoBrokers')}</strong>
                </div>
                <div className="privacy-row">
                  <ShieldCheck size={15} />
                  <span>{t('erasemeDemoDeadlines')}</span>
                  <strong>{t('erasemeDemoLaw')}</strong>
                </div>
                <div className="privacy-row">
                  <Eye size={15} />
                  <span>{t('erasemeDemoTriage')}</span>
                  <strong>{t('erasemeDemoAudit')}</strong>
                </div>
                <div className="privacy-progress">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Creator & Maintainer Panel */}
      <div className="maintainer-panel">
        <div className="maintainer-glow" />
        <div className="maintainer-accent-top" />
        <div className="maintainer-accent-bottom" />
        
        <div className="maintainer-content">
          <div className="maintainer-avatar-wrapper">
            <div className="maintainer-avatar-ring-outer" />
            <div className="maintainer-avatar-ring-inner" />
            <div className="maintainer-avatar">
              <img src="/portrait.jpg" alt="Daniel Justus" />
            </div>
          </div>

          <div className="maintainer-text">
            <span className="maintainer-tag">
              {t('maintainerTitle')}
            </span>
            <h3 className="maintainer-name">
              Daniel Justus
            </h3>
            <p className="maintainer-bio">
              {t('maintainerDesc')}
            </p>
            <a
              href="https://daniel-justus.de"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button-primary"
              style={{
                color: '#000',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 600,
              }}
            >
              {t('maintainerBtn')}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
