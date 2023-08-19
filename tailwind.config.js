/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/preline/dist/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          420: '#136F8C',
          69: '#113C5D',
          666: '#073050',
          777: '#1989AD',
          'hover': '#20ADDA'
        },
        offshore: {
          420: '#274F9F',
        },
        backcountry: {
          420: '#05AD9D',
        },
        muted: {
          420: '#999BAF',
        },
        navgrey: {
          420: '#536879',
        },
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
