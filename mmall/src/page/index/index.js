/*
 * @Author: James 
 * @Date: 2018-12-18 15:47:41 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-09 15:42:34
 */
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
navSide.init({
    name : 'order-list'
});
// var html = '<div>{{data}}</div>';
// var data = {
//     data: 'James'
// }
// console.log(_mm.renderHtml(html,data));
// console.log(_mm.getUrlParam('test'));
// _mm.request({
//     url: '/product/list.do?keyword=1',
//     success: function(res){
//         console.log(res);
//     },
//     error: function(errMsg){
//         console.log(errMsg);
//     }
// })
//require('../../js/module.js');
// require('./index.css');
// console.log('hello index');
// $('body').html('hello index');
// alert('test two');