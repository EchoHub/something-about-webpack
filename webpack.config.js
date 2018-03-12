const webpack = require("webpack");
const path  = require("path");
module.exports = {
    entry: __dirname + "/assets/scripts/main.js",
    output: {
        path: __dirname + "/_build",
        filename: "webpack.bundle-[hash].js"
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /.ts(x|)$/,
                use: "ts-loader"
            }
        ]
    }
}