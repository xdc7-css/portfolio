/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient1: "#0a0f1f",
        gradient2: "#0b111f",
        gradient3: "#1e112e",
        gradient4: "#201737",
      },
    },
  },
  plugins: [],
}
