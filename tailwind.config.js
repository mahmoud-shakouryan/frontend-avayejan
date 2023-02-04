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
    extend: {},
    colors: {
      dark: "#0B2545",
      orange: "#fb6107",
      theWhite: "#EEF4ED",
      superLightBlue: "#D7E1EA",
      lightBlue: "#8DA9C4",
      active: "#FCCA46",
      red: "#EA3788",
      hashtag: "#0000ff",
      opacity: "rgb(22, 0, 30, 0.9)",
      opactiy2: "rgb(22, 0, 30, 0.7)",
      opacity3: "rgb(22, 0, 30, 0.3)",
    },
    backgroundImage: {
      homeGrandient:
        "linear-gradient(90deg, hsla(44, 97%, 52%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)",
      footerGradient:
        "radial-gradient(circle, hsla(209, 32%, 66%, 1) 0%, hsla(111, 24%, 94%, 1) 100%)",
    },
    fontFamily: {
      firstFont: ["shabnam"],
      secondFont: ["shabnamLight", "cursive"],
    },
  },
  plugins: [],
};
