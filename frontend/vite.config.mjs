import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/watchapus",
  server: {
    proxy: {
      "/watchapus/api": `http://localhost:3000`,
    },
  },
});
