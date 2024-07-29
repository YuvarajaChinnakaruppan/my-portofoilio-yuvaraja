/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        lora: ["Lora", 'serif'],
        oxygen: ["Oxygen", "sans-serif"]
      },
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'pop-short': 'pop 1s infinite', // Short duration
        'pop-medium': 'pop 2s infinite', // Medium duration
        'pop-long': 'pop 3s infinite', // Long duration
      },
    },
  },
  plugins: [],
}

