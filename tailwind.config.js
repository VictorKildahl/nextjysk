const { spawnSync } = require("child_process");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  purge: {
    enabled: true,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#58cdf4",
          DEFAULT: "#143c8a",
          dark: "#053775",
        },
        secondary: {
          "green-cc": "#46c292",
          "blue-oo": "#4682c2",
          black: "#000",
          dark: "#333",
          gray: "#454545",
          light: "#f8f8f8",
          white: "#ffffff",
        },
        status: {
          danger: "#e36a6a",
          warning: "#ffd800",
          info: "#4ba4df",
          success: "#04b51d",
        },
        stock: {
          "in-stock": "#4e8929",
          "out-of-stock": "#cf0013",
        },
        gradient: {
          "blue-to": "#034795",
          "blue-from": "#143c8a",
          "white-to": "#fff",
          "white-from": "#f8f8f8",
          "gray-to": "#f8f8f8",
          "gray-from": "#e1e1e1",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

// fonts, https://hypercolor.dev/
// open sans, sans-serif
