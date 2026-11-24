---
version: alpha
name: Symaira UI Foundation
description: Champagne-gold and warm-black Symaira identity with native Apple interaction, restrained Liquid Glass, and accessible semantic states.
colors:
  primary: "#E5C397"
  secondary: "#F8E6CD"
  tertiary: "#D4B285"
  neutral: "#0D0C0A"
  surface: "#171510"
typography:
  display:
    fontFamily: "Roboto Flex Variable, system-ui, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.05
  title:
    fontFamily: "Roboto Flex Variable, system-ui, -apple-system, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Roboto Flex Variable, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Roboto Flex Variable, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
rounded:
  control: 10px
  card: 12px
  panel: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  section: 32px
  spacious: 48px
---

## Overview

`symaira.com` is the public web expression of the Symaira product family. This project-local specification is the normative brand layer; the attached OpenDesign `minimal` catalog system is only a layout baseline. The website must use the warm Symaira palette and not inherit unrelated catalog accents.

The site is a dark, technical, calm public surface: generous readable sections, Roboto Flex Variable, a restrained blueprint grid, champagne/sand accents, and subtle atmospheric glow. It explains open-source, self-hosted Symaira products without inventing hosted Pro promises.

## Colors

Use warm-black `#0D0C0A` and deep warm-black `#070605` as the main canvas, cards from `rgba(18, 17, 14, 0.65)`, champagne primary `#E5C397`, champagne secondary `#F8E6CD`, gold shadow `#C29965`, ice/sand `#EEDCC4` and `#D4B285`, primary text `#F5F4F0`, secondary text `#B5AEA5`, and readable muted text. Keep accent usage sparse and purposeful.

Do not introduce Apple blue, generic SaaS purple, or unrelated neon colors. Gradients and glows are atmospheric background details only; they never carry meaning or replace text contrast.

## Typography

Use Roboto Flex Variable for headings, body, technical labels, and product names, with system fallbacks. Headings are compact and deliberate; body copy stays readable at a 1.6 line height. Product cards, install commands, release metadata, and technical facts may use the mono face from the token layer where it improves scanning.

The site supports German and English. Preserve the existing language architecture and keep product claims literal, current, and verifiable.

## Layout & Spacing

Use a 4/8/12/16/24/32/48px rhythm, a maximum readable content width of 1200px, and 24px mobile/desktop gutters adapted through responsive breakpoints. Product cards must collapse cleanly on mobile. Touch targets are at least 44px, navigation remains keyboard accessible, and anchors account for the fixed header.

## Components & Motion

Use glass-like panels sparingly for navigation and elevated product cards, not as a blanket surface treatment. Product cards should communicate product name, purpose, platform, license, and install path without turning the public site into an app dashboard. Primary links use champagne/sand; status and availability use explicit text and semantic colors.

Motion uses the existing 400ms smooth curve and 200ms fast transition only where it improves orientation. Respect reduced motion and keep content visible without animation.

## Accessibility

Maintain visible focus, WCAG-conscious text pairs, semantic headings, keyboard navigation, reduced motion, responsive images, and readable contrast over the blueprint grid. Decorative glows, grids, and telemetry motifs are hidden from screen readers and never intercept input.

## Product Boundaries

The current product list must be taken from `src/config/products.tsx` and the route table, checked against the current Symaira workspace inventory before new content is added. Absorbed tools are described under their surviving product. Deleted products are not reintroduced merely because an old document mentions them. The website must not promise hosted Pro availability without a released and documented product contract.

## Do's and Don'ts

### Do

- Keep the public story centered on open-source, self-hosted cores.
- Use the shared Symaira palette and Roboto Flex Variable.
- Give each surviving product a clear, separate identity and page.
- Preserve EN/DE content and hash-based routing.
- Use real release/install information from the repositories.

### Don't

- Do not turn the site into a generic SaaS landing-page template.
- Do not use unverified product availability or release claims.
- Do not revive archived or deleted products without a current decision.
- Do not bury install commands, platform support, license, or boundaries.
- Do not use decorative motion or glow as the only product signal.

## Source of Truth

Derived from `/Users/daniel/Dev/Symaira Dev/symaira.com/src/index.css`, `src/config/products.tsx`, `src/App.tsx`, `README.md`, and the shared Symaira brand/system sources in `symaira-appkit`. The adjacent `PRODUCT_CONTEXT.md` records the current content scope.