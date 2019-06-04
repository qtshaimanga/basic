const webpack = require('webpack')
const webDevServer = require('webpack-dev-server')
const chokidar = require('chokidar');
const port = 9000;
let config = require('./webpack.dev.config')
let compiler = webpack(config);
let hotMiddleware = require('webpack-hot-middleware')(compiler);

require('shelljs/global')
env.NODE_ENV = 'development'

chokidar.watch('./index.html').on('all', () => {

  hotMiddleware.publish({ action: "reload" })

});

let server = new webDevServer(compiler, {
  hot: true,
  contentBase: './',
  quiet: false,
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: { colors: true },
});

server.use(hotMiddleware);

server.listen(port, (error) => {

  if(error){

    console.log(error)
  
  }else{

    console.log("http://localhost:" + port + "/")
  
  }

});
