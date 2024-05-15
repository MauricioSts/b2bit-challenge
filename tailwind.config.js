/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        test: ['Roboto', 'sans-serif'],
      },
      colors: {
        'b2b-primary': '#02274F',
        'b2b-black': '#262626',
        'b2b-secondary': '#FDCF00',
      },
      boxShadow: {
        'b2b-shadow': '0px 0px 64px 0px #00000040',
      },
    },
  },
  plugins: [],
};
