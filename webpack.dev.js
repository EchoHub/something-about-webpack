const path = require("path");
const merge = require('webpack-merge'); //合并不同配置
const common = require("./webpack.config.js");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 按需生成html模版
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 提取代码中的css生成独立的css文件
const CleanWebpackPlugin = require("clean-webpack-plugin"); // 清理文件
module.exports = merge(common, {
    devtool: 'inline-source-map', // dev: cheap-module-eval-source-map,prd: cheap-module-source-map
    devServer: {
        contentBase: "./_build",
        inline: true,
        openPage: "_build",
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(["_build"]),
        new HtmlWebpackPlugin({
            title: "Webpack LearningNote",
            inject: "body",
            template: path.resolve(__dirname, 'page/index.html')
        }),
        new ExtractTextPlugin("style.css")
    ]
})