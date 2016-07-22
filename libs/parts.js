const webpack = require('webpack');

exports.devServer = function(options) {
	return {
		devServer: {
			historyApiFallback: true,

			inline: true,

			hot: true,

			stats: 'errors-only',

			host: options.host,

			port: options.port
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin({
				multistep: true
			})
		]
	};
}

exports.cssLoader = function() {
	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					loaders: ['style', 'css?modules']
				}
			]
		}
	};
}