export default {
  devServer: {
    port: 8001
  },
  plugins: [
    './src/plugins/plugin-keep-alive/src/index.js',
  ],
}