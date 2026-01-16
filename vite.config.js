import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // ✅ Render / production preview host fix
  preview: {
    host: true,
    port: process.env.PORT || 4173,
    allowedHosts: [".onrender.com"], // ✅ all render domains allow
  },
});
