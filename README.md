# 🛍️ E-Commerce Micro-Frontend Platform

A modular and scalable e-commerce platform built with Turborepo, Next.js, and Micro-Frontends. Ideal for learning micro-frontend architecture.

## 🧭 Overview

This project is a learning sandbox for building modern e-commerce apps using micro-frontends.

## 🔧 Features

- Independent Micro-Frontends

  Each area (e.g., Storefront, Checkout, Admin) is a separate Next.js app.

- Shared Component Library

  Built with atomic design, shared across all apps via a ui package.

- Next.js Performance

  Uses SSR, SSG, dynamic imports, and caching.

## 🤝 Contributing

Fork the repo & create a branch.

Make your changes and check formatting/linting.

Open a PR with a short description.

## 📄 License

Licensed under the MIT License.

## 💡 Using shadcn/ui

This repo supports shadcn/ui in a monorepo setup.

```bash
pnpm dlx shadcn@latest init
```

### Adding components

To add components to your app, run the following command at the root of any app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

### Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

### Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@micro-store/ui/components/button";
```
