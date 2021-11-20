import 'dotenv/config'

import app from './lib/app'
import env from './lib/env'
import { setup, teardown, onTeardown } from './lib/setup'

async function main() {
  await setup()
  app().listen(env.PORT, () => console.info(`Listening to port: ${env.PORT}`))
  onTeardown(teardown)
}

main()
