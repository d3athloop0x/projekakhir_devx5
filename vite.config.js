// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/projekakhir_devx5/', // SUDAH DITAMBAH
  server: {
    hmr: {
      overlay: false,
    },
  },
});