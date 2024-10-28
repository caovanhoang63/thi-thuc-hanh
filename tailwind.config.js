/** @type {import("tailwindcss").Config} */

const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js}",
    flowbite.content()
  ],
  theme: {
    extend: {}
  },
  plugins: [flowbite.plugin()]
};
