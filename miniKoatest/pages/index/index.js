import {Base64} from 'js-base64'

Page({
  onGetToken(){
    //code
    wx.login({
      success:(res)=>{
        if(res.code){
          wx.request({
            url: 'http://localhost:3000/v1/token',
            method:'POST',
            data:{
              account:res.code,
              type:100
            },
            success:(res)=>{
              console.log(res.data)
              const code= res.statusCode.toString()
              if(code.startsWith('2')){
                wx.setStorageSync('token', res.data.token)
              }
            }
          })
        }
      }
    })
  },
  onVerifyToken(){
    wx.request({
      url: 'http://localhost:3000/v1/token/verify',
      method:'POST',
      data:{
        token:wx.getStorageSync('token')

      },
      success:res=>{
        console.log(res.data)
      }
    })
  },

  onGetClassicFavor() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/100/1/favor',
      method: 'GET',
      success: res => {
        console.log(res.data)
      },
      header: {
        Authorization: this._encode()
      }
    })
  },

  onGetMyFavorList() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/favor',
      method: 'GET',
      success: res => {
        console.log(res.data)
      },
      header: {
        Authorization: this._encode()
      }
    })
  },

  onGetDetail() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/100/1',
      method: 'GET',
      success: res => {
        console.log(res.data)
      },
      header: {
        Authorization: this._encode()
      }
    })
  },


  onGetPrevious() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/6/previous',
      method: 'GET',
      success: res => {
        console.log(res.data)
      },
      header: {
        Authorization: this._encode()
      }
    })
  },

  onGetLatest() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/latest',
      method: 'GET',
      success: res => {
        console.log(res.data)
      },
      header:{
        Authorization:this._encode()
      }
    })
  },

  onGetNext() {
    wx.request({
      url: 'http://localhost:3000/v1/classic/6/next',
      method: 'GET',
      success: res => {
        console.log(res.data)
      },
      header: {
        Authorization: this._encode()
      }
    })
  },

  onLike() {
    wx.request({
      url: 'http://localhost:3000/v1/like',
      method: 'POST',
      data:{
        artId:1,
        type:100
      },
      success: res => {
        console.log(res.data)
      },
      header: {
        Authorization: this._encode()
      }
    })
  },

  onDisLike() {
    wx.request({
      url: 'http://localhost:3000/v1/like/cancel',
      method: 'POST',
      data: {
        artId: 1,
        type: 100
      },
      success: res => {
        console.log(res.data)
      },
      header: {
        Authorization: this._encode()
      }
    })
  },

  _encode(){
    const token = wx.getStorageSync('token')
    const base64 = Base64.encode(token+':')
    return 'Basic '+base64
  }

})