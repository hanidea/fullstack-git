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
}