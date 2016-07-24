const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./libs/parts');

const PATH = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATH.app
  },

  output: {
    path: PATH.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Belajar Webpack'
    })
  ] 
};

let config;

switch(process.env.npm_lifecycle_event) {
	case 'build':
		config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.definePlugin('process.env.NODE_ENV', 'production'),
      parts.cleanBuild(PATH.build),
      parts.chunkPlugin({
        name: 'vendor',
        entries: ['react']
      }),
      parts.minify(),
      parts.extractCSS(PATH.app)
    );
		break;
	default:
		config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.cssLoader(PATH.app),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = validate(config);