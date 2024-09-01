/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dark' : '#000000',  // Dark background
        'neon-green': '#00ff00', // Neon green text and accents
        'neon-green-light': '#0f0', // Lighter shade of neon green for hover effects
        'gray-dark': '#1a1a1a', // Dark gray for subtle background
      },
      fontFamily: {
        'mono': ['Courier New', 'Courier', 'monospace'], // Monospace font for hacker theme
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      boxShadow: {
        'neon': '0 0 10px #00ff00', // Neon glow effect
      },

    },
  },
  plugins: [],
}

