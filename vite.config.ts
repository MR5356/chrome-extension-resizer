import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import {resolve} from "path"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: resolve(__dirname, 'dist'),
        sourcemap: false,
        rollupOptions: {
            input: {
                popup: resolve(__dirname, "index.html")
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            }
        },
    },
    publicDir: resolve(__dirname, 'public'),
})
