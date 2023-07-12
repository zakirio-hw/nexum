/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cons': ['Consolas'],
      },
      backgroundColor: {
        'black': '#000000',
      },
      scale: {
        '-25': '0.25'
      }
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {}, neonLowUtilities = {},
      textNeonUtilities = {}, textNeonLowUtilities = {}
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const c1 = colors[color]['500'];
          const c2 = colors[color]['700'];
          const c3 = colors[color]['900'];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 20px ${c1}, 0 0 40px ${c2}, 0 0 80px ${c3}`,
          };
          neonLowUtilities[`.neon-s-${color}`] = {
            boxShadow: `0 0 10px ${c1}, 0 0 20px ${c2}, 0 0 40px ${c3}`,
          }
          textNeonUtilities[`.text-neon-${color}`] = {
            textShadow: `0 0 8px ${c2}, 0 0 10px ${c2}, 0 0 12px ${c2}, 0 0 14px ${c2}, 0 0 16px ${c3}, 0 0 18px ${c3}`,
          }
          textNeonLowUtilities[`.text-neon-s-${color}`] = {
            textShadow: `0 0 1px ${c1}, 0 0 2px ${c2}, 0 0 4px ${c2}, 0 0 6px ${c3}`,
          }
        }
      }
      addUtilities(neonUtilities)
      addUtilities(neonLowUtilities)
      addUtilities(textNeonUtilities)
      addUtilities(textNeonLowUtilities)
    })
  ],
}