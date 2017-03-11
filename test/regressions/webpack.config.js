// @flow

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, '../../tmp'),
    filename: 'tests.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'material-ui': path.resolve(__dirname, '../../src'),
      'material-ui-docs': path.resolve(__dirname, '../../docs'),
    },
  },
};
