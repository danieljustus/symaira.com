# Liquid Topography source

`symaira-topo.js` is vendored unchanged from
[`symaira-appkit/design/liquid-topography/web`](https://github.com/danieljustus/symaira-appkit/tree/870e236/design/liquid-topography/web),
commit `870e236`.

SHA-256: `e749ff3fc3a07519dc1a71ebf60b2b5da0eae3427ebfde3fe2ab7cacf35a81bb`.

The design source is AppKit's `design/liquid-topography/DESIGN.md` and
`topo.json`; `tokens.css` is produced by its `build.py`. Change the source there
first, verify its tests, then copy the corresponding artifacts here. The web
build must stay standalone and must never depend on a sibling checkout.

`symaira-topo.d.ts` describes the imported component API. It is not a second
implementation. The new lifecycle/masking checks are maintained alongside the
source as `web/symaira-topo.test.mjs`.
