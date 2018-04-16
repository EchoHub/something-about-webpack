# webpack学习笔记  
官方地址：http://webpack.github.io/
中文地址：https://www.webpackjs.com/
## 简述
webpack是一款基于模块的动态打包工具，其最与众不同之处在于按需加载，只加载依赖的资源，实现模块与资源的直观组合。
## 配置
### entry   输入配置
- 单文件入口配置：   
  - 可以使用相对路径（例如："./asset/index.js"）;  
  - 也可以使用绝对路径（例如：path.resolve(__dirname, "asset/index.js")）;
- 多文件入口配置： 
{  
    entry1: "./entry1.js",  
    entry2: "./entry2.js"  
}
### output  输出配置
- path: 输出文件的目录
- filename: 打包后的文件名称,可以和[hash]一起使用（例如：readme.bundle-[hash].js）
- publicPath: 公共资源路径，一般用于设置文件中静态资源的引用路径
### resolve 模块解析配置
- extensions：用于自动解析确定的拓展名，自动补全功能（例如：['.ts', '.tsx', '.js']，则在文件中引用这些文件时可以不加后缀）
- modules: 用于配置解析模块的搜索目录（例如：["./component", "./assets/styles"]，则在文件中引用这些文件时候可以不用写该文件的引用路径）
### plugins 插件配置
- rules
    - test 正则匹配符合条件的文件类型 
    - use  配置加载器

