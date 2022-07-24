/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './ index.html',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['placeholder']
    }
  },
  plugins: [],
}
