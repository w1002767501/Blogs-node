import client from '../../config/DBconfig'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'

class MysqlTest {
  constructor() {}
  async Mysql(ctx) {
    let token = jsonwebtoken.sign({ _id: 'xz' }, config.JWT_SECRET, {
      expiresIn: '1d',
    })
    const data = await client.query('select * from user') // mysql的用法
    console.log(data)
    ctx.body = {
      code: 200,
      // data,
      token: token,
    }
  }
}

export default new MysqlTest()
