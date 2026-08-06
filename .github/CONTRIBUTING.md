# Contributing to symaira.com

Thanks for your interest in contributing! symaira.com is a static website built with React + TypeScript + Vite (hash-routed SPA).

## Development setup

Requirements: Node.js 20+ and npm.

```bash
npm install   # install dependencies
npm run dev   # start the local dev server
npm run lint  # run ESLint
npm run build # type-check and build for production
```

## Pull requests

- Squash merges only: every PR is merged as a single commit.
- The CI gate must pass: the `lint-build` job (lint + build, plus tests once added) must be green before merging.
- Keep changes scoped: one PR per concern, no unrelated edits.
- Describe what you changed and why in the PR description.

## Code of conduct

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md).
