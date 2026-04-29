console.log('WEBPACK CONFIG CARREGADO');

const path = require('path');

module.exports = {
  mode: 'development',

  entry: './frontend/main.js',

  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        type: 'javascript/auto'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js']
  },

  devtool: 'source-map'
};