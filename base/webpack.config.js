const path = require('path')
const webpack = require('webpack')

module.exports = {
	devServer: {
		contentBase: './dist',
		hot: true,
	},

	entry: './index.js',

	mode: 'development',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
}
