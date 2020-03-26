const basicAuth = require('basic-auth')
class Auth {
    constructor(){

    }

    get m(){
        return async (ctx,next)=>{
            const token = basicAuth(ctx.req)
            ctx.body = token
            //token
        }
    }
}

module.exports ={
    Auth
}