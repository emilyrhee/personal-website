/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'beige': '#F8F0DC',
        'brown': '#7C594B'
      },

      fontFamily: {
        'coiny': ['Coiny'],
        'jetbrains': ['JetBrains Mono'],
      }
    },
  },
  plugins: [],
}

