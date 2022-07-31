import { defineConfig } from 'umi';
import pkg from './package.json';

/**获取package.Json中的信息 */
const { dependencies, devDependencies } = pkg;

const isProduction = process.env.NODE_ENV === 'production';
// const DEPLOY_BASE_URL = isProduction ? '/admin/' : '/';
/**hash路由不需要配置 */
const DEPLOY_BASE_URL = './';
const deployConfig = {
  // logo: `${DEPLOY_BASE_URL}logo.png`,
  favicon: `${DEPLOY_BASE_URL}favicon.ico`,
  publicPath: DEPLOY_BASE_URL,
};

export default defineConfig({
  devServer: {
    port: 8080,
  },
  // routes: [
  //   {
  //     path: '/',
  //     component: '@/layouts/index',
  //     routes: [
  //       { path: '/', component: '@/pages/index' },
  //       { path: '/about', component: 'about' },
  //       { path: '/login', component: '@/pages/login' },
  //       { component: '@/pages/404' },
  //     ],
  //   },
  // ],
  /**全局变量 */
  define: {
    APPINFO: { dependencies, devDependencies },
  },
  title: 'hi',
  // mfsu:{},
  plugins: ['./src/plugins/plugin-keep-alive/src/index.js'],
  history: { type: 'hash' },
  // hash: true,	// 清除缓存
  base: '/',
  ...deployConfig,
  proxy: {
    '/api': {
      target: 'http://150.158.189.25:8006',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
