const path = require('path');
//to have CSS in separate files, not in JS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin(),
        new BrowserSyncPlugin({
            port: 3000,
            proxy: 'http://learningplace.test/',
            files: [
              "**/*.php"
            ]

        })
    ],
    watchOptions: {
        //time that webpack wait to compile files
        aggregateTimeout: 1500,
        ignored: '**/node_modules'
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
                    "sass-loader"
                ]
            }
        ]
    }
};