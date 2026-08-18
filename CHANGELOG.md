# Changelog

All notable changes to the Symaira public website are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2026-08-18

### Fixed
- Cookie consent reset no longer throws when browser storage is blocked; the consent banner now reliably re-appears on revocation (#43)

### Tests / CI
- ToolPage behavior suite added (15 tests: route matching, FAQ accordion, copy-to-clipboard, consent-gated tracking, demo types); coverage gate extended to ToolPage.tsx — 76 tests, lines 96.65% (#45)

## [0.1.1] - 2026-08-13

### Changed
- Smaller site payload: unreferenced product logos removed, referenced logos compressed (#40)
- Runtime dependency updates: react 19.2.8, lucide-react 1.31.0, roboto-flex 5.3.0 (#32)

### Fixed
- Stale tool count (16 → 17) and missing Symaira Meet entry in meta/JSON-LD (#28)

### Tests / CI
- Coverage suites for cookie consent, language detection and routing; 61 tests, lines 96.95% (#39)
- CI and release badges added to README (#30)
- Dev/CI dependency bumps: @types/node 26, actions/checkout 7, actions/setup-node 7 (#29, #31, #34)

## [0.1.0] - 2026-08-07

First release of the Symaira public website.

### Added
- Full Symaira brand homepage redesign: interactive hero with gravity-orbit animation, shockwave effects, sand background, Warm Sand dark theme
- Product showcase covering all Symaira tools (Memory, Seek, Terminal, Fetch, Vibecoder, Scope, Operate, Tune, Meet, vault, and more) with dedicated tool subpages
- Symaira AI Stack page, tool inventory refresh, and SEO/GEO overhaul
- Symaira Meet beta product page with honest beta positioning
- Symaira Tune repositioning: edition and pricing comparison, paid-demand validation funnel with GA4 instrumentation
- EN/DE language toggle with full localization
- Cookie consent management with optional GA4 integration and user opt-in control
- Legal pages (Impressum, Privacy) with obfuscated contact details
- Creator and maintainer panel, contact section
- Made in Germany / German hosting / GDPR-DSGVO compliance indicators
- Site manifest, favicon set, Open Graph meta tags, social preview image
- Pro/Core runtime contracts documented as release-ready

### Fixed
- Routing for vault tool details subpage and vault-pro linking
- Shared Meet terminal demo extracted; Tune copy fallback fixed
- All-Inkl deployment hardened: plaintext FTP replaced by explicit FTPS on port 21
- Feature flags made env-driven to clear CodeQL alerts (security hardening)

### Security
- CodeQL analysis workflow enabled
- Least-privilege permissions on deploy workflow
- Plaintext FTP credentials removed from the deploy path

### Tests / CI
- First test infrastructure: vitest setup, 32 unit/smoke tests, coverage baseline (lines 97.2%)
- PR lint + build + test gate on pull requests
- Community health files (CONTRIBUTING, security policy, etc.)
- Manual dispatch trigger for the deploy workflow
- Dependency bumps: vite 8.2.1, postcss 8.5.26, brace-expansion 5.0.9

[0.1.2]: https://github.com/danieljustus/symaira.com/releases/tag/v0.1.2
[0.1.1]: https://github.com/danieljustus/symaira.com/releases/tag/v0.1.1
[0.1.0]: https://github.com/danieljustus/symaira.com/releases/tag/v0.1.0
