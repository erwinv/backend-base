import koa from 'koa'
import koaLogger from 'koa-logger'
import env from '../env'

export default function logger(): koa.Middleware {
  switch (env.NODE_ENV) {
    // case 'prod':  return prodLogger() // TODO
    case 'local': return koaLogger()
    case 'test':
    default:      return async (_, next) => next()
  }
}
