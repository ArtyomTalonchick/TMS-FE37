const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
    },
    mode: "production",
    target: ["web", "es5"],
    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
            { 
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: "babel-loader"
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    }
};