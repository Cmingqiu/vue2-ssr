const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = merge(baseConfig, {
  entry: {
    server: resolve('../src/server-entry.js')
  },
  output: {
    libraryTarget: 'commonjs2' //构建commonJS规范的包,指定导出格方式
  },
  target: 'node', //给node使用   默认web
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.ssr.html'),
      filename: 'index.ssr.html',
      minify: false,
      excludeChunks: ['server']
    }),
    new VueSSRServerPlugin()
  ]
})

// 通过入口 打包出一份代码来，代码给node来使用
/* const base = require('./webpack.base')
const { merge } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const resolve = dir => {
  return path.resolve(__dirname, dir) // 传入路径 通过当前文件所在的位置找到这个文件
}
module.exports = merge(base, {
  entry: {
    server: resolve('../src/server-entry.js')
  },
  target: 'node', // 给node使用  web
  output: {
    libraryTarget: 'commonjs2' //  指定导出方式
  },
  plugins: [
    new VueSSRServerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.ssr.html', // html的名字
      template: resolve('../public/index.ssr.html'),
      minify: false, // 不压缩
      excludeChunks: ['server'] // 排除引入文件 服务端的js
    })
  ]
}) */
