/*
 * @Author: James 
 * @Date: 2018-12-18 15:17:08 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-02-18 09:37:43
 */

const path = require('path');
const webpack=require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
//获取html-webpack-plugin参数方法
var getHtmlConfig = function(name,title){
  return {
    template:'./src/view/'+ name + '.html',
    filename:'view/' + name + '.html',
    title:title,
    inject:true,
    hash:true,
    chunks:['common',name],
    // chunksSortMode: 'manual'
  }
}

var config = {
  mode: 'production',
  performance: {
    hints:false
  },    
  entry: {
    'index':['./src/page/index/index.js'],
    'list': ['./src/page/list/index.js'],
    'detail': ['./src/page/detail/index.js'],
    'cart': ['./src/page/cart/index.js'],
    'order-confirm': ['./src/page/order-confirm/index.js'],
    'user-login':['./src/page/user-login/index.js'],
    'user-register':['./src/page/user-register/index.js'],
    'user-center':['./src/page/user-center/index.js'],
    'user-center-update':['./src/page/user-center-update/index.js'],
    'user-pass-update':['./src/page/user-pass-update/index.js'],
    'user-pass-reset':['./src/page/user-pass-reset/index.js'],
    'common':['./src/page/common/index.js'],
    'result':['./src/page/result/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot : true,
    inline : true,
    port: 9000,
    disableHostCheck: true
  },
  externals:{
    'jquery': 'window.jQuery'
  },
  module:{ //我写一个module
    //配置一个rules(规则),rules是一个数组,里面包含一条一条的规则
    rules:[
        {
            // test 表示测试什么文件类型
            test:/\.css$/,
            // 使用 'style-loader','css-loader'
            // use:ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader'}),
            use: [
              miniCssExtractPlugin.loader,
              {
                  loader: 'css-loader'
              }
            ]    
        },
        {
          // test 表示测试什么文件类型
          test:/\.(gif|png|jpg|woff|woff2|svg|eot|ttf)\??.*$/,
          // 使用 'style-loader','css-loader'
          // use:'url-loader?limit=100&name=resource/[name].[ext]',
          use: [{
            loader: "url-loader",
            options:{
              limit:100,
              name: "[name].[ext]",
              publicPath: "../resource/",
              outputPath: "resource/"
            }
          }]
          
        },
        {
          // test 表示测试什么文件类型
          test:/\.string$/,
          loader:'html-loader'
        },
        // {
        //     test: /\.html$/,
        //     use: [{
        //       loader: 'html-loader',
        //       // options: {
        //       // minimize: true
        //       // }
        //     }],
        // }
    ]
  },
  resolve:{
    alias : {
      node_modules : __dirname + '/node_modules',
      util    : __dirname + '/src/util',
      page    : __dirname + '/src/page',
      service : __dirname + '/src/service',
      image   : __dirname + '/src/image',
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin(getHtmlConfig('index','首页')),
    new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表页')),
    new HtmlWebpackPlugin(getHtmlConfig('detail', '商品详情页')),
    new HtmlWebpackPlugin(getHtmlConfig('cart', '购物车')),
    new HtmlWebpackPlugin(getHtmlConfig('order-confirm', '订单确认页')),
    new HtmlWebpackPlugin(getHtmlConfig('user-login','用户登录')),
    new HtmlWebpackPlugin(getHtmlConfig('user-register','用户注册')),
    new HtmlWebpackPlugin(getHtmlConfig('user-center','个人中心')),
    new HtmlWebpackPlugin(getHtmlConfig('user-center-update','修改个人信息')),
    new HtmlWebpackPlugin(getHtmlConfig('user-pass-update','修改密码')),
    new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset','找回密码')),
    new HtmlWebpackPlugin(getHtmlConfig('result','操作结果')),
    new miniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "[id].css"
    }),
    // new ExtractTextPlugin("./css/[name].css"), //默认其实目录问打包后的入口文件路径，所以需要../ 
  ],
  optimization:{
    runtimeChunk: false,
    splitChunks: {
        cacheGroups: {
            common: {
                test:/[\\/]page[\\/]common[\\/]/,//ERROR in chunk common [initial]
                name: "common",
                chunks: "all",
                minChunks: 2
            }
        }
    }
  },
  // optimization: {
  //   splitChunks: {
  //      chunks: 'async', 
  //      minSize: 30000,
  //      minChunks: 1,
  //      maxAsyncRequests: 5,
  //      maxInitialRequests: 3,
  //      automaticNameDelimiter: '~', 
  //      name: true,
  //       cacheGroups: {
  //         vendor:{//node_modules内的依赖库
  //           chunks:"all",
  //           test: /[\\/]node_modules[\\/]/,
  //           name:"vendor",
  //           minChunks: 1, //被不同entry引用次数(import),1次的话没必要提取
  //           maxInitialRequests: 5,
  //           minSize: 0,
  //           priority:100,
  //           // enforce: true?
  //       },
  //       common: {// ‘src/js’ 下的js文件
  //           chunks:"all",
  //           test:/[\\/]src[\\/]js[\\/]/,//也可以值文件/[\\/]src[\\/]js[\\/].*\.js/,  
  //           name: "common", //生成文件名，依据output规则
  //           minChunks: 2,
  //           maxInitialRequests: 5,
  //           minSize: 0,
  //           priority:1
  //       }
  //       }
  //   }
  //  },

};

module.exports = config;