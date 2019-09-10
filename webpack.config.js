//通过node中的模块操作，向外暴露了一个配置文件
const path = require("path");
const webpack=require('webpack'); //启用热更新的 第二步
//导入在内存中生成的HTML 页面的插件,只要是插件都要放到plugin节点中去
const htmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),  //入口，表示webpack要打包的文件
    output: {//输出文件相关配置
        path: path.resolve(__dirname, './dist'),//指定 打包好的文件，输出到哪个目录中去
        filename: "bundle.js",//指定输出文件的名称
    },
    devServer: {//这是配置dev-server命令参数的第二种形式，相对来说，这种方式麻烦一点
        open:true,//自动打开浏览器
        port:3000,//设置启动时候的运行端口
        contentBase:'src',//指定托管的根目录
        hot:true//启用热更新的 第一步

    },
    plugins: [//配置插件的节点
        new webpack.HotModuleReplacementPlugin() ,//new一个热更新的 模块对象，这是启用热更新的第三步
        new htmlWebpackPlugin({  //创建一个在内存中生成HTML页面的插件
           template:path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
           filename:'index.html'//指定生成的页面名称
        })

    ],
    module:{//这个节点用于配置所有第三方模块 加载器
      rules:[//用于配置第三方模块的 处理规则
          {test: /\.css$/, use: ['style-loader', 'css-loader']}, //配置处理 .css文件的第三方loader 规则
          {test: /\.less$/, use: ['style-loader', 'css-loader','less-loader']}
      ]
    },
};