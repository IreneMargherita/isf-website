import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` is the URL prefix the whole site is served from.
// GitHub Pages "project sites" live at https://<username>.github.io/<repo>/,
// so base MUST match the repo name exactly, with slashes on both sides.
// Everything else derives from this one line: React Router reads it via
// import.meta.env.BASE_URL (see src/main.tsx) and public assets resolve
// through src/lib/asset.ts. If the site later moves to a custom domain or
// IONOS (served from the root), change this back to '/' — nothing else.
export default defineConfig({
  plugins: [react()],
  base: '/isf-website/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
