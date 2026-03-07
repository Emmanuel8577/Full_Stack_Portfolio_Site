/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Essential for your Dark/Light theme toggle
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // You can customize your brand colors here
      }
    },
  },
  plugins: [],
}