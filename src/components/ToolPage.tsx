import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getProducts, getRouteForCmd } from '../config/products';
import { 
  ArrowLeft, 
  
  HelpCircle, 
  ExternalLink,
  Brain,
  Globe,
  Eye,
  Terminal,
  Workflow,
  Cpu,
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

  const faqs = [
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
              ) : product.demoType === 'brain' ? (
                <div className="product-demo product-demo-memory" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Brain size={12} />
                      symbrain profile: claude-code
                    </div>
                  </div>
                  <div className="memory-flow">
                    <div className="memory-row-item">
                      <span className="memory-tag tag-add">MEMORY</span>
                      <span className="memory-text">{t('brainDemoMemory')}</span>
                      <span className="memory-status status-success">{t('brainDemoStatusExposed')}</span>
                    </div>
                    <div className="memory-row-item">
                      <span className="memory-tag tag-sync">SKILLS</span>
                      <span className="memory-text">{t('brainDemoSkills')}</span>
                      <span className="memory-status status-sanitized">{t('brainDemoStatusScoped')}</span>
                    </div>
                    <div className="memory-row-item">
                      <span className="memory-tag tag-guard">VAULT</span>
                      <span className="memory-text">{t('brainDemoVault')}</span>
                      <span className="memory-status status-pending">{t('brainDemoStatusDenied')}</span>
                    </div>
                  </div>
                </div>
              ) : product.demoType === 'browse' ? (
                <div className="product-demo product-demo-fetch" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Globe size={12} />
                      symbrowse
                    </div>
                  </div>
                  <div className="fetch-flow">
                    <div className="fetch-input-line">
                      <Globe size={13} />
                      <span>{t('browseDemoInput')}</span>
                    </div>
                    <div className="fetch-pipeline">
                      <div className="fetch-step">
                        <span className="fetch-step-icon">//</span>
                        <span className="fetch-step-text">{t('browseDemoStatusEngine')}</span>
                        <span className="fetch-step-value highlight">session "research"</span>
                      </div>
                      <div className="fetch-step">
                        <span className="fetch-step-icon">//</span>
                        <span className="fetch-step-text">{t('browseDemoStatusDom')}</span>
                        <span className="fetch-step-value">markdown, 8k tokens</span>
                      </div>
                      <div className="fetch-step">
                        <span className="fetch-step-icon">//</span>
                        <span className="fetch-step-text">{t('browseDemoStatusHandoff')}</span>
                        <span className="fetch-step-value highlight">2FA / CAPTCHA</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : product.demoType === 'cockpit' ? (
                <div className="product-demo product-demo-scope" aria-hidden="true">
                  <div className="demo-header">
                    <div className="demo-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="demo-title">
                      <Cpu size={12} />
                      {t('cockpitDemoTitle')}
                    </div>
                  </div>
                  <div className="scope-flow">
                    <div className="scope-step scanning">
                      <span className="scope-indicator animate-pulse" />
                      <span className="scope-text">{t('cockpitDemoScanning')}</span>
                    </div>
                    <div className="scope-step conflict">
                      <span className="scope-step-icon">⚠</span>
                      <span className="scope-text">{t('cockpitDemoConflict')}</span>
                    </div>
                    <div className="scope-step mcp">
                      <span className="scope-step-icon">✔</span>
                      <span className="scope-text">{t('cockpitDemoThermals')}</span>
                    </div>
                    <div className="scope-step suggest">
                      <span className="scope-step-icon">»</span>
                      <span className="scope-text highlight">{t('cockpitDemoOperate')}</span>
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
              ) : (
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
                            <strong style={{ color: '#B39DDB' }}>symbrain:</strong> 128 context links
                          </div>
                          <div style={{ padding: '6px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                            <strong style={{ color: '#FFAB91' }}>seek:</strong> 420 documents indexed
                          </div>
                          <div style={{ padding: '6px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                            <strong style={{ color: '#FFE082' }}>ingest:</strong> OCR watcher active
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              )}
            </div>
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
