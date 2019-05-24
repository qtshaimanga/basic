const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let config = require('./webpack.config');
let extractCSS = new ExtractTextPlugin('bundle.css');

config.plugins = config.plugins.concat([
  extractCSS,
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    warnings: false,
    drop_console: true
  })
])

let cssLoaders = config.module.loaders[0].loaders
config.module.loaders[0].loaders = null
config.module.loaders[0].loader = extractCSS.extract(cssLoaders.slice(1, cssLoaders.length+1));

module.exports = config;
