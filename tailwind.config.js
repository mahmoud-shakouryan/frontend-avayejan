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
        '3': 'repeat(3, minmax(100px, 200px))',
      }
    },
    colors: {
      dark: "#140800",
      orange: "#FF6600",
      hoverBtn:'#cc5200',
      white: "#ffe7d8",
      shade:'#ffb889',
      hashtag: "#0000ff",
      opacity: "rgb(22, 0, 30, 0.9)",
      opactiy2: "rgb(22, 0, 30, 0.7)",
      opacity3: "rgb(22, 0, 30, 0.3)",
    },
    backgroundImage: {
      // homeGrandient:
      //   "radial-gradient(circle, rgba(255,184,137,1) 0%, rgba(255,102,0,1) 50%, rgba(20,8,0,1) 100%);",
      // footerGradient:
      //   "radial-gradient(circle, hsla(209, 32%, 66%, 1) 0%, hsla(111, 24%, 94%, 1) 100%)",
    },
    fontFamily: {
      firstFont: ["shabnam"],
      secondFont: ["shabnamLight", "cursive"],
    },
  },
  plugins: [],
};
