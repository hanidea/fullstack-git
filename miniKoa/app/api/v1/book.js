const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/book'
})

const {
    success
} = require('@lib/helper')

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

const {
    Favor
} = require('@model/favor')

const {
    Auth
} = require('@middlewares/auth')

const {
    Comment
} = require('@model/book-comment')

router.get('/hot_list', async (ctx, next) => {
    const books = await HotBook.getAll()
    ctx.body = {
        books: books
    }
})

router.get('/:id/detail', async ctx => {
    const v = await new PostitiveIntegerValidator().validate(ctx)
    const book = await Book.detail(v.get('path.id'))
    ctx.body = book
    // const book = new Book(v.get('path.id'))
    // ctx.body = await book.detail()
})

router.get('/search', async ctx => {
    const v = await new SearchValidator().validate(ctx)
    const result = await Book.searchFromYuShu(
        v.get('query.q'), v.get('query.start'), v.get('query.count'))
    ctx.body = result
})

router.get('/favor/count', new Auth().m, async ctx => {
    const count = await Book.getMyFavorBookCount(ctx.auth.uid)
    ctx.body = {
        count
    }
})

router.get('/:bookId/favor', new Auth().m, async ctx => {
    const v = await new PostitiveIntegerValidator().validate(ctx, {
        id: 'bookId'
    })
    const favor = await Favor.getBookFavor(
        ctx.auth.uid, v.get('path.bookId'))
    ctx.body = favor
})

router.post('/add/short_comment', new Auth().m, async ctx => {
    const v = await new AddShortCommentValidator().validate(ctx, {
        id: 'bookId'
    })

    await Comment.addComment(v.get('body.bookId'), v.get('body.content'))
    success()
})

router.get('/:bookId/short_comment', new Auth().m, async ctx => {
    const v = await new PostitiveIntegerValidator().validate(ctx, {
        id: 'bookId'
    })
    const bookId = v.get('path.bookId')
    const comments = await Comment.getComments(bookId)
    ctx.body = {
        comments: comments,
        bookId
    }
})

router.get('/hot_keyword', async ctx => {
    ctx.body = {
        'hot': ['Python',
            '哈利·波特',
            '村上春树',
            '东野圭吾',
            '白夜行',
            '韩寒',
            '金庸',
            '王小波'
        ]
    }
})

//微服务 node 中间层

module.exports = router