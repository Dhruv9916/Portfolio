/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=2940&auto=format&fit=crop')",
      },
      colors: {
        crimson: '#DC143C',
      },
    },
  },
  plugins: [],
}