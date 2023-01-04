const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        defaultBlue: '#0C7CE3',
        defaultPurple: '#790FAB',
        defaultPink: '#DF0B7D',
        defaultBlack: '#1C1E1F',
        defaultBlack2: '#242327',
        defaultGreen: '#0f948e',
        defaultCyan: '#10A4C4',
      },
      fontFamily: {
        sans: ['OpenSans', 'sans-serif'],
      },
      backgroundImage: {
        'hero_section-background': "url('/img/hero_section_background.png')",
        'hero_section-mobile-background': "url('/img/hero_section-mobile-background.png')",
        'blue-light-background': "url('/img/blue-light-background.png')",
        'pink-light-background': "url('/img/pink-light-background.png')",
        'green-light-background': "url('/img/green-light-background.png')",
      },
      width: {
        200: '200%',
      },
      rotate: {
        30: '30deg',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const main = {
        '*:focus': {
          outline: 'none',
        },
        '::-webkit-scrollbar': {
          width: '12px',
        },
        '::-webkit-scrollbar-track': {
          background: '#0c0719',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#0C7CE3',
        },
        '::-webkit-scrollbar-thumb:hover': {
          opacity: '0.5',
        },
        body: {
          background: '#1C1E1F',
          color: '#fff',
        },
        '.default-container': {
          paddingRight: '4rem',
          paddingLeft: '4rem',
        },
      };
      addComponents(main);
    }),
  ],
};
