const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
 * Root Path
 * @desc Constructs a valid path from the current project directory
 * @param args Path components
 * @returns Valid concatenated path
 */
const rootPath = (...args) => args.reduce((fullPath, pathComponent) => path.join(fullPath, pathComponent), __dirname)

/**
 * HTML Webpack Plugin
 * @desc Configuration for building the HTML page
 * @note Some props are injected and some are configuration (rendering) settings
 */
const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Ravenous',
  template: rootPath('index.html'),
  filename: 'index.html',
  favicon: 'assets/favicon.ico',
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  },
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
  },
})

const hotModulePlugin = new webpack.HotModuleReplacementPlugin()

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
})

/**
 * HTML Webpack Plugin
 * @desc Copy static files to be used in build
 */
const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [
    {
      from: './assets/*',
      to: './assets/[name].[ext]',
    },
  ],
})

/**
 * Webpack Configuration
 */
module.exports = {
  entry: ['webpack/hot/dev-server', rootPath('app.tsx')],
  target: 'web',
  output: {
    path: rootPath('dist'),
    publicPath: './',
    filename: '[name]-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCaseOnly',
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:8]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.pdf$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  plugins: [miniCssExtractPlugin, htmlPlugin, hotModulePlugin, copyWebpackPlugin],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
  },
  devServer: {
    publicPath: 'http://localhost:8000',
    contentBase: rootPath('public'),
    hot: true,
    open: true,
    lazy: false,
    compress: true,
    historyApiFallback: true,
    port: 8000,
  },
}
