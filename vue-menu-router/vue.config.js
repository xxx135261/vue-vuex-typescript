const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/hcm': {
				// 测试
				target: 'http://192.168.1.229:8001/hcm',
        changeOrigin: true,
        pathRewrite: {
          '^/hcm': '/',
        }
      }
    },
  },
  //配置目录别名
  chainWebpack: (config) => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('components', resolve('src/components'))
        .set('style', resolve('src/style'))
        .set('static', resolve('static'))
  },
}
