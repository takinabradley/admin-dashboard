const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { template } = require('@babel/core')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Admin Dashboard',
      template: './src/index.html'
    })
  ], 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // The `injectType`  option can be avoided because it is default behaviour
          { loader: "style-loader", options: { injectType: "styleTag" } },
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  }
}
