import { Link } from 'react-router-dom'
import { footer, nav, site } from '../../data/content'
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
  return (
    <svg {...common}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V6H4Zm16 2.3-7.45 4.66a1 1 0 0 1-1.1 0L4 8.3V18h16V8.3Z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-ink-900/5 bg-cream-100">
      <div className="container-ministry grid gap-10 py-14 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-5">
          <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
            <img src={asset('isf-logo.svg')} alt="" className="h-12 w-12" width={48} height={48} />
            <span className="font-display text-xl font-bold leading-tight text-ink-900">
              International Student<br />Fellowship
            </span>
          </Link>
          <p className="max-w-sm leading-relaxed text-ink-600">{footer.mission}</p>
          <div className="flex items-center gap-2 pt-1">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-600 shadow-sm ring-1 ring-ink-900/5 transition hover:text-ruby-700"
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <nav className="md:col-span-4" aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink-600 transition hover:text-ruby-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 md:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">Connect</h2>
          <p className="text-sm text-ink-600">{footer.contactNote}</p>
          {/* TODO: replace with the real ministry email address. */}
          <a className="link-ministry text-sm" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
          <p className="pt-1 text-xs text-ink-400">{site.university}</p>
        </div>
      </div>

      <div className="border-t border-ink-900/5">
        <div className="container-ministry flex flex-col items-center justify-between gap-2 py-6 text-sm text-ink-500 sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Made with care for students far from home.</p>
        </div>
      </div>
    </footer>
  )
}
