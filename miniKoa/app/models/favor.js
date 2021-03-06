const {
    sequelize
} = require('@core/db')
const {
    Sequelize,
    Model,
    Op
} = require('sequelize')
const {
    Art
} = require('./art')

class Favor extends Model {
    static async like(artId, type, uid) {
        // 1 添加记录
        // 2 classic fav_nums
        const favor = await Favor.findOne({
            where: {
                artId,
                type,
                uid
            }
        })
        if (favor) {
            throw new global.errs.LikeError()
        }
        return sequelize.transaction(async t => {
            await Favor.create({
                artId,
                type,
                uid
            }, {
                transaction: t
            })
            const art = await Art.getData(artId, type, false)
            await art.increment('favNums', {
                by: 1,
                transaction: t
            })
        })
    }
    static async disLike(artId, type, uid) {
        const favor = await Favor.findOne({
            where: {
                artId,
                type,
                uid
            }
        })
        if (!favor) {
            throw new global.errs.DisLikeError()
        }
        return sequelize.transaction(async t => {
            await favor.destroy({
                force: true,
                transaction: t
            })
            const art = await Art.getData(artId, type, false)
            await art.decrement('favNums', {
                by: 1,
                transaction: t
            })
        })
    }
    static async userLikeIt(artId, type, uid) {
        const favor = await Favor.findOne({
            where: {
                uid,
                artId,
                type,
            }
        })
        return favor ? true : false
    }
    static async getMyClassicFavors(uid) {
        const arts = await Favor.findAll({
            where: {
                uid,
                type: {
                    [Op.not]: 400
                }
            }
        })
        if (!arts) {
            throw new global.errs.NotFound()
        }
        return await Art.getList(arts)
    }
    static async getBookFavor(uid,bookId) {
        const favorNums = await Favor.count({
            where: {
                artId: bookId,
                type: 400
            }
        })
        const myFavor = await Favor.findOne({
            where: {
                artId: bookId,
                uid,
                type: 400
            }
        })
        return {
            favNums: favorNums,
            likeStatus: myFavor ? 1 : 0
        }
    }
}

Favor.init({
    uid: Sequelize.INTEGER,
    artId: Sequelize.INTEGER,
    type: Sequelize.INTEGER
}, {
    sequelize,
    tableName: 'favor'
})

module.exports = {
    Favor
}