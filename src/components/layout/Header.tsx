import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../../data/content'
import { asset } from '../../lib/asset'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // While the mobile menu is open: close on Escape and lock background scroll.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-ruby-50 text-ruby-700' : 'text-ink-600 hover:bg-cream-100 hover:text-ruby-700'
    }`

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-4 py-3 text-base font-medium transition ${
      isActive ? 'bg-ruby-50 text-ruby-700' : 'text-ink-700 hover:bg-cream-100'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-cream-50/85 backdrop-blur supports-[backdrop-filter]:bg-cream-50/70">
      <nav className="container-ministry flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          <img src={asset('isf-logo.svg')} alt="" className="h-10 w-10" width={40} height={40} />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-ink-900">ISF</span>
            <span className="text-[0.65rem] uppercase tracking-[0.16em] text-ink-500">Long Beach</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'} className={desktopLink}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink-700 transition hover:bg-cream-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div id="mobile-menu" className={open ? 'lg:hidden' : 'hidden'}>
        <ul className="container-ministry flex flex-col gap-1 border-t border-ink-900/5 py-4">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'} className={mobileLink}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
