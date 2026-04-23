// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // This project is deploying to Netlify/Vercel, not Cloudflare Workers.
  // Disabling the Cloudflare adapter keeps the standard server output TanStack
  // prerendering expects during `vite build`.
  cloudflare: false,
  tanstackStart: {
    // This site only uses static routes, so prerender them at build time.
    // That gives Netlify/Vercel real HTML files to serve instead of a 404 at `/`.
    prerender: {
      enabled: true,
    },
  },
});
