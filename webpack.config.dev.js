import path from 'path';
import webpack from 'webpack';
var combineLoaders = require('webpack-combine-loaders');

export default {

  entry: [
    'webpack-hot-middleware/client',
    path.join (__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'client')
    }, {
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ])
    }]
  },


  resolve: {
    extentions: [ '', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'components']
  }

}
