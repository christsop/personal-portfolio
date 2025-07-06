import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.EMAILJS_SERVICE_ID': JSON.stringify(env.EMAILJS_SERVICE_ID),
      'process.env.EMAILJS_TEMPLATE_ID': JSON.stringify(env.EMAILJS_TEMPLATE_ID),
      'process.env.EMAILJS_USER_ID': JSON.stringify(env.EMAILJS_USER_ID),
      'process.env.EMAILJS_TEMPLATE_ID_INFORM_OWNER': JSON.stringify(env.EMAILJS_TEMPLATE_ID_INFORM_OWNER),
      'process.env.ENCRYPTION_KEY': JSON.stringify(env.ENCRYPTION_KEY),
    },
    plugins: [react()],
  }
})