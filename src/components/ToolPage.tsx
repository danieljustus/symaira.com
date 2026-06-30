import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getProducts, getRouteForCmd } from '../config/products';
import { 
  ArrowLeft, 
  Check, 
  HelpCircle, 
  ExternalLink,
  Brain,
  Search,
  Globe,
  Compass,
  Eye,
  Terminal,
  Workflow,
  MousePointerClick,
  Cpu,
  ShieldAlert,
  Layers,
  Upload,
  Layout,
  ShieldCheck
} from 'lucide-react';

interface ToolPageProps {
  toolId: string;
}

export const ToolPage: React.FC<ToolPageProps> = ({ toolId }) => {
  const { t } = useLanguage();
  const products = getProducts(t);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  // Find the product matching the toolId
  const product = products.find(p => getRouteForCmd(p.cmd) === toolId);

  if (!product) {
    return (
      <div className="constrained-box" style={{ paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
        <h2>Tool not found</h2>
        <a href="#hero" className="back-link" style={{ marginTop: '20px', display: 'inline-block' }}>
          Back to home
        </a>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  // Parse Pro features from proHint
  const getProFeaturesList = (proHint: string) => {
    const parts = proHint.split(/:\s*/);
    if (parts.length < 2) return [proHint];
    const features = parts[1].split(/,\s*/);
    return features.map(f => {
      let cleaned = f.trim();
      if (cleaned.endsWith('.')) {
        cleaned = cleaned.slice(0, -1);
      }
      if (cleaned.length > 0) {
        cleaned = cleaned[0].toUpperCase() + cleaned.slice(1);
      }
      return cleaned;
    });
  };

  const proFeatures = getProFeaturesList(product.proHint);

  const faqs = [
    {
      q: t('toolPageFAQ1Q'),
      a: t('toolPageFAQ1A'),
    },
    {
      q: t('toolPageFAQ2Q'),
      a: t('toolPageFAQ2A'),
    },
    {
      q: t('toolPageFAQ3Q'),
      a: t('toolPageFAQ3A'),
    },
  ];

  return (
    <div className={`tool-page-container animate-fade-in tone-${product.tone}`} style={{
      paddingTop: '60px',
      paddingBottom: '120px',
      position: 'relative',
      zIndex: 2,
    }}>
      {/* Back Button */}
      <div className="constrained-box" style={{ marginBottom: '40px' }}>
        <a href="#tools" className="back-link" style={{
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
          backgroundColor: `rgba(229, 195, 151, 0.05)`,
          border: '1px solid rgba(229, 195, 151, 0.15)',
          marginBottom: '24px',
          boxShadow: '0 0 30px rgba(229, 195, 151, 0.1)',
        }}>
          <div style={{ color: `var(--gold-primary)` }}>
            {product.icon}
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
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

        <h1 style={{
          fontSize: 'clamp(32px, 3.5rem, 52px)',
          fontWeight: 800,
          marginBottom: '20px',
          background: 'linear-gradient(180deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {product.title}
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 1.2rem, 20px)',
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          margin: '0 auto 40px auto',
          lineHeight: 1.6,
        }}>
          {product.desc}
        </p>

        {/* Action CTAs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <a
            href={product.href}
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
            {product.button}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Main Content Split: Specs vs Interactive Demo */}
      <div className="constrained-box" style={{ marginBottom: '100px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}>
          {/* Specs Panel */}
          <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', fontFamily: 'var(--font-title)' }}>
                Specifications
              </h3>
              <div className="workspace-context-box" style={{ border: 'none', background: 'none', padding: 0 }}>
                <div className="workspace-context-row" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)' }}>{t('bestForLabel')}</span>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-primary)', marginTop: '4px' }}>{product.bestFor}</p>
                </div>
                <div className="workspace-context-row">
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)' }}>{t('automatesLabel')}</span>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-primary)', marginTop: '4px' }}>{product.automates}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>Key Capabilities</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {product.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: `var(--gold-primary)`, fontWeight: 'bold', fontFamily: 'var(--font-tech)' }}>//</span>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', margin: 0 }}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Panel */}
          <div className="tools-console-workspace" style={{ border: '1px solid rgba(255,255,255,0.06)', padding: '0', background: 'rgba(7, 6, 5, 0.4)' }}>
            <div style={{ padding: '24px' }}>
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
                  <button 
                    className="terminal-command" 
                    onClick={() => handleCopy('symvault run --env API_KEY=prod -- deploy')} 
                    type="button"
                  >
                    <span>symvault run --env API_KEY=prod -- deploy</span>
                    <small>{copiedCmd === 'symvault run --env API_KEY=prod -- deploy' ? t('copiedCommandLabel') : t('copyCommandLabel')}</small>
                  </button>
                  <div className="terminal-lines">
                    <p><span>$</span> symvault run --env API_KEY=prod -- deploy</p>
                    <p>{t('vaultDemoLine1')}</p>
                    <p>{t('vaultDemoLine2')}</p>
                    <p>{t('vaultDemoLine3')}</p>
                    <p className="success">{t('vaultDemoSuccess')}</p>
                  </div>
                </div>
              ) : product.demoType === 'eraseme' ? (
                <div className="product-demo product-demo-privacy" aria-hidden="true" style={{ padding: '20px 0' }}>
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
              ) : product.demoType === 'fetch' ? (
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
              ) : product.demoType === 'scope' ? (
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
              ) : product.demoType === 'operate' ? (
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
              ) : product.demoType === 'tune' ? (
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
              ) : product.demoType === 'vibecoder' ? (
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
              ) : product.demoType === 'fritz' ? (
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
              ) : product.demoType === 'guard' ? (
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
              ) : product.demoType === 'print' ? (
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
              ) : product.demoType === 'skills' ? (
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
              ) : product.demoType === 'ingest' ? (
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
              ) : product.demoType === 'desktop' ? (
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

      {/* Pricing Comparison */}
      <div className="constrained-box" style={{ marginBottom: '100px' }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '48px',
          fontFamily: 'var(--font-title)',
        }}>
          {t('toolPageCompareTitle')}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          alignItems: 'stretch',
          maxWidth: '900px',
          margin: '0 auto',
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
                {t('coreFreeDesc')}
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginTop: '8px', marginBottom: '16px' }}>
                {t('coreFreeTitle')}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
                <span style={{ fontSize: '40px', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {t('priceFree')}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {product.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={product.href}
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
              {product.button}
            </a>
          </div>

          {/* Card 2: Pro Variant (Planned) */}
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
              {t('pricePlanned').toUpperCase()}
            </div>
            <div>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-tech)', color: 'var(--gold-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {t('proPlannedDesc')}
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginTop: '8px', marginBottom: '16px' }}>
                {t('proPlannedTitle')}
              </h3>
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '24px' }}>
                <span style={{ fontSize: '40px', fontWeight: 800, color: 'var(--gold-primary)' }}>
                  {t('pricePlanned')}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 500 }}>
                  <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  Everything in Local-First Core
                </li>
                {proFeatures.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              disabled
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(229, 195, 151, 0.08)',
                border: '1px solid rgba(229, 195, 151, 0.2)',
                color: 'var(--text-muted)',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'not-allowed',
              }}
            >
              {t('vaultPageCTA')}
            </button>
          </div>
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
          {t('toolPageFAQTitle')}
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
