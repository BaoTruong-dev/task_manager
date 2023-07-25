import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import jsconfigPaths from 'vite-jsconfig-paths'
// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  let env = loadEnv(mode, process.cwd(), '')

  env = {
    ...process.env,
    ...Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      }
    }, {}),
  }
  return {
    plugins: [react(), jsconfigPaths()],
    resolve: {
      alias: {},
    },
    server: {
      port: parseInt(env.PORT) || 3000,
      // open: true,
    },
  }
})
