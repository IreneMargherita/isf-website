// asset() — resolve a file that lives in /public to its real URL at runtime.
//
// Why this exists: the site is not always served from the domain root.
// On GitHub Pages it lives under a sub-path (https://<user>.github.io/isf-website/),
// while in local dev and on IONOS it lives at "/". A hardcoded src="/isf-logo.svg"
// would break the moment the base path changes.
//
// Vite exposes the configured base path as import.meta.env.BASE_URL
// ("/" in dev, "/isf-website/" in the GitHub Pages build), so we prefix
// every public asset with it in exactly one place. If the deploy target
// ever changes again, only vite.config.ts needs to change — no component edits.
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
