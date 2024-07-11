/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/img/dark.avif')",
        'custom-gradient': 'linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff)',
        // 'custom-gradientz': 'linear-gradient(0deg, #45f3ff, #45f3ff, #45f3ff, transparent, transparent)',
        'custom-gradients': 'linear-gradient(0deg, #ff2770 , #ff2770, #ff2770, transparent,  transparent)',
        // 'custom-gradientt': 'linear-gradient(0deg, transparent, transparent, #ff2770, #ff2770, #ff2770)',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      // keyframes:{
      //   from: {
      //     'transform': 'rotate(0deg)'
      //   },
      //   to: {
      //     'transform': 'rotate(360deg)'
      //   }
      // }
    },
  },
  plugins: [],
}

