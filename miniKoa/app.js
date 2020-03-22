const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next)=>{
    await next()
    const r = ctx.r
    console.log(r)
})

app.use(async (ctx, next)=>{
    const axios = require('axios')
    const res = await axios.get('https://www.bighanhan.com')
    ctx.r = res
    await next()
})


app.listen(3000)