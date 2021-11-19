import koa from 'koa'

export function ping(): koa.Middleware {
  return async (ctx) => {
    ctx.body = 'pong'
  }
}
