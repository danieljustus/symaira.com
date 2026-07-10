import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Stack } from './components/Stack';
import { VaultPage } from './components/VaultPage';
import { ToolPage } from './components/ToolPage';
import { Footer } from './components/Footer';
import { LegalPages } from './components/LegalPages';
import { SandBackground } from './components/SandBackground';
import { CookieConsent } from './components/CookieConsent';
import { SHOW_PRO } from './config/features';

const DEFAULT_TITLE = 'Symaira | Open-Source, Local-First AI Tools & MCP Servers';

const ROUTE_TITLES: Record<string, string> = {
  '#/stack': 'The Symaira AI Stack — MCP Servers & Local-First Agent Tools | Symaira',
  '#/vault-pro': 'Symaira Vault Pro — Secrets Management for Teams & AI Agents',
  '#/impressum': 'Imprint | Symaira',
  '#/privacy': 'Privacy Policy | Symaira',
  '#/datenschutz': 'Datenschutzerklärung | Symaira',
  '#/vault': 'Symaira Vault — Agent-Safe Secrets Manager (CLI + MCP)',
  '#/memory': 'Symaira Memory — Persistent Semantic Memory for AI Agents',
  '#/seek': 'Symaira Seek — Local Hybrid Search (BM25 + Vectors, RRF)',
  '#/fetch': 'Symaira Fetch — Web Fetch Engine for LLM Agents',
  '#/scope': 'Symaira Scope — Port, Container & MCP Server Scanner',
  '#/eraseme': 'Symaira EraseMe — Data Broker Removal Automation',
  '#/terminal': 'Symaira Terminal — Native macOS Terminal for Coding Agents',
  '#/vibecoder': 'Symaira Vibecoder — Visual Agent Cycle Dashboard',
  '#/operate': 'Symaira Operate — macOS GUI Automation MCP Server',
  '#/tune': 'Symaira Tune — macOS Hardware Tuning CLI & MCP Server',
  '#/fritz': 'Symaira Fritz — FRITZ!Box CLI & MCP Server',
  '#/guard': 'Symaira Guard — Security Gateway for AI Agents & MCP',
  '#/print': 'Symaira Print — Markdown to Accessible PDF via Typst',
  '#/skills': 'Symaira Skills — Portable AI Agent Skill Manager',
  '#/ingest': 'Symaira Ingest — Local OCR & Document Ingestion',
  '#/desktop': 'Symaira Desktop — Local-First Markdown Workspace',
};

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      // Fast scroll-to-top on route changes
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const isHiddenProRoute = !SHOW_PRO && hash === '#/vault-pro';
    document.title = isHiddenProRoute ? DEFAULT_TITLE : ROUTE_TITLES[hash] ?? DEFAULT_TITLE;
  }, [hash]);

  const isLegalPage = hash === '#/impressum' || hash === '#/privacy' || hash === '#/datenschutz';
  const isStackPage = hash === '#/stack';
  const isVaultPage = SHOW_PRO && hash === '#/vault-pro';
  
  const validTools = ['vault', 'memory', 'seek', 'fetch', 'scope', 'eraseme', 'terminal', 'vibecoder', 'operate', 'tune', 'fritz', 'guard', 'print', 'skills', 'ingest', 'desktop'];
  const toolHashMatch = hash.match(/^#\/([a-z-]+)$/);
  const toolName = toolHashMatch ? toolHashMatch[1] : null;
  const isDynamicToolPage = toolName && validTools.includes(toolName);

  const legalView = hash === '#/impressum' ? 'impressum' : 'privacy';

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
          <SandBackground />

          {/* Ambient glow blobs */}
          <div className="bg-ambient-glow glow-cyan-top" />
          <div className="bg-ambient-glow glow-blue-right" />
          <div className="bg-ambient-glow glow-indigo-bottom" />

          {/* Global Page Content */}
          <Navigation />
          
          <main style={{ position: 'relative', zIndex: 5 }}>
            {isLegalPage ? (
              <LegalPages view={legalView} />
            ) : isStackPage ? (
              <Stack />
            ) : isVaultPage ? (
              <VaultPage />
            ) : isDynamicToolPage ? (
              <ToolPage toolId={toolName} />
            ) : (
              <>
                <Hero />
                <Vision />
                <Tools />
                <Contact />
              </>
            )}
          </main>

          <Footer />
          <CookieConsent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
