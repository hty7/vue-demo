const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV === 'production' (打包环境)
   * process.env.NODE_ENV === 'development' (本地环境)
   */
  /** 区分APP_MODE
   * process.env.VUE_APP_MODE === 'development' (开发环境)
   * process.env.VUE_APP_MODE === 'test' (测试环境)
   * process.env.VUE_APP_MODE === 'production' (生产环境)
   */
  // 设置打包输出文件夹名称
  outputDir: process.env.outputDir,

  // 公共路径
  publicPath: './',
  // 是否开启sourcemap
  productionSourceMap: process.env.VUE_APP_MODE === 'test',

  transpileDependencies: [],
  
  // webpack其他选项
  chainWebpack: config => {
    config.resolve.symlinks(true)
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('vue$', 'vue/dist/vue.esm.js')
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        // gzip压缩
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 20480,
          deleteOriginalAssets: false
        })]
      }
    }
  },
  // 跨域代理设置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.219:8082/',
        changeOrigin: true,
        autoRewrite: true,
        cookieDomainRewrite: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}