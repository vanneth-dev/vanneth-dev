import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  resolve: {
    alias: { src: path.resolve(__dirname, "src") },
  },
  server: {
    port: 3000,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:2003",
    //     changeOrigin: true,
    //   },
    // },
    fs: {
      strict: true,
    },
  },
});
