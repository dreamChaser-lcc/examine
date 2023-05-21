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
  chunks: ['antdesigns', 'echarts', 'vendors', 'umi'],
  // 打包分析配置
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed',
  },
  chainWebpack(config: any) {
    if (isProduction) {
      config.output.filename('[name].[hash:8].js');
    }
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          automaticNameDelimiter: '.',
          cacheGroups: {
            antdesigns: {
              name: 'antdesigns',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](@antv|antd|@ant-design)/,
              priority: 11,
              enforce: true,
            },
            eChart: {
              name: 'echarts',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](echarts|echarts-for-react)/,
              priority: 10,
              enforce: true,
            },
            vendor: {
              name: 'vendors',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](lodash|moment|react|react-dom)/,
              priority: 9,
              enforce: true,
            },
          },
        },
      },
    });
  },
  // externals: {
  //   react: 'window.React',
  //   'react-dom': 'window.ReactDom',
  // },
  // scripts: [
  //   'https://unpkg.com/react@17/umd/react.production.min.js',
  //   'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
  // ],
  thread: false,
  hash: true, // hash文件,可以避免部署后前文件被浏览器缓存未刷新
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
  // chainWebpack(config) {
  //   if (isProduction) {
  //     config.output.filename('[name].[hash:8].js');
  //   }
  // },
  // hash: true,	// 清除缓存
  base: '/',
  ...deployConfig,
  proxy: {
    '/api': {
      target: 'http://licc.cloud:8006',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
