/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f5e5c7',
        secondary: '#d4af37',
        accent: '#c7868d',
        'text-primary': '#5c4033',
        'text-secondary': '#000000',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
