import React, { useState } from 'react';
import { ArrowRight, Eye, Shield, ShieldCheck, Terminal, Workflow, Brain, Search, Globe, Compass, Cpu, MousePointerClick, ShieldAlert, Layers, Upload, Layout } from 'lucide-react';
import { GitHubIcon } from './GitHubIcon';
import { useLanguage } from '../context/LanguageContext';
import { getProducts, getRouteForCmd } from '../config/products';

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

  const products = getProducts(t);

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
          aria-pressed={activeCategory === 'all'}
        >
          {t('filterAll')}
        </button>
        <button
          className={`tools-filter-tab ${activeCategory === 'context' ? 'active' : ''}`}
          onClick={() => setActiveCategory('context')}
          aria-pressed={activeCategory === 'context'}
        >
          <Brain size={14} />
          {t('filterContext')}
        </button>
        <button
          className={`tools-filter-tab ${activeCategory === 'security' ? 'active' : ''}`}
          onClick={() => setActiveCategory('security')}
          aria-pressed={activeCategory === 'security'}
        >
          <Shield size={14} />
          {t('filterSecurity')}
        </button>
        <button
          className={`tools-filter-tab ${activeCategory === 'system' ? 'active' : ''}`}
          onClick={() => setActiveCategory('system')}
          aria-pressed={activeCategory === 'system'}
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
                aria-pressed={isActive}
                aria-label={product.title}
              >
                <div className="sidebar-item-icon">
                  {product.icon}
                </div>
                <div className="sidebar-item-info">
                  <span className="sidebar-item-title">{product.cmd}</span>
                  <span className="sidebar-item-category">{product.badge}</span>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
                  <span className="workspace-pro-tag">{t('proLabel')}</span>
                  <span className="workspace-pro-tag" style={{ opacity: 0.8 }}>{t('proHostingTag')}</span>
                </div>
                <p className="workspace-pro-text">{activeProduct.proHint}</p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
                <a
                  href={activeProduct.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="workspace-action-btn"
                  style={{
                    color: '#000',
                    margin: 0,
                  }}
                >
                  <GitHubIcon size={16} />
                  {activeProduct.button}
                  <ArrowRight size={14} />
                </a>
                <a
                  href={`#/${getRouteForCmd(activeProduct.cmd)}`}
                  className="workspace-action-btn"
                  style={{
                    color: 'var(--item-accent)',
                    border: '1px solid var(--item-accent-alpha)',
                    backgroundColor: 'transparent',
                    margin: 0,
                  }}
                >
                  {t('viewDetailsBtn')}
                  <ArrowRight size={14} />
                </a>
              </div>
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
              ) : activeProduct.demoType === 'fritz' ? (
                <div className="product-demo product-demo-terminal" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Terminal size={12} />
                      symfritz diagnose
                    </div>
                  </div>
                  <div className="terminal-lines" style={{ padding: '14px 18px 18px' }}>
                    <p><span>$</span> symfritz diagnose macmini</p>
                    <p style={{ color: '#86efac' }}>✓ FRITZ!Box knows host       macmini</p>
                    <p style={{ color: '#86efac' }}>✓ Host active (192.168.188.65)</p>
                    <p style={{ color: '#86efac' }}>✓ LAN Link Medium verified</p>
                    <p style={{ color: '#86efac' }}>✓ DNS resolves successfully</p>
                    <p style={{ color: '#86efac' }}>✓ TCP 22 (SSH) open</p>
                    <p style={{ color: '#86efac' }}>✓ TCP 8001 (Paperless) open</p>
                  </div>
                </div>
              ) : activeProduct.demoType === 'guard' ? (
                <div className="product-demo product-demo-operate" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <ShieldAlert size={12} />
                      symguard proxy
                    </div>
                  </div>
                  <div className="operate-flow" style={{ padding: '10px 0' }}>
                    <div className="operate-step">
                      <span className="operate-tag tag-query" style={{ color: 'var(--cyan-primary)', borderColor: 'rgba(0, 255, 200, 0.2)', background: 'rgba(0, 255, 200, 0.05)' }}>MATCH</span>
                      <span className="operate-text">Call: filesystem.write_file</span>
                    </div>
                    <div className="operate-step">
                      <span className="operate-tag tag-block" style={{ color: '#ffab91', borderColor: 'rgba(255, 171, 145, 0.2)', background: 'rgba(255, 171, 145, 0.05)' }}>POLICY</span>
                      <span className="operate-text warning">Requires human confirmation</span>
                    </div>
                    <div className="operate-step" style={{ border: '1px solid rgba(229, 195, 151, 0.25)', background: 'rgba(229, 195, 151, 0.05)' }}>
                      <span className="operate-tag tag-action" style={{ color: 'var(--gold-primary)', borderColor: 'rgba(229, 195, 151, 0.3)', background: 'rgba(229, 195, 151, 0.1)' }}>TUI</span>
                      <span className="operate-text" style={{ color: 'var(--gold-primary)' }}>Awaiting approve token...</span>
                    </div>
                  </div>
                </div>
              ) : activeProduct.demoType === 'print' ? (
                <div className="product-demo product-demo-terminal" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Terminal size={12} />
                      symprint render
                    </div>
                  </div>
                  <div className="terminal-lines" style={{ padding: '14px 18px 18px' }}>
                    <p><span>$</span> symprint render report.md --profile report</p>
                    <p>Loading frontmatter contract...</p>
                    <p>Calling Typst engine from PATH...</p>
                    <p>Applying DIN 5008 grid alignments...</p>
                    <p style={{ color: '#86efac' }}>✓ Generated accessible PDF/A-2a successfully</p>
                    <p style={{ color: '#86efac' }}>✓ Output: report.pdf (1.2 MB)</p>
                  </div>
                </div>
              ) : activeProduct.demoType === 'skills' ? (
                <div className="product-demo product-demo-memory" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Layers size={12} />
                      symskills install
                    </div>
                  </div>
                  <div className="memory-flow">
                    <div className="memory-row-item" style={{ background: 'rgba(165, 214, 167, 0.035)', borderColor: 'rgba(165, 214, 167, 0.08)' }}>
                      <span className="memory-tag tag-add" style={{ color: '#A5D6A7', background: 'rgba(165, 214, 167, 0.12)', borderColor: 'rgba(165, 214, 167, 0.2)' }}>VALIDATE</span>
                      <span className="memory-text">SKILL.md contract OK</span>
                      <span className="memory-status status-success">Passed</span>
                    </div>
                    <div className="memory-row-item" style={{ background: 'rgba(165, 214, 167, 0.035)', borderColor: 'rgba(165, 214, 167, 0.08)' }}>
                      <span className="memory-tag tag-guard" style={{ color: 'var(--cyan-primary)', background: 'rgba(0, 255, 200, 0.05)', borderColor: 'rgba(0, 255, 200, 0.15)' }}>RENDER</span>
                      <span className="memory-text">Target: Claude Code</span>
                      <span className="memory-status status-sanitized" style={{ color: 'var(--cyan-primary)' }}>Rendered</span>
                    </div>
                    <div className="memory-row-item" style={{ background: 'rgba(165, 214, 167, 0.035)', borderColor: 'rgba(165, 214, 167, 0.08)' }}>
                      <span className="memory-tag tag-sync" style={{ color: 'var(--blue-accent)', background: 'rgba(129, 212, 250, 0.05)', borderColor: 'rgba(129, 212, 250, 0.15)' }}>INSTALL</span>
                      <span className="memory-text">Write to ~/.claude/skills/</span>
                      <span className="memory-status status-success">Done</span>
                    </div>
                  </div>
                </div>
              ) : activeProduct.demoType === 'ingest' ? (
                <div className="product-demo product-demo-fetch" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Upload size={12} />
                      symingest watch
                    </div>
                  </div>
                  <div className="fetch-flow">
                    <div className="fetch-input-line" style={{ border: '1px solid rgba(255, 224, 130, 0.15)', color: '#FFE082' }}>
                      <Upload size={13} />
                      <span>INBOX: scan_invoice_2026.pdf</span>
                    </div>
                    <div className="fetch-pipeline">
                      <div className="fetch-step">
                        <span className="fetch-step-icon">//</span>
                        <span className="fetch-step-text">Page parsing (pdftoppm)</span>
                        <span className="fetch-step-value highlight" style={{ color: '#FFE082' }}>2 pages</span>
                      </div>
                      <div className="fetch-step">
                        <span className="fetch-step-icon">//</span>
                        <span className="fetch-step-text">OCR extraction (Tesseract)</span>
                        <span className="fetch-step-value">4.2k chars</span>
                      </div>
                      <div className="fetch-step">
                        <span className="fetch-step-icon">//</span>
                        <span className="fetch-step-text">Output to vault note</span>
                        <span className="fetch-step-value highlight" style={{ color: '#FFE082' }}>Markdown + Frontmatter</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeProduct.demoType === 'desktop' ? (
                <div className="product-demo product-demo-terminal-app" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Layout size={12} />
                      symdesk web dashboard
                    </div>
                  </div>
                  <div className="terminal-split-view" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="terminal-pane" style={{ border: 'none' }}>
                      <div className="pane-header" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <span className="pane-status-ring status-ring-active" style={{ background: '#B39DDB', boxShadow: '0 0 6px #B39DDB' }} />
                        <span className="pane-name" style={{ color: 'var(--text-primary)' }}>Personal Vault Workspace</span>
                      </div>
                      <div className="pane-terminal-content" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '11px', margin: 0 }}>Composing active local services:</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '10px' }}>
                          <div style={{ padding: '6px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                            <strong style={{ color: 'var(--gold-primary)' }}>symvault:</strong> Connected (TouchID)
                          </div>
                          <div style={{ padding: '6px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                            <strong style={{ color: '#B39DDB' }}>symmemory:</strong> 128 context links
                          </div>
                          <div style={{ padding: '6px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                            <strong style={{ color: '#FFAB91' }}>symseek:</strong> 420 documents index
                          </div>
                          <div style={{ padding: '6px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                            <strong style={{ color: '#FFE082' }}>symingest:</strong> watcher active
                          </div>
                        </div>
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
