# AppKit icons

Unmodified SVG exports from `symaira-appkit/Brand/Icons/dist/svg` (commit
`44782b9`). They are Symaira's own 2px line icons (24pt grid, round caps), the
same set the native apps use. `src/components/icons.tsx` inlines them so they
inherit `currentColor`.

To add or change an icon, edit `Brand/Icons/icons.svg` in AppKit, run its
`scripts/build-icons.py`, and copy the generated file here. Do not draw icons
in this repository and do not re-introduce a third-party icon package.
