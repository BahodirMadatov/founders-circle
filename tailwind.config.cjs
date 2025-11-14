module.exports = {
  content: ['./index.html', './src/**/*.{js,vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      boxShadow: {
        'lg-soft': '0 18px 40px rgba(15,23,42,0.08)'
      }
    },
  },
  plugins: [],
}
