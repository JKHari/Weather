/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('./image/bg-4.jpg')",
        backMini : "url('./image/bg5.jpg')"
      },
    },
  },
  plugins: [],
};
