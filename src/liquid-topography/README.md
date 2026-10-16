# Liquid Topography source

`symaira-topo.js` is vendored unchanged from
[`symaira-appkit/design/liquid-topography/web`](https://github.com/danieljustus/symaira-appkit/tree/560f791/design/liquid-topography/web),
commit `560f791`.

SHA-256: `03ac6a69f70fce4b2189883008f6f428917bbf6d87f9336fd8d99bcfb5b8e8c4`.

The design source is AppKit's `design/liquid-topography/DESIGN.md` and
`topo.json`; `tokens.css` is produced by its `build.py`. Change the source there
first, verify its tests, then copy the corresponding artifacts here. The web
build must stay standalone and must never depend on a sibling checkout.

`symaira-topo.d.ts` describes the imported component API. It is not a second
implementation. The new lifecycle/masking checks are maintained alongside the
source as `web/symaira-topo.test.mjs`.
