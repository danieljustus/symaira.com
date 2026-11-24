# symaira.com route and state matrix

| Route/surface | OpenDesign evidence | Required states | Status |
|---|---|---|---|
| Home | `symaira-public-reference.html` | default, EN/DE, mobile navigation, reduced motion/transparency, contrast | Verified reference |
| Stack | Shared shell and stack section in reference | keyboard route, responsive, not-found-safe | Production-linked; dedicated visual not required before repo integration |
| Seven product routes | Generic detail template exercised for current seven-product catalog | available, factual install/platform/license, invalid product | Verified reusable detail contract |
| Impressum | Production `LegalPages` shell | DE legal content, focus return | Production-linked content route |
| Privacy / Datenschutz | Production `LegalPages` shell | EN/DE, direct hash navigation | Production-linked content route |
| Cookie consent | Production `CookieConsent` | unset, accept, reject/necessary-only, persisted choice | Must be verified during repo integration |
| Invalid hash | Production fallback currently returns home | safe fallback, correct title, no stale product | Must be fixed/verified in issue #59 |

## Release rule

OpenDesign supplies the visual/detail contract and public asset kit. Issue `danieljustus/symaira.com#59` owns production inventory, metadata, favicon, legal/cookie and invalid-route verification. Do not claim route-level release readiness until that issue is merged and the deployed site is checked.
