import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` is the URL prefix the whole site is served from, and it is the
// single line that decides where every stylesheet, script and image is
// looked up. Everything else derives from it: React Router reads it via
// import.meta.env.BASE_URL (see src/main.tsx) and public assets resolve
// through src/lib/asset.ts.
//
//   '/'              -> served from the root of its own domain
//                       (https://isfbeach.org/), which is where we are now
//   '/isf-website/'  -> served from a subfolder, which is what GitHub Pages
//                       does at https://irenemargherita.github.io/isf-website/
//
// Changed to '/' on 2026-08-08 when isfbeach.org went live. If you ever
// need the github.io URL to work properly again, put it back. The two
// cannot both be correct at once, because the prefix is baked into the
// built files at BUILD time, not chosen at request time.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
