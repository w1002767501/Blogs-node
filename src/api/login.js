import client from '../../config/DBconfig'

class postLogin {
  constructor() {}
  async postlogin(ctx) {
    // 前端post传来数据存入这里
    let { body } = ctx.request
    // 先查询表里的数据
    const data = await client.query(
      `select * from user where username="${body.username}" and password="${body.password}"`
    )

    if (data.length === 0) {
      ctx.body = {
        data: false,
      }
    } else {
      ctx.body = {
        data: true,
      }
    }
  }
}

export default new postLogin()
