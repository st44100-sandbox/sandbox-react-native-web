var path =  require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: [
    './src/index.web.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname , 'public'),
    publicPath: '/'
  },
  devtool: 'inline-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My React Native Web App',
      template: 'src/index.html'
    })
  ]
}