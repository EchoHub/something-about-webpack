# webpack学习笔记  
官方地址：http://webpack.github.io/
中文地址：https://www.webpackjs.com/
## 简述
webpack是一款基于模块的动态打包工具，其最与众不同之处在于按需加载，只加载依赖的资源。
## 配置
### entry   输入配置
- 单文件入口配置：   
  - 可以使用相对路径（例如："./asset/index.js")  
  - 也可以使用绝对路径（例如：path.resolve(__dirname, "asset/index.js")    
- 多文件入口配置：   
{  
    entry1: "./entry1.js",  
    entry2: "./entry2.js"  
}
### output  输出配置
- path: 输出文件的目录
- filename: 打包后的文件名称
    - 与[hash]一起使用，标记文件唯一性，实现无缓存（例如：readme.bundle-[hash].js）
    - 与[name]一起使用，配合多入口，生成多个输出文件（例如：[name].bundle.js）
- publicPath: 公共资源路径，一般用于设置文件中静态资源的引用路径
### resolve 模块解析配置
- extensions：用于自动解析确定的拓展名，自动补全功能（例如：['.ts', '.tsx', '.js']，则在文件中引用这些文件时可以不加后缀）
- modules: 用于配置解析模块的搜索目录（例如：["./component", "./assets/styles"]，则在文件中引用这些文件时候可以不用写该文件的引用路径）
### plugins 插件配置
- test 正则匹配符合条件的文件类型 
- use  配置加载器，用于解析符合条件的文件内容
### devtool 设置Source Map（PS：不同浏览器对SourceMap的支持程度不一致，按需搭配）
- eval 每个模块都封装到 eval 包裹起来，并在后面添加 //# sourceURL
- source-map 最原始的 source-map 实现方式，其实现是打包代码同时创建一个新的 sourcemap 文件， 并在打包文件的末尾添加 //# sourceURL 注释行告诉 JS 引擎文件在哪儿
- hidden-source-map 没注释的soucremap，没注释怎么找文件呢？貌似只能靠后缀，譬如 xxx/bundle.js 文件，某些引擎会尝试去找 xxx/bundle.js.map
- inline-source-map 为每一个文件添加 sourcemap 的 DataUrl，注意这里的文件是打包前的每一个文件而不是最后打包出来的，同时这个 DataUrl 是包含一个文件完整 souremap 信息的 Base64 格式化后的字符串，而不是一个 url
- eval-source-map 这个就是把 eval 的 sourceURL 换成了完整 souremap 信息的 DataUrl
- cheap-source-map 不包含列信息，不包含 loader 的 sourcemap，（譬如 babel 的 sourcemap）
- cheap-module-source-map 不包含列信息，同时 loader 的 sourcemap 也被简化为只包含对应行的。最终的 sourcemap 只有一份，它是 webpack 对 loader 生成的 sourcemap 进行简化，然后再次生成的
### devServer webpack-dev-server 提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
- contentBase 设置可访问的文件目录
- inline 布尔类型，自动刷新页面
- hot 布尔类型，开启热替换
- 具体 参照（https://www.npmjs.com/package/webpack-dev-server）
## 常用插件(https://www.npmjs.com)
- html-webpack-plugin： 生成模版页面
    - title 设置文件标题
    - filename 生成文件的名称，默认为index
    - template 模版文件
    - inject 注入选项（true、body、head、false） 注入文件的存放位置 true|body即在body底部，head即head标签底部，false不注入文件
    - favicon 配置页面的icon
    - minify 是否对文件进行压缩 true|false
    - 具体 参照（https://www.npmjs.com/package/html-webpack-plugin）
- clean-webpack-plugin： 清理指定目录文件
    - ["_build"] 数组类型，配置需要清理的目录
    - 具体 参照（https://www.npmjs.com/package/clean-webpack-plugin）
- webpack.optimize.UglifyJsPlugin： 代码压缩
- extract-text-webpack-plugin：独立打包样式 将内联的css样式抽离出来打包进指定文件中去
    - 具体 参照（https://www.npmjs.com/package/extract-text-webpack-plugin）
