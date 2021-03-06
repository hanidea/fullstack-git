import regeneratorRuntime from "regenerator-runtime"
global.regeneratorRuntime = regeneratorRuntime

import util from './utils/util'

global.util = util
const R = require('ramda');

global.R = R

const asyncWrap = fn => (options = {}) => new Promise((resolve, reject) =>{
    let conf = {
        success: res => {
            console.log(res)
            resolve(res)
        }
    }
    wx[fn](R.merge(conf, options))
})

wx.getSystemInfoAsync = asyncWrap('getSystemInfo')
wx.loginAsync = asyncWrap('login')
wx.getUserInfoAsync = asyncWrap('getUserInfo')
wx.reqAsync = asyncWrap('request')