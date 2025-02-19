import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#c91d1c',
        honey: '#F5C156',
        skyblue: '#7AC6E6',
        charcoal: '#010001',
        purple: '#B25AD8',
      },
      boxShadow: {
        'bottom-dark': '0 8px 0px -1px rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [],
} satisfies Config;
