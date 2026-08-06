# Symaira Tune — Paid-Demand Validation Scorecard (30-day window)

Status: **DRAFT** — decision thresholds below are proposals pending maintainer
confirmation. The funnel is live on the Tune product page and events are
tracked in GA4, but no business decision should be made from this scorecard
until the maintainer confirms the thresholds.

This document is the single source of truth for the Tune commercial funnel:
every event name, its property schema, and how the 30-day validation report
is built. It mirrors `src/components/TuneFunnel.tsx`,
`src/components/TuneEditions.tsx`, `src/config/tune.ts`, and
`src/config/analytics.ts` — if you change an event there, update this table.

## Privacy & consent (read first)

- **Every event fires only after explicit GA4 consent.** `trackEvent` is
  gated by `hasAnalyticsConsent()`, which checks that the site's
  `symaira-cookie-consent` localStorage value is exactly `accepted` (the same
  contract the CookieConsent component uses before loading gtag). Declined or
  undecided visitors generate **zero** analytics events.
- **No sensitive device or hardware data is ever sent.** Event properties are
  restricted by TypeScript to `string | number | boolean`, and the funnel
  only ever passes `edition`, `locale`, `cta_type`, `price_variant`, and
  `use_case`. No serial numbers, SMC values, fan readings, temperatures,
  model identifiers, IP-derived identifiers, or any other hardware/device
  data.
- **Email addresses are never read by the page.** The pricing-interest action
  opens the visitor's own mail client (`mailto:info@symaira.com` with a
  pre-filled subject). The site does not collect, store, or transmit the
  email address; only the selected edition + draft price variant are recorded
  in the `tune_pricing_interest` event.

## Event taxonomy

| Event name | Trigger | Properties | Data source |
|---|---|---|---|
| `tune_page_view` | Tune product page mounts (once per mount / locale change) | `locale` (`en`/`de`) | GA4 event reports |
| `tune_use_case_click` | Visitor clicks one of the six work-scenario chips in the editions section | `use_case` (`tuneUseCaseSunlight`…`tuneUseCaseDeskMode`), `locale` | GA4 event reports |
| `tune_edition_compare` | Editions section first becomes visible (IntersectionObserver, once per session; fires on mount in browsers without IntersectionObserver) | `locale` | GA4 event reports |
| `tune_price_exposure` | An edition card first becomes visible (once per edition per session) | `edition` (`store-free`/`store-pro`/`hardware-pro`), `price_variant` (`€24.99`, `€29–€39`, or `free`), `locale` | GA4 event reports |
| `tune_cta_click` | Visitor clicks the primary “Get Tune v0.8.1” install button (brew copy) | `cta_type` (`download_primary`), `edition` (`hardware-pro`), `locale` | GA4 event reports |
| `tune_download_click` | Visitor clicks the v0.8.1 release link | `edition` (`hardware-pro`), `locale` | GA4 event reports |
| `tune_pricing_interest` | Visitor clicks “I'm interested — send pricing update” (interest, **not** a purchase) | `edition` (`store-pro`/`hardware-pro`), `price_variant` (`€24.99`/`€29–€39`), `locale` | GA4 event reports |
| `tune_trial_click` | Trial CTA clicked — **not fired yet**: `TUNE_TRIAL_AVAILABLE` is `false` (no signed trial build exists) | `locale` | GA4 event reports |
| `tune_preorder_click` | Preorder CTA clicked — **not fired yet**: `TUNE_PREORDER_AVAILABLE` is `false` (no payment infrastructure exists) | `edition` (`store-pro`), `price_variant` (`€24.99`), `locale` | GA4 event reports |
| `tune_conversion` | Completed purchase — **documented only, never fired from this website**. Requires the future payment provider (Store launch); the site has no payment path today | `edition`, `price_variant`, `locale` (future) | Payment provider (future) |

Firing rules:

- Each event fires **once per intended interaction**: click events fire once
  per click; visibility events fire once per section/card thanks to
  once-flags that survive re-renders and locale switches.
- `trackEvent` is a pure function (no side effects except the consent-gated
  gtag call) and is a no-op when consent is missing or gtag is not loaded —
  events never queue and never duplicate through the consent flow.
- `tune_cta_click` and `tune_download_click` are distinct stages: engaging
  with the primary CTA (copy) vs. actually navigating to the release.
- Trial, preorder, and interest are three separate, non-confusable stages:
  the trial/preorder flags are `false` today (no CTA renders), and the
  interest action is always labeled as interest, never as a purchase.

## 30-day validation scorecard

Reporting period: **rolling 30 days from funnel launch** (first
`tune_page_view`). All counts are distinct sessions (GA4 event count per
session) unless noted.

| Stage | Metric | Event(s) used | Target formula |
|---|---|---|---|
| Qualified visits | Tune page views with engaged sessions (session engaged = GA4 default: ≥10 s or ≥1 conversion or ≥2 pageviews) | `tune_page_view` | `COUNT(DISTINCT session)` where engaged |
| Edition comparisons | Sessions that saw the editions comparison | `tune_edition_compare` | `COUNT(DISTINCT session)` |
| Price exposures | Sessions that saw at least one draft price | `tune_price_exposure` | `COUNT(DISTINCT session)` with any `edition` |
| Pricing interest | Interest signals with the chosen edition + price | `tune_pricing_interest` | `COUNT(DISTINCT session)`, break down by `edition` + `price_variant` |
| Downloads | Sessions that reached the v0.8.1 release | `tune_download_click` | `COUNT(DISTINCT session)` |
| Purchase intent | Pricing interest on the **Hardware Pro** edition (the only edition that exists as a product today) | `tune_pricing_interest` where `edition = hardware-pro` | `COUNT(DISTINCT session)` |
| Completed purchases | Actual paid conversions | `tune_conversion` | **Not measurable yet** — requires the future payment provider; documented for the Store launch |
| Retention / follow-up | In-app usage after install (session length, re-open rate) | — | **Out of scope for this website**; measured in the Tune app (future) |

## Decision thresholds (DRAFT — pending maintainer confirmation)

Decide at day 30, using the 30-day window above:

| Signal | DRAFT threshold | DRAFT action |
|---|---|---|
| Qualified Tune visits | ≥ 150 sessions | Proceed to the next validation step |
| Edition comparisons | ≥ 30 sessions | Proceed (compare rate ≥ 20% of qualified visits) |
| Pricing-interest events | ≥ 15 sessions | Proceed with Store investment at the draft prices |
| Pricing interest on Hardware Pro | ≥ 10 sessions | Strong signal: ship paid direct-license path first |
| Pricing-interest events | < 5 sessions | Stop and revisit positioning/pricing before any Store investment |
| Pricing-interest events | 5–14 sessions | Extend the validation window by 30 days and re-run |

Notes:

- Thresholds are deliberately conservative for a low-traffic personal
  product site; they assume the funnel stays on the Tune page with no paid
  traffic. If traffic sources change (ads, launch posts), restart the 30-day
  window or normalize by source.
- The DRAFT status must be lifted (thresholds confirmed or changed) by the
  maintainer before any purchase decision is made.
- `tune_conversion` and retention are explicitly out of scope until the
  payment provider and in-app analytics exist; the website funnel only
  measures up to purchase intent.

## Development & testing

- Run locally with `npm run dev` (or `npm run build && npx vite preview`),
  open `#/tune`, and inspect the consent-gated events in the browser's
  network tab (gtag hits) or GA4 DebugView after accepting the cookie banner.
- To verify the consent gate: decline the cookie banner → interact with the
  funnel → zero gtag hits. Accept → events fire.
- To verify no duplicates: scroll the editions section once (each visibility
  event fires once), click each CTA once (each click event fires once),
  switch EN/DE and re-check (once-flags hold).
- To verify the config switches: set `TUNE_FUNNEL_ENABLED = false` (funnel
  disappears without code removal), `TUNE_TRIAL_AVAILABLE = true`
  (trial CTA appears and `tune_trial_click` fires), `TUNE_PREORDER_AVAILABLE
  = true` (preorder CTA appears).
