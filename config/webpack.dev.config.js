const webpack = require('webpack');
let config = require('./webpack.config');
const FriendlyErrors = require('friendly-errors-webpack-plugin')

Object.keys(config.entry).forEach( (name) => {

  config.entry[name] = [ './config/dev-client' ].concat(config.entry[name])

})

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrors(),
]);

module.exports = config;
