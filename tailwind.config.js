module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    colors:{
      'blueDark':'#1d3557',
      'blueLight':'#457b9d',
      'blueLighter':'#a8dadc',
      'red':'#e63946',
      'white':'f1faee'
    },
    backgroundImage:{
      'homeGrandient':'radial-gradient(circle, rgba(168,218,220,1) 0%, rgba(69,123,157,1) 100%)'
    },
    fontFamily: {
      firstFont: ["shabnam"],
      secondFont: ["shabnamLight", "cursive"],
    },
    
  },
  plugins: [],
}