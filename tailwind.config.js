module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-text-primary": "#143c8a",
        "color-text-primary-dark": "#053775",
        "color-text-primary-light": "#58cdf4",
        "color-text-danger": "#e36a6a",
        "color-text-warning": "#ffd800",
        "color-text-info": "#4ba4df",
        "color-text-success": "#04b51d",
        "color-text-green-cc": "#46c292",
        "color-text-blue-oo": "#4682c2",
        "color-stock": "#4e8929",
        "color-out-of-stock": "#cf0013",
        "color-gradient-blue-1": "#034795",
        "color-gradient-blue-2": "#143c8a",
        "color-gradient-white-1": "#fff",
        "color-gradient-white-2": "#f8f8f8",
        "color-gradient-gray-1": "#f8f8f8",
        "color-gradient-gray-2": "#e1e1e1",
        "color-black": "#000",
        "color-dark": "#333",
        "color-gray": "#454545",
        "color-light": "#f8f8f8",
        "color-light": "#ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

// purge, fonts, jit
