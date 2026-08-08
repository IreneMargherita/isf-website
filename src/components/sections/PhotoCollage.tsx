import { useCallback, useEffect, useState } from 'react'
import { PHOTOS, type Photo } from '../../data/photos'
import { accentAt } from '../../lib/accents'
import { asset } from '../../lib/asset'

/* ---------------------------------------------------------------------
 *  PhotoCollage — the real ISF photos, laid out as a mosaic.
 *
 *  Why a CSS `columns` masonry rather than a fixed grid: these photos
 *  have wildly different shapes (a 2.5:1 panorama of body boards next to
 *  a portrait shot of the lighthouse). A fixed grid would have to crop
 *  them all to the same box, which chops people out of group photos.
 *  Masonry lets every photo keep its own shape, which is what makes it
 *  read as a collage instead of a spreadsheet.
 *
 *  PERFORMANCE, which matters a lot here:
 *   - The grid loads only the ~640px thumbs, never the big versions.
 *   - `loading="lazy"` means photos below the fold aren't downloaded
 *     until you scroll near them.
 *   - Each tile reserves space using the photo's aspect ratio, so the
 *     page doesn't jump around as images arrive.
 *   - <picture> serves WebP to browsers that support it and falls back
 *     to JPEG for the ones that don't.
 *   - The full-size image is only fetched when somebody opens a photo.
 * ------------------------------------------------------------------- */

function Tile({ photo, index, onOpen }: { photo: Photo; index: number; onOpen: () => void }) {
  const accent = accentAt(index)
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-paper-200 shadow-ministry ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-ministry-lg sm:mb-5"
      aria-label={`Open photo: ${photo.caption}`}
    >
      <picture>
        <source srcSet={asset(`gallery/thumb/${photo.slug}.webp`)} type="image/webp" />
        <img
          src={asset(`gallery/thumb/${photo.slug}.jpg`)}
          alt={photo.alt}
          loading={index < 4 ? 'eager' : 'lazy'}
          decoding="async"
          style={{ aspectRatio: String(photo.ratio) }}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </picture>

      {/* colour bar keeps the collage tied to the rest of the site */}
      <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${accent.solid}`} />

      {/* caption slides up on hover, and is always visible on touch screens
          where there is no hover to speak of */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-ink-900/85 via-ink-900/45 to-transparent p-4 text-left opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
        <span className="text-sm font-bold leading-snug text-white">{photo.caption}</span>
        {photo.year && <span className="text-xs font-medium text-white/70">{photo.year}</span>}
      </span>
    </button>
  )
}

function Lightbox({
  photo,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  photo: Photo
  index: number
  total: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  // Escape closes, arrows move. Keyboard users should never be trapped
  // in an overlay with no way out.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink-900/92 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
        aria-label="Close photo"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <figure className="flex max-h-full flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
        <picture>
          <source srcSet={asset(`gallery/full/${photo.slug}.webp`)} type="image/webp" />
          <img
            src={asset(`gallery/full/${photo.slug}.jpg`)}
            alt={photo.alt}
            className="max-h-[74vh] w-auto rounded-2xl object-contain shadow-2xl"
          />
        </picture>
        <figcaption className="text-center">
          <p className="font-display text-lg font-bold text-white sm:text-xl">{photo.caption}</p>
          {photo.year && <p className="mt-0.5 text-sm text-white/60">{photo.year}</p>}
        </figcaption>
      </figure>

      <div
        className="mt-5 flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
          aria-label="Previous photo"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <span className="min-w-[4.5rem] text-center text-sm font-semibold text-white/70">
          {index + 1} of {total}
        </span>
        <button
          type="button"
          onClick={onNext}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
          aria-label="Next photo"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function PhotoCollage() {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    [],
  )
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    [],
  )

  return (
    <>
      <div className="columns-2 gap-4 sm:gap-5 md:columns-3 xl:columns-4">
        {PHOTOS.map((photo, i) => (
          <Tile key={photo.slug} photo={photo} index={i} onOpen={() => setOpen(i)} />
        ))}
      </div>

      {open !== null && (
        <Lightbox
          photo={PHOTOS[open]}
          index={open}
          total={PHOTOS.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
