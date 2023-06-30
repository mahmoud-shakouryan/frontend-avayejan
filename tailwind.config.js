module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "820px",
      xl: "1100px",
      "2xl": "1200px",
    },
    extend: {
      gridTemplateColumns: {
        3: "repeat(3, minmax(100px, 200px))",
      },
    },
    colors: {
      dark: "#0e051b",
      vio: "#32115d",
      hoverBtn: "#290e4c",
      white: "#f0e8fb",
      shade: "#c6a6ee",
      hashtag: "#0000ff",
    },
    fontFamily: {
      firstFont: ["shabnam"],
      secondFont: ["shabnamLight", "cursive"],
    },
  },
  plugins: [],
};
