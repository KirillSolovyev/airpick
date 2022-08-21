import { fileURLToPath, URL } from 'url';
import { VitePWA } from 'vite-plugin-pwa';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: [
        'apple-touch-icon.png',
        'favicon.ico',
        'favicon-32x32.png'
      ],
      manifest: {
        name: 'Airpick - онлайн покупка авиабилетов',
        short_name: 'Airpick',
        description: 'Airpick - покупка билетов онлайн, удобно и быстро',
        theme_color: '#3b82f6',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
