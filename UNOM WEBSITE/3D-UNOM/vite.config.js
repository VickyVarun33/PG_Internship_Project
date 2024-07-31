import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
        },
        port: 3000,
        proxy: {
            '/api': {
                target: 'https://localhost:3001',
                changeOrigin: true,
                secure: false,
            },
            '/images': {
                target: 'https://localhost:3001',
                changeOrigin: true,
                secure: false,
            },
            '/images2': {
                target: 'https://localhost:3001',
                changeOrigin: true,
                secure: false,
            },
            '/videos': {
                target: 'https://localhost:3001',
                changeOrigin: true,
                secure: false,
            },
            '/videos2': {
                target: 'https://localhost:3001',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
