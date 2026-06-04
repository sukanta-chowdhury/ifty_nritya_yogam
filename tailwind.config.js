/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF3E0',
        creamDark: '#F0E4C8',
        gold: '#C8922A',
        goldLight: '#E8C875',
        goldDark: '#9A6E1A',
        brown: '#5C3D1E',
        brownLight: '#8B6542',
        warmWhite: '#FFFDF7',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 8px 40px rgba(140, 90, 30, 0.15)',
        warmLg: '0 20px 60px rgba(140, 90, 30, 0.25)',
      },
      backgroundImage: {
        'radial-gold':
          'radial-gradient(ellipse at center, rgba(232,200,117,0.25) 0%, rgba(250,243,224,0) 60%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceSoft: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        bounceSoft: 'bounceSoft 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
