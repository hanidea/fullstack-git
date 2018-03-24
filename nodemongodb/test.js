// var MongoClient = require('mongodb').MongoClient;
// // 连接数据库
// var url_test = 'mongodb://localhost:27017/test'; //数据库test本不存在，连接时会自动创建
//
// var insertData = function(db){
//   // 往test数据库里新建一个site集合，并插入一条数据
//   db.collection('site').insertOne({name: 'guojc', age: 99, hobby: 'movie'}, function(err, result){
//     console.log('inserted successly');
//     console.log(result);
//     db.close();
//     console.log('close');
//   });
// }
//
// MongoClient.connect(url_test, function(err, db) {
//   console.log('Connected successly to server.');
//   insertData(db);
// });

const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
mongoClient.connect("mongodb://localhost:27017", function(err, client) { assert.equal(null, err);

// admin 为 数据库名称；
const db = client.db("test");
// PASS 为 数据库里面的某一个集合；
const pass = db.collection('PASS');

pass.find({}).toArray(function(err, docs) {

assert.equal(err, null);

console.log(docs);
});

});

module.exports = router;
