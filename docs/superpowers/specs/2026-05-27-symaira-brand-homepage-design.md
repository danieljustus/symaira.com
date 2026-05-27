# Symaira Brand Homepage Design

Date: 2026-05-27

## Goal

Rework the Symaira homepage into the main brand page for the new Symaira product family. The page should make the name understandable and position Symaira as a broad, trustworthy brand for human-AI collaboration, not only as a developer-tool site.

Symaira means:

- SYM: symbiosis
- AI: artificial intelligence
- RA: era

The brand promise is: tools for the era of human-AI symbiosis, built around human control, data sovereignty, useful autonomy, and trust.

## Positioning

Symaira should be positioned as a broad Human-AI productivity and privacy brand with clear developer credibility. The first concrete products are Symaira Vault and Symaira EraseMe.

The tone should be clear, sovereign, and trustworthy, with a restrained futuristic layer. Avoid hype, exaggerated AI claims, or a page that feels only like an agent SDK landing page.

## Page Structure

### 1. Hero

Purpose: Explain Symaira immediately and establish the brand in one viewport.

Primary headline:

> Tools for the era of Human-AI symbiosis.

Supporting copy:

> Symaira builds products that help people work with AI without giving up control over data, decisions, or trust.

Name explanation:

> SYM = Symbiosis. AI = Artificial Intelligence. RA = the new era.

Primary CTA:

> Explore the tools

Secondary CTA:

> Understand the vision

Implementation notes:

- Keep the existing logo and hero visual direction, but make the copy less narrowly focused on autonomous agent execution.
- The hero should make Symaira feel like a product brand, not only a single open-source project.
- The current dark/gold/ice visual system can remain, but should support trust and clarity over cyberpunk complexity.

### 2. Problem / Vision

Section title:

> AI is becoming a collaborator. The interface has to change.

Section message:

AI can research, write, automate, and act. Real collaboration still needs boundaries, secure handoffs, traceable decisions, and tools that keep people in control.

Principles:

- Human control: AI can take over work, but responsibility must stay clear.
- Data sovereignty: personal data, secrets, and identities stay protected.
- Useful autonomy: automation should be explainable, revocable, and safe.

Implementation notes:

- This section should replace generic "technological evolution" language with practical trust language.
- The three principles should read as brand principles, not as feature claims for a single product.

### 3. Products / Tools

Section title:

> The first Symaira tools

Intro:

> Symaira starts with the parts of AI collaboration where trust matters most: secrets, identity, privacy, and repeatable workflows.

#### Symaira Vault

One-line description:

> A secure password and secrets manager for terminal users and AI agents.

Key points:

- Keep credentials out of prompts, logs, and chat history.
- Give agents scoped access through MCP instead of sharing raw secrets.
- Stay local-first, encrypted, open source, and telemetry-free.

CTA:

> View Vault on GitHub

Link:

https://github.com/danieljustus/symaira-vault

#### Symaira EraseMe

One-line description:

> A privacy automation tool that helps people remove their data from brokers and close unwanted accounts.

Key points:

- Plan and track GDPR/CCPA erasure campaigns.
- Use AI-assisted workflows for triage, reminders, and rebuttals.
- Keep an auditable record of every request and deadline.

CTA:

> View EraseMe on GitHub

Link:

https://github.com/danieljustus/symaira-eraseme

Implementation notes:

- EraseMe should be shown as an active first product, not as a "coming soon" placeholder.
- Vault and EraseMe should be visually presented as the first two members of a product family.
- Future concepts like Connect or Flow can be removed from the primary page unless they are framed clearly as future direction.

### 4. Brand Meaning

Section title:

> Why Symaira

Section copy:

> Symaira is built from three parts: SYM for symbiosis, AI for artificial intelligence, and RA for era. The name describes the product direction: tools for a new era where humans and AI systems work together with clear boundaries.

Implementation notes:

- This section can be compact, but it must be visible enough that visitors understand the name without needing external explanation.
- It can also be integrated near the hero if the final layout reads better that way.

### 5. Footer

Footer message:

> Built for human agency in the AI era.

Implementation notes:

- Keep GitHub access.
- Remove or de-emphasize deployment-only text such as auto-sync details from the public brand footer.

## Language Handling

The site currently supports English and German. The first implementation should preserve bilingual support.

German copy should follow the same positioning:

- clear, sovereign, trustworthy
- slightly visionary
- low hype
- understandable for non-developers while preserving developer credibility

Exact German copy can be implemented directly from the English structure during the implementation phase.

## Visual And UX Direction

Use the existing Vite/React component structure:

- `Navigation`
- `Hero`
- `Vision`
- `Tools`
- `Footer`
- `LanguageContext`
- `ThemeContext`

Keep the current brand assets:

- `public/logo.png`
- `public/logo-top.png`
- `public/logo-bottom.png`

Maintain dark/light theme support and the gold/ice-blue brand palette, but reduce copy and visual elements that make the page feel like a narrow cyberpunk agent-console product. The visual language should still feel modern and technical, but the brand story should feel calmer and more trustworthy.

## Logo Presence And Motion

The logo should become a stronger visual motif on the page. The separate logo halves should be used intentionally because they map directly to the brand idea: two distinct parts forming one symbiotic system.

Use these assets:

- `public/logo-top.png`: gold upper half
- `public/logo-bottom.png`: ice-blue lower half
- `public/logo.png`: complete combined mark

Recommended treatments:

- Hero mark: use the two separate halves as the main hero visual, larger than the current mark. The halves can float a few pixels apart and slowly move toward/away from each other to express symbiosis. The motion should be slow, premium, and calm.
- Background watermark: place one oversized complete logo or paired halves behind the hero/vision area with very low opacity, soft masking, and no interference with text readability.
- Section accents: reuse the gold and ice-blue halves as abstract background forms around section transitions, especially between Vision and Tools. They should stay peripheral and never sit behind dense copy.

Motion constraints:

- No fast rotation, particle effects, or noisy cyberpunk animation.
- Disable decorative logo motion for `prefers-reduced-motion: reduce`.
- Keep all decorative logo layers `pointer-events: none`.
- Ensure background logo layers never reduce contrast for text or primary buttons.

Visual intent:

- Gold and ice-blue should read as two complementary forces.
- The complete logo should feel like the resolved state: Human-AI collaboration with clear boundaries.
- The logo should reinforce the brand without making the page feel like a logo wallpaper.

## Success Criteria

- A first-time visitor understands what Symaira means.
- A first-time visitor understands the broader brand mission in under 10 seconds.
- Vault and EraseMe are both visible as current Symaira tools.
- The page explains why data, secrets, identity, privacy, and AI collaboration belong together.
- The logo is visibly present beyond the navigation and supports the symbiosis story.
- The copy does not overpromise AI capabilities.
- The page remains bilingual, responsive, and consistent with the current codebase.

## Out Of Scope

- New product pages for Vault or EraseMe.
- Backend integrations.
- New analytics, newsletter, or contact forms.
- A full brand identity redesign.
- Replacing the logo assets.
