const webpack = require("webpack");
const path  = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 按需生成html模版
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 提取代码中的css生成独立的css文件
module.exports = {
    entry: path.resolve(__dirname, "/assets/scripts/main.js"), //转绝对路径 也可用相对路径 例如"./assets/scripts/main.js"
    output: {
        path: path.resolve(__dirname, "_build"),
        filename: "webpack.bundle-[hash].js",
        publicPath: "/_build"
    },
    resolve: {
        enforceExtension: true, // 若为true 表示不允许允许无拓展名文件， 默认为false
        extensions: [".js", ".css", ".json"], // 自动解析确定的拓展
        modules: [path.resolve(__dirname, "components"),"node_modules"] // 配置webpack解析模块时搜索的目录
    },
    module: {
        noParse: function (content) {
            // 防止 webpack 解析那些任何与给定正则表达式相匹配的文件
            console.log(content);
            return /jquery|lodash/.test(content);
        },
        rules: [
            {
                test: /.css$/,
                include: path.resolve(__dirname, "assets/styles"),
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
                test: /\.(ts|tsx)$/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './page/index.html'})
    ]
}