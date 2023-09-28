import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },
      {
        find: "@css",
        replacement: path.resolve(__dirname, "src/assets/css"),
      },
      {
        find: "@images",
        replacement: path.resolve(__dirname, "src/assets/images"),
      },
      {
        find: "@helpers",
        replacement: path.resolve(__dirname, "src/helpers"),
      },
      {
        find: "@providers",
        replacement: path.resolve(__dirname, "src/providers"),
      },
    ],
  },
  server: {
    open: true,
    port: 5050,
  },
});
