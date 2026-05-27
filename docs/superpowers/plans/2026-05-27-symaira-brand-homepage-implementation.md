# Symaira Brand Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the Symaira homepage copy, structure, product presentation, and logo presence so it reads as the main brand page for the Human-AI symbiosis era.

**Architecture:** Keep the existing Vite/React component structure and bilingual translation context. Update copy centrally in `LanguageContext`, then adjust the existing sections to present the brand story, two current products, a stronger logo motif, and a quieter footer.

**Tech Stack:** React 19, TypeScript, Vite, CSS custom properties, lucide-react icons, existing PNG logo assets.

---

## File Structure

- Modify `src/context/LanguageContext.tsx`: replace narrow agent-focused copy with brand copy, add translation keys for name explanation, EraseMe, brand meaning, and footer line.
- Modify `src/components/Hero.tsx`: make the hero explain Symaira, enlarge the split logo visual, add decorative watermark layers, and preserve responsive behavior.
- Modify `src/components/Vision.tsx`: retitle the section around AI collaboration and human control, update pillar copy.
- Modify `src/components/Tools.tsx`: present Vault and EraseMe as the first two active products and remove future placeholders from the primary product area.
- Modify `src/components/Footer.tsx`: replace deployment sync message with a brand statement.
- Modify `src/index.css`: add logo motion, watermark, product-card, and responsive support including reduced-motion handling.
- Create or update `docs/superpowers/plans/2026-05-27-symaira-brand-homepage-implementation.md`: record this plan.

## Task 1: Translation Model And Copy

**Files:**
- Modify: `src/context/LanguageContext.tsx`

- [ ] **Step 1: Verify current copy does not yet satisfy the new hero requirement**

Run:

```bash
rg -n "Tools for the era|EraseMe|Why Symaira|Built for human agency" src
```

Expected before implementation: no matches for the new final homepage copy or only unrelated matches.

- [ ] **Step 2: Update `TranslationMap` with required keys**

Add keys for hero name explanation, brand meaning, EraseMe product copy, product section eyebrow, and footer message.

- [ ] **Step 3: Replace English and German translations**

Use the approved copy and direct German equivalents:

```text
EN hero: Tools for the era of Human-AI symbiosis.
DE hero: Tools fuer die Aera der Mensch-AI-Symbiose.
```

Keep the final implemented German copy natural and low-hype.

- [ ] **Step 4: Run TypeScript build check**

Run:

```bash
npm run build
```

Expected: TypeScript accepts all translation keys.

## Task 2: Hero And Logo Motif

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Update hero content**

Use the new headline, supporting copy, name explanation, and CTAs from translations.

- [ ] **Step 2: Make the split logo the main hero visual**

Use `public/logo-top.png` and `public/logo-bottom.png` as the primary hero mark. Keep the full logo out of the hero foreground except as subtle background/watermark.

- [ ] **Step 3: Add calm motion classes**

Add CSS classes:

```css
.symaira-mark-half.top { animation: symaira-top-breathe 8s ease-in-out infinite; }
.symaira-mark-half.bottom { animation: symaira-bottom-breathe 8s ease-in-out infinite; }
```

Add `@media (prefers-reduced-motion: reduce)` to disable decorative animations.

- [ ] **Step 4: Add background watermark**

Add a decorative, pointer-events-none, low-opacity full logo or split-half background layer in the hero area without sitting directly behind dense text.

- [ ] **Step 5: Run build**

Run:

```bash
npm run build
```

Expected: build succeeds and assets resolve from `/logo-top.png`, `/logo-bottom.png`, and `/logo.png`.

## Task 3: Vision Section

**Files:**
- Modify: `src/components/Vision.tsx`
- Modify: `src/context/LanguageContext.tsx`

- [ ] **Step 1: Update section title and subtitle**

Use:

```text
AI is becoming a collaborator. The interface has to change.
```

and the German equivalent.

- [ ] **Step 2: Update the three principles**

Use Human control, Data sovereignty, and Useful autonomy as the three cards.

- [ ] **Step 3: Run build**

Run:

```bash
npm run build
```

Expected: no missing translation keys.

## Task 4: Products Section

**Files:**
- Modify: `src/components/Tools.tsx`
- Modify: `src/context/LanguageContext.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Replace future placeholders with EraseMe**

Remove the current Connect/Flow placeholder grid from the primary section and present Vault and EraseMe as two current products.

- [ ] **Step 2: Keep a richer Vault card**

Keep Vault visually strong because it has terminal/MCP context, but make the copy less narrow and more brand-aligned.

- [ ] **Step 3: Add EraseMe product card**

Add GitHub link:

```text
https://github.com/danieljustus/symaira-eraseme
```

Use privacy/removal/audit copy from the spec.

- [ ] **Step 4: Verify product URLs are present**

Run:

```bash
rg -n "symaira-vault|symaira-eraseme" src/components/Tools.tsx
```

Expected: both GitHub URLs are present.

## Task 5: Brand Meaning And Footer

**Files:**
- Modify: `src/components/Vision.tsx` or `src/components/Tools.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/context/LanguageContext.tsx`

- [ ] **Step 1: Add visible brand meaning section**

Add a compact "Why Symaira" section after the principles or before products. It must explain SYM, AI, and RA.

- [ ] **Step 2: Update footer message**

Replace deployment sync text with:

```text
Built for human agency in the AI era.
```

and the German equivalent.

- [ ] **Step 3: Run copy verification**

Run:

```bash
rg -n "SYM|Symbiosis|human agency|Mensch|AI-Symbiose|All-Inkl|Connect|Flow" src
```

Expected: Symaira meaning appears; public footer no longer foregrounds All-Inkl; Connect/Flow placeholders are gone.

## Task 6: Final Verification

**Files:**
- Verify: rendered app

- [ ] **Step 1: Run lint**

Run:

```bash
npm run lint
```

Expected: exit 0.

- [ ] **Step 2: Run build**

Run:

```bash
npm run build
```

Expected: exit 0.

- [ ] **Step 3: Start dev server**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected: Vite serves a local URL.

- [ ] **Step 4: Browser verification**

Open the local URL in the Browser plugin. Check desktop and mobile-sized viewport for:

- hero copy and name explanation visible
- split logo visible and not covering text
- Vision has three brand principles
- Vault and EraseMe both visible as current products
- footer uses brand statement rather than deployment text
- no obvious overflow or clipped text

- [ ] **Step 5: Final git status**

Run:

```bash
git status --short
```

Expected: only intentional implementation changes and plan file are present.
