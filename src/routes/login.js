import Router from 'koa-router'
import post from '../api/login'

const router = new Router()

router.post('/login', post.postlogin)

export default router
