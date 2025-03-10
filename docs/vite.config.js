import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'dev.tachibana.top'  // 允许的域名
    ],
    host: '0.0.0.0'        // 允许所有 IP 访问
  }
})