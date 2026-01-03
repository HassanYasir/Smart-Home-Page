import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preventAssignment: true, values: { 'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY), },
})
