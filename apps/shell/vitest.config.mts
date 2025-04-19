import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    exclude: [
      "**\/node_modules/**",
      "**\/dist/**",
      "**\/cypress/**",
      "**\/.{idea,git,cache,output,temp}/**",
      "**\/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
      "tests-e2e/**",
    ],

    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      include: [
        "components/**/*.{ts,tsx}",
        "lib/**/*.{ts,tsx}",
        "hooks/**/*.{ts,tsx}",
      ],
      exclude: [
        "**/*.config.*",
        "app/**",
        "**/*.d.ts",
        "node_modules/**",
        "components/footer.tsx",
        "components/providers.tsx",
        "lib/validation.ts",
      ],
      all: true,
    },
  },
});
