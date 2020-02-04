var path = require("path");
module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        path: path.resolve("build"),
        filename: "bundle.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    externals: {
        react: "react"
    }
};