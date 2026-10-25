import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import saveOgImagePlugin from "./config/vite/save-og-image";

export default defineConfig({
  plugins: [react(), tailwindcss(), saveOgImagePlugin()],
  base: "./",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    fs: {
      strict: true,
    },
  },
});
