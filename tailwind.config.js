// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         black: "#171717",
//         nomad_black: "#333236",
//         gray_4B: "#4B4B4B",
//         gray_79: "#79747E",
//         gray_A4: "#A4A1AA",
//         gray_AD: "#ADAEB8",
//         gray_DD: "#DDDDDD",
//         gray_EE: "#EEEEEE",
//         gray_FA: "#FAFAFA",
//         green: "#00AC07",
//         green_0B: "#0B3B2D",
//         green_F1: "#F1EFFD",
//         green_CE: "#CED8D5",
//         red_47: "#FF472E",
//         red_E4: "#FFE4E0",
//         orange_7C: "#FF7C1D",
//         orange_F4: "#FFF4E8",
//         yellow: "#FFC23D",
//         blue_00: "#0085FF",
//         blue_2E: "#2EB4FF",
//         blue_E5: "#E5F3FF",
//       },

//       fontFamily: {
//         sans: ["Pretendard-Regular", "sans-serif"],
//       },

//       screens: {
//         mob: "500px",
//         sm: { max: "768px" },
//         md: { min: "769px", max: "1023px" },
//         lg: { min: "1024px", max: "1200px" },
//       },

//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };

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
        mob: "500px",
        sm: { max: "768px" },
        md: { min: "769px", max: "1023px" },
        lg: { min: "1024px", max: "1200px" },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // Custom scroll snap utilities
      scrollSnapType: {
        "x-mandatory": "x mandatory",
        "y-mandatory": "y mandatory",
        "both-mandatory": "both mandatory",
        "x-proximity": "x proximity",
        "y-proximity": "y proximity",
        "both-proximity": "both proximity",
      },
      scrollSnapAlign: {
        start: "start",
        end: "end",
        center: "center",
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scroll-snap-x-mandatory": {
          "scroll-snap-type": "x mandatory",
        },
        ".scroll-snap-y-mandatory": {
          "scroll-snap-type": "y mandatory",
        },
        ".scroll-snap-both-mandatory": {
          "scroll-snap-type": "both mandatory",
        },
        ".scroll-snap-x-proximity": {
          "scroll-snap-type": "x proximity",
        },
        ".scroll-snap-y-proximity": {
          "scroll-snap-type": "y proximity",
        },
        ".scroll-snap-both-proximity": {
          "scroll-snap-type": "both proximity",
        },
        ".scroll-snap-align-start": {
          "scroll-snap-align": "start",
        },
        ".scroll-snap-align-end": {
          "scroll-snap-align": "end",
        },
        ".scroll-snap-align-center": {
          "scroll-snap-align": "center",
        },
        ".scroll-snap-align-none": {
          "scroll-snap-align": "none",
        },
      });
    },
  ],
};
