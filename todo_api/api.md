根据客户端传递过来的不同参数（状态、页码）查询任务列表
实现 新增一个任务 功能
名称
截止日期
内容
编辑功能：根据客户端传递的 任务对象（已经存在的数据）进行编辑
名称
截至日期
内容
id
删除任务（id)
修改任务状态
id
状态值（待办/完成)

数据库初始化

`sequelize cli`
`npx sequelize init`

生成模型文件
migrate
model
`npx sequelize model:generate --name Todo --attributes name:string,deadline:date,content:string`

持久化模型对应的表
`npx sequelize db:migrate`

`pm2`
pm2 start ecosystem.config.js
pm2 log
pm2 restart ecosystem.config.js
