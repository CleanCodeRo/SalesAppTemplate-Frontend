/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      "3xl": "1800px",
      "2xl": "1536px",
      "xl": "1280px",
      "lg": "1024px",
      "md": "768px",
      "sm": "640px",
      "extra_sm": "400px"
    },
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
