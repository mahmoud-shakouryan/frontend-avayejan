module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '820px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1100px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1200px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    colors:{
      'dark':'#0B2545',
      'orange':'#fb6107',
      'theWhite':'#EEF4ED',
      'superLightBlue':'#D7E1EA',
      'lightBlue':'#8DA9C4',
      'active':'#FCCA46',
      'red':'#EA3788',
      'opactiy':'rgb(22, 0, 30, 0.7)',
      'opacity2':'rgb(22, 0, 30, 0.8)'
    },
    backgroundImage:{
      'homeGrandient':'linear-gradient(90deg, hsla(44, 97%, 52%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)',
      'footerGradient':'radial-gradient(circle, hsla(209, 32%, 66%, 1) 0%, hsla(111, 24%, 94%, 1) 100%)'
    },
    fontFamily: {
      firstFont: ["shabnam"],
      secondFont: ["shabnamLight", "cursive"],
    },
  },
  plugins: [],
}