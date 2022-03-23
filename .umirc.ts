export default {
  devServer: {
    port: 8001,
  },
  // mfsu:{},
  plugins: ['./src/plugins/plugin-keep-alive/src/index.js'],
  base: '/',
  publicPath: './',
  history: { type: 'hash' },
  // hash: true,	// 清除缓存
  favicon: '/favicon.ico',
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
