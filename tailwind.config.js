/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'yellow-custom': '#FFD600', // Corresponds to rgba(255,214,0,1)
        'light-blue-custom': '#CDFCFF', // Corresponds to rgba(205,252,255,1)
        'gold-custom': '#A08D00', // Corresponds to rgba(160,141,0,1)
      },
    },
  },
  plugins: [],
}