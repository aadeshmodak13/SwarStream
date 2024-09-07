module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#e4e3e3",
          600: "#6b7472",
          700: "#666c6b",
          900: "#242727",
          "900_01": "#1d1e1e",
          "700_02": "#5e6666",
          "700_01": "#5b5b5a",
        },
        purple: { 100: "#e4a8e1" },
        blue_gray: { 100: "#d9d9d9" },
        red: { 700: "#db2323" },
        cyan: { "800_a5": "#018194a5" },
        light_blue: {
          500: "#00b7eb",
          "500_33": "#00b7eb33",
          "500_63": "#00b7eb63",
          "500_0c": "#00b7eb0c",
          "500_a5": "#00b7eba5",
        },
        white: { A700_99: "#ffffff99", A700: "#ffffff" },
        black: { 900: "#0a0a0a", "900_01": "#0e0e0e", "900_bf": "#000000bf" },
        deep_purple: { A200: "#9164f1" },
      },
      fontFamily: { ptsans: "PT Sans" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00b7eb33,#00b7eb0c)",
        gradient1: "linear-gradient(180deg ,#000000bf,#000000bf)",
        gradient2: "linear-gradient(180deg ,#018194a5,#00b7eba5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
