module.exports = {
    environment:'dev',
    database: {
        dbName: 'island',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Junjie2020!'
      },
    security: {
        secretKey: "abcdefg",
        expiresIn: 60 * 60 * 24 * 30
      },
    wx: {
        appId: 'wx434a0eb05adde3d6',
        appSecret: '',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
      },
}