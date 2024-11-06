import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Configura la base para rutas relativas en producción
    optimizeDeps: {
        noDiscovery: true
    },
    plugins: [
        vue(),
        Components({
            resolvers: [PrimeVueResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    assetsInclude: ['**/*.html'],
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
            nested: resolve(__dirname, 'mods/index.html')
        }
    }
});
