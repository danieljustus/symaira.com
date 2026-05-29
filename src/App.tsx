import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Tools } from './components/Tools';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
        {/* Ambient glow blobs */}
        <div className="bg-ambient-glow glow-cyan-top" />
        <div className="bg-ambient-glow glow-blue-right" />
        <div className="bg-ambient-glow glow-indigo-bottom" />

        {/* Global Page Content */}
        <Navigation />
        
        <main>
          <Hero />
          <Vision />
          <Tools />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  </ThemeProvider>
  );
}

export default App;
