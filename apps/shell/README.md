# @micro-store/shell

> **Shell** is the authentication frontend of the Micro‑Store monorepo, handling login, registration, and password recovery flows.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [API Service Module](#api-service-module)
- [Custom Hooks](#custom-hooks)
- [Future Roadmap](#future-roadmap)
- [Getting Started](#getting-started)
- [Contributing](#contributing)

---

## Project Structure

```
shell/
├── app/               # Next.js App Router pages (login, register, forgot-password)
├── components/        # Shared UI components (forms, inputs, etc.)
├── hooks/             # React hooks (useLogin, useRegister, useForgotPassword)
└── lib/               # Core logic & utilities (API module, validation schemas)
```

---

## Configuration

### `next.config.js`

```js
const { STOREFRONT_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@micro-store/ui"],
  async rewrites() {
    return [
      // Redirect root and all paths to the main storefront
      { source: "/", destination: `${STOREFRONT_URL}/` },
      { source: "/:path*", destination: `${STOREFRONT_URL}/:path*` },
    ];
  },
};

export default nextConfig;
```

> This proxy setup allows the authentication shell to reside under `/` while delegating general storefront routes to another zone.

---

## API Service Module

Located in `lib/auth/auth.ts`, this module:

- **Base URL**: reads `API_BASE_URL` or defaults to a public endpoint.
- **`APIError`**: custom Error subclass for HTTP errors.
- **`handleResponse`**: parses JSON/text, throws on non-OK status.
- **Endpoints**:
  - `login(credentials)` → `{ access_token, refresh_token }`
  - `register(userData)` → `{ message }`
  - `forgotPassword(payload)` → `{ message }`

All functions return typed Promises and surface errors consistently.

---

## Custom Hooks

Under `hooks/useAuth.tsx`, three hooks wrap the API module:

```ts
function useLogin(); // loginUser(), loading, error
function useRegister(); // registerUser(), loading, error
function useForgotPassword(); // sendForgotPassword(), loading, error, message
```

They manage `loading` and `error` state with `useState` and `useCallback`.

---

## Future Roadmap

We’ll enhance the authentication flow with:

- [ ] **Email Confirmation**: Send verification links after sign-up.
- [ ] **Improved Security**:
  - Use **HTTP‑only**, **Secure** cookies for tokens.
  - Add **CSRF protection** for stateful routes.
- [ ] **2‑Factor Authentication (2FA)**: OTP via SMS/email or TOTP apps.
- [ ] **Account Lockout**: Temporarily suspend accounts after repeated failures.
- [ ] **CAPTCHA**: Integrate reCAPTCHA/hCaptcha on forms to block bots.

---

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run locally:
   ```bash
   pnpm dev
   ```
3. Build & start:
   ```bash
   pnpm build && pnpm start
   ```

---

## Contributing

1. Fork and create a branch.
2. Implement your changes.
3. Run tests:
   ```bash
   pnpm test
   ```
4. Open a PR against `main`.
