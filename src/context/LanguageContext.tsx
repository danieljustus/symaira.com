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
  scopeBadge: string;
  scopeStatus: string;
  scopeTitle: string;
  scopeDesc: string;
  scopeBestFor: string;
  scopeAutomates: string;
  scopeFeature1: string;
  scopeFeature2: string;
  scopeFeature3: string;
  scopeFeature4: string;
  scopeBtn: string;
  operateBadge: string;
  operateStatus: string;
  operateTitle: string;
  operateDesc: string;
  operateBestFor: string;
  operateAutomates: string;
  operateFeature1: string;
  operateFeature2: string;
  operateFeature3: string;
  operateFeature4: string;
  operateBtn: string;
  tuneBadge: string;
  tuneStatus: string;
  tuneTitle: string;
  tuneDesc: string;
  tuneBestFor: string;
  tuneAutomates: string;
  tuneFeature1: string;
  tuneFeature2: string;
  tuneFeature3: string;
  tuneFeature4: string;
  tuneBtn: string;
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
  proLabel: string;
  heroBadgeGermany: string;
  proHostingTag: string;
  footerMadeInGermany: string;
  vaultPageFAQ3Q: string;
  vaultPageFAQ3A: string;
  vaultProHint: string;
  erasemeProHint: string;
  memoryProHint: string;
  seekProHint: string;
  fetchProHint: string;
  terminalProHint: string;
  scopeProHint: string;
  operateProHint: string;
  tuneProHint: string;
  vibecoderProHint: string;
  terminalDemoPane1: string;
  terminalDemoPane2: string;
  terminalDemoPrompt: string;
  terminalDemoAction: string;
  scopeDemoTitle: string;
  scopeDemoScanning: string;
  scopeDemoConflict: string;
  scopeDemoMcp: string;
  scopeDemoSuggest: string;
  operateDemoTitle: string;
  operateDemoQuery: string;
  operateDemoSafety: string;
  operateDemoAction: string;
  operateDemoSuccess: string;
  tuneDemoTitle: string;
  tuneDemoCPU: string;
  tuneDemoFan: string;
  tuneDemoPower: string;
  tuneDemoEDR: string;
  vibecoderDemoTitle: string;
  vibecoderDemoPhase1: string;
  vibecoderDemoPhase2: string;
  vibecoderDemoPhase3: string;
  vibecoderDemoStatusRunning: string;
  filterAll: string;
  filterContext: string;
  filterSecurity: string;
  filterSystem: string;
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
  navVaultPro: string;
  vaultPageTitle: string;
  vaultPageSubtitle: string;
  vaultPageFreeTitle: string;
  vaultPageFreePrice: string;
  vaultPageFreePriceSub: string;
  vaultPageProTitle: string;
  vaultPageProPrice: string;
  vaultPageProPriceSub: string;
  vaultPageSuiteTitle: string;
  vaultPageSuitePrice: string;
  vaultPageSuitePriceSub: string;
  vaultPageCompareTitle: string;
  vaultPageFeatureSync: string;
  vaultPageFeatureSyncDesc: string;
  vaultPageFeatureSSO: string;
  vaultPageFeatureSSODesc: string;
  vaultPageFeatureWeb: string;
  vaultPageFeatureWebDesc: string;
  vaultPageFeatureEncryption: string;
  vaultPageFeatureEncryptionDesc: string;
  vaultPageFeatureMcp: string;
  vaultPageFeatureMcpDesc: string;
  vaultPageCTA: string;
  vaultPageCTAFree: string;
  vaultPageFAQTitle: string;
  vaultPageFAQ1Q: string;
  vaultPageFAQ1A: string;
  vaultPageFAQ2Q: string;
  vaultPageFAQ2A: string;
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
    visionPillar2Desc: 'Your personal data, secrets, and identity must remain protected, even as autonomous AI systems integrate into your workflows. Our planned Pro cloud tools are hosted entirely in Germany, ensuring 100% GDPR compliance.',
    visionPillar3Title: 'Useful Autonomy',
    visionPillar3Desc: 'Automation should be explainable, bounded, and safe enough to trust with repeatable work without ever sacrificing human oversight.',
    toolsTitle: 'The first Symaira tools',
    toolsSubtitle: 'All Symaira tools are 100% open-source, local-first, and designed to put trust back in your hands—focusing on secrets, identity, privacy, and repeatable workflows.',
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
    memoryStatus: 'Beta',
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
    seekStatus: 'Beta',
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
    scopeBadge: 'Discovery & Ports',
    scopeStatus: 'Beta',
    scopeTitle: 'Symaira Scope',
    scopeDesc: 'A cross-platform scanner to inventory listening ports, active containers, and MCP servers across your AI client configurations.',
    scopeBestFor: 'Developers wanting to debug port conflicts or auto-discover active MCP servers.',
    scopeAutomates: 'Port scanning, client configuration discovery, and container port mapping.',
    scopeFeature1: 'Inventories listening TCP/UDP ports and suggests conflicts.',
    scopeFeature2: 'Identifies active Docker containers and their published ports.',
    scopeFeature3: 'Discovers MCP servers registered in Cursor, VS Code, and Windsurf.',
    scopeFeature4: 'Pure Go, 100% CGO-free for safe, zero-telemetry local runs.',
    scopeBtn: 'View Scope on GitHub',
    operateBadge: 'GUI Automation',
    operateStatus: 'Beta',
    operateTitle: 'Symaira Operate',
    operateDesc: 'A native macOS desktop-automation MCP server. Allows AI agents to securely observe and control the Mac GUI via accessibility trees and screenshots.',
    operateBestFor: 'AI agents needing to perform native macOS app automation and UI interactions.',
    operateAutomates: 'Accessibility tree parsing, screen capturing, keystroke simulation, and mouse actions.',
    operateFeature1: 'Accessibility tree mapping using ephemeral element ID caching.',
    operateFeature2: 'Refuses destructive actions (Delete, Trash, Unlock) automatically.',
    operateFeature3: 'Screen Capture via ScreenCaptureKit with localized ROI processing.',
    operateFeature4: 'Zero daemon footprint – runs on-demand via secure local stdio MCP.',
    operateBtn: 'View Operate on GitHub',
    tuneBadge: 'Hardware Tuning',
    tuneStatus: 'Beta',
    tuneTitle: 'Symaira Tune',
    tuneDesc: 'A native macOS hardware tuning CLI and MCP server. Lets AI agents monitor thermal, power, and display states, and safely adjust hardware limits.',
    tuneBestFor: 'AI agents or developers needing local hardware telemetries and safety-gated system tuning.',
    tuneAutomates: 'Thermal monitoring, display brightness scaling, SMC sensors reading, and power state restores.',
    tuneFeature1: 'Monitors CPU thermals, fan speeds, and battery state via IOKit.',
    tuneFeature2: 'Allows adjusting display brightness and dim overlays dynamically.',
    tuneFeature3: 'Enforces automatic system-default restores on process exit.',
    tuneFeature4: 'Clamps all writes through strict safety policies to prevent damage.',
    tuneBtn: 'View Tune on GitHub',
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
    proLabel: 'Planned Pro Features',
    vaultProHint: 'Pro variant planned: Secure cloud syncing, team vault sharing, and enterprise audit logging.',
    erasemeProHint: 'Pro variant planned: Cloud campaigns, automated weekly scans, and central compliance reporting.',
    memoryProHint: 'Pro variant planned: Team context sync, shared agent memory spaces, and central administrative control.',
    seekProHint: 'Pro variant planned: Cloud vector storage, distributed document ingestion pipelines, and multi-tenant index sharing.',
    fetchProHint: 'Pro variant planned: Managed browser rendering (JS execution), CAPTCHA solving, and automated crawl pipelines.',
    terminalProHint: 'Pro variant planned: Team session sharing, mobile companion relay, and secure hosted access tunnels.',
    scopeProHint: 'Pro variant planned: Remote fleet scanning, centralized port audit logs, and continuous port state monitoring.',
    operateProHint: 'Pro variant planned: Multi-user session isolation, cloud-based GUI session recording, and credential-gated approval flows.',
    tuneProHint: 'Pro variant planned: Centralized hardware health dashboards, custom fan profiles, and privileged SMC controls.',
    vibecoderProHint: 'Pro variant planned: Shared cloud dashboards, multi-repo support, and team permission controls.',
    terminalDemoPane1: 'Pane 1: Aider (active)',
    terminalDemoPane2: 'Pane 2: Claude Code (blocked)',
    terminalDemoPrompt: 'Approve file edits?',
    terminalDemoAction: 'Awaiting human consent',
    scopeDemoTitle: 'symscope scan',
    scopeDemoScanning: 'Scanning ports & processes...',
    scopeDemoConflict: '[Conflict] Port 3000: Node vs Go',
    scopeDemoMcp: 'Found Cursor/VSCode MCP configs',
    scopeDemoSuggest: 'Suggested Port: 8081',
    operateDemoTitle: 'symoperate UI drive',
    operateDemoQuery: 'Querying UI tree...',
    operateDemoSafety: 'Clicking "Trash" blocked',
    operateDemoAction: 'Keystroke: git commit',
    operateDemoSuccess: 'Control input sent successfully',
    tuneDemoTitle: 'symtune status',
    tuneDemoCPU: 'CPU Temperature',
    tuneDemoFan: 'Fan Speed',
    tuneDemoPower: 'Power: Charge limited to 80%',
    tuneDemoEDR: 'EDR Brightness tuned',
    vibecoderDemoTitle: 'symvibe serve',
    vibecoderDemoPhase1: '1. Review',
    vibecoderDemoPhase2: '2. Plan',
    vibecoderDemoPhase3: '3. Code',
    vibecoderDemoStatusRunning: 'Running...',
    filterAll: 'All Tools',
    filterContext: 'Context & Memory',
    filterSecurity: 'Security & Integrity',
    filterSystem: 'macOS System',
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
    navStack: 'AI Stack',
    stackTitle: 'The Symaira AI Stack',
    stackSubtitle: 'All Symaira tools speak MCP. Together, they form a complete local-first AI development stack.',
    stackPitch: 'Every Symaira tool exposes a Model Context Protocol (MCP) server, making your local agent workflows composable, secure, and privacy-preserving. Install the stack, wire the config, and your AI agents have access to secrets, memory, search, web fetch, and privacy automation — all without sending data to the cloud.',
    stackInstallTitle: 'Install the Stack',
    stackInstallStep1Label: 'Add the Homebrew tap',
    stackInstallStep2Label: 'Install CLI tools + MCP servers',
    stackInstallStep3Label: 'Install the native terminal',
    stackInstallNote: 'symfetch joins the stack after its first tagged release.',
    stackConfigTitle: 'MCP Configuration',
    stackConfigDesc: 'Drop this into your agent\'s MCP config directory. Each tool runs as a local stdio server — no network, no cloud.',
    stackWorkflowTitle: 'Example Workflows',
    stackWorkflow1Title: 'Web Research Pipeline',
    stackWorkflow1Desc: 'Fetch a web page, convert it to clean Markdown, and index it for hybrid search.',
    stackWorkflow2Title: 'Secure Agent Context',
    stackWorkflow2Desc: 'Use Vault to securely inject secrets into a Memory sync session.',
    stackWorkflow3Title: 'Knowledge Retrieval',
    stackWorkflow3Desc: 'Search indexed documents and fetch referenced URLs in one pipeline.',
    stackBackToTools: 'Back to Tools',
    navVaultPro: 'Vault Pro',
    vaultPageTitle: 'Symaira Vault Pro',
    vaultPageSubtitle: 'Enterprise-grade secret management, synced securely across your devices and AI agents.',
    vaultPageFreeTitle: 'Local-First Core',
    vaultPageFreePrice: 'Free',
    vaultPageFreePriceSub: 'Open Source & self-hosted',
    vaultPageProTitle: 'Vault Pro',
    vaultPageProPrice: '',
    vaultPageProPriceSub: '',
    vaultPageSuiteTitle: 'AI Suite Bundle',
    vaultPageSuitePrice: '',
    vaultPageSuitePriceSub: '',
    vaultPageCompareTitle: 'Compare Core vs. Pro',
    vaultPageFeatureSync: 'Cloud Secret Syncing',
    vaultPageFeatureSyncDesc: 'Synchronize your vaults end-to-end encrypted via our secure cloud service.',
    vaultPageFeatureSSO: 'Enterprise SSO & Teams',
    vaultPageFeatureSSODesc: 'Authenticate via Okta, Entra ID, or Google. Manage access control for your team\'s agents.',
    vaultPageFeatureWeb: 'Web Management Console',
    vaultPageFeatureWebDesc: 'Manage memberships, view audit logs, and configure access tokens in a premium web dashboard.',
    vaultPageFeatureEncryption: 'Local-First Encryption',
    vaultPageFeatureEncryptionDesc: 'All secrets are age-encrypted on your machine before they ever touch the cloud.',
    vaultPageFeatureMcp: 'Zero-Trust MCP Server',
    vaultPageFeatureMcpDesc: 'Provide scoped credentials to AI agents instead of sharing raw passwords.',
    vaultPageCTA: 'Coming Soon',
    vaultPageCTAFree: 'Download Free Core',
    vaultPageFAQTitle: 'Frequently Asked Questions',
    vaultPageFAQ1Q: 'How is Vault Pro encrypted?',
    vaultPageFAQ1A: 'Vault Pro is local-first. Your secrets are encrypted using age (X25519 and ChaCha20-Poly1305) on your local machine using your master key. The cloud service only stores encrypted blobs and cannot read your data.',
    vaultPageFAQ2Q: 'Is this a live service?',
    vaultPageFAQ2A: 'No, this is currently a draft and concept representation. The dashboard is interactive, but no real accounts can be created and no real payments are processed yet.',
    heroBadgeGermany: 'Made in Germany · GDPR compliant',
    proHostingTag: 'German Hosting · GDPR',
    footerMadeInGermany: 'Made in Germany · 100% GDPR Compliant',
    vaultPageFAQ3Q: 'Where are the cloud features hosted?',
    vaultPageFAQ3A: 'All planned cloud and Pro components are hosted entirely on servers in Germany and built in strict compliance with the General Data Protection Regulation (GDPR). Since the core application is local-first, the majority of your data never leaves your own hardware.',
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
    visionPillar2Desc: 'Persönliche Daten, Secrets und Identitäten müssen geschützt bleiben – selbst wenn AI-Systeme tief in deine Workflows integriert werden. Unsere geplanten Pro-Cloud-Tools werden in Deutschland gehostet und sind zu 100 % DSGVO-konform.',
    visionPillar3Title: 'Sinnvolle Autonomie',
    visionPillar3Desc: 'Automatisierung muss erklärbar, klar begrenzt und so sicher sein, dass man ihr wiederkehrende Aufgaben anvertrauen kann, ohne je die Kontrolle zu verlieren.',
    toolsTitle: 'Die ersten Symaira-Tools',
    toolsSubtitle: 'Alle Symaira-Tools sind zu 100 % Open-Source, arbeiten rein lokal (local-first) und legen das Vertrauen zurück in deine Hände – mit Fokus auf Secrets, Identität, Privatsphäre und verlässliche, wiederholbare Workflows.',
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
    memoryStatus: 'Beta',
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
    seekStatus: 'Beta',
    seekTitle: 'Symaira Seek',
    seekDesc: 'Eine schnelle, lokale Dokumentensuche, die klassischen Keyword-Abruf (BM25) mit semantischer Vektorsuche kombiniert und die Ergebnisse via Reciprocal Rank Fusion (RRF) zusammenführt.',
    seekBestFor: 'Entwickler und Agenten, die eine schnelle, lokale hybride Dokumentensuche benötigen.',
    seekAutomates: 'Verzeichnis-Crawling, SQLite FTS5 Keyword-Indexierung und RRF-Ranking.',
    seekFeature1: 'Hybrider Abruf: Keyword-Suche kombiniert mit Vektor-Embeddings.',
    seekFeature2: 'Reciprocal Rank Fusion (RRF) for optimal ranking of search results.',
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
    scopeBadge: 'Discovery & Ports',
    scopeStatus: 'Beta',
    scopeTitle: 'Symaira Scope',
    scopeDesc: 'Ein plattformübergreifender Scanner zur Inventarisierung von Listening-Ports, aktiven Containern und MCP-Servern in deinen KI-Client-Konfigurationen.',
    scopeBestFor: 'Entwickler, die Port-Konflikte debuggen oder aktive MCP-Server automatisch erkennen wollen.',
    scopeAutomates: 'Port-Scanning, Erkennung von Client-Konfigurationen und Container-Port-Mapping.',
    scopeFeature1: 'Inventarisiert Listening-TCP/UDP-Ports und schlägt Konflikte vor.',
    scopeFeature2: 'Identifiziert aktive Docker-Container und deren veröffentlichte Ports.',
    scopeFeature3: 'Erkennt registrierte MCP-Server in Cursor, VS Code und Windsurf.',
    scopeFeature4: 'Reines Go, 100 % CGO-frei für sichere, telemetriefreie lokale Ausführung.',
    scopeBtn: 'Scope auf GitHub ansehen',
    operateBadge: 'GUI-Automatisierung',
    operateStatus: 'Beta',
    operateTitle: 'Symaira Operate',
    operateDesc: 'Ein nativer macOS-GUI-Automatisierungs-MCP-Server. Ermöglicht es KI-Agenten, die Mac-GUI über Barrierefreiheitsbäume und Screenshots sicher zu steuern.',
    operateBestFor: 'KI-Agenten, die eine native macOS-App-Automatisierung und GUI-Interaktionen durchführen müssen.',
    operateAutomates: 'Accessibility-Tree-Parsing, Screenshot-Erstellung, Tastatur-Simulation und Maus-Aktionen.',
    operateFeature1: 'Accessibility-Tree-Mapping mit flüchtigem Element-ID-Caching.',
    operateFeature2: 'Verweigert destruktive Aktionen (Löschen, Papierkorb, Freigabe) automatisch.',
    operateFeature3: 'Bildschirmaufnahme via ScreenCaptureKit mit lokalisierter ROI-Verarbeitung.',
    operateFeature4: 'Kein Hintergrund-Daemon – läuft on-demand über sicheres lokales stdio MCP.',
    operateBtn: 'Operate auf GitHub ansehen',
    tuneBadge: 'Hardware-Tuning',
    tuneStatus: 'Beta',
    tuneTitle: 'Symaira Tune',
    tuneDesc: 'Ein CLI- und MCP-Server für macOS-Hardware-Tuning. Ermöglicht es KI-Agenten, Temperatur-, Strom- und Display-Zustände zu überwachen und Limits anzupassen.',
    tuneBestFor: 'KI-Agenten oder Entwickler, die lokale Hardware-Telemetrie und sicherheitsüberwachtes Systemtuning benötigen.',
    tuneAutomates: 'Temperaturüberwachung, Helligkeitsskalierung, Lesen von SMC-Sensoren und Wiederherstellen des Systemzustands.',
    tuneFeature1: 'Überwacht CPU-Temperatur, Lüftergeschwindigkeit und Batteriestatus via IOKit.',
    tuneFeature2: 'Ermöglicht dynamisches Anpassen der Bildschirmhelligkeit und von Dimm-Overlays.',
    tuneFeature3: 'Erzwingt automatische Wiederherstellung der Systemstandards beim Beenden.',
    tuneFeature4: 'Begrenzt alle Schreibvorgänge durch strenge Sicherheitsrichtlinien zur Schadensvermeidung.',
    tuneBtn: 'Tune auf GitHub ansehen',
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
    proLabel: 'Geplante Pro-Features',
    vaultProHint: 'Pro-Variante geplant: Sicherer Cloud-Sync, Team-Vault-Freigabe und Enterprise-Audit-Logs.',
    erasemeProHint: 'Pro-Variante geplant: Cloud-Kampagnen, automatisierte Scans und zentrale Compliance-Berichte.',
    memoryProHint: 'Pro-Variante geplant: Team-Kontext-Sync, geteilte Speicherbereiche für Agenten und und zentrale Administration.',
    seekProHint: 'Pro-Variante geplant: Cloud-Vektorspeicher, verteilte Ingestion-Pipelines und mandantenfähige Index-Freigabe.',
    fetchProHint: 'Pro-Variante geplant: Verwaltetes Browser-Rendering (JS-Ausführung), CAPTCHA-Lösung und automatisierte Crawl-Pipelines.',
    terminalProHint: 'Pro-Variante geplant: Team-Session-Sharing, Mobile-Companion-Relay und sichere gehostete Tunnels.',
    scopeProHint: 'Pro-Variante geplant: Remote-Fleet-Scanning, zentralisierte Port-Audit-Logs und kontinuierliche Überwachung des Port-Status.',
    operateProHint: 'Pro-Variante geplant: Multi-User-Sitzungsisolation, cloudbasierte GUI-Sitzungsaufzeichnung und zugriffsgeschützte Freigabe-Workflows.',
    tuneProHint: 'Pro-Variante geplant: Zentralisierte Hardware-Zustands-Dashboards, benutzerdefinierte Lüfterprofile und privilegierte SMC-Steuerungen.',
    vibecoderProHint: 'Pro-Variante geplant: Geteilte Cloud-Dashboards, Multi-Repository-Support und Team-Berechtigungssteuerung.',
    terminalDemoPane1: 'Panel 1: Aider (aktiv)',
    terminalDemoPane2: 'Panel 2: Claude Code (blockiert)',
    terminalDemoPrompt: 'Änderungen freigeben?',
    terminalDemoAction: 'Wartet auf Freigabe',
    scopeDemoTitle: 'symscope scan',
    scopeDemoScanning: 'Scanne Ports & Prozesse...',
    scopeDemoConflict: '[Konflikt] Port 3000: Node vs Go',
    scopeDemoMcp: 'Cursor/VSCode MCP-Configs gefunden',
    scopeDemoSuggest: 'Empfohlener Port: 8081',
    operateDemoTitle: 'symoperate UI-Drive',
    operateDemoQuery: 'Frage UI-Baum ab...',
    operateDemoSafety: 'Klick auf "Papierkorb" blockiert',
    operateDemoAction: 'Tastendruck: git commit',
    operateDemoSuccess: 'Steuerungseingabe erfolgreich gesendet',
    tuneDemoTitle: 'symtune status',
    tuneDemoCPU: 'CPU-Temperatur',
    tuneDemoFan: 'Lüftergeschwindigkeit',
    tuneDemoPower: 'Strom: Laden limitiert auf 80%',
    tuneDemoEDR: 'EDR-Helligkeit angepasst',
    vibecoderDemoTitle: 'symvibe serve',
    vibecoderDemoPhase1: '1. Review',
    vibecoderDemoPhase2: '2. Planung',
    vibecoderDemoPhase3: '3. Coden',
    vibecoderDemoStatusRunning: 'Läuft...',
    filterAll: 'Alle Tools',
    filterContext: 'Kontext & Speicher',
    filterSecurity: 'Sicherheit & Integrität',
    filterSystem: 'macOS-System',
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
    navStack: 'AI Stack',
    stackTitle: 'Der Symaira AI Stack',
    stackSubtitle: 'Alle Symaira-Tools sprechen MCP. Zusammen ergeben sie einen vollständigen lokalen AI-Entwicklungs-Stack.',
    stackPitch: 'Jedes Symaira-Tool stellt einen Model Context Protocol (MCP) Server bereit und macht deine lokalen Agent-Workflows zusammensetzbar, sicher und datenschutzkonform. Installiere den Stack, konfiguriere ihn, und deine AI-Agenten haben Zugriff auf Secrets, Speicher, Suche, Web-Fetch und Privacy-Automatisierung — ohne Daten in die Cloud zu senden.',
    stackInstallTitle: 'Stack installieren',
    stackInstallStep1Label: 'Homebrew-Tap hinzufügen',
    stackInstallStep2Label: 'CLI-Tools + MCP-Server installieren',
    stackInstallStep3Label: 'Natives Terminal installieren',
    stackInstallNote: 'symfetch wird nach dem ersten getaggten Release hinzugefügt.',
    stackConfigTitle: 'MCP-Konfiguration',
    stackConfigDesc: 'Leg diese Datei in das MCP-Konfigurationsverzeichnis deines Agenten. Jedes Tool läuft als lokaler stdio-Server — kein Netzwerk, keine Cloud.',
    stackWorkflowTitle: 'Workflow-Beispiele',
    stackWorkflow1Title: 'Web-Recherche-Pipeline',
    stackWorkflow1Desc: 'Eine Webseite abrufen, in sauberes Markdown umwandeln und für hybride Suche indexieren.',
    stackWorkflow2Title: 'Sicherer Agent-Kontext',
    stackWorkflow2Desc: 'Vault nutzen, um Secrets sicher in eine Memory-Sync-Sitzung zu injizieren.',
    stackWorkflow3Title: 'Wissensabruf',
    stackWorkflow3Desc: 'Indexierte Dokumente durchsuchen und referenzierte URLs in einer Pipeline abrufen.',
    stackBackToTools: 'Zurück zu Tools',
    navVaultPro: 'Vault Pro',
    vaultPageTitle: 'Symaira Vault Pro',
    vaultPageSubtitle: 'Sichere Verwaltung von Passwörtern und Secrets für dich, deine Teams und deine AI-Agenten.',
    vaultPageFreeTitle: 'Lokaler Core',
    vaultPageFreePrice: 'Kostenlos',
    vaultPageFreePriceSub: 'Open Source & self-hosted',
    vaultPageProTitle: 'Vault Pro',
    vaultPageProPrice: '',
    vaultPageProPriceSub: '',
    vaultPageSuiteTitle: 'AI Suite Bundle',
    vaultPageSuitePrice: '',
    vaultPageSuitePriceSub: '',
    vaultPageCompareTitle: 'Core vs. Pro im Vergleich',
    vaultPageFeatureSync: 'Cloud-Sync für Secrets',
    vaultPageFeatureSyncDesc: 'Synchronisiere deine Vaults Ende-zu-Ende verschlüsselt über unseren sicheren Cloud-Dienst.',
    vaultPageFeatureSSO: 'Enterprise SSO & Teams',
    vaultPageFeatureSSODesc: 'Authentifizierung über Okta, Entra ID oder Google. Verwalte Berechtigungen für Team-Agenten.',
    vaultPageFeatureWeb: 'Web-Verwaltungskonsole',
    vaultPageFeatureWebDesc: 'Verwalte Mitgliedschaften, prüfe Audit-Logs und erstelle Token in einem modernen Web-Dashboard.',
    vaultPageFeatureEncryption: 'Local-First Verschlüsselung',
    vaultPageFeatureEncryptionDesc: 'Alle Secrets werden lokal per Age verschlüsselt, bevor sie die Cloud berühren.',
    vaultPageFeatureMcp: 'Zero-Trust MCP-Server',
    vaultPageFeatureMcpDesc: 'Stelle AI-Agenten begrenzte Credentials bereit, statt rohe Passwörter zu teilen.',
    vaultPageCTA: 'Coming Soon',
    vaultPageCTAFree: 'Free Core herunterladen',
    vaultPageFAQTitle: 'Häufig gestellte Fragen',
    vaultPageFAQ1Q: 'Wie wird Vault Pro verschlüsselt?',
    vaultPageFAQ1A: 'Vault Pro arbeitet local-first. Deine Secrets werden auf deinem Rechner mit age (X25519 und ChaCha20-Poly1305) verschlüsselt. Der Cloud-Dienst speichert nur verschlüsselte Blobs und kann deine Daten niemals lesen.',
    vaultPageFAQ2Q: 'Ist dieser Dienst bereits live?',
    vaultPageFAQ2A: 'Nein, dies ist derzeit ein Entwurf und Konzept-Visualisierung. Das Dashboard is interaktiv, aber es können noch keine echten Accounts erstellt oder Zahlungen durchgeführt werden.',
    heroBadgeGermany: 'Made in Germany · DSGVO-konform',
    proHostingTag: 'Deutsches Hosting · DSGVO',
    footerMadeInGermany: 'Made in Germany · 100% DSGVO-konform',
    vaultPageFAQ3Q: 'Wo werden die Cloud-Features gehostet?',
    vaultPageFAQ3A: 'Alle geplanten Cloud- und Pro-Komponenten werden vollständig auf Servern in Deutschland gehostet und unter strenger Einhaltung der Datenschutz-Grundverordnung (DSGVO) entwickelt. Da die Kernanwendung local-first arbeitet, verlassen die meisten Daten Ihre eigene Hardware ohnehin nicht.',
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
