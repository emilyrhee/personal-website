import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        'dracula-bg': '#282a36',
        'dracula-comment': '#6272a4'
      },
      textColor: {
        'dracula-green': '#50fa7b',
        'dracula-fg': '#f8f8f2',
        'dracula-cyan': '#8be9fd'
      }
    },
  },

  plugins: [typography, forms, containerQueries],
} satisfies Config;
