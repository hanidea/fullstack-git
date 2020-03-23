const {HttpException} = require('../core/http-exception')
const catchError = async (ctx,next)=>{
    try {
        await next()
    } catch (error) {
        if(error instanceof HttpException){
            ctx.body = {
                msg:error.msg,
                error_code:error.errorCode,
                request:`${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }
        //ctx.body = '服务器有点问题，你等一下'
    }
}

module.exports = catchError