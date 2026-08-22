import { useFeaturedEvent } from '../../lib/featuredEvent'

/* ---------------------------------------------------------------------
 *  EventAlert — the home page banner for the one event you can actually
 *  register for right now.
 *
 *  It renders NOTHING once the event is past. Not a greyed-out card, not
 *  "this event has ended". An empty space says nothing; a stale banner
 *  says nobody is looking after this website, which is exactly the
 *  opposite of what a student deciding whether to trust you should think.
 * ------------------------------------------------------------------- */

export default function EventAlert() {
  const event = useFeaturedEvent()
  if (!event) return null

  return (
    <section className="container-ministry -mt-2 pb-2 pt-10 sm:pt-12">
      <a
        href={event.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-blob bg-gradient-to-r from-coral-500 via-berry-500 to-grape-600 p-[3px] shadow-ministry-lg transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
      >
        <div className="relative flex flex-col gap-4 rounded-[calc(theme(borderRadius.blob)-3px)] bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-9 sm:py-7">
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                {/* the ping is decorative only, and motion-reduced users get
                    a plain dot instead of a pulsing one */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-500 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral-600" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-coral-700">
                {event.banner.eyebrow}
              </span>
            </span>

            <h2 className="font-display text-xl font-black leading-tight text-ink-900 sm:text-2xl">
              {event.banner.title}
            </h2>
            <p className="text-sm font-semibold text-ink-600 sm:text-base">{event.banner.detail}</p>
          </div>

          {/* Not a real <button>: this whole banner is already one link, and
              a button inside a link is invalid HTML that screen readers and
              keyboards both handle badly. It only needs to LOOK clickable. */}
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-ministry transition-colors duration-200 group-hover:bg-brand-700"
          >
            {event.banner.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </a>
    </section>
  )
}
