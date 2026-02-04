import { defineConfig } from "vite";
import react from "@vitejs/plugin-reacta";

export default defineConfig({
    plugins: [react()],
    base: "/", // ✅ REQUIRED for Vercel
});
