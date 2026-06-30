import React, { useState } from 'react';
import { Terminal, ArrowRight, Copy, Check, Shield, Brain, Search, Globe, Eye, Compass, Cpu, MousePointerClick, Router, ShieldAlert, Printer, Layers, Upload, Layout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const mcpConfigJson = `{
  "mcpServers": {
    "symvault": {
      "command": "symvault",
      "args": ["mcp", "serve"]
    },
    "symmemory": {
      "command": "symmemory",
      "args": ["mcp", "serve"]
    },
    "symseek": {
      "command": "symseek",
      "args": ["mcp", "serve"]
    },
    "symfetch": {
      "command": "symfetch",
      "args": ["mcp", "serve"]
    },
    "symscope": {
      "command": "symscope",
      "args": ["serve"]
    },
    "symoperate": {
      "command": "symoperate",
      "args": ["serve"]
    },
    "symtune": {
      "command": "symtune",
      "args": ["serve"]
    },
    "symeraseme": {
      "command": "symeraseme",
      "args": ["mcp", "serve"]
    },
    "symfritz": {
      "command": "symfritz",
      "args": ["mcp"]
    },
    "symprint": {
      "command": "symprint",
      "args": ["mcp"]
    },
    "symskills": {
      "command": "symskills",
      "args": ["serve", "--stdio"]
    },
    "symingest": {
      "command": "symingest",
      "args": ["mcp"]
    }
  }
}`;

export const Stack: React.FC = () => {
  const { t } = useLanguage();
  const [copiedInstall, setCopiedInstall] = useState<string | null>(null);

  const installSteps = [
    {
      label: t('stackInstallStep1Label'),
      command: 'brew tap danieljustus/tap',
    },
    {
      label: t('stackInstallStep2Label'),
      command: 'brew install symvault symmemory symseek symeraseme symscope symfetch symingest',
    },
    {
      label: t('stackInstallStep3Label'),
      command: 'brew install --cask symterminal symoperate symtune',
    },
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedInstall(id);
    setTimeout(() => setCopiedInstall(null), 2000);
  };

  const copyJson = () => {
    navigator.clipboard.writeText(mcpConfigJson);
    setCopiedInstall('json');
    setTimeout(() => setCopiedInstall(null), 2000);
  };

  const workflows = [
    {
      title: t('stackWorkflow1Title'),
      desc: t('stackWorkflow1Desc'),
      command: 'symfetch get https://docs.example.com/api --format md | symseek index --stdin',
    },
    {
      title: t('stackWorkflow2Title'),
      desc: t('stackWorkflow2Desc'),
      command: 'symvault run -- symmemory sync --encrypted --source local',
    },
    {
      title: t('stackWorkflow3Title'),
      desc: t('stackWorkflow3Desc'),
      command: 'symseek query "deployment guide" --format json --top 5',
    },
  ];

  const stackTools = [
    {
      icon: <Shield size={18} />,
      title: 'Symaira Vault',
      status: 'available',
      tone: 'gold',
    },
    {
      icon: <Eye size={18} />,
      title: 'Symaira EraseMe',
      status: 'available',
      tone: 'ice',
    },
    {
      icon: <Brain size={18} />,
      title: 'Symaira Memory',
      status: 'available',
      tone: 'violet',
    },
    {
      icon: <Search size={18} />,
      title: 'Symaira Seek',
      status: 'available',
      tone: 'coral',
    },
    {
      icon: <Globe size={18} />,
      title: 'Symaira Fetch',
      status: 'available',
      tone: 'sky',
    },
    {
      icon: <Compass size={18} />,
      title: 'Symaira Scope',
      status: 'available',
      tone: 'indigo',
    },
    {
      icon: <Terminal size={18} />,
      title: 'Symaira Terminal',
      status: 'available',
      tone: 'mint',
    },
    {
      icon: <MousePointerClick size={18} />,
      title: 'Symaira Operate',
      status: 'available',
      tone: 'rose',
    },
    {
      icon: <Cpu size={18} />,
      title: 'Symaira Tune',
      status: 'available',
      tone: 'amber',
    },
    {
      icon: <Router size={18} />,
      title: 'Symaira Fritz',
      status: 'available',
      tone: 'sky',
    },
    {
      icon: <ShieldAlert size={18} />,
      title: 'Symaira Guard',
      status: 'available',
      tone: 'indigo',
    },
    {
      icon: <Printer size={18} />,
      title: 'Symaira Print',
      status: 'available',
      tone: 'coral',
    },
    {
      icon: <Layers size={18} />,
      title: 'Symaira Skills',
      status: 'available',
      tone: 'mint',
    },
    {
      icon: <Upload size={18} />,
      title: 'Symaira Ingest',
      status: 'available',
      tone: 'amber',
    },
    {
      icon: <Layout size={18} />,
      title: 'Symaira Desktop',
      status: 'coming-soon',
      tone: 'violet',
    },
  ];

  return (
    <section
      id="stack"
      className="constrained-box stack-section"
      style={{
        paddingTop: '100px',
        paddingBottom: '120px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <img src="/logo-top.png" alt="" aria-hidden="true" className="section-logo-accent section-logo-accent-top" />
      <img src="/logo-bottom.png" alt="" aria-hidden="true" className="section-logo-accent section-logo-accent-bottom" />

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <span
          className="product-badge"
          style={{
            borderColor: 'rgba(0, 255, 200, 0.3)',
            color: 'var(--cyan-primary)',
            background: 'rgba(0, 255, 200, 0.05)',
            marginBottom: '20px',
            display: 'inline-block',
          }}
        >
          Model Context Protocol
        </span>
        <h1
          style={{
            fontSize: 'clamp(32px, 3rem, 48px)',
            fontFamily: 'var(--font-title)',
            fontWeight: 700,
            letterSpacing: '0',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--cyan-primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('stackTitle')}
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            margin: '0 auto 24px',
            lineHeight: 1.7,
          }}
        >
          {t('stackSubtitle')}
        </p>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.8,
            opacity: 0.85,
          }}
        >
          {t('stackPitch')}
        </p>
      </div>

      {/* Tool overview grid */}
      <div className="stack-tools-grid" style={{ marginBottom: '64px' }}>
        {stackTools.map((tool) => (
          <div key={tool.title} className={`glass-panel stack-tool-card stack-tool-${tool.tone}`}>
            <div className="stack-tool-icon">{tool.icon}</div>
            <div className="stack-tool-info">
              <span className="stack-tool-name">{tool.title}</span>
              <span className={`stack-tool-status ${tool.status === 'coming-soon' ? 'stack-tool-status-coming' : ''}`}>
                {tool.status === 'available' ? 'MCP' : 'Soon'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Install Block */}
      <div className="glass-panel stack-install-block" style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontSize: '22px',
            fontFamily: 'var(--font-title)',
            fontWeight: 600,
            marginBottom: '28px',
            color: 'var(--text-primary)',
          }}
        >
          {t('stackInstallTitle')}
        </h2>
        <div className="stack-install-steps">
          {installSteps.map((step, idx) => (
            <div key={idx} className="stack-install-step">
              <div className="stack-install-step-header">
                <span className="stack-install-step-number">{idx + 1}</span>
                <span className="stack-install-step-label">{step.label}</span>
              </div>
              <div className="stack-install-command">
                <code>{step.command}</code>
                <button
                  className="stack-copy-btn"
                  type="button"
                  onClick={() => copyToClipboard(step.command, `step-${idx}`)}
                  aria-label="Copy"
                >
                  {copiedInstall === `step-${idx}` ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            opacity: 0.7,
            marginTop: '16px',
            fontStyle: 'italic',
          }}
        >
          {t('stackInstallNote')}
        </p>
      </div>

      {/* MCP Config */}
      <div className="glass-panel stack-config-block" style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2
            style={{
              fontSize: '22px',
              fontFamily: 'var(--font-title)',
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}
          >
            {t('stackConfigTitle')}
          </h2>
          <button
            className="stack-copy-btn"
            type="button"
            onClick={copyJson}
            aria-label="Copy JSON"
          >
            {copiedInstall === 'json' ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginBottom: '20px',
            lineHeight: 1.7,
          }}
        >
          {t('stackConfigDesc')}
        </p>
        <div className="stack-json-block">
          <div className="demo-header">
            <div className="demo-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="demo-title">
              <Terminal size={12} />
              symaira-mcp.json
            </div>
          </div>
          <pre><code>{mcpConfigJson}</code></pre>
        </div>
      </div>

      {/* Workflows */}
      <div style={{ marginBottom: '64px' }}>
        <h2
          style={{
            fontSize: '22px',
            fontFamily: 'var(--font-title)',
            fontWeight: 600,
            marginBottom: '28px',
            color: 'var(--text-primary)',
            textAlign: 'center',
          }}
        >
          {t('stackWorkflowTitle')}
        </h2>
        <div className="stack-workflows">
          {workflows.map((wf, idx) => (
            <div key={idx} className="glass-panel stack-workflow-card">
              <div className="stack-workflow-number">{idx + 1}</div>
              <h3 className="stack-workflow-title">{wf.title}</h3>
              <p className="stack-workflow-desc">{wf.desc}</p>
              <div className="stack-workflow-command">
                <code>{wf.command}</code>
                <button
                  className="stack-copy-btn"
                  type="button"
                  onClick={() => copyToClipboard(wf.command, `wf-${idx}`)}
                  aria-label="Copy"
                >
                  {copiedInstall === `wf-${idx}` ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back link */}
      <div style={{ textAlign: 'center' }}>
        <a
          href="#tools"
          className="action-button-primary"
          style={{
            color: '#000',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          {t('stackBackToTools')}
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
};
