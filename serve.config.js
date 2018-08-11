const serve = require('webpack-serve');
const argv = {
  port: 3333,
  content: './public'
};
const config = require('./webpack.config.js');

serve(argv, { config })