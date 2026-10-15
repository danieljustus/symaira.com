# Liquid Topography source

`symaira-topo.js` is vendored unchanged from
[`symaira-appkit/design/liquid-topography/web`](https://github.com/danieljustus/symaira-appkit/tree/c0091bc/design/liquid-topography/web),
commit `c0091bc`.

SHA-256: `af7f5aa254817dd8c689f1705e81b3728385961c360f41c2cdee510579d0856c`.

The design source is AppKit's `design/liquid-topography/DESIGN.md` and
`topo.json`; `tokens.css` is produced by its `build.py`. Change the source there
first, verify its tests, then copy the corresponding artifacts here. The web
build must stay standalone and must never depend on a sibling checkout.

`symaira-topo.d.ts` describes the imported component API. It is not a second
implementation. The new lifecycle/masking checks are maintained alongside the
source as `web/symaira-topo.test.mjs`.
