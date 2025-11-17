import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    // SVG icons plugin temporarily disabled - needs compatibility fix for Vite 7
    // createSvgIconsPlugin({
    //   iconDirs: [resolve(process.cwd(), "src/assets/icons")],
    //   symbolId: "icon-[name]",
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: mode === "production" ? "/free-design-system/" : "/",
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}));

