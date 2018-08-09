var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/vueshop');

mongoose.connection.on("connected",function(){
    console.log("MongoDB connected success.")
});

mongoose.connection.on("error",function(){
    console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected",function(){
    console.log("MongoDB connected disconnected.")
})
//查询商品列表
router.get("/",function(req,res,next){
    //res.send('hello,goods list');
    let page = parseInt(req.param("page"));
    let pageSize = parseInt(req.param("pageSize"));
    let priceLevel = req.param("priceLevel");
    var sort = req.param("sort");
    let skip = (page-1)*pageSize;
    let params = {};
    var priceGt = '',priceLte = '';
    if (priceLevel!="all"){
        switch (priceLevel){
            case '0':priceGt = 0;priceLte=500;break;
            case '1':priceGt = 500;priceLte=1000;break;
            case '2':priceGt = 1000;priceLte=5000;break;
        }
        params = {
            salePrice:{
                $gt:priceGt,
                $lte:priceLte
            }
        }
    }
    let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
    goodsModel.sort({'salePrice':sort});
    goodsModel.exec(function(err,doc){
        if(err){
            res.json({
                status:'1',
                msg:err.message
            })
        }else{
            res.json({
                status:'0',
                msg:'priceshow',
                result:{
                    count:doc.length,
                    list:doc
                }
            });
        }
    })
});
//加入到购物车
router.post("/addCart",function(req,res,next){
    var userId = '100000077';
    var productId = req.body.productId;
    var User = require('../models/users');

    User.findOne({userId:userId},function(err,userDoc){
        if(err){
            res.json({
                status:"1",
                msg:err.message
            });
        }else{
            console.log("userDoc:"+userDoc);
            if(userDoc){
                let goodsItem = '';
                userDoc.cartList.forEach(function(item){
                    if(item.productId == productId){
                        goodsItem = item;
                        item.productNum ++;
                    }
                });
                if(goodsItem){
                    userDoc.save(function(err2,doc2){
                        if(err2){
                            res.json({
                                status:"1",
                                msg:err2.message
                            });
                        }else{
                            res.json({
                                status:"0",
                                msg:'newmsg2',
                                result:'success2'
                            });
                        }
                    });
                }else{
                    Goods.findOne({productId:productId},function(err1,doc1){
                        if(err1){
                            res.json({
                                status:"1",
                                msg:err1.message
                            });
                        }else{
                            if(doc1){
                                var obj = doc1.toObject();
                                obj.productNum = 1;
                                obj.checked = 1;
                                userDoc.cartList.push(obj);
                                userDoc.save(function(err2,doc2){
                                    if(err2){
                                        res.json({
                                            status:"1",
                                            msg:err2.message
                                        });
                                    }else{
                                        res.json({
                                            status:"0",
                                            msg:'newmsg',
                                            result:'success'
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        }
    });
});
module.exports = router;