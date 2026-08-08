/* =====================================================================
 *  ACCENT HELPERS
 * ---------------------------------------------------------------------
 *  The palette has nine expressive colours (see tailwind.config.js).
 *  Rather than hard-coding "this card is teal" in twenty places, every
 *  component asks for accent number N and gets a matching set of classes
 *  back. Cycle through them with the item's index and the whole site
 *  picks up the Welcome-banner rainbow automatically — and stays
 *  consistent, because there is exactly one list.
 *
 *  Text tones are deliberately the -700/-800 steps on a -50 background:
 *  that combination clears WCAG AA contrast (4.5:1) for small text,
 *  which the bright -400/-500 steps do not.
 * ===================================================================== */

export type AccentName =
  | 'red' | 'coral' | 'sun' | 'grass' | 'teal' | 'sky' | 'indigo' | 'grape' | 'berry'

export interface Accent {
  name: AccentName
  /** Pale chip: background + readable text. Safe for small text. */
  chip: string
  /** Filled icon tile: pale background + saturated icon colour. */
  tile: string
  /** Solid fill for large shapes only (never small text on top). */
  solid: string
  /** Just the text colour, at a readable weight. */
  text: string
  /** Hairline / border colour. */
  ring: string
  /** Raw hex, for SVG fills and inline styles. */
  hex: string
}

export const ACCENTS: Accent[] = [
  { name: 'red',    chip: 'bg-red-50 text-red-800',       tile: 'bg-red-100 text-red-700',       solid: 'bg-red-500',    text: 'text-red-700',    ring: 'ring-red-200',    hex: '#ea3947' },
  { name: 'coral',  chip: 'bg-coral-50 text-coral-800',   tile: 'bg-coral-100 text-coral-700',   solid: 'bg-coral-500',  text: 'text-coral-700',  ring: 'ring-coral-200',  hex: '#f2582f' },
  { name: 'sun',    chip: 'bg-sun-50 text-sun-800',       tile: 'bg-sun-100 text-sun-700',       solid: 'bg-sun-400',    text: 'text-sun-800',    ring: 'ring-sun-200',    hex: '#fdbc20' },
  { name: 'grass',  chip: 'bg-grass-50 text-grass-800',   tile: 'bg-grass-100 text-grass-700',   solid: 'bg-grass-500',  text: 'text-grass-700',  ring: 'ring-grass-200',  hex: '#57b65c' },
  { name: 'teal',   chip: 'bg-teal-50 text-teal-800',     tile: 'bg-teal-100 text-teal-700',     solid: 'bg-teal-500',   text: 'text-teal-700',   ring: 'ring-teal-200',   hex: '#1aa2a7' },
  { name: 'sky',    chip: 'bg-sky-50 text-sky-800',       tile: 'bg-sky-100 text-sky-700',       solid: 'bg-sky-500',    text: 'text-sky-700',    ring: 'ring-sky-200',    hex: '#40b3de' },
  { name: 'indigo', chip: 'bg-indigo-50 text-indigo-800', tile: 'bg-indigo-100 text-indigo-700', solid: 'bg-indigo-500', text: 'text-indigo-700', ring: 'ring-indigo-200', hex: '#7472c5' },
  { name: 'grape',  chip: 'bg-grape-50 text-grape-800',   tile: 'bg-grape-100 text-grape-700',   solid: 'bg-grape-500',  text: 'text-grape-700',  ring: 'ring-grape-200',  hex: '#b65bb3' },
  { name: 'berry',  chip: 'bg-berry-50 text-berry-800',   tile: 'bg-berry-100 text-berry-700',   solid: 'bg-berry-500',  text: 'text-berry-700',  ring: 'ring-berry-200',  hex: '#e6489e' },
]

/** Accent for position `i` in any list — wraps around automatically. */
export const accentAt = (i: number): Accent => ACCENTS[((i % ACCENTS.length) + ACCENTS.length) % ACCENTS.length]

/** Look one up by name, falling back to the first. */
export const accentByName = (name?: string): Accent =>
  ACCENTS.find((a) => a.name === name) ?? ACCENTS[0]

/* ---------------------------------------------------------------------
 *  "Welcome" in the languages printed on the ISF banner.
 *  Kept as live text rather than a flat image so it stays crisp at every
 *  size, reflows on a phone, and can be read aloud by a screen reader.
 *  `lang` is set on each item so browsers pick the right font and
 *  assistive tech switches pronunciation.
 * ------------------------------------------------------------------- */
export interface WelcomeWord {
  text: string
  lang: string
  /** Language name, for the title tooltip. */
  label: string
  rtl?: boolean
}

export const WELCOME_WORDS: WelcomeWord[] = [
  { text: 'Welcome', lang: 'en', label: 'English' },
  { text: '欢迎', lang: 'zh-Hans', label: 'Chinese' },
  { text: 'स्वागतम्', lang: 'hi', label: 'Hindi' },
  { text: 'ようこそ', lang: 'ja', label: 'Japanese' },
  { text: 'Bienvenido', lang: 'es', label: 'Spanish' },
  { text: 'مرحباً', lang: 'ar', label: 'Arabic', rtl: true },
  { text: 'Chào mừng', lang: 'vi', label: 'Vietnamese' },
  { text: '환영합니다', lang: 'ko', label: 'Korean' },
  { text: 'Bienvenue', lang: 'fr', label: 'French' },
  { text: 'Добро пожаловать', lang: 'ru', label: 'Russian' },
  { text: 'Bem-vindo', lang: 'pt', label: 'Portuguese' },
  { text: 'Hoşgeldiniz', lang: 'tr', label: 'Turkish' },
  { text: 'Willkommen', lang: 'de', label: 'German' },
  { text: 'خوش آمدید', lang: 'fa', label: 'Persian', rtl: true },
  { text: 'καλωσόρισμα', lang: 'el', label: 'Greek' },
  { text: 'Benvenuto', lang: 'it', label: 'Italian' },
  { text: 'ਜੀ ਆਇਆਂ ਨੂੰ', lang: 'pa', label: 'Punjabi' },
  { text: 'Witamy', lang: 'pl', label: 'Polish' },
  { text: 'שלום', lang: 'he', label: 'Hebrew', rtl: true },
  { text: 'Velkommen', lang: 'da', label: 'Danish' },
  { text: 'Welkom', lang: 'nl', label: 'Dutch' },
  { text: 'Vítáme vás', lang: 'cs', label: 'Czech' },
  { text: 'Fàilte', lang: 'gd', label: 'Scottish Gaelic' },
  { text: 'Croeso', lang: 'cy', label: 'Welsh' },
  { text: 'ยินดีต้อนรับ', lang: 'th', label: 'Thai' },
  { text: 'Karibu', lang: 'sw', label: 'Swahili' },
]
