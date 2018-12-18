var express = require('express');
var router = express.Router();
require('./../util/util')
var Users = require('./../models/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//登入接口
router.post("/login",function(req,res,next) {
  var param = {
    userName:req.body.userName,
    userPwd:req.body.userPwd
  };
  Users.findOne(param,function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      if(doc){
        res.cookie('userId',doc.userId,{
          path:'/',
          maxAge:1000*60*60
        });
        res.cookie('userName',doc.userName,{
          path:'/',
          maxAge:1000*60*60
        });
        res.json({
          status:'0',
          msg:'',
          result:{
            userName:doc.userName
          }
        });
      }else{
        res.json({
          status:'1',
          msg:'账号密码错误',
          result:''
        });
      }
    }
  })
});

//登出接口
router.post("/logout",function(req,res,next){
  res.cookie("userId","",{
    path:"/",
    maxAge:-1
  }),
  res.cookie("userName","",{
    path:"/",
    maxAge:-1
  })
  res.json({
    status:"0",
    msg:"",
    result:""
  })
});

router.get("/checkLogin",function(req,res,next){
  if(req.cookies.userId){
    res.json({
      status:'0',
      msg:"",
      result:req.cookies.userName || ''
    });
  }else{
    res.json({
      status:'1',
      msg:"未登录",
      result:''
    });
  }
});

router.get('/getCartCount',function (req,res,next) {
  if(req.cookies && req.cookies.userId){
    var userId = req.cookies.userId;
    Users.findOne({userId:userId},function (err,doc) {
      if(err){
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        });
      }else{
        var cartList = doc.cartList;
        let cartCount = 0;
        cartList.map(function(item){
          cartCount += parseInt(item.productNum);
        })
        res.json({
          status: '0',
          msg: '',
          result: cartCount
        });
      }
    })
  }
})


//查询当前用户的购物车数据
router.get('/cartList',function (req,res,next) {
  var userId = req.cookies.userId;
  Users.findOne({userId:userId},function (err,doc) {
    if(err){
      res.json({
        status: '1',
        msg: 'err.message',
        result: ''
      });
    }else{
      if(doc){
        res.json({
          status: '0',
          msg: '',
          result: doc.cartList
        });
      }
    }
  });
});

//购物车删除
router.post("/cartDel",function(req,res,next){
  var userId = req.cookies.userId,productId = req.body.productId;
  Users.update({
    userId:userId
  },{
    $pull:{
      'cartList':{
        'productId':productId
      }
    }
  },function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message,
        result:''
      })
    }else{
      res.json({
        status:'0',
        msg:'',
        result:'suc'
      })
    }
  });
});

//修改商品数量
router.post('/cartEdit',function (req,res,next) {
  var userId = req.cookies.userId,
      productId = req.body.productId,
      productNum = req.body.productNum,
      checked = req.body.checked;
  Users.update({'userId':userId,'cartList.productId':productId}, {
    'cartList.$.productNum': productNum,
    'cartList.$.checked': checked
  },function (err,doc) {
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
        res.json({
          status:'0',
          msg:'',
          result:'suc'
      });
    }
  })
});

//商品全选
router.post('/editCheckAll',function (req,res,next) {
  var userId = req.cookies.userId,
      checkAll = req.body.checkAll?'1':'0';
  Users.findOne({userId:userId},function (err,user) {
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      });
    }else{
      if(user){
        user.cartList.forEach((item)=>{
          item.checked = checkAll;
        })
        user.save(function (err1,doc) {
          if(err){
            res.json({
              status:'1',
              msg:err1.message,
              result:''
            });
          }else{
            res.json({
              status:'0',
              msg:'',
              result:'suc'
            });
          }
        })
      }
    }
  });
});
//查询用户地址接口
router.get("/addressList", function (req,res,next) {
  var userId = req.cookies.userId;
  Users.findOne({userId:userId}, function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message,
        result:''
      });
    }else{
      res.json({
        status:'0',
        msg:'',
        result:doc.addressList
      });
    }
  })
});
//设置默认地址接口
router.post("/setDefault", function (req,res,next) {
  var userId = req.cookies.userId,
      addressId = req.body.addressId;
  if(!addressId){
    res.json({
      status:'1003',
      msg:'addressId is null',
      result:''
    });
  }else{
    Users.findOne({userId:userId}, function (err,doc) {
      if(err){
        res.json({
          status:'1',
          msg:err.message,
          result:''
        });
      }else{
        var addressList = doc.addressList;
        addressList.forEach((item)=>{
          if(item.addressId ==addressId){
             item.isDefault = true;
          }else{
            item.isDefault = false;
          }
        });

        doc.save(function (err1,doc1) {
          if(err){
            res.json({
              status:'1',
              msg:err.message,
              result:''
            });
          }else{
              res.json({
                status:'0',
                msg:'',
                result:''
              });
          }
        })
      }
    });
  }
});
//删除地址接口
router.post("/delAddress", function (req,res,next) {
  var userId = req.cookies.userId,addressId = req.body.addressId;
  Users.update({
    userId:userId
  },{
    $pull:{
      'addressList':{
        'addressId':addressId
      }
    }
  }, function (err,doc) {
      if(err){
        res.json({
            status:'1',
            msg:err.message,
            result:''
        });
      }else{
        res.json({
          status:'0',
          msg:'',
          result:''
        });
      }
  });
});
//生成订单
router.post("/payMent", function (req,res,next) {
  var userId = req.cookies.userId,
    addressId = req.body.addressId,
    orderTotal = req.body.orderTotal;
  Users.findOne({userId:userId}, function (err,doc) {
     if(err){
        res.json({
            status:"1",
            msg:err.message,
            result:''
        });
     }else{
       var address = '',goodsList = [];
       //获取当前用户的地址信息
       doc.addressList.forEach((item)=>{
          if(addressId==item.addressId){
            address = item;
          }
       })
       //获取用户购物车的购买商品
       doc.cartList.filter((item)=>{
         if(item.checked=='1'){
           goodsList.push(item);
         }
       });

       var platform = '622';
       var r1 = Math.floor(Math.random()*10);
       var r2 = Math.floor(Math.random()*10);

       var sysDate = new Date().Format('yyyyMMddhhmmss');
       var createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
       var orderId = platform+r1+sysDate+r2;
       var order = {
          orderId:orderId,
          orderTotal:orderTotal,
          addressInfo:address,
          goodsList:goodsList,
          orderStatus:'1',
          createDate:createDate
       };

       doc.orderList.push(order);

       doc.save(function (err1,doc1) {
          if(err1){
            res.json({
              status:"1",
              msg:err.message,
              result:''
            });
          }else{
            res.json({
              status:"0",
              msg:'',
              result:{
                orderId:order.orderId,
                orderTotal:order.orderTotal
              }
            });
          }
       });
     }
  })
});
//根据订单Id查询订单信息
router.get("/orderDetail", function (req,res,next) {
  var userId = req.cookies.userId,orderId = req.param("orderId");
  Users.findOne({userId:userId}, function (err,userInfo) {
      if(err){
          res.json({
             status:'1',
             msg:err.message,
             result:''
          });
      }else{
         var orderList = userInfo.orderList;
         if(orderList.length>0){
           var orderTotal = 0;
           orderList.forEach((item)=>{
              if(item.orderId == orderId){
                orderTotal = item.orderTotal;
              }
           });
           if(orderTotal>0){
             res.json({
               status:'0',
               msg:'',
               result:{
                 orderId:orderId,
                 orderTotal:orderTotal
               }
             })
           }else{
             res.json({
               status:'120002',
               msg:'无此订单',
               result:''
             });
           }
         }else{
           res.json({
             status:'120001',
             msg:'当前用户未创建订单',
             result:''
           });
         }
      }
  })
});
module.exports = router;