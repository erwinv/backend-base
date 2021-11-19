import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import {
  logger,
  router,
} from './middleware'
import {
  ping,
} from './controller'

export default () => {
  return new Koa()
    .use(logger())
    .use(bodyparser())
    .use(router()
      .defineRoutes(router => router
        .get('/ping', ping.ping())
      )
      .compile())
}
