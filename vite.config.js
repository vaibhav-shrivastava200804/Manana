import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
   server: {
    host: '192.168.222.108',  // Allow external devices to connect
    port: 5173,       // Or any port you prefer
  },
})
