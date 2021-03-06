const {HttpException} = require('@core/http-exception')
const catchError = async (ctx,next)=>{
    try {
        await next()
    } catch (error) {
        const isHttpException = error instanceof HttpException
        const isDev = global.config.environment === 'dev'
        if(isDev && !isHttpException){
            throw error
        }
        if(isHttpException){
            ctx.body = {
                msg:error.msg,
                error_code:error.errorCode,
                request:`${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }
        else{
            ctx.body={
                msg:'made a mistake.',
                error_code:999,
                request:`${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
        //ctx.body = '服务器有点问题，你等一下'
    }
}

module.exports = catchError