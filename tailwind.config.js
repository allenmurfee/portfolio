const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1e40af",
        "custom-gray": "#f3f4f6",
        "custom-amber": "#fcd34d",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
