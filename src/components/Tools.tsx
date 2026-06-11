import React, { useState } from 'react';
import { ArrowRight, Eye, Shield, ShieldCheck, Terminal, Workflow, Brain, Search } from 'lucide-react';
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
      demoType: 'vault',
      proHint: t('vaultProHint'),
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
      demoType: 'eraseme',
      proHint: t('erasemeProHint'),
    },
    {
      badge: t('memoryBadge'),
      status: t('memoryStatus'),
      title: t('memoryTitle'),
      desc: t('memoryDesc'),
      bestFor: t('memoryBestFor'),
      automates: t('memoryAutomates'),
      features: [t('memoryFeature1'), t('memoryFeature2'), t('memoryFeature3'), t('memoryFeature4')],
      href: 'https://github.com/danieljustus/symaira-memory',
      button: t('memoryBtn'),
      icon: <Brain size={24} />,
      tone: 'violet',
      demoType: 'memory',
      proHint: t('memoryProHint'),
    },
    {
      badge: t('seekBadge'),
      status: t('seekStatus'),
      title: t('seekTitle'),
      desc: t('seekDesc'),
      bestFor: t('seekBestFor'),
      automates: t('seekAutomates'),
      features: [t('seekFeature1'), t('seekFeature2'), t('seekFeature3'), t('seekFeature4')],
      href: 'https://github.com/danieljustus/symaira-seek',
      button: t('seekBtn'),
      icon: <Search size={24} />,
      tone: 'coral',
      demoType: 'seek',
      proHint: t('seekProHint'),
    },
    {
      badge: t('terminalBadge'),
      status: t('terminalStatus'),
      title: t('terminalTitle'),
      desc: t('terminalDesc'),
      bestFor: t('terminalBestFor'),
      automates: t('terminalAutomates'),
      features: [t('terminalFeature1'), t('terminalFeature2'), t('terminalFeature3'), t('terminalFeature4')],
      href: 'https://github.com/danieljustus/symaira-terminal',
      button: t('terminalBtn'),
      icon: <Terminal size={24} />,
      tone: 'mint',
      demoType: 'terminal-app',
      proHint: t('terminalProHint'),
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
                    <span className={`product-status-badge ${product.status.toLowerCase() === 'roadmap' ? 'product-status-badge-roadmap' : ''}`}>
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

              <div className="product-pro-note">
                <span className="pro-tag">{t('proLabel')}</span>
                <p>{product.proHint}</p>
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

            {product.demoType === 'vault' ? (
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
            ) : product.demoType === 'eraseme' ? (
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
            ) : product.demoType === 'memory' ? (
              <div className="product-demo product-demo-memory" aria-hidden="true">
                <div className="demo-header">
                  <div className="demo-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="demo-title">
                    <Brain size={12} />
                    symmemory sync
                  </div>
                </div>
                <div className="memory-flow">
                  <div className="memory-row-item">
                    <span className="memory-tag tag-add">MEM_ADD</span>
                    <span className="memory-text">{t('memoryDemoAdd')}</span>
                    <span className="memory-status status-success">{t('memoryDemoStatusIngested')}</span>
                  </div>
                  <div className="memory-row-item">
                    <span className="memory-tag tag-guard">PII_GUARD</span>
                    <span className="memory-text">{t('memoryDemoGuard')}</span>
                    <span className="memory-status status-sanitized">{t('memoryDemoStatusSanitized')}</span>
                  </div>
                  <div className="memory-row-item">
                    <span className="memory-tag tag-sync">SYNC_PUSH</span>
                    <span className="memory-text">{t('memoryDemoSync')}</span>
                    <span className="memory-status status-pending">{t('memoryDemoStatusPending')}</span>
                  </div>
                </div>
              </div>
            ) : product.demoType === 'seek' ? (
              <div className="product-demo product-demo-seek" aria-hidden="true">
                <div className="demo-header">
                  <div className="demo-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="demo-title">
                    <Search size={12} />
                    seek hybrid retrieve
                  </div>
                </div>
                <div className="seek-flow">
                  <div className="seek-search-input">
                    <Search size={13} />
                    <span>{t('seekDemoQuery')}: "security policy"</span>
                  </div>
                  <div className="seek-results-list">
                    <div className="seek-result-item">
                      <span className="seek-badge-rank">#1</span>
                      <span className="seek-result-file">security_handbook.md</span>
                      <strong className="seek-result-score">{t('seekDemoRRF')}: 0.032</strong>
                    </div>
                    <div className="seek-result-item">
                      <span className="seek-badge-rank">#2</span>
                      <span className="seek-result-file">agent_mcp_config.json</span>
                      <strong className="seek-result-score">{t('seekDemoRRF')}: 0.028</strong>
                    </div>
                    <div className="seek-result-item">
                      <span className="seek-badge-rank">#3</span>
                      <span className="seek-result-file">keys_rotation.go</span>
                      <strong className="seek-result-score">{t('seekDemoRRF')}: 0.016</strong>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="product-demo product-demo-terminal-app" aria-hidden="true">
                <div className="demo-header">
                  <div className="demo-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="demo-title">
                    <Terminal size={12} />
                    symaira-terminal // session-1
                  </div>
                </div>
                <div className="terminal-split-view">
                  <div className="terminal-pane terminal-pane-left">
                    <div className="pane-header">
                      <span className="pane-status-ring status-ring-active"></span>
                      <span className="pane-name">{t('terminalDemoPane1')}</span>
                    </div>
                    <div className="pane-terminal-content">
                      <p className="line-cmd"><span>$</span> aider app.py</p>
                      <p className="line-log">// Analyzing codebase...</p>
                      <p className="line-log">// Modifying files...</p>
                      <p className="line-diff-add">+ def process_secrets():</p>
                      <p className="line-diff-add">+     return symvault.get()</p>
                    </div>
                  </div>
                  <div className="terminal-pane terminal-pane-right">
                    <div className="pane-header">
                      <span className="pane-status-ring status-ring-blocked animate-pulse-ring"></span>
                      <span className="pane-name">{t('terminalDemoPane2')}</span>
                    </div>
                    <div className="pane-terminal-content">
                      <p className="line-cmd"><span>$</span> claude dev</p>
                      <div className="terminal-prompt-box">
                        <div className="prompt-header">
                          <span>{t('terminalDemoPrompt')}</span>
                        </div>
                        <div className="prompt-body">
                          <p>Write to: index.html</p>
                          <div className="prompt-actions">
                            <span className="prompt-btn btn-approve">Approve</span>
                            <span className="prompt-btn btn-reject">Reject</span>
                          </div>
                        </div>
                      </div>
                      <p className="line-status-alert">{t('terminalDemoAction')}</p>
                    </div>
                  </div>
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
