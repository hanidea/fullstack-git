const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');  //引入插件
module.exports = {
    mode: 'production',
    module:{
        rules:[
            {
            test:/\.vue$/,
            use:'vue-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextWebapckPlugin.extract({  
                    fallback: 'style-loader',  
                use: [
                    'style-loader',
                    'css-loader'
                ]
            })
            },
            { 
                test: /\.(png|jpg|gif)$/, 
                use: [{ loader: 'url-loader',options: { limit: 8192 } }] 
            }
        ]
    },
    resolve: {  //导入的时候不用写拓展名
        extensions: [' ', '.js', '.json', '.vue', '.scss', '.css']
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,//防止重复保存频繁重新编译,300ms内重复保存不打包
        poll: 1000  //每秒询问的文件变更的次数
    },
    devServer:{
        inline: true,
        compress: true,
        host: '0.0.0.0',
        port: 2500,
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextWebapckPlugin({
            filename: 'style.css' //路径以及命名
        }),
        new VueLoaderPlugin()
      ]
}
