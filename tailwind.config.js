/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant-garamond': ['var(--font-cormorant-garamond)'],
        'fleur-de-leah': ['var(--font-fleur-de-leah)'],
      },
      colors: {
        'nepaliredsecond': '#861E1D',
        'weddingbg': '#FFF7F0',
      },
    },
  },
  plugins: [],
}
