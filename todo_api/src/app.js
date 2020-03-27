const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const models = require('../db/models')

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }))

/** 查询任务 列表 */
app.get('/list/:status/:page', async (req, res, next) => {
    //1.状态 （1）待办 （2）完成 （3）删除 (-1) 全部
    //分页
    let {status,page}= req.params;
    let limit = 10;
    let offset = (page-1)*limit;
    let where = {};
    if(status!=-1){
        where.status = status
    }
    let list = await models.Todo.findAndCountAll({
        where,
        limit,
        offset
    })
    //next(new Error('自定义异常'))
    res.json({
        list
    })
})

/** 创建一个todo */
app.post('/create', async (req, res, next) => {
    try {
        let { name, deadline, content } = req.body;
        let todo = await models.Todo.create({
            name,
            deadline,
            content
        })
        res.json({
            todo,
            message: '任务创建成功'
        })
    } catch (error) {
        next(error)
    }

})

/** 修改一个todo */
app.post('/update', async (req, res, next) => {
    try {
        let { name, deadline, content, id } = req.body;
        let todo = await models.Todo.findOne({
            where: {
                id
            }
        })
        if (todo) {
            todo = await todo.update({
                name,
                deadline,
                content
            })
        }
        res.json({
            todo
        })
    } catch (error) {
        next(error)
    }

})

/** 修改一个todo 状态和删除*/
app.post('/update_status', async (req, res, next) => {
    let { id, status } = req.body;
    let todo = await models.Todo.findOne({
        where: {
            id
        }
    })
    if (todo && status != todo.status) {
        todo = await todo.update({
            status
        })
    }
    res.json({
        todo
    })
})

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

app.listen(3000, () => {
    console.log('服务启动成功')
})