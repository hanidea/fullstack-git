/*
 * @Author: James 
 * @Date: 2018-12-18 15:47:41 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-01-02 14:53:45
 */

var _mm = require('util/mm.js');
_mm.request({
    url: '/product/list.do?keyword=1',
    success: function(res){
        console.log(res);
    },
    error: function(errMsg){
        console.log(errMsg);
    }
})
//require('../../js/module.js');
// require('./index.css');
// console.log('hello index');
// $('body').html('hello index');
// alert('test two');