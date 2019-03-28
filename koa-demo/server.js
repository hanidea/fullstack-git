const Koa = require('koa')
const koaLog = require('./koa-logger')
const Router = require('koa-router')
const app = new Koa()
const router = new Router();

router.get('/',(ctx,next)=>{
    ctx.body = '齐天大圣孙悟空'
  })
  router.get('/zhubajie',(ctx,next)=>{
    ctx.body = '猪八戒'
  })
app
  .use(router.routes())
  .use(router.allowedMethods());
// function delay(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//         reslove()
//         },1000)
//     })
// }
app.use(koaLog)
//135642
// app.use(async(ctx,next)=>{
//     console.log(ctx)
//     // if(ctx.request.url=='/'){
//     //     ctx.body = '齐天大圣'
//     // }else if(ctx.request.url=='/zhubajie'){
//     //     ctx.body = '猪八戒'
//     // }else{
//     //     ctx.body = '<h1>404 not found</h1>'
//     // }
//     ctx.body = '1'
//     //下一个中间件
//     await next()
//     // setTimeout(()=>{
//     //     next()
//     // },2000)
//     ctx.body += '2'
// })
// app.use(async(ctx,next)=>{
//     ctx.body += '3'
//     await delay()
//     //下一个中间件
//     await next()
//     ctx.body += '4'
// })
// app.use(async(ctx,next)=>{
//     ctx.body += '5'
//     //下一个中间件
//     await next()
//     ctx.body += '6'
// })
// // app.use(async(ctx,next)=>{
// //     ctx.body = 'hello koa'
// // })

app.listen(3000)