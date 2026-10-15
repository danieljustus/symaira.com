# Symaira repository ownership

Symaira uses independent repositories with independent build and release lifecycles, not a monorepo. Repository, product, module, process, permission and distribution boundaries are separate decisions. The [product and execution contract](product-boundaries.md) defines those boundaries; this index does not change them.

## Primary products

| Repository | Responsibility |
|---|---|
| [symaira-brain](https://github.com/danieljustus/symaira-brain) | Portable agent context and control, with optional Browse, Operate and Scope modules |
| [symaira-desktop](https://github.com/danieljustus/symaira-desktop) | Documents, the Markdown knowledge workspace and human knowledge work |

## Independent credential service and specialized products

| Repository | Responsibility |
|---|---|
| [symaira-vault](https://github.com/danieljustus/symaira-vault) | Standalone credential CLI/service, authorization and recovery; normal integrated management UI belongs to Brain, subject to the replacement gates |
| [symaira-cockpit](https://github.com/danieljustus/symaira-cockpit) | macOS hardware/system tuning, not Browse, Operate or Scope |
| [symaira-eraseme](https://github.com/danieljustus/symaira-eraseme) | Independent privacy and data-broker removal workflows |
| [symaira-fritz](https://github.com/danieljustus/symaira-fritz) | Independent FRITZ!Box and network-device administration |

## Shared libraries

| Repository | Responsibility |
|---|---|
| [symaira-corekit](https://github.com/danieljustus/symaira-corekit) | Shared backend infrastructure and language-neutral contracts |
| [symaira-appkit](https://github.com/danieljustus/symaira-appkit) | Shared Swift/native foundations |

These are libraries, not additional end-user products. Implementation languages and exact dependency pins are defined in the current manifests. A language migration does not transfer product ownership.

## Website and distribution

| Repository | Responsibility |
|---|---|
| [symaira.com](https://github.com/danieljustus/symaira.com) | Public website and the versioned publication of the product contract |
| [homebrew-tap](https://github.com/danieljustus/homebrew-tap) | Homebrew distribution from actual release artifacts |
| [scoop-bucket](https://github.com/danieljustus/scoop-bucket) | Scoop distribution for Windows CLI tools |

## Optional modules are not additional repositories

Browse sources live in [Brain's browse module](https://github.com/danieljustus/symaira-brain/tree/main/browse). Operate and Scope also belong to Brain. A dedicated Browse page on the website does not imply a separately maintained Browse repository or a signed Brain-built replacement package.

Do not infer distribution readiness from source consolidation. Use each owning repository's release artifacts and migration guidance; the historical Browse installation failure remains tracked in [homebrew-tap #33](https://github.com/danieljustus/homebrew-tap/issues/33).

## Contract publication

The versioned publication is [product-boundaries.md](product-boundaries.md). Under the current PB-2026-09-09 contract, the workspace's local canonical text and repository snapshots must remain byte-identical. This index establishes a public navigation point without silently changing the contract's editing or snapshot-synchronization rules.

Private development projects, local validation clones, linked worktrees, build outputs and recovery copies are not part of this public repository catalog. Do not publish their paths, notes or credentials here.
