module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bangers: ["Bangers", "Sans"],
      spaceMono: ["Space Mono", "monospace"],
      roboto: ["Roboto", "Halvetica", "Arial"],
    },
    extend: {
      screens: {
        xs: "321px",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
