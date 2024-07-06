/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#1B1B1B",
        "nomad-black": "#333236",
        "gray-4B": "#4B4B4B",
        "gray-79": "#79747E",
        "gray-A4": "#A4A1AA",
        "gray-AD": "#ADAEB8",
        "gray-CB": "#CBC9CF",
        "gray-DD": "#DDDDDD",
        "gray-EE": "#EEEEEE",
        "gray-FA": "#FAFAFA",
        white: "#FFFFFF",
        "red-F4": "#FF472E",
        "red-FE": "#FFE4E0",
        "orange-F7": "#FF7C1D",
        "orange-FF": "#FFF4E8",
        yellow: "#FFC23D",
        "green-0B": "#0B3B2D",
        "green-00": "#00AC07",
        "green-CE": "#CED8D5",
        "blue-00": "#0085FF",
        "blue-2E": "#2EB4FF",
        "blue-E5": "#E5F3FF",
      },
    },
  },
  plugins: [],
};
