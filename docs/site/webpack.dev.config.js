const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  context: path.resolve(__dirname),
  entry: {
    'main': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.svg$/,
        loader: 'file',
        include: /assets\/images/,
      },
    ],
  },
  resolve: {
    alias: {
      'material-ui': path.resolve(__dirname, '../../src'),
      react: path.resolve('./node_modules/react'),
    },
  },
  progress: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
