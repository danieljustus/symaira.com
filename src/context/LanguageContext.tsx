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
  memoryBadge: string;
  memoryStatus: string;
  memoryTitle: string;
  memoryDesc: string;
  memoryBestFor: string;
  memoryAutomates: string;
  memoryFeature1: string;
  memoryFeature2: string;
  memoryFeature3: string;
  memoryFeature4: string;
  memoryBtn: string;
  seekBadge: string;
  seekStatus: string;
  seekTitle: string;
  seekDesc: string;
  seekBestFor: string;
  seekAutomates: string;
  seekFeature1: string;
  seekFeature2: string;
  seekFeature3: string;
  seekFeature4: string;
  seekBtn: string;
  fetchBadge: string;
  fetchStatus: string;
  fetchTitle: string;
  fetchDesc: string;
  fetchBestFor: string;
  fetchAutomates: string;
  fetchFeature1: string;
  fetchFeature2: string;
  fetchFeature3: string;
  fetchFeature4: string;
  fetchBtn: string;
  terminalBadge: string;
  terminalStatus: string;
  terminalTitle: string;
  terminalDesc: string;
  terminalBestFor: string;
  terminalAutomates: string;
  terminalFeature1: string;
  terminalFeature2: string;
  terminalFeature3: string;
  terminalFeature4: string;
  terminalBtn: string;
  proLabel: string;
  vaultProHint: string;
  erasemeProHint: string;
  memoryProHint: string;
  seekProHint: string;
  fetchProHint: string;
  terminalProHint: string;
  terminalDemoPane1: string;
  terminalDemoPane2: string;
  terminalDemoPrompt: string;
  terminalDemoAction: string;
  memoryDemoAdd: string;
  memoryDemoGuard: string;
  memoryDemoSync: string;
  memoryDemoStatusIngested: string;
  memoryDemoStatusSanitized: string;
  memoryDemoStatusPending: string;
  seekDemoQuery: string;
  seekDemoRRF: string;
  fetchDemoInput: string;
  fetchDemoStatusTls: string;
  fetchDemoStatusDom: string;
  fetchDemoStatusTokens: string;
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
    heroSubtitle: 'Symaira builds products that empower you to collaborate with AI without compromising control over data, decisions, or digital trust.',
    heroNameExplainer: 'SYM = Symbiosis · AI = Artificial Intelligence · RA = the new era',
    heroButtonTools: 'Explore Tools',
    heroButtonVision: 'Understand the Vision',
    visionTitle: 'AI is becoming a collaborator. The interface has to change.',
    visionSubtitle: 'Real collaboration requires clear boundaries, secure handoffs, traceable decisions, and tools that keep you in control.',
    visionPillar1Title: 'Human Control',
    visionPillar1Desc: 'AI can take over tasks, but responsibility must remain clear. Symaira tools are designed around your intent, manual review, and instant revocation.',
    visionPillar2Title: 'Data Sovereignty',
    visionPillar2Desc: 'Your personal data, secrets, and identity must remain protected, even as autonomous AI systems integrate into your workflows.',
    visionPillar3Title: 'Useful Autonomy',
    visionPillar3Desc: 'Automation should be explainable, bounded, and safe enough to trust with repeatable work without ever sacrificing human oversight.',
    toolsTitle: 'The first Symaira tools',
    toolsSubtitle: 'All Symaira tools are 100% open-source, local-first, and designed to put trust back in your hands—focusing on secrets, identity, privacy, and repeatable workflows.',
    bestForLabel: 'Best for',
    automatesLabel: 'What it automates',
    vaultBadge: 'Secrets & agents',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'A terminal-native password and secrets manager for you and your AI agents. Vault keeps credentials age-encrypted, local-first, and available through scoped workflows instead of prompt sharing.',
    vaultBestFor: 'Terminal users and AI agents that need secrets without prompt leakage.',
    vaultAutomates: 'symvault run, Git sync, TOTP, autotype, and scoped MCP handoffs.',
    vaultFeature1: 'Age encryption with X25519 and ChaCha20-Poly1305.',
    vaultFeature2: 'Scoped MCP tokens for agent access instead of raw secret sharing.',
    vaultFeature3: 'symvault run injects secrets as environment variables for commands.',
    vaultFeature4: 'TOTP, autotype, Git sync, and zero telemetry built in.',
    vaultBtn: 'View Vault on GitHub',
    erasemeBadge: 'Privacy automation',
    erasemeStatus: 'Beta',
    erasemeTitle: 'Symaira EraseMe',
    erasemeDesc: 'A beta CLI to plan, send, track, and verify data broker erasure campaigns while maintaining absolute human control.',
    erasemeBestFor: 'People who need data broker opt-outs with deadlines and evidence.',
    erasemeAutomates: 'Broker planning, inbox triage, reminders, audit trail, and report/export records.',
    erasemeFeature1: 'Curated registry tracks 1,277 brokers across the EU, UK, and US.',
    erasemeFeature2: 'GDPR 30-day and CCPA 45-day deadlines are monitored automatically.',
    erasemeFeature3: 'Event-sourced SQLite audit trail records every request.',
    erasemeFeature4: 'Manual fallback covers web forms, CAPTCHA, and reports/export.',
    erasemeBtn: 'View EraseMe on GitHub',
    memoryBadge: 'Context & memory',
    memoryStatus: 'Roadmap',
    memoryTitle: 'Symaira Memory',
    memoryDesc: 'A persistent context layer and semantic memory base for the Human-AI Symbiosis. Memory enables seamless, long-term context sharing between you and your AI agents with local-first security.',
    memoryBestFor: 'AI agents needing persistent long-term memory across sessions.',
    memoryAutomates: 'PII filtering, context sync, memory pruning, and MCP recall.',
    memoryFeature1: 'Persistent semantic memory layer across agent workflows.',
    memoryFeature2: 'Local-first SQLite storage with optional end-to-end encrypted sync.',
    memoryFeature3: 'Model Context Protocol (MCP) server for instant agent integration.',
    memoryFeature4: 'PII Guard sanitizes sensitive personal data before ingestion.',
    memoryBtn: 'View Memory on GitHub',
    seekBadge: 'Hybrid search',
    seekStatus: 'Roadmap',
    seekTitle: 'Symaira Seek',
    seekDesc: 'A fast, local-first document retrieval engine that provides hybrid search by fusing BM25 keyword matching and vector semantic similarity using Reciprocal Rank Fusion (RRF).',
    seekBestFor: 'Developers and agents requiring fast, offline hybrid document search.',
    seekAutomates: 'Directory crawling, SQLite FTS5 keyword indexing, and RRF ranking.',
    seekFeature1: 'Hybrid retrieval: keyword search combined with vector embeddings.',
    seekFeature2: 'Reciprocal Rank Fusion (RRF) for optimal ranking of search results.',
    seekFeature3: 'Built-in HTTP REST daemon for lightweight client access.',
    seekFeature4: '100% CGO-free Go code with local-first vector fallback.',
    seekBtn: 'View Seek on GitHub',
    fetchBadge: 'Web context fetch',
    fetchStatus: 'Beta',
    fetchTitle: 'Symaira Fetch',
    fetchDesc: 'A terminal-native web fetch engine for LLM agents. Fetch web pages using browser-impersonating TLS/HTTP2 and transform HTML into LLM-optimized Markdown or JSON via a semantic DOM pipeline—without JavaScript execution overhead.',
    fetchBestFor: 'Developers and AI agents requiring clean, structured web content without browser overhead.',
    fetchAutomates: 'TLS/HTTP2 fingerprinting, semantic DOM filtering, data island extraction, and concurrent batch requests.',
    fetchFeature1: 'Browser-impersonating TLS/HTTP2 JA4 fingerprints.',
    fetchFeature2: 'Semantic DOM pipeline cleans HTML to token-compressed Markdown.',
    fetchFeature3: 'Extracts data islands (__NEXT_DATA__, JSON-LD) without JS execution.',
    fetchFeature4: 'Model Context Protocol (MCP) server for instant agent integration.',
    fetchBtn: 'View Fetch on GitHub',
    terminalBadge: 'Agent terminal',
    terminalStatus: 'Beta',
    terminalTitle: 'Symaira Terminal',
    terminalDesc: 'A native macOS terminal built for the Human-AI era. It allows running multiple CLI coding agents in parallel with per-pane status rings, shell integration, and Git worktree isolation.',
    terminalBestFor: 'Developers running CLI coding agents who need to monitor status and manage permissions.',
    terminalAutomates: 'Pane management, agent status tracking, Git worktree isolation, and structured permission prompts.',
    terminalFeature1: 'Swift 6 & SwiftUI wrapper around Metal-accelerated Ghostty.',
    terminalFeature2: 'Per-pane agent status rings (active, blocked, error).',
    terminalFeature3: 'Dual-mode integration supporting plain PTY and structured ACP.',
    terminalFeature4: 'Git worktree isolation to review agent changes before merge.',
    terminalBtn: 'View Terminal on GitHub',
    proLabel: 'Planned Pro Features',
    vaultProHint: 'Pro variant planned: Secure cloud syncing, team vault sharing, and enterprise audit logging.',
    erasemeProHint: 'Pro variant planned: Cloud campaigns, automated weekly scans, and central compliance reporting.',
    memoryProHint: 'Pro variant planned: Team context sync, shared agent memory spaces, and central administrative control.',
    seekProHint: 'Pro variant planned: Cloud vector storage, distributed document ingestion pipelines, and multi-tenant index sharing.',
    fetchProHint: 'Pro variant planned: Managed browser rendering (JS execution), CAPTCHA solving, and automated crawl pipelines.',
    terminalProHint: 'Pro variant planned: Team session sharing, mobile companion relay, and secure hosted access tunnels.',
    terminalDemoPane1: 'Pane 1: Aider (active)',
    terminalDemoPane2: 'Pane 2: Claude Code (blocked)',
    terminalDemoPrompt: 'Approve file edits?',
    terminalDemoAction: 'Awaiting human consent',
    memoryDemoAdd: 'Memory ingested',
    memoryDemoGuard: 'PII Guard active',
    memoryDemoSync: 'E2E context sync',
    memoryDemoStatusIngested: 'Ingested',
    memoryDemoStatusSanitized: 'Sanitized',
    memoryDemoStatusPending: 'Pending',
    seekDemoQuery: 'Search query',
    seekDemoRRF: 'Fused RRF rank',
    fetchDemoInput: 'Fetch URL',
    fetchDemoStatusTls: 'JA4 Fingerprint OK',
    fetchDemoStatusDom: 'DOM Filtered',
    fetchDemoStatusTokens: 'Markdown Token Savings',
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
    maintainerDesc: 'Hi, I\'m Daniel. I design and build the Symaira ecosystem. As an expert in AI integration and digital product development, I am convinced that a productive human-AI symbiosis requires open, flexible standards rather than the closed walled gardens of big tech. I build secure, efficient tools that work independently with any AI Agent, keeping you in absolute control. That is why all Symaira tools are 100% open-source and run locally on your machine.',
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
    heroTitle2: 'der Mensch-AI-',
    heroTitle3: 'Symbiose.',
    heroSubtitle: 'Symaira entwickelt Produkte, die eine nahtlose Zusammenarbeit mit AI ermöglichen – ohne die Kontrolle über eigene Daten, Entscheidungen oder das digitale Vertrauen abzugeben.',
    heroNameExplainer: 'SYM = Symbiose · AI = Artificial Intelligence · RA = die neue Ära',
    heroButtonTools: 'Tools entdecken',
    heroButtonVision: 'Vision verstehen',
    visionTitle: 'AI wird zum Partner. Das Interface muss sich verändern.',
    visionSubtitle: 'Echte Zusammenarbeit braucht Grenzen, sichere Übergaben, nachvollziehbare Entscheidungen und Tools, bei denen du die Kontrolle behältst.',
    visionPillar1Title: 'Volle Kontrolle',
    visionPillar1Desc: 'AI kann Aufgaben übernehmen, doch die Verantwortung muss klar definiert bleiben. Symaira-Tools basieren auf bewusster Steuerung, menschlicher Prüfung und jederzeitiger Widerrufbarkeit.',
    visionPillar2Title: 'Datensouveränität',
    visionPillar2Desc: 'Persönliche Daten, Secrets und Identitäten müssen geschützt bleiben – selbst wenn AI-Systeme tief in deine Workflows integriert werden.',
    visionPillar3Title: 'Sinnvolle Autonomie',
    visionPillar3Desc: 'Automatisierung muss erklärbar, klar begrenzt und so sicher sein, dass man ihr wiederkehrende Aufgaben anvertrauen kann, ohne je die Kontrolle zu verlieren.',
    toolsTitle: 'Die ersten Symaira-Tools',
    toolsSubtitle: 'Alle Symaira-Tools sind zu 100 % Open-Source, arbeiten rein lokal (local-first) und legen das Vertrauen zurück in deine Hände – mit Fokus auf Secrets, Identität, Privatsphäre und verlässliche, wiederholbare Workflows.',
    bestForLabel: 'Ideal für',
    automatesLabel: 'Automatisiert',
    vaultBadge: 'Secrets & Agents',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'Ein terminal-nativer Passwort- und Secrets-Manager für dich und deine AI-Agenten. Vault hält Credentials Age-verschlüsselt, arbeitet local-first und stellt Secrets über begrenzte Workflows sicher bereit.',
    vaultBestFor: 'Terminal-Nutzer und AI-Agenten, die Secrets ohne Prompt-Leakage brauchen.',
    vaultAutomates: 'symvault run, Git-Sync, TOTP, Autotype und begrenzte MCP-Übergaben.',
    vaultFeature1: 'Age-Verschlüsselung mit X25519 und ChaCha20-Poly1305.',
    vaultFeature2: 'Scoped MCP-Tokens für Agentenzugriff statt roher Secret-Weitergabe.',
    vaultFeature3: 'symvault run injiziert Secrets als Umgebungsvariablen für Befehle.',
    vaultFeature4: 'TOTP, Autotype, Git-Sync und vollständig telemetriefrei integriert.',
    vaultBtn: 'Vault auf GitHub ansehen',
    erasemeBadge: 'Privacy Automation',
    erasemeStatus: 'Beta',
    erasemeTitle: 'Symaira EraseMe',
    erasemeDesc: 'Ein CLI-Tool in der Beta-Phase zur Planung, Durchführung, Verfolgung und Verifizierung von Löschkampagnen bei Datenbrokern – unter Beibehaltung deiner vollen Kontrolle.',
    erasemeBestFor: 'Menschen, die Datenbroker-Opt-outs mit Fristen und Nachweisen brauchen.',
    erasemeAutomates: 'Broker-Planung, Inbox-Triage, Erinnerungen, Audit Trail und Reports/Export.',
    erasemeFeature1: 'Eine kuratierte Registry mit 1.277 Brokern in EU, UK und US.',
    erasemeFeature2: 'DSGVO-Fristen von 30 Tagen und CCPA-Fristen von 45 Tagen werden automatisch überwacht.',
    erasemeFeature3: 'Ein Event-sourced SQLite-Audit-Trail dokumentiert jede Anfrage.',
    erasemeFeature4: 'Manueller Fallback für Webformulare, CAPTCHAs sowie Daten-Exporte.',
    erasemeBtn: 'EraseMe auf GitHub ansehen',
    memoryBadge: 'Kontext & Speicher',
    memoryStatus: 'Roadmap',
    memoryTitle: 'Symaira Memory',
    memoryDesc: 'Ein dauerhafter Kontext-Layer und semantische Speicher-Infrastruktur für die Mensch-KI-Ära. Memory ermöglicht nahtloses Langzeitgedächtnis zwischen dir und deinen KI-Agenten.',
    memoryBestFor: 'KI-Agenten, die ein dauerhaftes Langzeitgedächtnis über Sessions hinweg benötigen.',
    memoryAutomates: 'DSGVO-Filterung, Kontext-Sync, Memory-Bereinigung und MCP-Abruf.',
    memoryFeature1: 'Dauerhaftes semantisches Gedächtnis über Agenten-Workflows hinweg.',
    memoryFeature2: 'Local-first SQLite-Speicher mit optionalem Ende-zu-Ende verschlüsseltem Sync.',
    memoryFeature3: 'Model Context Protocol (MCP) Server für direkte Agenten-Integration.',
    memoryFeature4: 'PII-Guard bereinigt sensible persönliche Daten vor der Ingestion.',
    memoryBtn: 'Memory auf GitHub ansehen',
    seekBadge: 'Hybride Suche',
    seekStatus: 'Roadmap',
    seekTitle: 'Symaira Seek',
    seekDesc: 'Eine schnelle, lokale Dokumentensuche, die klassischen Keyword-Abruf (BM25) mit semantischer Vektorsuche kombiniert und die Ergebnisse via Reciprocal Rank Fusion (RRF) zusammenführt.',
    seekBestFor: 'Entwickler und Agenten, die eine schnelle, lokale hybride Dokumentensuche benötigen.',
    seekAutomates: 'Verzeichnis-Crawling, SQLite FTS5 Keyword-Indexierung und RRF-Ranking.',
    seekFeature1: 'Hybrider Abruf: Keyword-Suche kombiniert mit Vektor-Embeddings.',
    seekFeature2: 'Reciprocal Rank Fusion (RRF) für optimales Ranking der Suchergebnisse.',
    seekFeature3: 'Integrierter HTTP REST-Daemon für leichtgewichtigen Client-Zugriff.',
    seekFeature4: '100 % CGO-freier Go-Code mit lokalem Vektor-Fallback.',
    seekBtn: 'Seek auf GitHub ansehen',
    fetchBadge: 'Web-Kontext-Abruf',
    fetchStatus: 'Beta',
    fetchTitle: 'Symaira Fetch',
    fetchDesc: 'Eine terminal-native Web-Fetch-Engine für LLM-Agenten. Ruft Webseiten mittels Browser-imitierendem TLS/HTTP2 ab und transformiert HTML über eine semantische DOM-Pipeline ohne JavaScript-Overhead in LLM-optimiertes Markdown oder JSON.',
    fetchBestFor: 'Entwickler und KI-Agenten, die saubere, strukturierte Webinhalte ohne den Overhead von Browser-Automatisierung benötigen.',
    fetchAutomates: 'TLS/HTTP2-Fingerprinting, semantische DOM-Filterung, Data-Island-Extraktion und parallele Batch-Anfragen.',
    fetchFeature1: 'Browser-imitierende TLS/HTTP2-JA4-Fingerprints.',
    fetchFeature2: 'Semantische DOM-Pipeline komprimiert HTML zu optimiertem Markdown.',
    fetchFeature3: 'Extrahiert Data-Islands (__NEXT_DATA__, JSON-LD) ohne JS-Ausführung.',
    fetchFeature4: 'Model Context Protocol (MCP) Server für direkte Agenten-Integration.',
    fetchBtn: 'Fetch auf GitHub ansehen',
    terminalBadge: 'Agenten-Terminal',
    terminalStatus: 'Beta',
    terminalTitle: 'Symaira Terminal',
    terminalDesc: 'Ein natives macOS-Terminal für die Mensch-KI-Ära. Ermöglicht das parallele Ausführen mehrerer CLI-Coding-Agenten mit Statusringen pro Panel, Shell-Integration und Git-Worktree-Isolierung.',
    terminalBestFor: 'Entwickler, die CLI-Coding-Agenten ausführen und Status/Berechtigungen überwachen wollen.',
    terminalAutomates: 'Panel-Management, Agenten-Statusverfolgung, Git-Worktree-Isolierung und strukturierte Berechtigungsabfragen.',
    terminalFeature1: 'Swift 6 & SwiftUI Wrapper auf der Metal-beschleunigten Ghostty-Engine.',
    terminalFeature2: 'Agenten-Statusringe pro Panel (aktiv, blockiert, fehlerhaft).',
    terminalFeature3: 'Duale Integration mit Unterstützung für PTY und Agent Client Protocol (ACP).',
    terminalFeature4: 'Git-Worktree-Isolierung isoliert Agenten-Änderungen vor dem Merge.',
    terminalBtn: 'Terminal auf GitHub ansehen',
    proLabel: 'Geplante Pro-Features',
    vaultProHint: 'Pro-Variante geplant: Sicherer Cloud-Sync, Team-Vault-Freigabe und Enterprise-Audit-Logs.',
    erasemeProHint: 'Pro-Variante geplant: Cloud-Kampagnen, automatisierte Scans und zentrale Compliance-Berichte.',
    memoryProHint: 'Pro-Variante geplant: Team-Kontext-Sync, geteilte Speicherbereiche für Agenten und und zentrale Administration.',
    seekProHint: 'Pro-Variante geplant: Cloud-Vektorspeicher, verteilte Ingestion-Pipelines und mandantenfähige Index-Freigabe.',
    fetchProHint: 'Pro-Variante geplant: Verwaltetes Browser-Rendering (JS-Ausführung), CAPTCHA-Lösung und automatisierte Crawl-Pipelines.',
    terminalProHint: 'Pro-Variante geplant: Team-Session-Sharing, Mobile-Companion-Relay und sichere gehostete Tunnels.',
    terminalDemoPane1: 'Panel 1: Aider (aktiv)',
    terminalDemoPane2: 'Panel 2: Claude Code (blockiert)',
    terminalDemoPrompt: 'Änderungen freigeben?',
    terminalDemoAction: 'Wartet auf Freigabe',
    memoryDemoAdd: 'Fakt erfasst',
    memoryDemoGuard: 'PII-Guard aktiv',
    memoryDemoSync: 'E2E Kontext-Sync',
    memoryDemoStatusIngested: 'Gesichert',
    memoryDemoStatusSanitized: 'Bereinigt',
    memoryDemoStatusPending: 'Ausstehend',
    seekDemoQuery: 'Suchanfrage',
    seekDemoRRF: 'Zusammengeführtes RRF',
    fetchDemoInput: 'URL abrufen',
    fetchDemoStatusTls: 'JA4-Fingerprint OK',
    fetchDemoStatusDom: 'DOM gefiltert',
    fetchDemoStatusTokens: 'Markdown Token-Ersparnis',
    copyCommandLabel: 'Kopieren',
    copiedCommandLabel: 'Kopiert',
    vaultDemoLine1: 'policy: Scoped-Token verifiziert',
    vaultDemoLine2: 'secret: in Umgebung injiziert',
    vaultDemoLine3: 'audit: lokales Ereignis erfasst',
    vaultDemoSuccess: 'Zugriff ohne Prompt-Leakage erteilt',
    erasemeDemoCampaign: 'Kampagne geplant',
    erasemeDemoBrokers: '1.277 Broker',
    erasemeDemoDeadlines: 'Fristen verfolgt',
    erasemeDemoLaw: 'DSGVO / CCPA',
    erasemeDemoTriage: 'Antworten triagiert',
    erasemeDemoAudit: 'Audit-Trail',
    brandMeaningTitle: 'Warum Symaira',
    brandMeaningDesc: 'Der Name Symaira vereint drei elementare Begriffe und beschreibt unsere Mission: Werkzeuge für eine neue Epoche zu schaffen, in der Mensch und AI in harmonischer Symbiose bei klar definierten Grenzen zusammenarbeiten.',
    brandMeaningSym: 'SYM: Symbiose',
    brandMeaningAi: 'AI: Artificial Intelligence',
    brandMeaningRa: 'RA: die neue Ära',
    footerRights: 'Alle Rechte vorbehalten.',
    footerMessage: 'Gebaut für menschliche Handlungsfähigkeit in der AI-Ära.',
    footerSignature: 'In Symbiose entwickelt',
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
    maintainerDesc: 'Hi, ich bin Daniel. Ich konzipiere und entwickle das Symaira-Ökosystem. Als Experte für KI-Integration und digitale Produktentwicklung bin ich überzeugt: Eine produktive Mensch-KI-Symbiose braucht keine geschlossenen Walled Gardens der großen Tech-Konzerne, sondern offene, flexible Standards. Ich baue sichere und effiziente Tools, die unabhängig mit jedem AI-Agenten funktionieren und dir die volle Kontrolle zurückgeben. Deshalb sind alle Symaira-Tools zu 100 % Open-Source und laufen lokal auf deinem System.',
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
