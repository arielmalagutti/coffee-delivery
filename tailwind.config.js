const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        BACKGROUND: "#FAFAFA",

        BASE: {
          TITLE: "#272221",
          SUBTITLE: "#403937",
          TEXT: "#574F4D",
          LABEL: "#8D8686",
          HOVER: "#D7D5D5",
          BUTTON: "#E6E5E5",
          INPUT: "#EDEDED",
          CARD: "#F3F2F2",
        },

        PURPLE: {
          DARK: "#4B2995",
          REGULAR: "#8047F8",
          LIGHT: "#EBE5F9",
        },

        YELLOW: {
          DARK: "#C47F17",
          REGULAR: "#DBAC2C",
          LIGHT: "#F1E9C9",
        },
      },

      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        display: ["Baloo2", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
