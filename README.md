# symaira.com

[![CI - Lint & Build](https://github.com/danieljustus/symaira.com/actions/workflows/ci.yml/badge.svg)](https://github.com/danieljustus/symaira.com/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/danieljustus/symaira.com)](https://github.com/danieljustus/symaira.com/releases/latest)

![symaira.com social preview](docs/assets/social-preview.png)

Public website for the Symaira ecosystem.

Symaira tools follow one product model: free, open-source, self-hosted cores.
There are no paid or cloud-hosted editions — each tool ships exactly once.

## Current Public Story

The site presents dedicated pages for the nine tools that remain after the
August 2026 repo consolidation: Vault, Brain, Desktop, Browse, EraseMe,
Cockpit, and Fritz (see `src/config/products.tsx` and the
route table in `src/App.tsx`).

The absorbed tools no longer have their own pages or routes: Memory, Skills and
Guard live inside Brain; Seek, Print, Ingest, Meet, Relate and Room inside
Desktop; Fetch inside Browse; Tune, Operate and Scope inside Cockpit. Their
capabilities are described as features of the surviving tool.

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
