// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        // https://tailwindcss.com/docs/screens
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',

        // https://tailwindcss.com/docs/responsive-design#customizing-breakpoints
        mobile: '0px',
        desktop: '640px',
      },
      colors: {
        primary: '#0F4C81',
        'primary-hover': '#416EA7',
        secondary: '#0088FF',
        'secondary-hover': '#0065D5',
        'text-primary': '#9CCBF3',
        'text-primary-hover': '#74A4CA',
        'text-secondary': '#FFFFFF',
        'text-secondary-hover': '#D6D6D6',
        'text-tertiary': '#C6CBD6',
        disabled: '#C6CBD6',
        error: '#FF0000',
        success: '#00FF00',
        info: '#1E90FF',
        neutral: {
          200: '#7D7C83',
          DEFAULT: '#F3F4F6',
        },
        'neutral-dark': '#000000',
        'neutral-light': '#7D7C83',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
