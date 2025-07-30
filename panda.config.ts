import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          base: {
            value: "Inter, 'Noto Sans JP', sans-serif",
          },
          heading: {
            value: "Metropolis, 'Noto Sans JP', sans-serif",
          },
        },
      },
    },
  },
  // Global font face definitions
  globalFontface: {
    Metropolis: [
      {
        src: 'url(/fonts/Metropolis-Regular.woff2) format("woff2")',
        fontWeight: 400,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/fonts/Metropolis-Medium.woff2) format("woff2")',
        fontWeight: 500,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/fonts/Metropolis-SemiBold.woff2) format("woff2")',
        fontWeight: 600,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/fonts/Metropolis-Bold.woff2) format("woff2")',
        fontWeight: 700,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/fonts/Metropolis-ExtraBold.woff2) format("woff2")',
        fontWeight: 800,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(/fonts/Metropolis-Black.woff2) format("woff2")',
        fontWeight: 900,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
    ],
  },
  // The output directory for your css system
  outdir: "styled-system",
});
