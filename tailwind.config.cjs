/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        // defaults
        white: "#fff",
        black: "#09090a",

        /* New colors rocketseat */
        // Body/Footer
        colorBg: "#121214",
        colorFt: "#202024",

        // rockets
        rLight: "#996DFF",
        logoRock: "#8257E5",
        rDark: "#633BBC",
        rLow: "#271A45",

        primary: "#8257e5",
        primaryDarker: "#28203e",
        primaryHover: "#9466ff",
        primaryBorder: "#6833e4",
        primaryShape: "#734bd1",
        primaryLight: "#996dff",

        shape: "#202024",
        shapeDark: "#3c3c42",
        shapeHover: "#29292e",

        green: "#04d361",

        // Text's
        Ttitle: "#E1E1E6",
        Tbase: "#C4C4CC",
        Tsupport: "#8D8D99",
        text: "#a8a8b3",

        // place and input
        placeholder: "#7C7C8A",
        icons: "#505059",
      },
      keyframes: {
        gengar: {
          "0%": { transform: "scale(0.95)" },
          "70%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.95)" },
        },
      },
      animation: {
        gengar: "gengar 2s infinite",
      },
      dropShadow: {
        rsrs: "0 0 1em rgb(36, 15, 70)",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
