import React, { useState } from 'react';
import { ArrowRight, Eye, Shield, ShieldCheck, Terminal, Workflow } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const githubIcon = (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const Tools: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const commandToCopy = 'symvault serve --stdio --agent codex';

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
      features: [t('vaultFeature1'), t('vaultFeature2'), t('vaultFeature3')],
      href: 'https://github.com/danieljustus/symaira-vault',
      button: t('vaultBtn'),
      icon: <Shield size={24} />,
      tone: 'gold',
    },
    {
      badge: t('erasemeBadge'),
      title: t('erasemeTitle'),
      desc: t('erasemeDesc'),
      features: [t('erasemeFeature1'), t('erasemeFeature2'), t('erasemeFeature3')],
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
                <span className="product-badge">
                  {product.badge}
                </span>
              </div>

              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.desc}</p>

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
                {githubIcon}
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
                  <small>{copied ? 'Copied' : 'Copy'}</small>
                </button>
                <div className="terminal-lines">
                  <p><span>$</span> symvault get github.token --agent codex</p>
                  <p>policy: scoped token verified</p>
                  <p>secret: injected into environment</p>
                  <p className="success">access granted without prompt leakage</p>
                </div>
              </div>
            ) : (
              <div className="product-demo product-demo-privacy" aria-hidden="true">
                <div className="privacy-row">
                  <Workflow size={15} />
                  <span>Campaign planned</span>
                  <strong>1,277 brokers</strong>
                </div>
                <div className="privacy-row">
                  <ShieldCheck size={15} />
                  <span>Deadlines tracked</span>
                  <strong>GDPR / CCPA</strong>
                </div>
                <div className="privacy-row">
                  <Eye size={15} />
                  <span>Replies triaged</span>
                  <strong>Audit trail</strong>
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
    </section>
  );
};
