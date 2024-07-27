import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'light-grey': '#f7f7f7',
        'dark-grey': '#333',
        'purple': '#633CFF',
        'mediumslateblue-100': '#7b68ee',
        'grey': '#888',
        'borders': '#ccc',
        'ring-2' : 'box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
      },
    },
    fontFamily: {
      'gotham-bold': ['Gotham Bold', 'sans-serif'],
      'heading-s': ['Heading S', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
