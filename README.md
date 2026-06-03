# symaira.com

Public website for the Symaira ecosystem.

Symaira tools follow one product model:

- Free, open-source, self-hosted cores.
- Paid cloud-hosted Pro variants built on top of those cores.
- Shared Pro infrastructure for tenant operations, billing hooks, health,
  lifecycle, deployment, and compatibility checks.

## Current Public Story

The site currently presents the first public tools:

- Symaira Vault: local-first secrets and password management for humans and AI
  agents.
- Symaira EraseMe: privacy automation for data broker removal workflows.

Memory and Seek are part of the broader ecosystem roadmap, but should only be
promoted publicly once their self-hosted cores and Pro runtime contracts are
release-ready.

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
