const path = require('path')
const webpack = require('webpack')

module.exports = {
	devServer: {
		contentBase: './dist',
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
					options: {
						configFile: path.resolve(__dirname, '../babel.config.js'),
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				]
			},
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
}
