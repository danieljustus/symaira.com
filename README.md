# symaira.com

![symaira.com social preview](docs/assets/social-preview.png)

Public website for the Symaira ecosystem.

Symaira tools follow one product model:

- Free, open-source, self-hosted cores.
- Paid cloud-hosted Pro variants built on top of those cores.
- Shared Pro infrastructure for tenant operations, billing hooks, health,
  lifecycle, deployment, and compatibility checks.

## Current Public Story

The site currently presents dedicated pages for 17 tools: Vault, Memory, Seek,
Fetch, Scope, EraseMe, Terminal, Vibecoder, Operate, Tune, Fritz, Guard, Print,
Skills, Ingest, Desktop, and Meet (see `src/config/products.tsx` and the route
table in `src/App.tsx`).

Pro pages/tiles (e.g. Vault Pro) are implemented but currently hidden behind
the `SHOW_PRO` feature flag in `src/config/features.ts` until the corresponding
Pro/Core runtime contracts are release-ready.

## Development

```bash
npm install
npm run dev
npm run build
```

## Stack

- React
- TypeScript
- Vite
- lucide-react

## Ecosystem Rule

The website should not promise hosted Pro availability before the corresponding
public core has a tagged release and a documented Pro/Core runtime contract.
