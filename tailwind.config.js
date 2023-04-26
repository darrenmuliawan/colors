// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
        error: '',
        success: '',
        info: '',
        neutral: '#F3F4F6',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
