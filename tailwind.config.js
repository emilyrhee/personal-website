/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'beige': '#F8F0DC',
        'dark-beige': '#C5BEAE',
        'brown': '#7C594B',
        'light-brown': "#a88763",
        'medium-brown':'#8F6954',
        'green': "#737F71",
        'dark-green': "#50624F",
        'red': '#9B706A',
        'blue': '#7B8A8E'
      },

      fontFamily: {
        'coiny': ['Coiny'],
        'jetbrains': ['JetBrains Mono'],
        'jetbrains-bold': ['JetBrains Mono', 'sans-serif; font-weight: 700']
      },
    },
  },
  plugins: [],
}

