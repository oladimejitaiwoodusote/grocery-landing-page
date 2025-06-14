import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/grocery-landing-page/', // ← Replace with your repo name
  plugins: [react()],
})
