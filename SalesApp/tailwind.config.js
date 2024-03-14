/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#665749",
          100: "#106659",
          200: "#13918d",
          300: "#1caca8",
          400: "#a29c8d",
          500: "#c4c9b6",
          1: "#FFD700",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("flowbite/plugin")],
};
