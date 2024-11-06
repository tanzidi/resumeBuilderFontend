import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#5B5A66",
      },
    },
    fontFamily: {
      dmSans: "var(--font-dm-sans)",
      gilory: "var(--font-gilory)",
    },
  },
  plugins: [],
};
export default config;
