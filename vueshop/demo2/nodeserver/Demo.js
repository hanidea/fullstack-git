let user = require('./User');
console.log(`userName:${user.userName}`);
console.log(`I'm ${user.userName}, I say ${user.SayHello()}`)

let http = require('http');
let url = require('url');
let util = require('util');
let server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain;charset=utf-8");
    console.log("url:"+req.url);
    // res.end(util.inspect(url.parse(req.url)));
    res.end(util.inspect(url.parse('http://127.0.0.1:3000/test.html?a=1234#tag')));
}).listen(3000,'127.0.0.1',()=>{
    console.log("服务已启动，http://127.0.0.1:3000")
});