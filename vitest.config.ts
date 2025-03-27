import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    css: {
        postcss: {
            map: true
        }
    },
    test: {
        setupFiles: [
            fileURLToPath(new URL("./vitest.setup.ts", import.meta.url))
        ],
        environment: "jsdom",
        env: loadEnv("", process.cwd(), ""),
        exclude: [
            "**/node_modules/**",
            "**/dist/**",
            "**/cypress/**",
            "**/.{idea,git,cache,output,temp}/**",
            "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*",
            "**/test/**"
        ],
        globals: true
    },
    // Add this to ensure proper file resolution
    resolve: {
        alias: {
            "@": fileURLToPath(new URL(".", import.meta.url))
        }
    }
});
