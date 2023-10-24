/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        customGray: '#4A6066',
        customGraySecundary: '#E5E7EB',
        customBlue: '#0E7490'
      }
    }
  },
  plugins: []
}
