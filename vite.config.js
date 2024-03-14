import { defineConfig } from 'vite';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// 加载环境变量
const env = loadEnv('', process.cwd());

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 使用加载的环境变量
  base: env.BASE_URL || '',

  plugins: [vue()],
}))
