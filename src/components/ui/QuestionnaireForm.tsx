import { useId, useRef, useState, type FormEvent } from 'react'
import { questionnaire } from '../../data/content'
import { accentAt } from '../../lib/accents'

/* ---------------------------------------------------------------------
 *  QuestionnaireForm — the paper International Student Questionnaire,
 *  rebuilt for the web, submitting into the Fall 2026 Google Sheet.
 *
 *  WHY IT POSTS TO A HIDDEN IFRAME INSTEAD OF USING fetch()
 *  --------------------------------------------------------
 *  The site is static, so the only place to send data is Google's Apps
 *  Script endpoint, which lives on a different domain. A fetch() to
 *  another domain needs that server to return CORS headers, and Apps
 *  Script redirects through a second domain in a way that breaks them.
 *  The usual workaround is `mode: 'no-cors'`, but that makes the response
 *  unreadable, so you can never tell a success from a silent failure.
 *
 *  A plain HTML form post has no such restriction: browsers have always
 *  allowed forms to post anywhere. By aiming it at a hidden iframe, the
 *  page doesn't navigate away, and the iframe's `load` event tells us the
 *  submission actually completed. Real confirmation, no CORS, no
 *  third-party service.
 *
 *  The `name` on every input below must match the key in the Apps Script
 *  HEADERS table. That's the contract between the two halves.
 * ------------------------------------------------------------------- */

type Status = 'idle' | 'submitting' | 'done' | 'error'

const REQUIRED = ['firstName', 'familyName', 'gender', 'homeCountry', 'email', 'yearAtCsulb', 'major']

function Field({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
  className = '',
}: {
  label: string
  htmlFor: string
  required?: boolean
  hint?: string
  error?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm font-bold text-ink-800">
        {label}
        {required && <span className="ml-1 text-coral-600" aria-hidden="true">*</span>}
        {!required && <span className="ml-1.5 text-xs font-medium text-ink-400">(optional)</span>}
      </label>
      {hint && <p className="text-xs leading-relaxed text-ink-500">{hint}</p>}
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-xs font-semibold text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

export default function QuestionnaireForm({
  variant = 'card',
  onSubmitted,
}: {
  /** 'bare' drops the card shell, for use inside the modal. */
  variant?: 'card' | 'bare'
  onSubmitted?: () => void
} = {}) {
  const { endpoint, intro, privacy, success, options } = questionnaire

  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [religion, setReligion] = useState('')
  const [gradTerm, setGradTerm] = useState('')
  const [gradYear, setGradYear] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  // unique per instance, so the inline form and the modal form never post
  // into each other's iframe
  const sink = `isf-form-sink-${useId().replace(/:/g, '')}`
  const awaitingReply = useRef(false)
  const timer = useRef<number | undefined>(undefined)

  const configured = Boolean(endpoint)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const data = new FormData(e.currentTarget)
    const next: Record<string, string> = {}

    for (const name of REQUIRED) {
      if (!String(data.get(name) ?? '').trim()) next[name] = 'Please fill this in'
    }
    const email = String(data.get('email') ?? '')
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'That does not look like an email address'

    if (Object.keys(next).length > 0 || !configured) {
      e.preventDefault()
      setErrors(next)
      // put the caret on the first thing that needs fixing
      const first = REQUIRED.find((n) => next[n]) ?? Object.keys(next)[0]
      if (first) document.getElementById(first)?.focus()
      return
    }

    setErrors({})
    awaitingReply.current = true
    setStatus('submitting')
    // If the iframe never loads (offline, endpoint moved), don't leave the
    // student staring at a spinner with no idea what happened.
    timer.current = window.setTimeout(() => {
      awaitingReply.current = false
      setStatus('error')
    }, 15000)
    // no preventDefault: the browser posts to the hidden iframe
  }

  function handleIframeLoad() {
    // Only a load that we're actually waiting for counts. An earlier version
    // of this tried to skip the iframe's initial about:blank load with a
    // "seen one already" flag, which broke in browsers that never fire that
    // first event: the real submission got swallowed as if it were the
    // mount, and the student never saw a confirmation. Gating on our own
    // submit instead is correct either way.
    if (!awaitingReply.current) return
    awaitingReply.current = false
    window.clearTimeout(timer.current)
    setStatus('done')
    onSubmitted?.()
    formRef.current?.reset()
    setReligion('')
    setGradTerm('')
    setGradYear('')
  }

  const shell =
    variant === 'card'
      ? 'card-ministry relative overflow-hidden p-6 sm:p-8'
      : 'relative'

  if (status === 'done') {
    return (
      <div className={`flex flex-col items-center gap-4 p-10 text-center ${variant === 'card' ? 'card-ministry' : ''}`}>
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-grass-100 text-grass-700">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="text-2xl font-extrabold text-ink-900">{success.title}</h3>
        <p className="max-w-sm leading-relaxed text-ink-600">{success.body}</p>
        <button type="button" className="btn-secondary mt-2" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    )
  }

  const inputProps = (name: string) => ({
    id: name,
    name,
    className: `form-input ${errors[name] ? '!border-red-500' : ''}`,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <div className={shell}>
      {variant === 'card' && (
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 rule-rainbow" />
      )}

      <h3 className="text-2xl font-extrabold text-ink-900">{questionnaire.title}</h3>
      <p className="mt-2 leading-relaxed text-ink-600">{intro}</p>

      {!configured && (
        <p className="mt-4 rounded-xl bg-sun-50 px-4 py-3 text-sm leading-relaxed text-sun-800 ring-1 ring-sun-200">
          <strong>Not connected yet.</strong> Add the Apps Script web app URL as{' '}
          <code className="font-mono text-xs">questionnaire.endpoint</code> in{' '}
          <code className="font-mono text-xs">src/data/content.ts</code>. Until then this form will not send,
          and it says so rather than losing somebody&rsquo;s details quietly.
        </p>
      )}

      {status === 'error' && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800 ring-1 ring-red-200">
          Something went wrong sending that. Please try again, or just message us on WhatsApp and we will
          sort it out.
        </p>
      )}

      <form
        ref={formRef}
        action={endpoint || undefined}
        method="post"
        target={sink}
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-6"
        noValidate
      >
        {/* ---------------- who you are ---------------- */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="First name" htmlFor="firstName" required error={errors.firstName}>
            <input type="text" autoComplete="given-name" {...inputProps('firstName')} />
          </Field>
          <Field label="Family name" htmlFor="familyName" required error={errors.familyName}>
            <input type="text" autoComplete="family-name" {...inputProps('familyName')} />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Home country" htmlFor="homeCountry" required error={errors.homeCountry}>
            <input type="text" autoComplete="country-name" {...inputProps('homeCountry')} />
          </Field>
          <Field label="Gender" htmlFor="gender" required error={errors.gender}>
            <select defaultValue="" {...inputProps('gender')}>
              <option value="" disabled>Choose one…</option>
              {options.gender.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" htmlFor="email" required error={errors.email}>
            <input type="email" autoComplete="email" placeholder="you@example.com" {...inputProps('email')} />
          </Field>
          <Field label="Phone number" htmlFor="phone" hint="If you have a US number yet." error={errors.phone}>
            <input type="tel" autoComplete="tel" placeholder="562-555-0123" {...inputProps('phone')} />
          </Field>
        </div>

        {/* ---------------- studies ---------------- */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Year at CSULB" htmlFor="yearAtCsulb" required error={errors.yearAtCsulb}>
            <select defaultValue="" {...inputProps('yearAtCsulb')}>
              <option value="" disabled>Choose one…</option>
              {options.year.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </Field>
          <Field label="Major or department" htmlFor="major" required error={errors.major}>
            <input type="text" {...inputProps('major')} />
          </Field>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-bold text-ink-800">
            Planned graduation <span className="ml-1 text-xs font-medium text-ink-400">(optional)</span>
          </span>
          <div className="grid gap-4 sm:grid-cols-2">
            <select
              id="gradTerm"
              aria-label="Graduation term"
              className="form-input"
              value={gradTerm}
              onChange={(e) => setGradTerm(e.target.value)}
            >
              <option value="">Term</option>
              <option value="Fall">Fall</option>
              <option value="Spring">Spring</option>
            </select>
            <input
              id="gradYear"
              aria-label="Graduation year"
              className="form-input"
              inputMode="numeric"
              placeholder="Year, e.g. 2028"
              value={gradYear}
              onChange={(e) => setGradYear(e.target.value)}
            />
          </div>
          {/* Two boxes for the student, one tidy column in the sheet. */}
          <input type="hidden" name="graduation" value={[gradTerm, gradYear].filter(Boolean).join(' ')} />
        </div>

        <label className="flex items-start gap-3 rounded-xl bg-paper-100 p-4 ring-1 ring-ink-900/5">
          <input type="checkbox" name="exchangeStudent" value="Yes" className="mt-0.5 h-5 w-5 shrink-0 rounded accent-brand-600" />
          <span className="text-sm font-semibold text-ink-800">I&rsquo;m an exchange student</span>
        </label>

        {/* ---------------- what you'd like to hear about ---------------- */}
        <fieldset className="flex flex-col gap-3">
          <legend className="text-sm font-bold text-ink-800">
            I&rsquo;d like to hear about
            <span className="ml-1.5 text-xs font-medium text-ink-400">(tick any)</span>
          </legend>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {options.interests.map((it, i) => {
              const accent = accentAt(i * 2 + 1)
              return (
                <label
                  key={it.name}
                  className="flex cursor-pointer items-start gap-3 rounded-xl bg-white p-3.5 ring-1 ring-ink-900/10 transition hover:ring-brand-300"
                >
                  <input type="checkbox" name={it.name} value="Yes" className="mt-0.5 h-5 w-5 shrink-0 rounded accent-brand-600" />
                  <span className="flex items-center gap-2 text-sm font-medium text-ink-700">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${accent.solid}`} aria-hidden="true" />
                    {it.label}
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>

        {/* ---------------- the two personal questions, both optional ---------------- */}
        <div className="flex flex-col gap-5 rounded-2xl bg-paper-100 p-5 ring-1 ring-ink-900/5">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            Only if you want to
          </p>

          <Field
            label="What best describes your religious belief or tradition?"
            htmlFor="religion"
          >
            <select
              id="religion"
              name="religion"
              className="form-input"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
            >
              <option value="">Prefer not to say</option>
              {options.religions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </Field>

          {religion === 'Other' && (
            <Field label="Tell us more" htmlFor="religionOther">
              <input type="text" id="religionOther" name="religionOther" className="form-input" />
            </Field>
          )}

          <fieldset className="flex flex-col gap-2.5">
            <legend className="text-sm font-bold text-ink-800">
              {questionnaire.dialogueQuestion}
              <span className="ml-1.5 text-xs font-medium text-ink-400">(optional)</span>
            </legend>
            <div className="mt-1 flex flex-wrap gap-2">
              {['Yes', 'Maybe', 'No'].map((v) => (
                <label
                  key={v}
                  className="flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink-700 ring-1 ring-ink-900/10 transition hover:ring-brand-300"
                >
                  <input type="radio" name="openToDialogue" value={v} className="h-4 w-4 accent-brand-600" />
                  {v}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <Field label="Anything else you'd like us to know?" htmlFor="message">
          <textarea id="message" name="message" rows={3} className="form-input" />
        </Field>

        <p className="text-xs leading-relaxed text-ink-500">{privacy}</p>

        <div>
          <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'submitting' || !configured}>
            {status === 'submitting' ? 'Sending…' : questionnaire.submitLabel}
          </button>
        </div>
      </form>

      {/* Where the submission actually goes. Hidden, but not display:none,
          because some browsers won't load a fully hidden iframe. */}
      <iframe
        name={sink}
        title="Form submission target"
        onLoad={handleIframeLoad}
        className="absolute h-0 w-0 border-0 opacity-0"
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  )
}
