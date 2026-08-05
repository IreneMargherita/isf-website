interface FormField {
  name: string
  label: string
  type: string
  placeholder?: string
  required?: boolean
  options?: string[]
}

interface StaticFormProps {
  title: string
  note: string
  fields: FormField[]
  submitLabel: string
}

/**
 * StaticForm — a VISUAL PLACEHOLDER only. It intentionally does not submit.
 *
 * TODO (connect later): wire this up to a form service such as Formspree,
 * Google Forms, or Netlify Forms. The simplest path with Formspree:
 *   1) Create a form, copy your endpoint (https://formspree.io/f/xxxx).
 *   2) Add:  action="https://formspree.io/f/xxxx" method="POST"
 *   3) Remove the onSubmit handler + the `disabled` attribute on the button.
 * See README ("Connecting the forms") for full instructions.
 */
export default function StaticForm({ title, note, fields, submitLabel }: StaticFormProps) {
  return (
    <form
      className="card-ministry flex flex-col gap-5"
      onSubmit={(e) => e.preventDefault()}
      noValidate
      aria-describedby="static-form-note"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p
        id="static-form-note"
        className="rounded-xl bg-gold-50 px-4 py-3 text-sm leading-relaxed text-ink-600 ring-1 ring-gold-200"
      >
        {note}
      </p>

      <div className="grid gap-5">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label htmlFor={field.name} className="text-sm font-semibold text-ink-700">
              {field.label}
              {field.required && <span className="text-ruby-600" aria-hidden="true"> *</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                rows={4}
                className="form-input resize-y"
              />
            ) : field.type === 'select' ? (
              <select id={field.name} name={field.name} className="form-input" defaultValue="">
                <option value="" disabled>
                  Choose one…
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="form-input"
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="btn-primary self-start opacity-70"
        disabled
        aria-disabled="true"
        title="This placeholder form is not connected yet — please use the email button instead."
      >
        {submitLabel}
      </button>
    </form>
  )
}
