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

	optimization: {
		splitChunks: {
			cacheGroups: {
				// split out loc files by parent chunks + language
				loc: {
					test: /\/\w+\.\w\w\.js$/,
					name: (module, chunks) => {
						console.log('module', module)
						const match = /\/\w+\.(\w+)\.js$/.exec(module.resource);
						const language = match[1];

						if (chunks.length < 5) {
							const joinedChunks = chunks
								.map(chunk => chunk.name)
								.join('~');

							return `${joinedChunks}:${language}`;
						}

						return `common:${language}`;
					},
					enforce: true,
					chunks: 'all',
				},
			},
		},
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
