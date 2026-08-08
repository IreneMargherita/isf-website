/** @type {import('tailwindcss').Config} */

/* =====================================================================
 *  ISF DESIGN SYSTEM
 * ---------------------------------------------------------------------
 *  Every colour below was sampled directly out of the official artwork:
 *  the ISF logo (blue globe ringed by red / blue / yellow / green people)
 *  and the multilingual "Welcome" banner.
 *
 *  HOW THE PALETTE IS MEANT TO BE USED — this matters more than the hex
 *  values, so please keep to it when you add pages:
 *
 *    FUNCTIONAL colour  ->  `brand` (the globe blue), and only `brand`.
 *      Buttons, links, focus rings, active nav. One colour for "you can
 *      act on this" means a visitor learns the rule once and it always
 *      holds.
 *
 *    EXPRESSIVE colour  ->  red, coral, sun, grass, teal, sky, indigo,
 *      grape, berry. These are the Welcome-banner colours. Use them for
 *      eyebrows, tags, icon tiles, card accents, pins, decoration —
 *      anything that adds joy but that nobody needs to *click*.
 *
 *  Never make an accent colour the only signal that something is
 *  interactive: colour-blind visitors and screen readers will miss it.
 * ===================================================================== */

const accent = (o) => o

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  safelist: [
    // Accent classes are composed at runtime (see src/lib/accents.ts), so
    // Tailwind can't see them in the source. Keep them in the build.
    { pattern: /(bg|text|ring|border|from|to|decoration)-(red|coral|sun|grass|teal|sky|indigo|grape|berry|brand)-(50|100|200|300|400|500|600|700|800)/ },
  ],
  theme: {
    extend: {
      colors: {
        /* ---- FUNCTIONAL: the globe blue ------------------------- */
        brand: {
          50: '#eef4fd',
          100: '#d7e6fa',
          200: '#b3cef4',
          300: '#83aeea',
          400: '#5289dc',
          500: '#3a6fc9',
          600: '#2b58ab',
          700: '#24478a',
          800: '#223d70',
          900: '#21365d',
        },

        /* ---- EXPRESSIVE: the Welcome-banner colours ------------- */
        red: accent({
          50: '#fef2f2', 100: '#fde3e4', 200: '#fbc7ca', 300: '#f79aa1',
          400: '#f26a75', 500: '#ea3947', 600: '#d61f2d', 700: '#b41822',
          800: '#941820', 900: '#7c1a20',
        }),
        coral: accent({
          50: '#fff4f0', 100: '#ffe5dc', 200: '#ffc7b4', 300: '#ffa184',
          400: '#fb7d55', 500: '#f2582f', 600: '#db3f18', 700: '#b53113',
          800: '#932c15', 900: '#792916',
        }),
        sun: accent({
          50: '#fffaeb', 100: '#fff1c6', 200: '#ffe288', 300: '#ffd04a',
          400: '#fdbc20', 500: '#eea207', 600: '#cb7b03', 700: '#a25706',
          800: '#85450c', 900: '#71390d',
        }),
        grass: accent({
          50: '#f1faf1', 100: '#ddf3de', 200: '#bde7bf', 300: '#8dd291',
          400: '#57b65c', 500: '#379a3e', 600: '#277b2e', 700: '#216127',
          800: '#1e4d23', 900: '#1a401f',
        }),
        teal: accent({
          50: '#effcfb', 100: '#cbf6f5', 200: '#9deceb', 300: '#64dadb',
          400: '#33bfc3', 500: '#1aa2a7', 600: '#128186', 700: '#13676c',
          800: '#145256', 900: '#144548',
        }),
        sky: accent({
          50: '#f0f9fd', 100: '#ddf0fa', 200: '#b4e2f5', 300: '#7ccdec',
          400: '#40b3de', 500: '#2497c5', 600: '#1979a6', 700: '#186287',
          800: '#1a5170', 900: '#1a445e',
        }),
        indigo: accent({
          50: '#f2f3fb', 100: '#e5e7f7', 200: '#d0d3ef', 300: '#b1b5e3',
          400: '#8f92d4', 500: '#7472c5', 600: '#6157b6', 700: '#55489f',
          800: '#473d81', 900: '#3d3768',
        }),
        grape: accent({
          50: '#fbf4fb', 100: '#f6e8f6', 200: '#eed1ee', 300: '#e0aedf',
          400: '#cd81cb', 500: '#b65bb3', 600: '#9a4197', 700: '#7f367b',
          800: '#692e66', 900: '#582b55',
        }),
        berry: accent({
          50: '#fdf2f9', 100: '#fce7f4', 200: '#fbcfea', 300: '#f8a8d7',
          400: '#f273bb', 500: '#e6489e', 600: '#cf2a7f', 700: '#b31c65',
          800: '#941a54', 900: '#7c1a49',
        }),

        /* ---- NEUTRALS ------------------------------------------ */
        // Warm off-white page field, so the bright accents sit on paper
        // rather than on clinical white.
        paper: {
          50: '#fffdf9',
          100: '#fdf8ef',
          200: '#f7eedd',
          300: '#f0e3ca',
        },
        // Warm near-black, sampled from the logo lettering (#242021).
        ink: {
          50: '#f7f6f5', 100: '#edebe9', 200: '#dbd7d3', 300: '#bcb6b0',
          400: '#928b84', 500: '#6f6862', 600: '#57514c', 700: '#443f3b',
          800: '#2b2825', 900: '#1c1a18',
        },

        /* ---- LEGACY ALIASES ------------------------------------
         * The first version of this site used ruby / ocean / gold /
         * sage / cream. Anything still referencing those keeps working
         * and picks up the new brand colours automatically. Prefer the
         * names above when writing new code.
         * -------------------------------------------------------- */
        ruby: {
          50: '#fff4f0', 100: '#ffe5dc', 200: '#ffc7b4', 300: '#ffa184',
          400: '#fb7d55', 500: '#f2582f', 600: '#db3f18', 700: '#b53113',
          800: '#932c15', 900: '#792916',
        },
        ocean: {
          50: '#eef4fd', 100: '#d7e6fa', 200: '#b3cef4', 300: '#83aeea',
          400: '#5289dc', 500: '#3a6fc9', 600: '#2b58ab', 700: '#24478a',
          800: '#223d70', 900: '#21365d',
        },
        gold: {
          50: '#fffaeb', 100: '#fff1c6', 200: '#ffe288', 300: '#ffd04a',
          400: '#fdbc20', 500: '#eea207', 600: '#cb7b03',
        },
        sage: {
          50: '#f1faf1', 100: '#ddf3de', 200: '#bde7bf', 300: '#8dd291',
          400: '#57b65c', 500: '#379a3e', 600: '#277b2e',
        },
        cream: {
          50: '#fffdf9', 100: '#fdf8ef', 200: '#f7eedd', 300: '#f0e3ca',
        },
      },

      fontFamily: {
        // Outfit is geometric and round-shouldered — it reads friendly and
        // current, where the old Cormorant Garamond read formal/traditional.
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },

      boxShadow: {
        // Cool, blue-tinted elevation to match the globe.
        ministry: '0 12px 34px -16px rgba(33, 54, 93, 0.28), 0 5px 14px -9px rgba(28, 26, 24, 0.10)',
        'ministry-lg': '0 28px 64px -26px rgba(33, 54, 93, 0.32), 0 10px 22px -12px rgba(28, 26, 24, 0.12)',
        pop: '0 0 0 3px rgba(255,255,255,1), 0 10px 30px -12px rgba(33, 54, 93, 0.35)',
      },

      borderRadius: {
        ministry: '1.5rem',
        blob: '2.5rem',
      },

      maxWidth: {
        ministry: '76rem',
      },

      keyframes: {
        'pin-pulse': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(2.2)', opacity: '0' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        'pin-pulse': 'pin-pulse 2.4s ease-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 46s linear infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
      },
    },
  },
  plugins: [],
}
