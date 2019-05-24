require('shelljs/global')
env.NODE_ENV = 'production'

let ora = require('ora')
let webpack = require('webpack')
let webpackConfig = require('./webpack.prod.config.js')

let spinner = ora('building for production...')
spinner.start()

rm('-rf', './dist/*');

webpack(webpackConfig, (error, stats) => {

  spinner.stop()
  if(error)throw error
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

})
