var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'server/public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
	new webpack.optimize.UglifyJsPlugin()

  ],
  module : {
    loaders : [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.png$/, loader: "url-loader?limit=100000" },
        { test: /\.jpg$/, loader: "file-loader" },
			{
		test: /\.css$/,
		include: [
			path.resolve(__dirname, "not_exist_path")
		],
		loader: "style!css"
	},
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;