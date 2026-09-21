import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'contestant-man.png', 'contestant-dress.png', 'contestant-purple.png', 'contestant-blonde.png', 'contestant-curly.png', 'contestant-plus-man.png', 'contestant-plus-woman.png', 'contestant-overalls.png'],
    manifest: {
      name: 'No Limite da Resposta', short_name: 'No Limite',
      description: 'Jogo de perguntas e eliminação para animar seu auditório.',
      theme_color: '#090b19', background_color: '#090b19', display: 'standalone', orientation: 'landscape',
      icons: [
        { src: 'icon-192.svg', sizes: '192x192', type: 'image/svg+xml', purpose: 'any' },
        { src: 'icon-512.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'any maskable' }
      ]
    },
    workbox: { globPatterns: ['**/*.{js,css,html,svg,png,json}'] }
  })]
})
