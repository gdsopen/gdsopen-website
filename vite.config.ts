import { resolve } from "node:path";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    viteReact(),
    cloudflare(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "styled-system": resolve(__dirname, "./styled-system"),
    },
  },
  appType: "spa",
});
