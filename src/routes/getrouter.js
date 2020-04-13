import Router from 'koa-router'
import api from '../api/testget'

const router = new Router()

router.prefix('/login')
router.get('/api', api.Mysql)

export default router
