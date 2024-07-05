import { Container } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
        "2xl":"1400px"
      },
      colors:{
        blue:"#0071dc",
        lightBlue:"#e6f1fc",
        yellow:"#ffc220",
        hoverBg:"#004f9a",
        lightText:"#46474a",
      },
      boxShadow: {
        bannerShadow : "0 1px 2px 1px #00000026",
      }
    },
    maxWidth:{
      Container:"1520px",
      contentContainer:"1280px"
    }
  },
  plugins: [],
};
export default config;
