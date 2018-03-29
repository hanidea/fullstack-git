var HtmlWebpackPlugin = require('html-webpack-plugin');
//var webpack = require('webpack'); 
var path = require('path');

module.exports = {
  // entry: ['./src/foo.js','./src/world.js'],
  entry:{
    foo:'./src/foo.js',
    world:'./src/world.js',
    index:'./src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash].js',
    publicPath:'http://cdn.com/'
  },
  plugins: [
    new HtmlWebpackPlugin(
    {
      filename:'index-[hash].html',
      template:'index.html',
      inject:'head',
      title:'webpack index',
      date:new Date(),
      minify:{
        removeComments:true,
        collapseWhitespace:true
      },
      chunks:['index']
    }),
    new HtmlWebpackPlugin(
      {
        filename:'world.html',
        template:'index.html',
        inject:'head',
        title:'webpack world',
        chunks:['world']
      }),
      new HtmlWebpackPlugin(
        {
          filename:'foo.html',
          template:'index.html',
          inject:'head',
          title:'webpack foo',
          chunks:['foo']
        })
  ]
};