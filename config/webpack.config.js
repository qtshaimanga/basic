const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin-from-webpack-contrib');
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production': 'development',
  performance: {
    maxEntrypointSize: 4000000,
    maxAssetSize: 1000000
  },
  entry: {
    app: [
      './src/App.js',
      './src/style/main.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath:  process.env.NODE_ENV === 'production' ? './' : '/',  // production ./ or development /
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader",
            options: {
                includePaths: ["./src/style"]
            }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'assets/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        query: {
          name: 'assets/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins:[
    new CopyWebpackPlugin(
      [
        { from: './src/assets', to: './assets' },
        { from: './static', to: './static' }
      ],
      {
        ignore: [ '.DS_Store' ]
      }
    ),
    new HtmlWebpackPlugin ({
      inject: true,
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}
