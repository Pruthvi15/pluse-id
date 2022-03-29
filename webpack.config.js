const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    library: '$',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'production'
};