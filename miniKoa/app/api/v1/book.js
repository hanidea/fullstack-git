const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/book'
})
const {
    HotBook
} = require('@model/hot-book')

const {
    SearchValidator,
    PostitiveIntegerValidator,
    AddShortCommentValidator
} = require('@validator')

const {
    Book
} = require('@model/book')

router.get('/hot_list', async (ctx, next) => {
    const books = await HotBook.getAll()
    ctx.body = {
        books: books
    }
})

router.get('/:id/detail', async ctx => {
    const v = await new PostitiveIntegerValidator().validate(ctx)
    //const book = await Book.detail(v.get('path.id'))
    //ctx.body = book
    const book = new Book(v.get('path.id'))
    ctx.body = await book.detail()
})




//微服务 node 中间层

module.exports = router