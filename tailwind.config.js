/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#171717",
        nomad_black: "#333236",
        gray_4B: "#4B4B4B",
        gray_79: "#79747E",
        gray_A4: "#A4A1AA",
        gray_AD: "#ADAEB8",
        gray_DD: "#DDDDDD",
        gray_EE: "#EEEEEE",
        gray_FA: "#FAFAFA",
        green: "#00AC07",
        green_0B: "#0B3B2D",
        green_F1: "#F1EFFD",
        green_CE: "#CED8D5",
        red_47: "#FF472E",
        red_E4: "#FFE4E0",
        orange_7C: "#FF7C1D",
        orange_F4: "#FFF4E8",
        yellow: "#FFC23D",
        blue_00: "#0085FF",
        blue_2E: "#2EB4FF",
        blue_E5: "#E5F3FF",
      },
      fontFamily: {
        sans: ["Pretendard-Regular", "sans-serif"],
      },
      screens: {
        mob: '500px',
        sm: { max: '768px' },
        md: { min: '769px', max: '1023px' },
        lg: { min: '1024px', max: '1200px' },
      },
    },
  },
  plugins: [],
};
