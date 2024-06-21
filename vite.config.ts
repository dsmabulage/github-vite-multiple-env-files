import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const envPrefix = process.env.NODE_ENV;

  return defineConfig({
    plugins: [react()],
    envDir: `./env/${envPrefix}`,
  });
};
