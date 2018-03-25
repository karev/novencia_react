const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'front/App.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              'transform-object-rest-spread',
              'transform-runtime',
              'syntax-dynamic-import',
            ],
            presets: [['env', { modules: 'commonjs' }], 'react'],
          },
        },
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'front')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[name].bundle.css'),
    new CleanWebpackPlugin([path.resolve(__dirname, 'build')]),
    new HtmlWebpackPlugin({
      title: 'React starter kit',
      template: './index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
