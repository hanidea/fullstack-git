const Router = require('koa-router')
const router = new Router()

const {PostitiveIntegerValidator} = require('../../validators/validator')

router.post('/v1/:id/classic/latest', async (ctx, next) => {
    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body

    const v = await new PostitiveIntegerValidator().validate(ctx)
    const id = v.get('path.id',parsed= false)
    ctx.body = 'success'
})

module.exports = router