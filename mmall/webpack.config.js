/*
 * @Author: James 
 * @Date: 2018-12-18 15:17:08 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-18 16:24:53
 */
const webpack = require('webpack');
const path = require('path');

var config = {
  mode: 'production',
  entry: {
    'index':['./src/page/index/index.js'],
    'login':['./src/page/login/index.js']
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  externals:{
    'jquery': 'window.jQuery'
  },
  plugins: [],
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "commons",
                chunks: "initial",
                minChunks: 2
            }
        }
    }
},
};

module.exports = config;