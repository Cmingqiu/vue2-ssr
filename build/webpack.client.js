const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = merge(baseConfig, {
  entry: {
    client: resolve('../src/client-entry.js')
  },
  plugins: [
    new VueSSRClientPlugin()
    // new HtmlWebpackPlugin({
    //   template: resolve('../public/index.client.html'),
    //   filename: 'index.client.html'
    // })
  ],
  devServer: {
    open: true
  }
})
