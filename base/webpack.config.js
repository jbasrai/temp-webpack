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

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /\/node_modules\//,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
}
