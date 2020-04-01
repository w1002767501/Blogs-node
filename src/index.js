const koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koabody = require('koa-body')
const json = require('koa-json')
const helmet = require('koa-helmet')
const koastatic = require('koa-static')

const app = new koa()
const router = new Router()

router.get('/test', ctx => {
  ctx.body = 'hello ssss'
})

router.post('/testpost', async ctx => {
  let { body } = ctx.request
  ctx.body = {
    ...body
  }
})

app.use(koabody())
app.use(cors())
app.use(json({ pretty: false, param: 'pretty' }))
app.use(helmet())
app.use(koastatic(path.join(__dirname), './public'))
app.use(router.routes())
app.listen(9000)
