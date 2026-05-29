/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'de';

interface TranslationMap {
  navVision: string;
  navTools: string;
  navContact: string;
  navGithub: string;
  navGithubProfile: string;
  languageToggleLabel: string;
  languageEnglish: string;
  languageGerman: string;
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSubtitle: string;
  heroNameExplainer: string;
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
  bestForLabel: string;
  automatesLabel: string;
  vaultBadge: string;
  vaultTitle: string;
  vaultDesc: string;
  vaultBestFor: string;
  vaultAutomates: string;
  vaultFeature1: string;
  vaultFeature2: string;
  vaultFeature3: string;
  vaultFeature4: string;
  vaultBtn: string;
  erasemeBadge: string;
  erasemeStatus: string;
  erasemeTitle: string;
  erasemeDesc: string;
  erasemeBestFor: string;
  erasemeAutomates: string;
  erasemeFeature1: string;
  erasemeFeature2: string;
  erasemeFeature3: string;
  erasemeFeature4: string;
  erasemeBtn: string;
  copyCommandLabel: string;
  copiedCommandLabel: string;
  vaultDemoLine1: string;
  vaultDemoLine2: string;
  vaultDemoLine3: string;
  vaultDemoSuccess: string;
  erasemeDemoCampaign: string;
  erasemeDemoBrokers: string;
  erasemeDemoDeadlines: string;
  erasemeDemoLaw: string;
  erasemeDemoTriage: string;
  erasemeDemoAudit: string;
  brandMeaningTitle: string;
  brandMeaningDesc: string;
  brandMeaningSym: string;
  brandMeaningAi: string;
  brandMeaningRa: string;
  footerRights: string;
  footerMessage: string;
  footerSignature: string;
  footerImpressum: string;
  footerPrivacy: string;
  deckVaultTab: string;
  deckEraseTab: string;
  deckVaultStatus: string;
  deckEraseStatus: string;
  deckAgentRequest: string;
  deckAgentName: string;
  deckRequestedItem: string;
  deckStatusBlocked: string;
  deckButtonApprove: string;
  deckStatusApproved: string;
  deckBrokerStatusScan: string;
  deckButtonTriggerErase: string;
  deckStatusErased: string;
  deckStatusPending: string;
  deckStatusErasing: string;
  contactTitle: string;
  contactSubtitle: string;
  contactSendBtn: string;
  contactCopyBtn: string;
  contactCopied: string;
  contactShield: string;
  maintainerTitle: string;
  maintainerDesc: string;
  maintainerBtn: string;
}

const translations: Record<Language, TranslationMap> = {
  en: {
    navVision: 'Vision',
    navTools: 'Tools',
    navContact: 'Contact',
    navGithub: 'GitHub',
    navGithubProfile: 'Open GitHub profile',
    languageToggleLabel: 'Select language',
    languageEnglish: 'English',
    languageGerman: 'German',
    heroBadge: 'Human agency in the AI era',
    heroTitle1: 'Tools for the era',
    heroTitle2: 'of Human-AI',
    heroTitle3: 'symbiosis.',
    heroSubtitle: 'Symaira builds products that help people work with AI without giving up control over data, decisions, or trust.',
    heroNameExplainer: 'SYM = Symbiosis · AI = Artificial Intelligence · RA = the new era',
    heroButtonTools: 'Explore Tools',
    heroButtonVision: 'Understand the Vision',
    visionTitle: 'AI is becoming a collaborator. The interface has to change.',
    visionSubtitle: 'Real collaboration needs boundaries, secure handoffs, traceable decisions, and tools that keep people in control.',
    visionPillar1Title: 'Human Control',
    visionPillar1Desc: 'AI can take over work, but responsibility must stay clear. Symaira tools are built around human intent, review, and revocation.',
    visionPillar2Title: 'Data Sovereignty',
    visionPillar2Desc: 'Personal data, secrets, and identities should stay protected even when AI systems become part of the workflow.',
    visionPillar3Title: 'Useful Autonomy',
    visionPillar3Desc: 'Automation should be explainable, bounded, and safe enough to trust in repeatable work without giving up oversight.',
    toolsTitle: 'The first Symaira tools',
    toolsSubtitle: 'All Symaira tools are 100% open-source, local-first, and designed to put trust back in your hands—focusing on secrets, identity, privacy, and repeatable workflows.',
    bestForLabel: 'Best for',
    automatesLabel: 'What it automates',
    vaultBadge: 'Secrets & agents',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'A terminal-native password and secrets manager for people and AI agents. Vault keeps credentials age-encrypted, local-first, and available through scoped workflows instead of prompt sharing.',
    vaultBestFor: 'Terminal users and AI agents that need secrets without prompt leakage.',
    vaultAutomates: 'symvault run, Git sync, TOTP, autotype, and scoped MCP handoffs.',
    vaultFeature1: 'age encryption with X25519 and ChaCha20-Poly1305.',
    vaultFeature2: 'Scoped MCP tokens for agent access instead of raw secret sharing.',
    vaultFeature3: 'symvault run injects secrets as environment variables for commands.',
    vaultFeature4: 'TOTP, autotype, Git sync, and zero telemetry built in.',
    vaultBtn: 'View Vault on GitHub',
    erasemeBadge: 'Privacy automation',
    erasemeStatus: 'Beta',
    erasemeTitle: 'Symaira EraseMe',
    erasemeDesc: 'A beta CLI for planning, sending, tracking, and proving data broker erasure campaigns without losing the human approval step.',
    erasemeBestFor: 'People who need data broker opt-outs with deadlines and evidence.',
    erasemeAutomates: 'Broker planning, inbox triage, reminders, audit trail, and report/export records.',
    erasemeFeature1: 'Curated registry tracks 1,277 brokers across the EU, UK, and US.',
    erasemeFeature2: 'GDPR 30-day and CCPA 45-day deadlines are monitored automatically.',
    erasemeFeature3: 'Event-sourced SQLite audit trail records every request.',
    erasemeFeature4: 'Manual fallback covers web forms, CAPTCHA, and reports/export.',
    erasemeBtn: 'View EraseMe on GitHub',
    copyCommandLabel: 'Copy',
    copiedCommandLabel: 'Copied',
    vaultDemoLine1: 'policy: scoped token verified',
    vaultDemoLine2: 'secret: injected into environment',
    vaultDemoLine3: 'audit: local event recorded',
    vaultDemoSuccess: 'access granted without prompt leakage',
    erasemeDemoCampaign: 'Campaign planned',
    erasemeDemoBrokers: '1,277 brokers',
    erasemeDemoDeadlines: 'Deadlines tracked',
    erasemeDemoLaw: 'GDPR / CCPA',
    erasemeDemoTriage: 'Replies triaged',
    erasemeDemoAudit: 'Audit trail',
    brandMeaningTitle: 'Why Symaira',
    brandMeaningDesc: 'Symaira is built from three parts. The name describes the product direction: tools for a new era where humans and AI systems work together with clear boundaries.',
    brandMeaningSym: 'SYM: symbiosis',
    brandMeaningAi: 'AI: artificial intelligence',
    brandMeaningRa: 'RA: the new era',
    footerRights: 'All rights reserved.',
    footerMessage: 'Built for human agency in the AI era.',
    footerSignature: 'Made in symbiosis',
    footerImpressum: 'Imprint',
    footerPrivacy: 'Privacy Policy',
    deckVaultTab: '🔑 Vault Safe',
    deckEraseTab: '🛡️ Privacy Scan',
    deckVaultStatus: 'SYM.VAULT // SECURED',
    deckEraseStatus: 'SYM.ERASE // DATA BROKERS',
    deckAgentRequest: 'ACCESS REQUEST',
    deckAgentName: 'Agent: Cognitive-09',
    deckRequestedItem: 'MySQL Prod Credentials',
    deckStatusBlocked: 'BLOCKED: Awaiting human consent',
    deckButtonApprove: 'Approve Access',
    deckStatusApproved: 'APPROVED: Scoped token sent',
    deckBrokerStatusScan: 'Scanning broker registries...',
    deckButtonTriggerErase: 'Trigger Privacy Erase',
    deckStatusErased: 'Erased',
    deckStatusPending: 'Pending',
    deckStatusErasing: 'Erasing...',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Have questions about Symaira\'s tools, or want to discuss human-AI collaboration? Send a direct message.',
    contactSendBtn: 'Send Email',
    contactCopyBtn: 'Copy Email Address',
    contactCopied: 'Copied to Clipboard!',
    contactShield: 'Protected by client-side anti-spam shielding. Zero trackers.',
    maintainerTitle: 'Creator & Maintainer',
    maintainerDesc: 'Hi, I\'m Daniel. I design and build the Symaira ecosystem. As a software engineer and privacy advocate, I believe that the future of AI must be local-first, transparent, and entirely under human control. That is why all Symaira tools are fully open-source and run locally on your machine.',
    maintainerBtn: 'Visit daniel-justus.de',
  },
  de: {
    navVision: 'Vision',
    navTools: 'Tools',
    navContact: 'Kontakt',
    navGithub: 'GitHub',
    navGithubProfile: 'GitHub-Profil öffnen',
    languageToggleLabel: 'Sprache auswählen',
    languageEnglish: 'Englisch',
    languageGerman: 'Deutsch',
    heroBadge: 'Menschliche Handlungsfähigkeit in der AI-Ära',
    heroTitle1: 'Tools für die Ära',
    heroTitle2: 'der Mensch-AI',
    heroTitle3: 'Symbiose.',
    heroSubtitle: 'Symaira baut Produkte, mit denen Menschen mit AI arbeiten können, ohne Kontrolle über Daten, Entscheidungen oder Vertrauen abzugeben.',
    heroNameExplainer: 'SYM = Symbiose · AI = Artificial Intelligence · RA = die neue Ära',
    heroButtonTools: 'Tools entdecken',
    heroButtonVision: 'Vision verstehen',
    visionTitle: 'AI wird zum Mitwirkenden. Das Interface muss sich verändern.',
    visionSubtitle: 'Echte Zusammenarbeit braucht Grenzen, sichere Übergaben, nachvollziehbare Entscheidungen und Tools, die Menschen in Kontrolle halten.',
    visionPillar1Title: 'Menschliche Kontrolle',
    visionPillar1Desc: 'AI kann Arbeit übernehmen, aber Verantwortung muss klar bleiben. Symaira-Tools sind auf Absicht, Prüfung und Widerrufbarkeit ausgelegt.',
    visionPillar2Title: 'Datensouveränität',
    visionPillar2Desc: 'Persönliche Daten, Secrets und Identitäten müssen geschützt bleiben, auch wenn AI-Systeme Teil des Workflows werden.',
    visionPillar3Title: 'Nützliche Autonomie',
    visionPillar3Desc: 'Automatisierung sollte erklärbar, begrenzt und sicher genug sein, um wiederkehrende Arbeit zu unterstützen, ohne Kontrolle abzugeben.',
    toolsTitle: 'Die ersten Symaira Tools',
    toolsSubtitle: 'Alle Symaira-Tools sind zu 100 % Open-Source, lokal-kontrolliert und darauf ausgelegt, das Vertrauen zurück in Ihre Hände zu geben – mit Fokus auf Secrets, Identität, Privatsphäre und wiederholbare Workflows.',
    bestForLabel: 'Ideal für',
    automatesLabel: 'Automatisiert',
    vaultBadge: 'Secrets & Agents',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'Ein terminal-nativer Passwort- und Secrets-Manager für Menschen und AI-Agenten. Vault hält Credentials age-verschlüsselt, lokal kontrolliert und über begrenzte Workflows verfügbar.',
    vaultBestFor: 'Terminal-Nutzer und AI-Agenten, die Secrets ohne Prompt-Leakage brauchen.',
    vaultAutomates: 'symvault run, Git-Sync, TOTP, Autotype und begrenzte MCP-Übergaben.',
    vaultFeature1: 'age-Verschlüsselung mit X25519 und ChaCha20-Poly1305.',
    vaultFeature2: 'Scoped MCP Tokens für Agentenzugriff statt roher Secret-Weitergabe.',
    vaultFeature3: 'symvault run injiziert Secrets als Umgebungsvariablen für Befehle.',
    vaultFeature4: 'TOTP, Autotype, Git-Sync und keine Telemetrie integriert.',
    vaultBtn: 'Vault auf GitHub ansehen',
    erasemeBadge: 'Privacy Automation',
    erasemeStatus: 'Beta',
    erasemeTitle: 'Symaira EraseMe',
    erasemeDesc: 'Eine Beta-CLI zum Planen, Senden, Verfolgen und Belegen von Löschkampagnen bei Datenbrokern, ohne die menschliche Freigabe zu verlieren.',
    erasemeBestFor: 'Menschen, die Datenbroker-Opt-outs mit Fristen und Nachweisen brauchen.',
    erasemeAutomates: 'Broker-Planung, Inbox-Triage, Erinnerungen, Audit Trail und Reports/Export.',
    erasemeFeature1: 'Kuratierte Registry mit 1.277 Brokern in EU, UK und US.',
    erasemeFeature2: 'GDPR-Fristen von 30 Tagen und CCPA-Fristen von 45 Tagen werden überwacht.',
    erasemeFeature3: 'Event-sourced SQLite Audit Trail dokumentiert jede Anfrage.',
    erasemeFeature4: 'Manueller Fallback für Webformulare, CAPTCHA und Reports/Export.',
    erasemeBtn: 'EraseMe auf GitHub ansehen',
    copyCommandLabel: 'Kopieren',
    copiedCommandLabel: 'Kopiert',
    vaultDemoLine1: 'policy: Scoped Token verifiziert',
    vaultDemoLine2: 'secret: in Umgebung injiziert',
    vaultDemoLine3: 'audit: lokales Ereignis erfasst',
    vaultDemoSuccess: 'Zugriff ohne Prompt-Leakage erteilt',
    erasemeDemoCampaign: 'Kampagne geplant',
    erasemeDemoBrokers: '1.277 Broker',
    erasemeDemoDeadlines: 'Fristen verfolgt',
    erasemeDemoLaw: 'GDPR / CCPA',
    erasemeDemoTriage: 'Antworten triagiert',
    erasemeDemoAudit: 'Audit Trail',
    brandMeaningTitle: 'Warum Symaira',
    brandMeaningDesc: 'Symaira besteht aus drei Teilen. Der Name beschreibt die Produktrichtung: Tools für eine neue Ära, in der Menschen und AI-Systeme mit klaren Grenzen zusammenarbeiten.',
    brandMeaningSym: 'SYM: Symbiose',
    brandMeaningAi: 'AI: Artificial Intelligence',
    brandMeaningRa: 'RA: die neue Ära',
    footerRights: 'Alle Rechte vorbehalten.',
    footerMessage: 'Gebaut für menschliche Handlungsfähigkeit in der AI-Ära.',
    footerSignature: 'Gebaut in Symbiose',
    footerImpressum: 'Impressum',
    footerPrivacy: 'Datenschutzerklärung',
    deckVaultTab: '🔑 Vault-Safe',
    deckEraseTab: '🛡️ Privatsphäre-Scan',
    deckVaultStatus: 'SYM.VAULT // GESICHERT',
    deckEraseStatus: 'SYM.ERASE // DATENBROKER',
    deckAgentRequest: 'ZUGRIFFSANFRAGE',
    deckAgentName: 'Agent: Cognitive-09',
    deckRequestedItem: 'MySQL Prod-Credentials',
    deckStatusBlocked: 'BLOCKIERT: Wartet auf Freigabe',
    deckButtonApprove: 'Freigabe erteilen',
    deckStatusApproved: 'ERTEILT: Scoped Token übertragen',
    deckBrokerStatusScan: 'Scanne Broker-Register...',
    deckButtonTriggerErase: 'Löschung starten',
    deckStatusErased: 'Gelöscht',
    deckStatusPending: 'Ausstehend',
    deckStatusErasing: 'Löscht...',
    contactTitle: 'Direkter Kontakt',
    contactSubtitle: 'Fragen zu den Symaira-Tools oder Lust auf einen Austausch über Mensch-KI-Zusammenarbeit? Schreib mir direkt.',
    contactSendBtn: 'E-Mail senden',
    contactCopyBtn: 'Adresse kopieren',
    contactCopied: 'In Zwischenablage kopiert!',
    contactShield: 'Geschützt durch clientseitiges Anti-Spam-Shielding. Keine Tracker.',
    maintainerTitle: 'Entwickler & Maintainer',
    maintainerDesc: 'Hi, ich bin Daniel. Ich konzipiere und entwickle das Symaira-Ökosystem. Als Softwareentwickler und Verfechter digitaler Privatsphäre bin ich überzeugt, dass die Zukunft von KI lokal-kontrolliert, transparent und vollständig unter menschlicher Kontrolle sein muss. Deshalb sind alle Symaira-Tools zu 100 % Open-Source und laufen lokal auf deinem System.',
    maintainerBtn: 'daniel-justus.de besuchen',
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationMap) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'symaira-language';

const isLanguage = (value: string | null): value is Language => value === 'en' || value === 'de';

const detectInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLanguage(storedLanguage)) {
      return storedLanguage;
    }
  } catch {
    // Private browsing or restricted storage should not block language detection.
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  return browserLanguages.some((browserLanguage) => browserLanguage.toLowerCase().startsWith('de'))
    ? 'de'
    : 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage: LanguageContextProps['setLanguage'] = (nextLanguage) => {
    setLanguageState(nextLanguage);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Persisting is nice to have; the in-memory selection still works.
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: keyof TranslationMap): string => {
    return translations[language][key] || translations.en[key] || '';
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
