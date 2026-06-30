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

  const isLegalPage = hash === '#/impressum' || hash === '#/privacy' || hash === '#/datenschutz';
  const isStackPage = hash === '#/stack';
  const isVaultPage = hash === '#/vault-pro';
  
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
