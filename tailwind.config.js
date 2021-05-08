// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or false or 'class'
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "ui-sans-serif", "system-ui"],
      mono: ["Fira Code", "ui-monospace", "SFMono-Regular"],
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        indigo: "#094074",
        "queen-blue": "#3C6997",
        "sky-blue": "#5ADBFF",
        mustard: "#FFDD4A",
        "yellow-orange": "#FE9000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
