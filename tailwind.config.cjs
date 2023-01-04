/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        wrapper: ['YakuHanJP', '"Noto Sans JP"', '"游ゴシック"', 'YuGothic', '"Helvetica"', '"ヒラギノ角ゴ ProN W3"', '"Hiragino Kaku Gothic ProN"', '"メイリオ"', 'Meiryo', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      keyframes: {
        title_anxsoundplayer: {
          '0%, 40%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        title_anxsoundplayer: 'title_anxsoundplayer 5s linear infinite',
      }
    },
  },
  plugins: [],
}