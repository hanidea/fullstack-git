//npm install serve-static --save
//npm install body-parser
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port= process.env.port || 3000;
var app = express();
app.use(serveStatic('bower_components'));
app.use(bodyParser.urlencoded());
app.set('views','./views/pages/');
app.set('view engine','jade');
//app.use(express.bodyParser());
app.use(express.static(path.join(__dirname,'bower_components')));
app.listen(port);
console.log('service started ok ' + port);

//index page
app.get('/',function(req,res){
    res.render('index',{
        title:'node_mongodb首页',
        movies:[{
        title:'机械战警1',
        _id:1,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警2',
        _id:2,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警3',
        _id:3,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警4',
        _id:4,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警5',
        _id:5,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警6',
        _id:6,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }]
    });
});

app.get('/movie/:id',function(req,res){
    res.render('detail',{
        title:'node_mongodb详情',
        movie:{
            doctor:'david zhang',
            country:'china',
            title:'机械战警',
            poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language:'英语',
            flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary:'随便来点内容，翻拍得还不错'
        }
    });
});

app.get('/admin/movie',function(req,res){
    res.render('admin',{
        title:'node_mongodb后台录入',
        movie:{
            title:'',
            doctor:'',
            country:'',
            year:'',
            poster:'',
            flash:'',
            summary:'',
            language:''
        }
    });
});

app.get('/admin/list',function(req,res){
    res.render('list',{
        title:'node_mongodb列表',
        movies:[{
            doctor:'david zhang',
            country:'china',
            title:'机械战警1',
            _id:1,
            poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language:'英语',
            flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary:'随便来点内容，翻拍得还不错1'
        },{
            doctor:'david zhang',
            country:'china',
            title:'机械战警2',
            _id:2,
            poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language:'英语',
            flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary:'随便来点内容，翻拍得还不错2'
        }]
    });
});