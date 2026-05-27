import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Tools } from './components/Tools';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
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
  );
}

export default App;
