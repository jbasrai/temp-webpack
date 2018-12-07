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
				use: {
					loader: 'babel-loader',
					options: {
						configFile: path.resolve(__dirname, '..'),
					},
				},
			},
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
}
