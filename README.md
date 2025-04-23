# 🛍️ Micro‑Store Monorepo

A modular e‑commerce platform using micro‑frontends.

---

## Overview

- **Apps** (`apps/`):
  - `shell` – Auth (login, register, reset)
  - `storefront` – Storefront
  - `checkout` – Payment flow
  - `admin` – Dashboard
- **Packages** (`packages/`):
  - `ui` – Shared React components
  - `utils` – Helpers (API, cookies)

---

## Quick Start

```bash
# Install
pnpm install

# Development
pnpm dev

# Build & Start
pnpm build && pnpm start
```

---

## Contributing

1. Fork & clone
2. `pnpm install`
3. Make changes
4. `pnpm test`
5. Open a PR

---

## License

MIT © Adrian Karp
