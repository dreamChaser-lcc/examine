import { defineConfig } from 'umi';
import pkg from './package.json';

/**获取package.Json中的信息 */
const { dependencies, devDependencies } = pkg;

export default defineConfig({
  devServer: {
    port: 8080,
  },
  /**全局变量 */
  define: {
    APPINFO: { dependencies, devDependencies },
  },
  title: 'hi',
  // mfsu:{},
  plugins: ['./src/plugins/plugin-keep-alive/src/index.js'],
  base: '/',
  publicPath: './',
  history: { type: 'hash' },
  // hash: true,	// 清除缓存
  favicon: '/favicon.ico',
  proxy: {
    '/api': {
      target: 'http://150.158.189.25:8006',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
