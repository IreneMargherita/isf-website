import { Link } from 'react-router-dom'
import { footer, nav, site } from '../../data/content'
import { accentAt } from '../../lib/accents'
import { asset } from '../../lib/asset'

function SocialIcon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true as const,
  }
  if (name === 'instagram') {
    return (
      <svg {...common}>
        <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .47 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.43.17-.74.37-1.06.7-.32.32-.52.63-.7 1.06-.12.3-.28.8-.32 1.7C3.2 8.5 3.2 8.9 3.2 12s0 3.5.07 4.7c.04.9.2 1.4.32 1.7.17.43.37.74.7 1.06.32.32.63.52 1.06.7.3.12.8.28 1.7.32 1.2.06 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.43-.17.74-.37 1.06-.7.32-.32.52-.63.7-1.06.12-.3.28-.8.32-1.7.06-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.04-.9-.2-1.4-.32-1.7a2.9 2.9 0 0 0-.7-1.06 2.9 2.9 0 0 0-1.06-.7c-.3-.12-.8-.28-1.7-.32C15.5 4 15.1 4 12 4Zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06Zm0 1.8A3.14 3.14 0 1 0 15.14 12 3.14 3.14 0 0 0 12 8.86Zm5.14-3.3a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" />
      </svg>
    )
  }
  if (name === 'facebook') {
    return (
      <svg {...common}>
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    )
  }
  if (name === 'whatsapp') {
    return (
      <svg {...common}>
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.2 15.03l-.3-.18-3.08.89.9-3-.2-.31A8.1 8.1 0 0 1 12.05 3.8Zm-3.7 4.1c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.9 3.02 4.68 4.11 2.31.91 2.78.73 3.28.68.5-.04 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.53-.32-.27-.13-1.62-.8-1.87-.89-.25-.09-.43-.13-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.6.07-.27-.14-1.15-.43-2.19-1.36-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.13-.12.27-.32.4-.48.14-.16.18-.27.28-.46.09-.18.04-.34-.02-.48-.07-.13-.6-1.48-.83-2.02-.22-.53-.44-.46-.6-.47l-.5-.01Z" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V6H4Zm16 2.3-7.45 4.66a1 1 0 0 1-1.1 0L4 8.3V18h16V8.3Z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 bg-ink-900 text-ink-200">
      {/* Rainbow cap so the dark footer arrives as a flourish, not a wall */}
      <div aria-hidden="true" className="h-1.5 w-full rule-rainbow" />

      <div className="container-ministry grid gap-12 py-16 md:grid-cols-12">
        <div className="flex flex-col gap-5 md:col-span-5">
          <Link to="/" className="inline-flex w-fit items-center gap-3" aria-label={`${site.name}, home`}>
            <span className="rounded-2xl bg-white p-2.5">
              <img src={asset('isf-logo-mark.png')} alt="" className="h-12 w-12 object-contain" width={48} height={48} />
            </span>
            <span className="font-display text-xl font-extrabold leading-tight text-white">
              International Student
              <br />
              Fellowship
            </span>
          </Link>
          <p className="max-w-sm leading-relaxed text-ink-300">{footer.mission}</p>

          <div className="flex items-center gap-2.5 pt-1">
            {site.social.map((s, i) => {
              const accent = accentAt(i * 3)
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5"
                  style={{ ['--hover' as string]: accent.hex }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accent.hex)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                  {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <SocialIcon name={s.icon} />
                </a>
              )
            })}
          </div>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink-400">Explore</h2>
          <ul className="mt-5 flex flex-col gap-2.5">
            {nav.map((item, i) => {
              const accent = accentAt(i)
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2.5 text-ink-200 transition hover:text-white"
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${accent.solid} transition-transform group-hover:scale-150`}
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 md:col-span-4">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink-400">
            Call or text
          </h2>
          <p className="text-sm leading-relaxed text-ink-300">{footer.contactNote}</p>
          <ul className="flex flex-col gap-2">
            {site.contacts.phones.map((p) => (
              <li key={p.display}>
                <a
                  href={p.tel}
                  className="inline-flex items-baseline gap-2 font-semibold text-white transition hover:text-sun-300"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-400">{p.name}</span>
                  {p.display}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.contacts.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 w-fit font-semibold text-white transition hover:text-berry-300"
          >
            Instagram {site.contacts.instagram.handle}
          </a>
          <p className="mt-3 rounded-xl bg-white/5 px-4 py-3 text-xs leading-relaxed text-ink-300">
            {footer.clubNote}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-ministry flex flex-col items-center justify-between gap-2 py-6 text-sm text-ink-400 sm:flex-row">
          <p>
            &copy; {year} {site.name}
          </p>
          <p>Everyone welcome. Always free.</p>
        </div>
      </div>
    </footer>
  )
}
