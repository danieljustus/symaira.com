import React, { createContext, useState, useContext, useEffect } from 'react';

export type Language = 'en' | 'de';

interface TranslationMap {
  navVision: string;
  navTools: string;
  navGithub: string;
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSubtitle: string;
  heroButtonTools: string;
  heroButtonVision: string;
  visionTitle: string;
  visionSubtitle: string;
  visionPillar1Title: string;
  visionPillar1Desc: string;
  visionPillar2Title: string;
  visionPillar2Desc: string;
  visionPillar3Title: string;
  visionPillar3Desc: string;
  toolsTitle: string;
  toolsSubtitle: string;
  vaultBadge: string;
  vaultTitle: string;
  vaultDesc: string;
  vaultFeature1: string;
  vaultFeature2: string;
  vaultFeature3: string;
  vaultBtn: string;
  upcomingTitle: string;
  upcomingSubtitle: string;
  connectTitle: string;
  connectDesc: string;
  flowTitle: string;
  flowDesc: string;
  footerRights: string;
  footerSync: string;
  comingSoon: string;
}

const translations: Record<Language, TranslationMap> = {
  en: {
    navVision: 'Vision',
    navTools: 'Tools',
    navGithub: 'GitHub',
    heroBadge: 'The Symbiosis Era is Here',
    heroTitle1: 'Seamless Symbiosis',
    heroTitle2: 'Between',
    heroTitle3: 'Human & AI',
    heroSubtitle: 'Symaira creates premium tools designed to securely bridge the gap between human intent and autonomous AI agent execution.',
    heroButtonTools: 'Explore Tools',
    heroButtonVision: 'Our Vision',
    visionTitle: 'The Symaira Vision',
    visionSubtitle: 'Why Human-AI symbiosis is the inevitable next step in technological evolution.',
    visionPillar1Title: 'Absolute Security',
    visionPillar1Desc: 'AI agents require access to sensitive credentials, databases, and APIs. We construct bulletproof vaults to shield secrets while enabling autonomous tasks.',
    visionPillar2Title: 'Dynamic Agency',
    visionPillar2Desc: 'Empowering AI with the safety boundaries, credentials, and parameters it needs to operate efficiently without continuous human micro-management.',
    visionPillar3Title: 'Shared Intelligence',
    visionPillar3Desc: 'Fostering a true partnership where AI agents augment human capability, working hand-in-hand to solve grand engineering challenges.',
    toolsTitle: 'Symaira Ecosystem',
    toolsSubtitle: 'Purpose-built open-source components for autonomous agent workflows.',
    vaultBadge: 'First Release',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'A specialized credential and password manager built strictly for AI agents. It integrates seamlessly into LLM runtimes, allowing agents to fetch secrets securely on the fly without leaking them into prompts, history, or debugging logs.',
    vaultFeature1: 'Zero-Leak Prompts: Agents request credentials dynamically using secure placeholders.',
    vaultFeature2: 'Granular ACL: Strict policy boundaries defining which agent can access which API key.',
    vaultFeature3: 'Simple SDK: Drop-in TypeScript, Python, and terminal interfaces for agent frameworks.',
    vaultBtn: 'View Vault on GitHub',
    upcomingTitle: 'Future Pipelines',
    upcomingSubtitle: 'Currently under development to expand agent orchestration capabilities.',
    connectTitle: 'Symaira Connect',
    connectDesc: 'Secure, encrypted real-time communication bridges between human operators and multi-agent meshes, enabling collaborative loop interventions.',
    flowTitle: 'Symaira Flow',
    flowDesc: 'A visual state-machine and intent-mapping platform to choreograph complex operations and dependency trees across agent clusters.',
    footerRights: 'All rights reserved.',
    footerSync: 'Auto-synchronized to All-Inkl via GitHub Actions',
    comingSoon: 'Coming Soon',
  },
  de: {
    navVision: 'Vision',
    navTools: 'Tools',
    navGithub: 'GitHub',
    heroBadge: 'Die Symbiose-Ära hat begonnen',
    heroTitle1: 'Nahtlose Symbiose',
    heroTitle2: 'Zwischen',
    heroTitle3: 'Mensch & KI',
    heroSubtitle: 'Symaira entwickelt erstklassige Tools, um die Lücke zwischen menschlicher Absicht und autonomer KI-Ausführung sicher und elegant zu schließen.',
    heroButtonTools: 'Tools entdecken',
    heroButtonVision: 'Unsere Vision',
    visionTitle: 'Die Symaira Vision',
    visionSubtitle: 'Warum die Mensch-KI-Symbiose der unausweichliche nächste Schritt der technologischen Evolution ist.',
    visionPillar1Title: 'Absolute Sicherheit',
    visionPillar1Desc: 'KI-Agenten benötigen Zugriff auf sensible Zugangsdaten und APIs. Wir bauen bombensichere Tresore, um Geheimnisse zu schützen und Autonomie zu ermöglichen.',
    visionPillar2Title: 'Dynamische Autonomie',
    visionPillar2Desc: 'Wir statten KIs mit Sicherheitsgrenzen und Credentials aus, damit sie effizient arbeiten können, ohne ständiges menschliches Mikromanagement.',
    visionPillar3Title: 'Gemeinsame Intelligenz',
    visionPillar3Desc: 'Förderung einer echten Partnerschaft, in der KI-Agenten die menschlichen Fähigkeiten erweitern und Hand in Hand große Herausforderungen lösen.',
    toolsTitle: 'Symaira Ökosystem',
    toolsSubtitle: 'Speziell entwickelte Open-Source-Komponenten für autonome Agenten-Workflows.',
    vaultBadge: 'Erster Release',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'Ein spezialisierter Passwort- und Credential-Manager für KI-Agenten. Er integriert sich nahtlos in LLM-Runtimes und ermöglicht es Agenten, API-Keys on-the-fly abzurufen, ohne sensible Daten in Prompts oder Logs offenzulegen.',
    vaultFeature1: 'Zero-Leak Prompts: Agenten fordern Anmeldedaten dynamisch über sichere Platzhalter an.',
    vaultFeature2: 'Feingranulare ACLs: Strikte Richtlinien, welcher Agent auf welche API-Keys zugreifen darf.',
    vaultFeature3: 'Einfaches SDK: Drop-in TypeScript-, Python- und CLI-Schnittstellen für Agenten-Frameworks.',
    vaultBtn: 'Vault auf GitHub ansehen',
    upcomingTitle: 'Zukünftige Pipelines',
    upcomingSubtitle: 'Derzeit in der Entwicklung, um die Orchestrierung von KI-Agenten zu erweitern.',
    connectTitle: 'Symaira Connect',
    connectDesc: 'Sichere, verschlüsselte Echtzeit-Kommunikationsbrücken zwischen menschlichen Operatoren und Multi-Agenten-Netzwerken.',
    flowTitle: 'Symaira Flow',
    flowDesc: 'Visuelle State-Machine und Intent-Mapping-Plattform zur Choreographie komplexer Operationen über Agenten-Cluster hinweg.',
    footerRights: 'Alle Rechte vorbehalten.',
    footerSync: 'Automatisch synchronisiert mit All-Inkl über GitHub Actions',
    comingSoon: 'Demnächst',
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationMap) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('symaira_lang');
    if (saved === 'en' || saved === 'de') return saved;
    // Autodetect browser locale
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'de' ? 'de' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('symaira_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: keyof TranslationMap): string => {
    return translations[language][key] || translations['en'][key] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
