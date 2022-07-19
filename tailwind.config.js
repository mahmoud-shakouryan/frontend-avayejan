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
      'dark':'#16001E',
      'orange':'#fb6107',
      'theWhite':'#FFE6E8',
      'red':'#EA3788',
      'opactiy':'rgb(22, 0, 30, 0.7)',
      'opacity2':'rgb(22, 0, 30, 0.8)'
    },
    backgroundImage:{
      'homeGrandient':'radial-gradient(circle, rgba(168,218,220,1) 0%, rgba(69,123,157,1) 100%)',
      // 'vector':"url('../public/vector.jpg')"
    },
    fontFamily: {
      firstFont: ["shabnam"],
      secondFont: ["shabnamLight", "cursive"],
    },
  },
  plugins: [],
}