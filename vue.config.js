module.exports = {
  // 设置打包输出文件夹名称
  outputDir: 'webApp',
  // 是否开启sourcemap
  // webpack其他选项
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' 
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