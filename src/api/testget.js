import client from '../../config/DBconfig'

class MysqlTest {
  constructor() {}
  async Mysql(ctx) {
    const data = await client.query('select * from user') // mysql的用法
    console.log(data)
    ctx.body = {
      code: 200,
      data,
    }
  }
}

export default new MysqlTest()
