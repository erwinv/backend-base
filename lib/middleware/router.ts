import compose from 'koa-compose'
import koaRouter from '@koa/router'

export default function Router(
  ...args: ConstructorParameters<typeof koaRouter>
) {
  const baseRouter = new koaRouter(...args)

  return {
    defineRoutes: (definer: (router: koaRouter) => koaRouter) => {
      definer(baseRouter)
      return {
        compile: () =>
          compose([baseRouter.routes(), baseRouter.allowedMethods()]),
      }
    },
  }
}
