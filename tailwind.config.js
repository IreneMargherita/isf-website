/** @type {import('tailwindcss').Config} */

/*
 * ISF DESIGN SYSTEM — palette extracted from the ISF logo.
 * The logo shows a blue globe ("ISF") encircled by a ring of people whose
 * heads are colored red, blue, gold and green, set on a warm off-white field.
 *
 *   ruby   -> the red figures  (primary accent / buttons / links)
 *   ocean  -> the blue globe    (secondary accent)
 *   gold   -> the yellow figures (warm highlight, used sparingly)
 *   sage   -> the green figures  (supporting accent)
 *   cream  -> warm off-white backgrounds (page + panels)
 *   ink    -> warm neutral grays for text (not cold black/gray)
 *
 * If you replace the logo with the official artwork and the colors differ,
 * adjust the hex values below — every component reads from these tokens.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfaf4',
          100: '#faf4e9',
          200: '#f3e8d6',
          300: '#ecdcc2',
        },
        ruby: {
          50: '#fcf3f4',
          100: '#f9e3e6',
          200: '#f1c2c9',
          300: '#e596a3',
          400: '#d65f74',
          500: '#c43a52',
          600: '#a82b41',
          700: '#8c2438',
          800: '#75212f',
          900: '#631f2b',
        },
        ocean: {
          50: '#eef6fc',
          100: '#d6e9f6',
          200: '#b0d3ec',
          300: '#7fb6df',
          400: '#4a92cd',
          500: '#2b73b3',
          600: '#1f5b95',
          700: '#1c4a78',
          800: '#1b3f63',
          900: '#1a3753',
        },
        gold: {
          50: '#fdf7e8',
          100: '#f9ecc4',
          200: '#f3db8e',
          300: '#ecc451',
          400: '#e3ab28',
          500: '#cf9116',
          600: '#b07410',
        },
        sage: {
          50: '#eef6ef',
          100: '#d7e9d8',
          200: '#b0d4b3',
          300: '#82b887',
          400: '#57995e',
          500: '#3d7e45',
          600: '#2f6537',
        },
        ink: {
          50: '#f7f5f3',
          100: '#eee9e4',
          200: '#ddd5cd',
          300: '#c3b8ac',
          400: '#9a8d80',
          500: '#75695e',
          600: '#5b5149',
          700: '#463e38',
          800: '#2f2a26',
          900: '#1f1b18',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        // custom "shadow-ministry" utility — soft, warm-toned elevation
        ministry: '0 14px 40px -18px rgba(120, 30, 45, 0.28), 0 6px 16px -10px rgba(31, 27, 24, 0.10)',
        'ministry-lg': '0 30px 70px -28px rgba(120, 30, 45, 0.34), 0 10px 24px -12px rgba(31, 27, 24, 0.12)',
      },
      borderRadius: {
        ministry: '1.4rem',
      },
      maxWidth: {
        ministry: '72rem',
      },
      keyframes: {
        'pin-pulse': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(2.2)', opacity: '0' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pin-pulse': 'pin-pulse 2.4s ease-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
