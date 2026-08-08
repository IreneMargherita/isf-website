import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../../data/content'
import { accentAt } from '../../lib/accents'
import { asset } from '../../lib/asset'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Give the bar a shadow once the page has scrolled, so it detaches
  // visually from the hero instead of floating ambiguously over it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <header
      className={`sticky top-0 z-40 bg-paper-50/90 backdrop-blur transition-shadow supports-[backdrop-filter]:bg-paper-50/75 ${
        scrolled ? 'shadow-[0_6px_24px_-16px_rgba(28,26,24,0.4)]' : ''
      }`}
    >
      {/* Rainbow hairline — a two-pixel nod to the Welcome banner */}
      <div aria-hidden="true" className="h-1 w-full rule-rainbow" />

      <nav className="container-ministry flex h-[4.5rem] items-center justify-between gap-4" aria-label="Primary">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
          <img
            src={asset('isf-logo-mark.png')}
            alt=""
            className="h-12 w-12 shrink-0 object-contain transition-transform duration-300 group-hover:rotate-6"
            width={48}
            height={48}
          />
          <span className="flex flex-col leading-[1.1]">
            <span className="font-display text-[0.95rem] font-extrabold tracking-tight text-ink-900 sm:text-base">
              International Student
              <br />
              Fellowship
            </span>
            <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
              Long Beach
            </span>
          </span>
        </Link>

        {/* Desktop navigation — each item owns one accent colour, so the
            nav reads as a row of friendly tabs rather than grey text. */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item, i) => {
            const accent = accentAt(i)
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive ? accent.chip : 'text-ink-600 hover:bg-paper-200 hover:text-ink-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            )
          })}
        </ul>

        <a href="sms:+15626066160" className="btn-primary hidden !px-5 !py-2.5 xl:inline-flex">
          Text us
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2.5 text-ink-700 transition hover:bg-brand-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
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
        <ul className="container-ministry flex flex-col gap-1.5 border-t border-ink-900/5 py-4">
          {nav.map((item, i) => {
            const accent = accentAt(i)
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3.5 text-base font-semibold transition ${
                      isActive ? accent.chip : 'text-ink-700 hover:bg-paper-100'
                    }`
                  }
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${accent.solid}`} aria-hidden="true" />
                  {item.label}
                </NavLink>
              </li>
            )
          })}
          <li className="mt-2">
            <a href="sms:+15626066160" className="btn-primary w-full">
              Text us at 562-606-6160
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
