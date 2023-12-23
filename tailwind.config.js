/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'beige': '#F8F0DC',
        'brown': '#7C594B',
        'light-brown': "#C9A278",
        'green': "#737F71"
      },

      fontFamily: {
        'coiny': ['Coiny'],
        'jetbrains': ['JetBrains Mono'],
        'jetbrains-bold': ['JetBrains Mono', 'sans-serif; font-weight: 700']
      }
    },
  },
  plugins: [],
}

