/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'de';

export interface TranslationMap {
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
  vaultStatus: string;
  vaultTitle: string;
  vaultDesc: string;
  vaultBestFor: string;
  vaultAutomates: string;
  vaultFeature1: string;
  vaultFeature2: string;
  vaultFeature3: string;
  vaultFeature4: string;
  vaultBtn: string;
  brainBadge: string;
  brainStatus: string;
  brainTitle: string;
  brainDesc: string;
  brainBestFor: string;
  brainAutomates: string;
  brainFeature1: string;
  brainFeature2: string;
  brainFeature3: string;
  brainFeature4: string;
  brainFeature5: string;
  brainFeature6: string;
  brainBtn: string;
  browseBadge: string;
  browseStatus: string;
  browseTitle: string;
  browseDesc: string;
  browseBestFor: string;
  browseAutomates: string;
  browseFeature1: string;
  browseFeature2: string;
  browseFeature3: string;
  browseFeature4: string;
  browseFeature5: string;
  browseBtn: string;
  cockpitBadge: string;
  cockpitStatus: string;
  cockpitTitle: string;
  cockpitDesc: string;
  cockpitBestFor: string;
  cockpitAutomates: string;
  cockpitFeature1: string;
  cockpitFeature2: string;
  cockpitFeature3: string;
  cockpitFeature4: string;
  cockpitFeature5: string;
  cockpitFeature6: string;
  cockpitBtn: string;
  desktopFeature5: string;
  desktopFeature6: string;
  brainDemoMemory: string;
  brainDemoSkills: string;
  brainDemoVault: string;
  brainDemoStatusExposed: string;
  brainDemoStatusScoped: string;
  brainDemoStatusDenied: string;
  browseDemoInput: string;
  browseDemoStatusEngine: string;
  browseDemoStatusDom: string;
  browseDemoStatusHandoff: string;
  cockpitDemoTitle: string;
  cockpitDemoScanning: string;
  cockpitDemoConflict: string;
  cockpitDemoThermals: string;
  cockpitDemoOperate: string;
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
  vibecoderBadge: string;
  vibecoderStatus: string;
  vibecoderTitle: string;
  vibecoderDesc: string;
  vibecoderBestFor: string;
  vibecoderAutomates: string;
  vibecoderFeature1: string;
  vibecoderFeature2: string;
  vibecoderFeature3: string;
  vibecoderFeature4: string;
  vibecoderBtn: string;
  fritzBadge: string;
  fritzStatus: string;
  fritzTitle: string;
  fritzDesc: string;
  fritzBestFor: string;
  fritzAutomates: string;
  fritzFeature1: string;
  fritzFeature2: string;
  fritzFeature3: string;
  fritzFeature4: string;
  fritzBtn: string;
  desktopBadge: string;
  desktopStatus: string;
  desktopTitle: string;
  desktopDesc: string;
  desktopBestFor: string;
  desktopAutomates: string;
  desktopFeature1: string;
  desktopFeature2: string;
  desktopFeature3: string;
  desktopFeature4: string;
  desktopBtn: string;
  heroBadgeGermany: string;
  footerMadeInGermany: string;
  terminalDemoPane1: string;
  terminalDemoPane2: string;
  terminalDemoPrompt: string;
  terminalDemoAction: string;
  vibecoderDemoTitle: string;
  vibecoderDemoPhase1: string;
  vibecoderDemoPhase2: string;
  vibecoderDemoPhase3: string;
  vibecoderDemoStatusRunning: string;
  filterAll: string;
  filterContext: string;
  filterSecurity: string;
  filterSystem: string;
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
  navStack: string;
  stackTitle: string;
  stackSubtitle: string;
  stackPitch: string;
  stackInstallTitle: string;
  stackInstallStep1Label: string;
  stackInstallStep2Label: string;
  stackInstallStep3Label: string;
  stackInstallNote: string;
  stackConfigTitle: string;
  stackConfigDesc: string;
  stackWorkflowTitle: string;
  stackWorkflow1Title: string;
  stackWorkflow1Desc: string;
  stackWorkflow2Title: string;
  stackWorkflow2Desc: string;
  stackWorkflow3Title: string;
  stackWorkflow3Desc: string;
  stackBackToTools: string;
  compareProBtn: string;
  viewDetailsBtn: string;
  coreFreeTitle: string;
  coreFreeDesc: string;
  priceFree: string;
  pricePlanned: string;
  toolPageFAQTitle: string;
  toolPageFAQ3Q: string;
  toolPageFAQ3A: string;
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
    visionPillar2Desc: 'Your personal data, secrets, and identity must remain protected, even as autonomous AI systems integrate into your workflows. Every Symaira tool runs local-first on your own hardware — your data never has to leave your machine.',
    visionPillar3Title: 'Useful Autonomy',
    visionPillar3Desc: 'Automation should be explainable, bounded, and safe enough to trust with repeatable work without ever sacrificing human oversight.',
    toolsTitle: 'The Symaira tools',
    toolsSubtitle: 'Nine open-source, local-first tools for human-AI collaboration — every one MCP-ready and designed to put trust back in your hands, focusing on secrets, identity, privacy, and repeatable agent workflows.',
    bestForLabel: 'Best for',
    automatesLabel: 'What it automates',
    vaultBadge: 'Secrets & agents',
    vaultStatus: 'Beta',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'A terminal-native password and secrets manager for you and your AI agents. Vault keeps credentials age-encrypted, local-first, and available through scoped workflows instead of prompt sharing.',
    vaultBestFor: 'Terminal users and AI agents that need secrets without prompt leakage.',
    vaultAutomates: 'symvault run, Git sync, TOTP, autotype, and scoped MCP handoffs.',
    vaultFeature1: 'Age encryption with X25519 and ChaCha20-Poly1305.',
    vaultFeature2: 'Scoped MCP tokens for agent access instead of raw secret sharing.',
    vaultFeature3: 'symvault run injects secrets as environment variables for commands.',
    vaultFeature4: 'TOTP, autotype, Git sync, and zero telemetry built in.',
    vaultBtn: 'View Vault on GitHub',
    brainBadge: 'Agent context',
    brainStatus: 'Beta',
    brainTitle: 'Symaira Brain',
    brainDesc: 'The portable context layer for AI coding harnesses. Brain exposes your three state cores — memory and entities, the skill catalog, and vault credentials — behind one MCP gateway, with a profile per harness that decides exactly what Claude Code, Cursor, Codex, or opencode is allowed to see. Browse, Operate, and Scope are moving in as optional modules you opt into.',
    brainBestFor: 'Anyone running several AI harnesses that should share one memory, one skill set, and one policy.',
    brainAutomates: 'Profile-scoped MCP exposure, memory capture, skill sync, credential brokering, and audit logging.',
    brainFeature1: 'Semantic long-term memory with entities, relations, and staged candidates for review.',
    brainFeature2: 'Skill catalog as a single source of truth, installed and kept in sync across every harness.',
    brainFeature3: 'One MCP gateway for all harnesses — one profile per connection, each with its own exposure.',
    brainFeature4: 'Call-time policy enforcement through the built-in symguard module.',
    brainFeature5: 'Credentials stay in the separate symvault process; Brain only brokers scoped access.',
    brainFeature6: 'Go CLI plus native SwiftUI apps for macOS and iOS as companion dashboards.',
    brainBtn: 'View Brain on GitHub',
    browseBadge: 'Web access',
    browseStatus: 'Beta',
    browseTitle: 'Symaira Browse',
    browseDesc: 'The browser an agent can operate while you take over at any time — without losing the session. Browse combines a Chrome CDP engine for real, JavaScript-heavy pages with a lightweight static fetch engine, and returns clean, token-budgeted Markdown.',
    browseBestFor: 'Agents that need real web access, logins, and pages behind 2FA or CAPTCHAs.',
    browseAutomates: 'Page reading, form flows, session handling, and human handoff for approvals.',
    browseFeature1: 'Dual engine: Chrome via CDP for dynamic pages, static HTTP engine for plain documents.',
    browseFeature2: 'Out-of-band handoff: you finish the 2FA, CAPTCHA, or approval, the agent keeps the session.',
    browseFeature3: 'Markdown output with a stable schema, token budget, and page metadata.',
    browseFeature4: 'Stable element references and reusable flows instead of brittle selectors.',
    browseFeature5: 'CLI, MCP server, and daemon in one CGO-free binary.',
    browseBtn: 'View Browse on GitHub',
    cockpitBadge: 'Mac control',
    cockpitStatus: 'Beta',
    cockpitTitle: 'Symaira Cockpit',
    cockpitDesc: 'One command for your Mac: see what is running — and control what it does. Cockpit tunes thermals, power, and displays, inventories ports, containers, and MCP servers, and automates the graphical interface. Everything answers in JSON, and everything doubles as an MCP server.',
    cockpitBestFor: 'Mac developers who want ports, thermals, and GUI automation in one structured tool.',
    cockpitAutomates: 'Display and focus profiles, fan and power policy, port scans, and GUI actions.',
    cockpitFeature1: 'tune: display, focus, energy, and cooling profiles that switch automatically.',
    cockpitFeature2: 'scope: local ports, containers, and MCP server inventory with free-port suggestions. Moving to Brain as an optional module.',
    cockpitFeature3: 'operate: macOS GUI automation with screenshots, OCR, and accessibility actions. Moving to Brain as an optional module.',
    cockpitFeature4: 'Structured JSON on every command instead of output you have to scrape.',
    cockpitFeature5: 'Every capability is also exposed over MCP, so agents get the same surface you do.',
    cockpitFeature6: 'Native Swift 6 universal binary for macOS 15+, installable via Homebrew.',
    cockpitBtn: 'View Cockpit on GitHub',
    desktopFeature5: 'Includes hybrid search, OCR ingestion, Markdown-to-PDF, meeting capture, and a signed project journal.',
    desktopFeature6: 'Runs locally or self-hosted: HTTP API, Docker, distributed OCR workers, iOS companion app.',
    brainDemoMemory: 'memory: project decisions, entities, relations',
    brainDemoSkills: 'skills: catalog synced to every harness',
    brainDemoVault: 'vault: credential brokered, never inlined',
    brainDemoStatusExposed: 'exposed',
    brainDemoStatusScoped: 'scoped',
    brainDemoStatusDenied: 'brokered',
    browseDemoInput: 'symbrowse open https://example.com --session research',
    browseDemoStatusEngine: 'engine: chrome cdp',
    browseDemoStatusDom: 'dom: rendered, links resolved',
    browseDemoStatusHandoff: 'handoff: ready for human takeover',
    cockpitDemoTitle: 'symcockpit',
    cockpitDemoScanning: 'scope: 24 local ports inventoried',
    cockpitDemoConflict: 'conflict: port 3000 already bound',
    cockpitDemoThermals: 'tune: thermal pressure nominal, fans 1980 rpm',
    cockpitDemoOperate: 'operate: screenshot, ocr, accessibility ready',
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
    vibecoderBadge: 'Vibe Coding',
    vibecoderStatus: 'Beta',
    vibecoderTitle: 'Symaira Vibecoder',
    vibecoderDesc: 'A local graphical dashboard to build, edit, and run autonomous agent cycles via drag-and-drop. It orchestrates opencode runs with custom model settings and real-time status tracking.',
    vibecoderBestFor: 'Developers looking for a visual board to design and run multi-step agent coding pipelines.',
    vibecoderAutomates: 'symvibe serve, phase scheduling, auto-skipping sensors, and SSE-based status updates.',
    vibecoderFeature1: 'Visual cycle builder with drag-and-drop workflow phases.',
    vibecoderFeature2: 'Supports opencode for executing tasks with model overrides.',
    vibecoderFeature3: 'Smart scheduler with auto-skip rules based on Git or issues.',
    vibecoderFeature4: '100% CGO-free Go code with embedded web board.',
    vibecoderBtn: 'View Vibecoder on GitHub',
    fritzBadge: 'Router & network',
    fritzStatus: 'Beta',
    fritzTitle: 'Symaira Fritz',
    fritzDesc: 'A CLI and MCP server to administer, analyze, and control AVM FRITZ!Box routers. It maps network topology, controls guest WLAN, triggers Wake-on-LAN, and switches smart DECT devices.',
    fritzBestFor: 'Developers and agents needing network diagnostics, guest Wi-Fi toggles, or DECT smart home control.',
    fritzAutomates: 'Network scans, host resolution, port diagnostics, Wake-on-LAN, and smart home switching.',
    fritzFeature1: 'Uses official, documented TR-064 (SOAP) and AHA-HTTP interfaces.',
    fritzFeature2: 'End-to-end host diagnostics checking LAN/WLAN link, DNS, and open ports.',
    fritzFeature3: 'Resolves credentials securely via env, symvault, macOS Keychain, or config.',
    fritzFeature4: 'Local stdio Model Context Protocol (MCP) server for instant agent access.',
    fritzBtn: 'View Fritz on GitHub',
    desktopBadge: 'Visual workspace',
    desktopStatus: 'Beta',
    desktopTitle: 'Symaira Desktop',
    desktopDesc: 'The composition shell of the Symaira ecosystem: a local-first, agent-native workspace that unifies documents, notes, knowledge, and AI over a single plain-Markdown vault. A Go core runs as CLI, MCP server, self-hosted document server, or OCR worker, with native SwiftUI apps for macOS and iOS.',
    desktopBestFor: 'Developers wanting a local-first visual hub that combines Obsidian, Notion AI, and Paperless.',
    desktopAutomates: 'Tool composition, server orchestration, vault indexing, and document workflows.',
    desktopFeature1: 'Composes symbrain, symbrowse, and symvault at runtime — and degrades gracefully without them.',
    desktopFeature2: 'Go core with CLI and stdio MCP server plus a native SwiftUI macOS app.',
    desktopFeature3: 'Zero database lock-in: plain-text Markdown is the single source of truth.',
    desktopFeature4: 'Block editor, backlinks, graph view, saved database views, and an AI dock.',
    desktopBtn: 'View Desktop on GitHub',
    terminalDemoPane1: 'Pane 1: Aider (active)',
    terminalDemoPane2: 'Pane 2: Claude Code (blocked)',
    terminalDemoPrompt: 'Approve file edits?',
    terminalDemoAction: 'Awaiting human consent',
    vibecoderDemoTitle: 'symvibe serve',
    vibecoderDemoPhase1: '1. Review',
    vibecoderDemoPhase2: '2. Plan',
    vibecoderDemoPhase3: '3. Code',
    vibecoderDemoStatusRunning: 'Running...',
    filterAll: 'All Tools',
    filterContext: 'Context & Memory',
    filterSecurity: 'Security & Integrity',
    filterSystem: 'macOS System',
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
    navStack: 'AI Stack',
    stackTitle: 'The Symaira AI Stack',
    stackSubtitle: 'All Symaira tools speak MCP. Together, they form a complete local-first AI development stack.',
    stackPitch: 'Every Symaira tool exposes a Model Context Protocol (MCP) server, making your local agent workflows composable, secure, and privacy-preserving. Install the stack, wire the config, and your AI agents have access to secrets, memory and skills, your document vault, real web access, and Mac control — all without sending data to the cloud.',
    stackInstallTitle: 'Install the Stack',
    stackInstallStep1Label: 'Add the Homebrew tap',
    stackInstallStep2Label: 'Install CLI tools + MCP servers',
    stackInstallStep3Label: 'Install the native terminal',
    stackInstallNote: 'Every tool ships via Homebrew — the CLIs as formulae, Symaira Terminal as a cask.',
    stackConfigTitle: 'MCP Configuration',
    stackConfigDesc: 'Drop this into your agent\'s MCP config directory. Each tool runs as a local stdio server — no network, no cloud.',
    stackWorkflowTitle: 'Example Workflows',
    stackWorkflow1Title: 'Web Research Pipeline',
    stackWorkflow1Desc: 'Read a web page with Browse, convert it to clean Markdown, and import it into your Desktop vault.',
    stackWorkflow2Title: 'Secure Agent Context',
    stackWorkflow2Desc: 'Use Vault to securely inject secrets into a Brain memory sync session.',
    stackWorkflow3Title: 'Knowledge Retrieval',
    stackWorkflow3Desc: 'Search your indexed vault documents and hand structured results straight to an agent.',
    stackBackToTools: 'Back to Tools',
    heroBadgeGermany: 'Made in Germany · GDPR compliant',
    footerMadeInGermany: 'Made in Germany · 100% GDPR Compliant',
    compareProBtn: 'Compare Pro Features',
    viewDetailsBtn: 'Learn More',
    coreFreeTitle: 'Local-First Core',
    coreFreeDesc: 'Open Source & self-hosted',
    priceFree: 'Free',
    pricePlanned: 'Planned',
    toolPageFAQTitle: 'Frequently Asked Questions',
    toolPageFAQ3Q: 'Is the local core really free?',
    toolPageFAQ3A: 'Yes! The CLI tools, MCP servers, and local desktop applications are 100% open-source (Apache-2.0 or AGPLv3) and will remain free forever.',
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
    visionPillar2Desc: 'Persönliche Daten, Secrets und Identitäten müssen geschützt bleiben – selbst wenn AI-Systeme tief in deine Workflows integriert werden. Jedes Symaira-Tool arbeitet local-first auf deiner eigenen Hardware — deine Daten müssen dein System nie verlassen.',
    visionPillar3Title: 'Sinnvolle Autonomie',
    visionPillar3Desc: 'Automatisierung muss erklärbar, klar begrenzt und so sicher sein, dass man ihr wiederkehrende Aufgaben anvertrauen kann, ohne je die Kontrolle zu verlieren.',
    toolsTitle: 'Die Symaira-Tools',
    toolsSubtitle: 'Neun Open-Source-Tools für die Mensch-KI-Zusammenarbeit – alle arbeiten rein lokal (local-first), sind MCP-fähig und legen das Vertrauen zurück in deine Hände: Secrets, Identität, Privatsphäre und verlässliche Agenten-Workflows.',
    bestForLabel: 'Ideal für',
    automatesLabel: 'Automatisiert',
    vaultBadge: 'Secrets & Agents',
    vaultStatus: 'Beta',
    vaultTitle: 'Symaira Vault',
    vaultDesc: 'Ein terminal-nativer Passwort- und Secrets-Manager für dich und deine AI-Agenten. Vault hält Credentials Age-verschlüsselt, arbeitet local-first und stellt Secrets über begrenzte Workflows sicher bereit.',
    vaultBestFor: 'Terminal-Nutzer und AI-Agenten, die Secrets ohne Prompt-Leakage brauchen.',
    vaultAutomates: 'symvault run, Git-Sync, TOTP, Autotype und begrenzte MCP-Übergaben.',
    vaultFeature1: 'Age-Verschlüsselung mit X25519 und ChaCha20-Poly1305.',
    vaultFeature2: 'Scoped MCP-Tokens für Agentenzugriff statt roher Secret-Weitergabe.',
    vaultFeature3: 'symvault run injiziert Secrets als Umgebungsvariablen für Befehle.',
    vaultFeature4: 'TOTP, Autotype, Git-Sync und vollständig telemetriefrei integriert.',
    vaultBtn: 'Vault auf GitHub ansehen',
    brainBadge: 'Agenten-Kontext',
    brainStatus: 'Beta',
    brainTitle: 'Symaira Brain',
    brainDesc: 'Die portable Kontextschicht für KI-Coding-Harnesses. Brain stellt deine drei Zustandskerne — Gedächtnis und Entitäten, den Skill-Katalog und Vault-Credentials — hinter einem MCP-Gateway bereit. Ein Profil pro Harness entscheidet, was Claude Code, Cursor, Codex oder opencode jeweils sehen darf. Browse, Operate und Scope ziehen als optionale, bewusst aktivierte Module ein.',
    brainBestFor: 'Alle, die mehrere KI-Harnesses nutzen und dabei ein Gedächtnis, einen Skill-Satz und eine Policy teilen wollen.',
    brainAutomates: 'Profilbasierte MCP-Freigabe, Gedächtnis-Erfassung, Skill-Sync, Credential-Vermittlung und Audit-Log.',
    brainFeature1: 'Semantisches Langzeitgedächtnis mit Entitäten, Relationen und Kandidaten zur Freigabe.',
    brainFeature2: 'Skill-Katalog als Single Source of Truth, synchron installiert in jedem Harness.',
    brainFeature3: 'Ein MCP-Gateway für alle Harnesses — ein Profil pro Verbindung mit eigener Freigabe.',
    brainFeature4: 'Durchsetzung von Policies zur Aufrufzeit über das integrierte symguard-Modul.',
    brainFeature5: 'Credentials bleiben im separaten symvault-Prozess; Brain vermittelt nur begrenzten Zugriff.',
    brainFeature6: 'Go-CLI plus native SwiftUI-Apps für macOS und iOS als Begleit-Dashboards.',
    brainBtn: 'Brain auf GitHub ansehen',
    browseBadge: 'Web-Zugriff',
    browseStatus: 'Beta',
    browseTitle: 'Symaira Browse',
    browseDesc: 'Der Browser, den ein Agent bedienen kann und den du jederzeit übernimmst — ohne die Session zu verlieren. Browse kombiniert eine Chrome-CDP-Engine für echte, JavaScript-lastige Seiten mit einer schlanken Static-Fetch-Engine und liefert sauberes, token-budgetiertes Markdown.',
    browseBestFor: 'Agenten, die echten Web-Zugriff brauchen — inklusive Logins, 2FA und CAPTCHAs.',
    browseAutomates: 'Seiten lesen, Formular-Flows, Session-Verwaltung und Übergabe an den Menschen.',
    browseFeature1: 'Zwei Engines: Chrome via CDP für dynamische Seiten, Static-HTTP-Engine für einfache Dokumente.',
    browseFeature2: 'Out-of-Band-Handoff: du erledigst 2FA, CAPTCHA oder Freigabe, der Agent behält die Session.',
    browseFeature3: 'Markdown-Ausgabe mit stabilem Schema, Token-Budget und Seiten-Metadaten.',
    browseFeature4: 'Stabile Element-Referenzen und wiederverwendbare Flows statt brüchiger Selektoren.',
    browseFeature5: 'CLI, MCP-Server und Daemon in einer CGO-freien Binary.',
    browseBtn: 'Browse auf GitHub ansehen',
    cockpitBadge: 'Mac-Steuerung',
    cockpitStatus: 'Beta',
    cockpitTitle: 'Symaira Cockpit',
    cockpitDesc: 'Ein Befehl für deinen Mac: sehen, was läuft — und steuern, was er tut. Cockpit regelt Thermik, Energie und Displays, inventarisiert Ports, Container und MCP-Server und automatisiert die grafische Oberfläche. Alles antwortet in JSON, und alles ist zugleich MCP-Server.',
    cockpitBestFor: 'Mac-Entwickler, die Ports, Thermik und GUI-Automation in einem strukturierten Tool wollen.',
    cockpitAutomates: 'Display- und Fokus-Profile, Lüfter- und Energie-Policy, Port-Scans und GUI-Aktionen.',
    cockpitFeature1: 'tune: Display-, Fokus-, Energie- und Kühlprofile, die automatisch umschalten.',
    cockpitFeature2: 'scope: lokale Ports, Container und MCP-Server im Überblick, inklusive freier Port-Vorschläge. Zielzuständigkeit zieht als optionales Modul zu Brain.',
    cockpitFeature3: 'operate: macOS-GUI-Automation mit Screenshots, OCR und Accessibility-Aktionen. Zielzuständigkeit zieht als optionales Modul zu Brain.',
    cockpitFeature4: 'Strukturiertes JSON bei jedem Befehl statt Ausgabe, die man parsen muss.',
    cockpitFeature5: 'Jede Fähigkeit gibt es auch über MCP — Agenten bekommen exakt dieselbe Oberfläche.',
    cockpitFeature6: 'Native Swift-6-Universal-Binary für macOS 15+, installierbar über Homebrew.',
    cockpitBtn: 'Cockpit auf GitHub ansehen',
    desktopFeature5: 'Enthält hybride Suche, OCR-Import, Markdown-zu-PDF, Meeting-Mitschnitt und ein signiertes Projekt-Journal.',
    desktopFeature6: 'Lokal oder self-hosted: HTTP-API, Docker, verteilte OCR-Worker, iOS-Begleit-App.',
    brainDemoMemory: 'memory: Projektentscheidungen, Entitäten, Relationen',
    brainDemoSkills: 'skills: Katalog in alle Harnesses synchronisiert',
    brainDemoVault: 'vault: Credential vermittelt, nie im Klartext',
    brainDemoStatusExposed: 'freigegeben',
    brainDemoStatusScoped: 'begrenzt',
    brainDemoStatusDenied: 'vermittelt',
    browseDemoInput: 'symbrowse open https://example.com --session research',
    browseDemoStatusEngine: 'Engine: Chrome CDP',
    browseDemoStatusDom: 'DOM: gerendert, Links aufgelöst',
    browseDemoStatusHandoff: 'Handoff: bereit zur Übernahme',
    cockpitDemoTitle: 'symcockpit',
    cockpitDemoScanning: 'scope: 24 lokale Ports erfasst',
    cockpitDemoConflict: 'Konflikt: Port 3000 bereits belegt',
    cockpitDemoThermals: 'tune: Thermik nominal, Lüfter 1980 rpm',
    cockpitDemoOperate: 'operate: Screenshot, OCR, Accessibility bereit',
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
    vibecoderBadge: 'Vibe-Coding',
    vibecoderStatus: 'Beta',
    vibecoderTitle: 'Symaira Vibecoder',
    vibecoderDesc: 'Ein lokales grafisches Dashboard zum Erstellen, Bearbeiten und Ausführen autonomer Agenten-Zyklen per Drag-&-Drop. Steuert opencode-Läufe mit Modellauswahl und Live-Status.',
    vibecoderBestFor: 'Entwickler, die eine visuelle Oberfläche zum Entwerfen und Ausführen mehrstufiger Coding-Pipelines suchen.',
    vibecoderAutomates: 'symvibe serve, Phasen-Scheduling, Auto-Skip-Sensoren und SSE-Status-Updates.',
    vibecoderFeature1: 'Visueller Cycle-Baukasten mit Drag-&-Drop-Verschiebung der Phasen.',
    vibecoderFeature2: 'Unterstützt opencode für die Ausführung der Einzelschritte.',
    vibecoderFeature3: 'Smarter Scheduler mit Auto-Skip-Regeln basierend auf Git/Issues.',
    vibecoderFeature4: '100 % CGO-freier Go-Code mit eingebettetem Web-Board.',
    vibecoderBtn: 'Vibecoder auf GitHub ansehen',
    fritzBadge: 'Router & Netzwerk',
    fritzStatus: 'Beta',
    fritzTitle: 'Symaira Fritz',
    fritzDesc: 'Ein CLI- und MCP-Server zur Verwaltung, Analyse und Steuerung von AVM FRITZ!Box-Routern. Kartografiert die Netzwerktopologie, steuert das Gast-WLAN, löst Wake-on-LAN aus und schaltet DECT-Smart-Home-Geräte.',
    fritzBestFor: 'Entwickler und KI-Agenten, die Netzwerkdiagnosen, Gast-WLAN-Schalter oder DECT-Smart-Home-Steuerung benötigen.',
    fritzAutomates: 'Netzwerkscans, Host-Auflösung, Port-Diagnose, Wake-on-LAN und Smart-Home-Schaltung.',
    fritzFeature1: 'Nutzung offizieller, dokumentierter TR-064 (SOAP) und AHA-HTTP Schnittstellen.',
    fritzFeature2: 'End-to-End-Host-Diagnose (LAN/WLAN-Verbindung, DNS-Auflösung und offene Ports).',
    fritzFeature3: 'Sichere Auflösung von Anmeldedaten über env, symvault, macOS Keychain oder Config.',
    fritzFeature4: 'Lokaler stdio Model Context Protocol (MCP) Server für direkten Agentenzugriff.',
    fritzBtn: 'Fritz auf GitHub ansehen',
    desktopBadge: 'Visueller Workspace',
    desktopStatus: 'Beta',
    desktopTitle: 'Symaira Desktop',
    desktopDesc: 'Die Kompositions-Schale des Symaira-Ökosystems: ein local-first, agenten-nativer Workspace, der Dokumente, Notizen, Wissen und KI über einen einzigen Klartext-Markdown-Vault vereint. Der Go-Kern läuft als CLI, MCP-Server, self-hosted Dokumenten-Server oder OCR-Worker, dazu native SwiftUI-Apps für macOS und iOS.',
    desktopBestFor: 'Entwickler, die eine lokale Benutzeroberfläche ähnlich wie Obsidian, Notion AI und Paperless suchen.',
    desktopAutomates: 'Laufzeit-Komposition der Einzeltools, Server-Steuerung, Vault-Indexierung und Dokumenten-Workflows.',
    desktopFeature1: 'Komponiert symbrain, symbrowse und symvault zur Laufzeit — und läuft auch ohne sie weiter.',
    desktopFeature2: 'Go-Kern mit CLI und stdio-MCP-Server plus native SwiftUI-macOS-App.',
    desktopFeature3: 'Kein Datenbank-Lock-in: Klartext-Markdown bleibt die einzige Quelle der Wahrheit.',
    desktopFeature4: 'Block-Editor, Backlinks, Graph-Ansicht, gespeicherte Datenbank-Views und AI-Dock.',
    desktopBtn: 'Desktop auf GitHub ansehen',
    terminalDemoPane1: 'Panel 1: Aider (aktiv)',
    terminalDemoPane2: 'Panel 2: Claude Code (blockiert)',
    terminalDemoPrompt: 'Änderungen freigeben?',
    terminalDemoAction: 'Wartet auf Freigabe',
    vibecoderDemoTitle: 'symvibe serve',
    vibecoderDemoPhase1: '1. Review',
    vibecoderDemoPhase2: '2. Planung',
    vibecoderDemoPhase3: '3. Coden',
    vibecoderDemoStatusRunning: 'Läuft...',
    filterAll: 'Alle Tools',
    filterContext: 'Kontext & Speicher',
    filterSecurity: 'Sicherheit & Integrität',
    filterSystem: 'macOS-System',
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
    navStack: 'AI Stack',
    stackTitle: 'Der Symaira AI Stack',
    stackSubtitle: 'Alle Symaira-Tools sprechen MCP. Zusammen ergeben sie einen vollständigen lokalen AI-Entwicklungs-Stack.',
    stackPitch: 'Jedes Symaira-Tool stellt einen Model Context Protocol (MCP) Server bereit und macht deine lokalen Agent-Workflows zusammensetzbar, sicher und datenschutzkonform. Installiere den Stack, konfiguriere ihn, und deine AI-Agenten haben Zugriff auf Secrets, Gedächtnis und Skills, deinen Dokumenten-Vault, echten Web-Zugriff und die Steuerung deines Macs — ohne Daten in die Cloud zu senden.',
    stackInstallTitle: 'Stack installieren',
    stackInstallStep1Label: 'Homebrew-Tap hinzufügen',
    stackInstallStep2Label: 'CLI-Tools + MCP-Server installieren',
    stackInstallStep3Label: 'Natives Terminal installieren',
    stackInstallNote: 'Alle Tools kommen über Homebrew — die CLIs als Formula, Symaira Terminal als Cask.',
    stackConfigTitle: 'MCP-Konfiguration',
    stackConfigDesc: 'Leg diese Datei in das MCP-Konfigurationsverzeichnis deines Agenten. Jedes Tool läuft als lokaler stdio-Server — kein Netzwerk, keine Cloud.',
    stackWorkflowTitle: 'Workflow-Beispiele',
    stackWorkflow1Title: 'Web-Recherche-Pipeline',
    stackWorkflow1Desc: 'Eine Webseite mit Browse lesen, in sauberes Markdown umwandeln und in den Desktop-Vault importieren.',
    stackWorkflow2Title: 'Sicherer Agent-Kontext',
    stackWorkflow2Desc: 'Vault nutzen, um Secrets sicher in eine Brain-Memory-Sync-Sitzung zu injizieren.',
    stackWorkflow3Title: 'Wissensabruf',
    stackWorkflow3Desc: 'Indexierte Vault-Dokumente durchsuchen und strukturierte Ergebnisse direkt an einen Agenten geben.',
    stackBackToTools: 'Zurück zu Tools',
    heroBadgeGermany: 'Made in Germany · DSGVO-konform',
    footerMadeInGermany: 'Made in Germany · 100% DSGVO-konform',
    compareProBtn: 'Pro-Features vergleichen',
    viewDetailsBtn: 'Mehr erfahren',
    coreFreeTitle: 'Lokaler Core',
    coreFreeDesc: 'Open Source & self-hosted',
    priceFree: 'Kostenlos',
    pricePlanned: 'Geplant',
    toolPageFAQTitle: 'Häufig gestellte Fragen',
    toolPageFAQ3Q: 'Ist der lokale Core wirklich kostenlos?',
    toolPageFAQ3A: 'Ja! Die CLI-Tools, MCP-Server und lokalen Desktop-Anwendungen sind zu 100 % Open-Source (Apache-2.0 oder AGPLv3) und werden für immer kostenlos bleiben.',
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
