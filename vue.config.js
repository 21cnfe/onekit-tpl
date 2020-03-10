const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      config.module
        .rule('scss')
          .oneOf(type)
          .use('style-resource')
            .loader('style-resources-loader')
            .options({
              patterns: [
                path.resolve(__dirname, './src/assets/styles/_variable.scss'),
                path.resolve(__dirname, './src/assets/styles/_mixin.scss')
              ]
            })
    })
    config.plugin('define').tap(args => {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()
      args[0]['process.env'].BUILD_TIME = `"${year}-${month}-${day} ${hour}:${minute}"`
      return args
    })
  },
  pages: {
    index: `src/entry/template/main.js`
  }
}
