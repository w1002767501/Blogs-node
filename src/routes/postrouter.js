import Router from 'koa-router'
import post from '../api/testpost'

const router = new Router()

router.post('/registered', post.posttest)

export default router
