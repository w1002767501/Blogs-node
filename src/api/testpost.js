// import Client from 'mysql-pro'

// const client = new Client({
//   mysql: {
//     host: '127.0.0.1',
//     port: 3306,
//     database: 'mydb1',
//     user: 'root',
//     password: '12345678'
//   }
// })
import client from '../../config/DBconfig'

class postTest {
  constructor() {}
  async posttest(ctx) {
    // 前端post传来数据存入这里
    let { body } = ctx.request
    // 先查询表里的数据
    const data = await client.query(
      `select * from user where username="${body.username}"`
    ) // mysql的用法

    if (data.length !== 0) {
      ctx.body = {
        data: false,
      }
    } else {
      let addSql = 'INSERT INTO user (username,password) VALUES(?,?)'
      let addSqlParams = [body.username, body.password]
      await client.query(addSql, addSqlParams) // mysql的用法
      ctx.body = {
        data: true,
      }
    }

    // let addSql = 'INSERT INTO user (username,password) VALUES(?,?)'
    // let addSqlParams = [body.username, body.password]
    // await client.query(addSql, addSqlParams) // mysql的用法
    // ctx.body = {
    //   ...body,
    // }
  }
}

export default new postTest()
