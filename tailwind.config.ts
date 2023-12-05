import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        dhrmk: "url('/dhrmk.dev/bg.png')",
        dhrmkAstro: "url('/dhrmk.dev/bg-astro.jpg')",
      },
      cursor: {
        rocket: "url('/ufo.png'), auto",
        spotlight: "url('/spotlight.png') auto",
      },
      fontFamily: {
        japan: ["'Noto Serif JP'", "serif"],
      },
      // Define animation class
      animation: {
        scrollForever: "scrollForever 7s linear infinite",
        scrollReverse: "scrollReverse 7s linear infinite",
        scrollForeverX: "scrollForeverX 30s linear infinite",
        scrollReverseX: "scrollReverseX 30s linear infinite",
      },
      // Define keyframes
      keyframes: {
        scrollForever: {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "0 -1356px" },
        },
        scrollReverse: {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "0 1356px" },
        },
        scrollForeverX: {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "-1356px 0" },
        },
        scrollReverseX: {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "1356px 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
