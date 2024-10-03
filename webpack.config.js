const path = require("path");
const glob = require("glob");
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

/**
 * generates entry points from blocks and from global scripts/styles
 * @returns Object
 */
function generateEntryPoints() {
	let entryPoints;

	// adding block entry points
	entryPoints = glob.sync("./blocks/**/*-includes.js").reduce((acc, path) => {
		// path is later used as a [name]
		let fileName = path.substring(path.lastIndexOf("/") + 1); // striping path
		fileName = fileName.substring(0, fileName.lastIndexOf(".")); //striping extension
		fileName = fileName.substring(0, fileName.lastIndexOf("-includes")); //striping includes from the name
		fileName = "block_" + fileName;
		acc[fileName] = path;
		return acc;
	}, {});

	// main files of the theme
	entryPoints["main"] = "./src/index.js";

	return entryPoints;
}

module.exports = {
	mode: "development",

	entry: generateEntryPoints(),
	output: {
		filename: "./[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},

	plugins: [
		new MiniCssExtractPlugin(),
		new BrowserSyncPlugin({
			port: browserSyncPluginOptions.port,
			proxy: browserSyncPluginOptions.proxy,
			files: ["**/*.php"],
			cors: "true",
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
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					// Compiles Sass to CSS
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
	},
};
