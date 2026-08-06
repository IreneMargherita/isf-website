# International Student Fellowship (ISF) — Website


A warm, welcoming, Christ-centered static website for **International Student
Fellowship (ISF)** at California State University, Long Beach. Built as a fast,
fully static single-page app — no backend, no database, no CMS.

---

## Tech stack

- **React 18** + **TypeScript**
- **Vite 7** (build tooling)
- **Tailwind CSS v3** with a custom, logo-inspired design system
- **React Router v6** with lazy-loaded, code-split pages
- Google Fonts: **Cormorant Garamond** (headings) + **Inter** (body)

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the local dev server (http://localhost:5173)
npm run build    # type-check + build the production site into dist/
npm run preview  # preview the production build locally
```

You need **Node 20.19+ or 22.12+** (Vite 7 requirement).

---

## Deploying — GitHub Pages (current setup)

The site auto-deploys via GitHub Actions (`.github/workflows/deploy.yml`).
The repo **must be named `isf-website`** because `base: '/isf-website/'` in
`vite.config.ts` must match the repo name.

**One-time setup:** push the code to GitHub, then in the repo go to
**Settings → Pages → Source** and choose **"GitHub Actions"**.

**Publishing an update** (the everyday routine):

```bash
git add .
git commit -m "Describe what changed"
git push
```

That's it — the push triggers the workflow, which builds the site and
publishes it to `https://<your-username>.github.io/isf-website/` in ~1–2
minutes (watch progress in the repo's **Actions** tab).

Notes:
- Deep links like `/about` keep working because the `postbuild` script copies
  `index.html` → `404.html` (GitHub Pages serves `404.html` for unknown
  paths, which re-boots the app and lets React Router take over).
- Asset paths resolve through `src/lib/asset.ts` + `import.meta.env.BASE_URL`,
  so the sub-path never needs hardcoding in components.

## Deploying to IONOS (later, with a custom domain)

1. Set `base: '/'` in `vite.config.ts` (the only change needed).
2. Run `npm run build`.
3. Upload **the contents of `dist/`** (not the folder itself) into IONOS
   **`public_html`** via the File Manager or an SFTP client (e.g. FileZilla).
   Include the hidden **`.htaccess`** file — it rewrites deep links like
   `/about` back to the app so refreshing works (same job the `404.html`
   trick does on GitHub Pages).
4. To publish updates later, re-run `npm run build` and re-upload `dist/`.

---

## Where to edit things

### ✏️ All text / copy — `src/data/content.ts`
**Every** headline, paragraph, list, testimonial, event, and label lives in this
one file. Edit it to change wording anywhere on the site — you do not need to
touch component code. Items marked `// TODO` are placeholders to replace.

### 🖼️ Images
- **Logo** — `public/isf-logo.svg`. This is a clean recreation of the ISF logo.
  Replace it with your official artwork (keep the filename `isf-logo.svg`, or
  swap in a PNG and update the `asset('isf-logo.svg')` references in
  `Header.tsx`, `Footer.tsx`, and `sections/Hero.tsx`).
- **Gallery photos** — the Gallery tiles are colored placeholders. To use real
  photos: drop images into `public/gallery/`, then update
  `src/pages/Gallery.tsx` to render `<img src={asset('gallery/your-photo.jpg')} .../>`
  in place of the placeholder tiles (import `asset` from `../lib/asset`).
- **Leader photos** — in `src/data/content.ts`, set each leader's `image` field
  to a path like `"leaders/jane.jpg"` and place the file in `public/leaders/`.
  If `image` is empty, a tasteful initials avatar is shown automatically.
- Why `asset(...)` instead of a plain `"/path"`? On GitHub Pages the site
  lives under `/isf-website/`, not the domain root — the helper prepends the
  right prefix automatically in every environment (see `src/lib/asset.ts`).

### 🎨 Colors, fonts, shadows — `tailwind.config.js`
The full palette (ruby / ocean / gold / sage / cream / ink) is documented with
comments at the top of `tailwind.config.js`. Custom helpers
(`btn-primary`, `btn-secondary`, `card-ministry`, `ministry-tag`,
`container-ministry`, `section-divider`, `shadow-ministry`, `form-input`) live
in `src/index.css`.

---

## Connecting the forms (later)

The **Connect** and **Prayer Request** pages include forms that are
**visual placeholders only — they do not submit anywhere yet** (clearly noted in
the UI). The working email buttons next to them reach the ministry directly in
the meantime.

To make a form live, the easiest option is **Formspree** (free tier):

1. Create a form at <https://formspree.io> and copy your endpoint
   (e.g. `https://formspree.io/f/abcdwxyz`).
2. Open `src/components/ui/StaticForm.tsx` and:
   - add `action="https://formspree.io/f/abcdwxyz"` and `method="POST"` to the
     `<form>` tag,
   - remove the `onSubmit={(e) => e.preventDefault()}` handler,
   - remove the `disabled` attribute on the submit button,
   - add a `name` to each field (already present).
3. Commit and push — the site redeploys automatically.

Other options: **Google Forms** (embed or link), **Netlify Forms** (if hosted on
Netlify), or any form service that accepts a POST.

---

## TODO checklist (replace placeholders)

- [ ] Real contact email — `site.contactEmail` in `src/data/content.ts`
- [ ] Social links — `site.social` (Instagram / Facebook URLs)
- [ ] Leadership names, roles, bios, and photos — `leadership.leaders`
- [ ] Real testimonials (with permission) — `testimonials.stories`
- [ ] Upcoming / past events — `gallery.upcoming` and `gallery.past`
- [ ] Gallery photos — `public/gallery/` + `src/pages/Gallery.tsx`
- [ ] Resource links (currently `#`) — `resources.sections`
- [ ] Donation link — `give.giving.primaryCta.href` in `src/data/content.ts`
- [ ] Connect the Connect + Prayer forms (see above)
- [ ] Swap in the official logo — `public/isf-logo.svg`

---

## Project structure

```
src/
  components/
    layout/   Header, Footer, Layout, ScrollToTop
    ui/       Button, Card, SectionHeader, MinistryTag, PageHero, StaticForm, icons
    sections/ Hero, ImpactMap, WeeklyRhythm, CallToAction, TestimonialPreview
  data/
    content.ts   ← single source of truth for ALL copy
  pages/      Home, About, Curriculum, Leadership, Testimonials,
              Connection, PrayerRequest, Resources, Gallery, Give, NotFound
  App.tsx     routes (all pages lazy-loaded / code-split)
  main.tsx    app entry (BrowserRouter)
  index.css   Tailwind layers + custom ministry utility classes
public/
  isf-logo.svg   logo asset
  .htaccess      SPA routing fallback for IONOS (ships into dist/)
```

---

Made with care for students far from home.
