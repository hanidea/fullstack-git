module.exports = {
  environment: 'dev',
  database: {
    dbName: 'mini',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Hanidea@123'
  },
  security: {
    secretKey: "abcdefg",
    expiresIn: 60 * 60 * 24 * 30
  },
  wx: {
    appId: 'wx434a0eb05adde3d6',
    appSecret: '1522bd1a054925e880dfe959887c4b24',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  },
  yushu: {
    detailUrl: 'http://t.talelin.com/v2/book/id/%s',
    keywordUrl: 'http://t.talelin.com/v2/book/search?q=%s&count=%s&start=%s&summary=%s'
    // detailUrl: 'http://t.yushu.im/v2/book/id/%s',
    // keywordUrl: 'http://t.yushu.im/v2/book/search?q=%s&count=%s&start=%s&summary=%s'
  },
  host:'http://127.0.0.1:3000/'
}