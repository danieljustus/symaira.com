import React, { useState } from 'react';
import { ArrowRight, Eye, Shield, ShieldCheck, Terminal, Workflow, Brain, Search, Globe, Compass, Cpu, MousePointerClick } from 'lucide-react';
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

  const [activeCategory, setActiveCategory] = useState<'all' | 'context' | 'security' | 'system'>('all');
  const [selectedTitle, setSelectedTitle] = useState('Symaira Vault');

  const products = [
    {
      badge: t('vaultBadge'),
      status: t('vaultStatus'),
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
      category: 'security',
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
      category: 'context',
    },
    {
      badge: t('seekBadge'),
      status: t('seekStatus'),
      title: t('seekTitle'),
      desc: t('seekDesc'),
      bestFor: t('seekBestFor'),
      automates: t('seekBestFor'), // fallback or use seekAutomates
      features: [t('seekFeature1'), t('seekFeature2'), t('seekFeature3'), t('seekFeature4')],
      href: 'https://github.com/danieljustus/symaira-seek',
      button: t('seekBtn'),
      icon: <Search size={24} />,
      tone: 'coral',
      demoType: 'seek',
      proHint: t('seekProHint'),
      category: 'context',
    },
    {
      badge: t('fetchBadge'),
      status: t('fetchStatus'),
      title: t('fetchTitle'),
      desc: t('fetchDesc'),
      bestFor: t('fetchBestFor'),
      automates: t('fetchAutomates'),
      features: [t('fetchFeature1'), t('fetchFeature2'), t('fetchFeature3'), t('fetchFeature4')],
      href: 'https://github.com/danieljustus/symaira-fetch',
      button: t('fetchBtn'),
      icon: <Globe size={24} />,
      tone: 'sky',
      demoType: 'fetch',
      proHint: t('fetchProHint'),
      category: 'context',
    },
    {
      badge: t('scopeBadge'),
      status: t('scopeStatus'),
      title: t('scopeTitle'),
      desc: t('scopeDesc'),
      bestFor: t('scopeBestFor'),
      automates: t('scopeAutomates'),
      features: [t('scopeFeature1'), t('scopeFeature2'), t('scopeFeature3'), t('scopeFeature4')],
      href: 'https://github.com/danieljustus/symaira-scope',
      button: t('scopeBtn'),
      icon: <Compass size={24} />,
      tone: 'indigo',
      demoType: 'scope',
      proHint: t('scopeProHint'),
      category: 'security',
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
      category: 'security',
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
      category: 'system',
    },
    {
      badge: t('vibecoderBadge'),
      status: t('vibecoderStatus'),
      title: t('vibecoderTitle'),
      desc: t('vibecoderDesc'),
      bestFor: t('vibecoderBestFor'),
      automates: t('vibecoderAutomates'),
      features: [t('vibecoderFeature1'), t('vibecoderFeature2'), t('vibecoderFeature3'), t('vibecoderFeature4')],
      href: 'https://github.com/danieljustus/symaira-vibecoder',
      button: t('vibecoderBtn'),
      icon: <Workflow size={24} />,
      tone: 'violet',
      demoType: 'vibecoder',
      proHint: t('vibecoderProHint'),
      category: 'system',
    },
    {
      badge: t('operateBadge'),
      status: t('operateStatus'),
      title: t('operateTitle'),
      desc: t('operateDesc'),
      bestFor: t('operateBestFor'),
      automates: t('operateAutomates'),
      features: [t('operateFeature1'), t('operateFeature2'), t('operateFeature3'), t('operateFeature4')],
      href: 'https://github.com/danieljustus/symaira-operate',
      button: t('operateBtn'),
      icon: <MousePointerClick size={24} />,
      tone: 'rose',
      demoType: 'operate',
      proHint: t('operateProHint'),
      category: 'system',
    },
    {
      badge: t('tuneBadge'),
      status: t('tuneStatus'),
      title: t('tuneTitle'),
      desc: t('tuneDesc'),
      bestFor: t('tuneBestFor'),
      automates: t('tuneAutomates'),
      features: [t('tuneFeature1'), t('tuneFeature2'), t('tuneFeature3'), t('tuneFeature4')],
      href: 'https://github.com/danieljustus/symaira-tune',
      button: t('tuneBtn'),
      icon: <Cpu size={24} />,
      tone: 'amber',
      demoType: 'tune',
      proHint: t('tuneProHint'),
      category: 'system',
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const activeProduct = filteredProducts.find((p) => p.title === selectedTitle) || filteredProducts[0];

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

      <div className="tools-filter-tabs">
        <button
          className={`tools-filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          {t('filterAll')}
        </button>
        <button
          className={`tools-filter-tab ${activeCategory === 'context' ? 'active' : ''}`}
          onClick={() => setActiveCategory('context')}
        >
          <Brain size={14} />
          {t('filterContext')}
        </button>
        <button
          className={`tools-filter-tab ${activeCategory === 'security' ? 'active' : ''}`}
          onClick={() => setActiveCategory('security')}
        >
          <Shield size={14} />
          {t('filterSecurity')}
        </button>
        <button
          className={`tools-filter-tab ${activeCategory === 'system' ? 'active' : ''}`}
          onClick={() => setActiveCategory('system')}
        >
          <Terminal size={14} />
          {t('filterSystem')}
        </button>
      </div>

      <div className="tools-console-container">
        {/* Sidebar displaying list of tools */}
        <div className="tools-console-sidebar">
          {filteredProducts.map((product) => {
            const isActive = activeProduct.title === product.title;
            return (
              <button
                key={product.title}
                className={`console-sidebar-item tone-${product.tone} ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedTitle(product.title)}
                type="button"
              >
                <div className="sidebar-item-icon">
                  {product.icon}
                </div>
                <div className="sidebar-item-info">
                  <div className="sidebar-item-title-row">
                    <span className="sidebar-item-title">{product.title}</span>
                    <span className="sidebar-item-category">{product.badge}</span>
                  </div>
                  <span className="sidebar-item-desc">{product.desc}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Workspace displaying active tool's profile & interactive demo */}
        <div className={`tools-console-workspace tone-${activeProduct.tone}`} key={activeProduct.title}>
          <div className="workspace-glow" />
          
          <div className="workspace-split">
            {/* Left: Info profile */}
            <div className="workspace-info">
              <div className="workspace-tool-header">
                <div className="workspace-tool-icon">
                  {activeProduct.icon}
                </div>
                <div className="workspace-tool-badges">
                  <span className="product-badge" style={{ borderColor: 'rgba(229, 195, 151, 0.3)', color: 'var(--text-primary)', background: 'rgba(229, 195, 151, 0.05)' }}>
                    Open Source
                  </span>
                  <span className="product-badge">
                    {activeProduct.badge}
                  </span>
                  {activeProduct.status ? (
                    <span className={`product-status-badge ${activeProduct.status.toLowerCase() === 'roadmap' ? 'product-status-badge-roadmap' : ''}`}>
                      {activeProduct.status}
                    </span>
                  ) : null}
                </div>
              </div>

              <h3 className="workspace-tool-title">{activeProduct.title}</h3>
              <p className="workspace-tool-desc">{activeProduct.desc}</p>

              <div className="workspace-context-box">
                <div className="workspace-context-row">
                  <span>{t('bestForLabel')}</span>
                  <p>{activeProduct.bestFor}</p>
                </div>
                <div className="workspace-context-row">
                  <span>{t('automatesLabel')}</span>
                  <p>{activeProduct.automates}</p>
                </div>
              </div>

              <div className="workspace-features">
                {activeProduct.features.map((feature, idx) => (
                  <div key={idx} className="workspace-feature-item">
                    <span className="workspace-feature-bullet">//</span>
                    <p className="workspace-feature-text">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="workspace-pro-note">
                <span className="workspace-pro-tag">{t('proLabel')}</span>
                <p className="workspace-pro-text">{activeProduct.proHint}</p>
              </div>

              <a
                href={activeProduct.href}
                target="_blank"
                rel="noopener noreferrer"
                className="workspace-action-btn"
                style={{
                  color: '#000',
                }}
              >
                <GitHubIcon size={16} />
                {activeProduct.button}
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Right: Dynamic Demo Panel */}
            <div className="workspace-demo-container">
              {activeProduct.demoType === 'vault' ? (
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
              ) : activeProduct.demoType === 'eraseme' ? (
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
              ) : activeProduct.demoType === 'memory' ? (
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
              ) : activeProduct.demoType === 'seek' ? (
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
              ) : activeProduct.demoType === 'fetch' ? (
                <div className="product-demo product-demo-fetch" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Globe size={12} />
                      symfetch
                    </div>
                  </div>
                  <div className="fetch-flow">
                    <div className="fetch-input-line">
                      <Globe size={13} />
                      <span>{t('fetchDemoInput')}: "https://example.com/blog"</span>
                    </div>
                    <div className="fetch-pipeline">
                      <div className="fetch-step">
                        <span className="fetch-step-icon">//</span>
                        <span className="fetch-step-text">{t('fetchDemoStatusTls')}</span>
                        <span className="fetch-step-value highlight">Chrome/124</span>
                      </div>
                      <div className="fetch-step">
                        <span className="fetch-step-icon">//</span>
                        <span className="fetch-step-text">{t('fetchDemoStatusDom')}</span>
                        <span className="fetch-step-value">Removed scripts & ads</span>
                      </div>
                      <div className="fetch-step">
                        <span className="fetch-step-icon">//</span>
                        <span className="fetch-step-text">{t('fetchDemoStatusTokens')}</span>
                        <span className="fetch-step-value highlight">-82.3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeProduct.demoType === 'scope' ? (
                <div className="product-demo product-demo-scope" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Compass size={12} />
                      {t('scopeDemoTitle')}
                    </div>
                  </div>
                  <div className="scope-flow">
                    <div className="scope-step scanning">
                      <span className="scope-indicator animate-pulse" />
                      <span className="scope-text">{t('scopeDemoScanning')}</span>
                    </div>
                    <div className="scope-step conflict">
                      <span className="scope-step-icon">⚠</span>
                      <span className="scope-text">{t('scopeDemoConflict')}</span>
                    </div>
                    <div className="scope-step mcp">
                      <span className="scope-step-icon">✔</span>
                      <span className="scope-text">{t('scopeDemoMcp')}</span>
                    </div>
                    <div className="scope-step suggest">
                      <span className="scope-step-icon">»</span>
                      <span className="scope-text highlight">{t('scopeDemoSuggest')}</span>
                    </div>
                  </div>
                </div>
              ) : activeProduct.demoType === 'operate' ? (
                <div className="product-demo product-demo-operate" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <MousePointerClick size={12} />
                      {t('operateDemoTitle')}
                    </div>
                  </div>
                  <div className="operate-flow">
                    <div className="operate-step query">
                      <span className="operate-tag tag-query">UI_QUERY</span>
                      <span className="operate-text">{t('operateDemoQuery')}</span>
                    </div>
                    <div className="operate-step safety">
                      <span className="operate-tag tag-block">BLOCKED</span>
                      <span className="operate-text warning">{t('operateDemoSafety')}</span>
                    </div>
                    <div className="operate-step action">
                      <span className="operate-tag tag-action">ACTION</span>
                      <span className="operate-text">{t('operateDemoAction')}</span>
                    </div>
                    <div className="operate-step success">
                      <span className="operate-status status-success">✔</span>
                      <span className="operate-text success-text">{t('operateDemoSuccess')}</span>
                    </div>
                  </div>
                </div>
              ) : activeProduct.demoType === 'tune' ? (
                <div className="product-demo product-demo-tune" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Cpu size={12} />
                      {t('tuneDemoTitle')}
                    </div>
                  </div>
                  <div className="tune-flow">
                    <div className="tune-row">
                      <span className="tune-label">{t('tuneDemoCPU')}</span>
                      <div className="tune-bar-wrapper">
                        <div className="tune-bar-fill" style={{ width: '58%' }} />
                      </div>
                      <span className="tune-value">58°C</span>
                    </div>
                    <div className="tune-row">
                      <span className="tune-label">{t('tuneDemoFan')}</span>
                      <div className="tune-bar-wrapper">
                        <div className="tune-bar-fill" style={{ width: '40%' }} />
                      </div>
                      <span className="tune-value">2400 RPM</span>
                    </div>
                    <div className="tune-row">
                      <span className="tune-label">{t('tuneDemoPower')}</span>
                      <span className="tune-status-text">80% limit</span>
                    </div>
                    <div className="tune-row">
                      <span className="tune-label">{t('tuneDemoEDR')}</span>
                      <span className="tune-status-text highlight">800 nits</span>
                    </div>
                  </div>
                </div>
              ) : activeProduct.demoType === 'vibecoder' ? (
                <div className="product-demo product-demo-vibecoder" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Workflow size={12} />
                      {t('vibecoderDemoTitle')}
                    </div>
                  </div>
                  <div className="vibecoder-flow">
                    <div className="vibecoder-card card-done">
                      <div className="vibecoder-status-dot status-done">✔</div>
                      <span className="vibecoder-step-name">{t('vibecoderDemoPhase1')}</span>
                    </div>
                    <div className="vibecoder-card card-running">
                      <div className="vibecoder-status-dot status-running animate-pulse">◐</div>
                      <span className="vibecoder-step-name">{t('vibecoderDemoPhase2')}</span>
                      <span className="vibecoder-running-text">{t('vibecoderDemoStatusRunning')}</span>
                    </div>
                    <div className="vibecoder-card card-pending">
                      <div className="vibecoder-status-dot status-pending">○</div>
                      <span className="vibecoder-step-name">{t('vibecoderDemoPhase3')}</span>
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
            </div>
          </div>
        </div>
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
