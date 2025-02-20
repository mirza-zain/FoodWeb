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
        'bottom-dark': '0 7px 0px -1px rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.stroke-1': {
          '-webkit-text-stroke-width': '2px',
        },
        '.stroke-2': {
          '-webkit-text-stroke-width': '4px',
        },
        '.stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
        '.stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} satisfies Config;
