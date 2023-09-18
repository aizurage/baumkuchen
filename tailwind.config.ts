import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {height: {
      '140': '40rem'
      },
      fontSize: {
        '12xl':'12rem'
      },
    },
  },
  plugins: [],
} satisfies Config;
