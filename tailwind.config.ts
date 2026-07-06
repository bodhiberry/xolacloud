import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#4A2447",
          dark: "#341732",
          light: "#6B3F67",
        },
        forest: {
          DEFAULT: "#1E7145",
          dark: "#14512F",
        },
        sky: "#2F9BE0",
        sun: "#F2A93B",
        ink: "#141416",
        paper: "#FFFFFF",
        mist: "#F6F5F3",
        line: "#E7E5E1",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        script: ["var(--font-script)"],
        mono: ["var(--font-mono)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "grain": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.035\"/></svg>')",
      },
    },
  },
  plugins: [],
};
export default config;
