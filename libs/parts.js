const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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

exports.cssLoader = function(paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					loaders: ['style', 'css?modules&sourceMap'],
					include: paths
				}
			]
		}
	};
}

exports.minify = function() {
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		]
	}
}

exports.definePlugin = function(key, value) {
	const env = {};
	env[key] = JSON.stringify(value);
	return {
		plugins: [
			new webpack.DefinePlugin(env)
		]
	}
}

exports.chunkPlugin = function(options) {
	const entry = {};
	entry[options.name] = options.entries;
	
	return {
		entry: entry,
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				names: [options.name, 'manifest']
			})
		]
	};
}

exports.cleanBuild = function(path) {
	return {
		plugins: [
			new CleanWebpackPlugin([path], {
				root: process.cwd()
			})
		]
	};
}

exports.extractCSS = function(paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract('style', 'css?modules&sourceMap'),
					include: paths
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('[name].[chunkhash].css')
		]
	};
}