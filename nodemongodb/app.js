//npm install serve-static --save
//npm install body-parser
//npm install express jade moment mongoose underscore
//npm install bower(boostrap,jquery)
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Movie = require('./models/movie');
var _ = require('underscore');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port= process.env.port || 3000;
var app = express();
mongoose.connect('mongodb://127.0.0.1:27017/imovie');

app.use(serveStatic('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views','./views/pages/');
app.set('view engine','jade');
//app.use(express.bodyParser());
app.use(express.static(path.join(__dirname,'public')));
app.locals.moment=require('moment');
app.listen(port);
console.log('service started ok ' + port);

//index page
app.get('/',function(req,res){
    Movie.fetch(function(err,movies){
        if(err){
            console.log(err);
        }
    res.render('index',{
        title:'node_mongodb首页',
        movies:movies
        });
    });
});

app.get('/movie/:id',function(req,res){
    var id = req.params.id;
    Movie.findById(id,function(err,movie){
        res.render('detail',{
            title:'node_mongodb'+movie.title,
            movie:movie
        });

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
// admin update movie
app.get('/admin/update/:id',function(req,res){
    var id = req.params.id; 
    if (id) {
       Movie.findById(id,function(err,movie){
        res.render('admin',{
          title:'immoc 后台更新页',
          movie:movie
        });
      });
    }
});
// admin post movie
app.post('/admin/movie/new',function(req,res){
    var id = req.body.movie._id;
    var movieObj=req.body.movie;
    var _movie;
    if(id!=='undefined'){
        Movie.findById(id,function(err,movie){
            if(err){
                console.log(err);
            }
            _movie = _.extend(movie,movieObj);
            _movie.save(function(err,movie){
                if(err){
                    console.log(err);
                }
                res.redirect('/movie/'+movie._id);
            });

        });
    }
    else{
        _movie = new Movie({
            doctor:movieObj.doctor,
            title:movieObj.title,
            country:movieObj.country,
            language:movieObj.language,
            year:movieObj.year,
            poster:movieObj.poster,
            summary:movieObj.summary,
            flash:movieObj.flash,
        });
        _movie.save(function(err,movie){
            if(err){
                console.log(err);
            }
            res.redirect('/movie/'+movie._id);
        });
    }
});

app.get('/admin/list',function(req,res){
    Movie.fetch(function(err,movies){
        if(err){
            console.log(err);
        }
        res.render('list',{
            title:'node_mongodb列表',
            movies:movies
        });
    });
    
});

// list delete movie data 列表页删除电影
app.delete('/admin/list', function (req, res) {
    var id = req.query.id;
    console.log(id);
    if (id) {
        Movie.remove({_id: id}, function (err, movie) {
            if (err) {
                console.log(err);
            } else {
                res.json({success: 1});
            }
        });
    }
});