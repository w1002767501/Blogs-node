import combinerouters from 'koa-combine-routers'

import apiRoutes from './getrouter'
import postRoutes from './postrouter'
import login from './login'

export default combinerouters(apiRoutes, postRoutes, login)
