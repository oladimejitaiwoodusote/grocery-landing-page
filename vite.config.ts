import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/<your-repo-name>/', // ← Replace with your repo name
  plugins: [react()],
})
