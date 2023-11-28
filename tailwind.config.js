const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...theme,
      // Overriding fontFamily to use @next/font loaded families
      fontFamily: {
        mono: 'var(--font-mono)',
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      gridTemplateColumns: {
        'xl': '1fr min(84rem, 100% - 7rem) 1fr', // .xl\:grid-cols-xl
        'lg': '3.5rem minmax(0,1fr) 3.5rem', // .lg\:grid-cols-lg
        // 'md': '2.65rem minmax(0,1fr) 2.65rem',
        'sm': '1.75rem minmax(0, 1fr) 1.75rem', // .sm\:grid-cols-sm
        'xs': '0.875rem minmax(0, 1fr) 0.875rem', // .grid-cols-xs
      },
      screens: {
        'xl': '1456px',
        'lg': '1176px',
        'md': '784px',
        'sm': '504px',
        'xs': '0px',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}
