/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 0px 150px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        '3xl': '0px 0px 150px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

