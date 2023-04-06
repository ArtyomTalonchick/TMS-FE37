const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    mode: "development",
    devtool: "source-map",
    target: ["web", "es5"],
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(sass|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: true,
        }),
        new CleanWebpackPlugin(),
        new Dotenv(),
    ],
};
