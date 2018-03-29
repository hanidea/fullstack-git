var HtmlWebpackPlugin = require('html-webpack-plugin');
//var webpack = require('webpack'); 
var path = require('path');

module.exports = {
  context:__dirname,
  entry:{
    foo:'./src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-bundle.js',
  },
  module:{
    rules:[{
      test:/\.js$/,
      include: path.resolve(__dirname, 'src'), 
      exclude: path.resolve(__dirname, 'node_modules'), 
      loader: "babel-loader"
    },
    {
      test:/\.css$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=1',
        {loader: 'postcss-loader', options: { ident: 'postcss',
        plugins: (loader) => [
          require('postcss-cssnext')(
            {
              browsers:['last 5 version']
            }
          ),
        ] 
        }} 
      ]
    }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin(
    {
      filename:'index.html',
      template:'index.html',
      inject:'body'
    })]
};