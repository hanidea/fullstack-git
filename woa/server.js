const Woa = require('./application')
const app = new Woa()

app.use(async ctx=>{
    ctx.body = 'hello James ' +ctx.url
})
// app.use((req,res)=>{
//     res.writeHead(200)
//     res.end('hello James')
// })
app.listen(9092,()=>{
    console.log('server runing on port 9092')
})






// const http = require('http')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end('hello James')
// })
// server.listen(9092,()=>{
//     console.log('server start on port 9092')
// })