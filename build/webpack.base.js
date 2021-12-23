const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // mode: 'development',
  devtool: false,
  output: {
    //不配置的话，打包后的vue-ssr-client-manifest.json中的publicPath为"auto"
    //静态资源引用路径则不对，所以需要配置
    publicPath: '/',
    filename: '[name].bundle.js',
    path: resolve('../dist')
  },
  resolve: {
    alias: {
      '@': resolve('../src')
    },
    extensions: ['.js', '.json', '.vue', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin() /* , new CleanWebpackPlugin() */]
}
