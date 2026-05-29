/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect } from 'react';

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
  vaultBadge: string;
  vaultTitle: string;
  vaultDesc: string;
  vaultFeature1: string;
  vaultFeature2: string;
  vaultFeature3: string;
  vaultBtn: string;
  erasemeBadge: string;
  erasemeTitle: string;
  erasemeDesc: string;
  erasemeFeature1: string;
  erasemeFeature2: string;
  erasemeFeature3: string;
  erasemeBtn: string;
  brandMeaningTitle: string;
  brandMeaningDesc: string;
  brandMeaningSym: string;
  brandMeaningAi: string;
  brandMeaningRa: string;
  footerRights: string;
  footerMessage: string;
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
}

const translations: Record<Language, TranslationMap> = {
  en: {
    navVision: 'Vision',
    navTools: 'Tools',
    navGithub: 'GitHub',
    heroBadge: 'Human agency in the AI era',
    heroTitle1: 'Tools for the era',
    heroTitle2: 'of Human-AI',
    heroTitle3: 'symbiosis.',
    heroSubtitle: 'Symaira builds products that help people work with AI without giving up control over data, decisions, or trust.',
    heroNameExplainer: 'SYM = Symbiosis. AI = Artificial Intelligence. RA = the new era.',
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
    toolsSubtitle: 'Symaira starts where AI collaboration needs the most trust: secrets, identity, privacy, and repeatable workflows.',
    vaultBadge: 'Secrets & agents',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'A secure password and secrets manager for terminal users and AI agents. It keeps credentials encrypted, local-first, and available through scoped workflows instead of raw chat sharing.',
    vaultFeature1: 'Keep credentials out of prompts, logs, and chat history.',
    vaultFeature2: 'Give agents scoped access through MCP instead of sharing raw secrets.',
    vaultFeature3: 'Stay local-first, encrypted, open source, and telemetry-free.',
    vaultBtn: 'View Vault on GitHub',
    erasemeBadge: 'Privacy automation',
    erasemeTitle: 'Symaira EraseMe',
    erasemeDesc: 'A privacy automation tool that helps people remove their data from brokers and close unwanted accounts.',
    erasemeFeature1: 'Plan and track GDPR/CCPA erasure campaigns.',
    erasemeFeature2: 'Use AI-assisted workflows for triage, reminders, and rebuttals.',
    erasemeFeature3: 'Keep an auditable record of every request and deadline.',
    erasemeBtn: 'View EraseMe on GitHub',
    brandMeaningTitle: 'Why Symaira',
    brandMeaningDesc: 'Symaira is built from three parts. The name describes the product direction: tools for a new era where humans and AI systems work together with clear boundaries.',
    brandMeaningSym: 'SYM: symbiosis',
    brandMeaningAi: 'AI: artificial intelligence',
    brandMeaningRa: 'RA: the new era',
    footerRights: 'All rights reserved.',
    footerMessage: 'Built for human agency in the AI era.',
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
  },
  de: {
    navVision: 'Vision',
    navTools: 'Tools',
    navGithub: 'GitHub',
    heroBadge: 'Menschliche Handlungsfähigkeit in der AI-Ära',
    heroTitle1: 'Tools für die Ära',
    heroTitle2: 'der Mensch-AI',
    heroTitle3: 'Symbiose.',
    heroSubtitle: 'Symaira baut Produkte, mit denen Menschen mit AI arbeiten können, ohne Kontrolle über Daten, Entscheidungen oder Vertrauen abzugeben.',
    heroNameExplainer: 'SYM = Symbiose. AI = Artificial Intelligence. RA = die neue Ära.',
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
    toolsSubtitle: 'Symaira beginnt dort, wo AI-Zusammenarbeit besonders viel Vertrauen braucht: Secrets, Identität, Privatsphäre und wiederholbare Workflows.',
    vaultBadge: 'Secrets & Agents',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'Ein sicherer Passwort- und Secrets-Manager für Terminal-Nutzer und AI-Agenten. Credentials bleiben verschlüsselt, lokal kontrolliert und über begrenzte Workflows verfügbar.',
    vaultFeature1: 'Credentials bleiben aus Prompts, Logs und Chatverläufen heraus.',
    vaultFeature2: 'Agenten erhalten begrenzten Zugriff über MCP statt rohe Secrets.',
    vaultFeature3: 'Lokal, verschlüsselt, Open Source und ohne Telemetrie.',
    vaultBtn: 'Vault auf GitHub ansehen',
    erasemeBadge: 'Privacy Automation',
    erasemeTitle: 'Symaira EraseMe',
    erasemeDesc: 'Ein Privacy-Automation-Tool, das Menschen dabei hilft, ihre Daten bei Datenhändlern löschen zu lassen und unerwünschte Accounts zu schließen.',
    erasemeFeature1: 'GDPR/CCPA-Löschkampagnen planen und verfolgen.',
    erasemeFeature2: 'AI-gestützte Workflows für Triage, Erinnerungen und Antworten nutzen.',
    erasemeFeature3: 'Jede Anfrage und Frist nachvollziehbar dokumentieren.',
    erasemeBtn: 'EraseMe auf GitHub ansehen',
    brandMeaningTitle: 'Warum Symaira',
    brandMeaningDesc: 'Symaira besteht aus drei Teilen. Der Name beschreibt die Produktrichtung: Tools für eine neue Ära, in der Menschen und AI-Systeme mit klaren Grenzen zusammenarbeiten.',
    brandMeaningSym: 'SYM: Symbiose',
    brandMeaningAi: 'AI: Artificial Intelligence',
    brandMeaningRa: 'RA: die neue Ära',
    footerRights: 'Alle Rechte vorbehalten.',
    footerMessage: 'Gebaut für menschliche Handlungsfähigkeit in der AI-Ära.',
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
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationMap) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const language: Language = 'en';

  const setLanguage: LanguageContextProps['setLanguage'] = () => {
    // No-op: Language switcher has been removed
  };

  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  const t = (key: keyof TranslationMap): string => {
    return translations['en'][key] || '';
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
