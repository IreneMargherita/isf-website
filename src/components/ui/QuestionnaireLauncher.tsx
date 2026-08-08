import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import QuestionnaireForm from './QuestionnaireForm'
import { questionnaire } from '../../data/content'

/* ---------------------------------------------------------------------
 *  QuestionnaireLauncher — a floating button that opens the student
 *  questionnaire in a dialog, on every page except Connect (where the
 *  form is already sitting there in full).
 *
 *  ON THE AUTO-OPEN
 *  ----------------
 *  `questionnaire.popup.autoOpenSeconds` controls whether the dialog
 *  opens by itself on the home page. It is deliberately a delay rather
 *  than "immediately": a student who has been on the page for a few
 *  seconds has read the headline and knows what ISF is, so the form is
 *  an invitation. The same dialog thrown up in the first half second is
 *  just an obstacle between them and the answer to "what is this?".
 *
 *  It fires at most ONCE per person, ever. Once they close it or send
 *  it, a flag in localStorage keeps it from ever nagging them again.
 *  Set autoOpenSeconds to 0 to turn the automatic opening off entirely
 *  and rely on the button alone.
 *
 *  Anyone who has asked their browser to reduce motion, or who is on a
 *  narrow phone screen, never gets the automatic open. On a small screen
 *  a full-height dialog over the hero is genuinely disorienting.
 * ------------------------------------------------------------------- */

const SEEN_KEY = 'isf.questionnaire.seen'

function alreadySeen() {
  try {
    return window.localStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return false // private browsing with storage blocked: just don't auto-open
  }
}

function markSeen() {
  try {
    window.localStorage.setItem(SEEN_KEY, '1')
  } catch {
    /* nothing we can do, and nothing that matters */
  }
}

export default function QuestionnaireLauncher() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [nudge, setNudge] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // The Connect page already shows the form; a floating button to open a
  // second copy of it would be silly.
  const hidden = pathname === '/connection'

  const close = useCallback(() => {
    setOpen(false)
    markSeen()
    triggerRef.current?.focus()
  }, [])

  /* ---- automatic open, home page only, once per person ---- */
  useEffect(() => {
    if (hidden || pathname !== '/') return
    const delay = questionnaire.popup.autoOpenSeconds
    if (!delay || alreadySeen()) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(max-width: 640px)').matches) return

    const t = window.setTimeout(() => setOpen(true), delay * 1000)
    return () => window.clearTimeout(t)
  }, [pathname, hidden])

  /* ---- the little label that peeks out of the button ---- */
  useEffect(() => {
    if (hidden) return
    const t = window.setTimeout(() => setNudge(true), 2500)
    return () => window.clearTimeout(t)
  }, [hidden])

  /* ---- dialog behaviour: escape to close, lock the page behind it ---- */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // move focus into the dialog so a keyboard user isn't left behind it
    const t = window.setTimeout(() => closeRef.current?.focus(), 60)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      window.clearTimeout(t)
    }
  }, [open, close])

  if (hidden) return null

  return (
    <>
      {/* ---------------- floating button ---------------- */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7">
        <span
          className={`hidden max-w-[15rem] rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-ink-800 shadow-ministry-lg ring-1 ring-ink-900/10 transition-all duration-500 sm:block ${
            nudge && !open ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0'
          }`}
          aria-hidden="true"
        >
          {questionnaire.popup.nudge}
        </span>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-coral-500 via-berry-500 to-grape-600 text-white shadow-ministry-lg transition-transform duration-300 hover:scale-110 focus-visible:scale-110"
          aria-label={questionnaire.popup.buttonLabel}
        >
          {/* a slow halo so the button reads as inviting rather than as an
              alert. Motion-reduced users get the button without the pulse. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-pin-pulse rounded-full bg-berry-400/60 motion-reduce:hidden"
          />
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative" aria-hidden="true">
            <path d="M15.5 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-3.5-3.5Z" />
            <path d="M15 3.5V8h4M8.5 13h7M8.5 16.5h4.5" />
          </svg>
        </button>
      </div>

      {/* ---------------- dialog ---------------- */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink-900/70 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={questionnaire.title}
          onClick={close}
        >
          <div
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-blob bg-white shadow-ministry-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 rule-rainbow" />

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="absolute right-4 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-paper-100 text-ink-600 transition hover:bg-paper-200 hover:text-ink-900"
              aria-label="Close"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="max-h-[86vh] overflow-y-auto p-6 pt-8 sm:p-9 sm:pt-10">
              <QuestionnaireForm variant="bare" onSubmitted={markSeen} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
