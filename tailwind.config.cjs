/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans Variable'],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
