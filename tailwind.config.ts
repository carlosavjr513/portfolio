import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maelstrom: {
          50: "#AAD4FF",
          100: "#95CAFF",
          200: "#7BBDFF",
          300: "#5BADFF",
          400: "#3399ff",
          500: "#0080ff",
          600: "#0059B2",
          700: "#003E7C",
          800: "#002B56",
          900: "#001E3C",
          950: "#00152A",
        },
        shaman: {
          50: "#AACFF2",
          100: "#95C3EF",
          200: "#7BB5EC",
          300: "#5BA3E8",
          400: "#338CE3",
          500: "#0070dd",
          600: "#004E9A",
          700: "#00366B",
          800: "#00254A",
          900: "#001933",
          950: "#001123",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
