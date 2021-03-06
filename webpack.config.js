const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 提取代码中的css生成独立的css文件
module.exports = {
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
    module: {
        noParse: function (content) {
            // 防止 webpack 解析那些任何与给定正则表达式相匹配的文件
            return /jquery|lodash/.test(content);
        },
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "assets/styles"),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", // 编译完成用什么loader去提取文件
                    use: "css-loader" // 用什么loader去编译文件
                })
            },
            {
                test: /\.(ts|tsx)$/,
                include: path.resolve(__dirname, "components"),
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: "file-loader" //加载图片， 混合到css中 
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader", "url-loader"] // 加载字体
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // })
        // new webpack.optimize.CommonsChunkPlugin(
        //     { // 抽离公共模块 去重
        //         name: 'common' // 指定公共 bundle 的名称。
        //     }
        // )
    ]
}
