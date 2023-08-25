const path = require("path");
//to have CSS in separate files, not in JS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

/**
 * Default BrowserSyncPlugin options.
 */
let browserSyncPluginOptions = {
	port: 3000,
	proxy: "http://example.test/",
};
try {
	const browserSyncCustomConfig = require("./.browsersync.config.json");

	/**
	 * Override default BrowserSyncPlugin options.
	 */
	browserSyncPluginOptions.port = browserSyncCustomConfig.port;
	browserSyncPluginOptions.proxy = browserSyncCustomConfig.proxy;
} catch (e) {}

module.exports = {
	mode: "development",
	plugins: [
		new MiniCssExtractPlugin(),
		new BrowserSyncPlugin({
			port: browserSyncPluginOptions.port,
			proxy: browserSyncPluginOptions.proxy,
			files: ["**/*.php"],
		}),
		new ESLintPlugin(),
	],
	watchOptions: {
		//time that webpack wait to compile files
		aggregateTimeout: 1500,
		ignored: "**/node_modules",
	},
	module: {
		//SCSS comiling
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
};
