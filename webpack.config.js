const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 按需生成html模版
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 提取代码中的css生成独立的css文件
const CleanWebpackPlugin = require("clean-webpack-plugin"); // 清理文件
module.exports = {
    devtool: 'cheap-module-eval-source-map', // dev: cheap-module-eval-source-map,prd: cheap-module-source-map
    entry: path.resolve(__dirname, "assets/scripts/main.js"), //转绝对路径 也可用相对路径 例如"./assets/scripts/main.js"
    output: {
        path: path.resolve(__dirname, "_build"),
        filename: "webpack_learning_note.bundle-[hash].js",
        publicPath: "/_build"
    },
    resolve: {
        extensions: [".webpack.js", ".ts", ".tsx", ".js", ".css"], // 自动解析确定的拓展 自动补全
        modules: ["./components", "./assets/styles", "mock", "node_modules"] // 配置webpack解析模块时搜索的目录
    },
    devServer: {
        contentBase: __dirname + "/_build",
        inline: true,
        port: 9000
    },
    module: {
        noParse: function (content) {
            // 防止 webpack 解析那些任何与给定正则表达式相匹配的文件
            return /jquery|lodash/.test(content);
        },
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "assets/styles"),
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                include: path.resolve(__dirname, "components"),
                use: "ts-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: "file-loader" //加载图片， 混合到css中 
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader" // 加载字体
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack LearningNote",
            inject: "body",
            template: path.resolve(__dirname, 'page/index.html')
        }),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin("_build", {
            root: __dirname,       　　　　　　　　　　//根目录
            verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
            dry: false        　　　　　　　　　　//启用删除文件
        })
    ]
}
