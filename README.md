# webpack学习笔记  
官方地址：http://webpack.github.io/
中文地址：https://www.webpackjs.com/
## 简述
webpack是一款基于模块的动态打包工具，其最与众不同之处在于按需加载，只加载依赖的资源，实现模块与资源的直观组合。
## 配置
### entry   输入配置
```bash
- 单文件入口配置：   
  - 可以使用相对路径（例如："./asset/index.js")  
  - 也可以使用绝对路径（例如：path.resolve(__dirname, "asset/index.js")    
- 多文件入口配置：   
{  
    entry1: "./entry1.js",  
    entry2: "./entry2.js"  
}
```
### output  输出配置
```bash
- path: 输出文件的目录
- filename: 打包后的文件名称
    - 与[hash]一起使用，标记文件唯一性，实现无缓存（例如：readme.bundle-[hash].js）
    - 与[name]一起使用，配合多入口，生成多个输出文件（例如：[name].bundle.js）
- publicPath: 公共资源路径，一般用于设置文件中静态资源的引用路径
```
### resolve 模块解析配置
```bash
- extensions：用于自动解析确定的拓展名，自动补全功能（例如：['.ts', '.tsx', '.js']，则在文件中引用这些文件时可以不加后缀）
- modules: 用于配置解析模块的搜索目录（例如：["./component", "./assets/styles"]，则在文件中引用这些文件时候可以不用写该文件的引用路径）
```
### plugins 插件配置
```bash
- rules
    - test 正则匹配符合条件的文件类型 
    - use  配置加载器，用于解析符合条件的文件内容
```
## 常用插件
- html-webpack-plugin： 生成模版页面
```bash
    - title 设置文件标题
    - filename 生成文件的名称，默认为index
    - template 模版文件
    - inject 注入选项（true、body、head、false） 注入文件的存放位置 true|body即在body底部，head即head标签底部，false不注入文件
    - favicon 配置页面的icon
    - minify 是否对文件进行压缩 true|false
    ...
```
- clean-webpack-plugin： 清理指定目录文件
```bash
    - ["_build"] 数组类型，配置需要清理的目录
```

