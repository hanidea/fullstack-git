const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/classic'
})

const {PostitiveIntegerValidator} = require('../../validators/validator')

const{Auth} = require('../../../middlewares/auth')

router.get('/latest', new Auth().m, async (ctx, next) => {
    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body

    const v = await new PostitiveIntegerValidator().validate(ctx)
    const id = v.get('path.id',parsed= false)
    ctx.body = 'success'
})

module.exports = router