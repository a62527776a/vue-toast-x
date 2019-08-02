const webpackBaseConfig = require('./webpack.base.config')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackConfig = {
  entry: {
    main: path.join(__dirname, '../demo/main.js')
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'vue-toast-x.js'
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}

module.exports = Object.assign(webpackBaseConfig, webpackConfig)