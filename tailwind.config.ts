import { Plus_Jakarta_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary: "#3563E9",
       secondary:"#1A202C"
      },
      fontFamily: {
        plus_jakarta_sans : ["Plus_Jakarta_Sans"]
      },
      letterSpacing :{
        "3pct" : "-3%"
      }
    },
  },
  plugins: [],
} satisfies Config;
