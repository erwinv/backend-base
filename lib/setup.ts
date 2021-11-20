import * as database from './database'

export async function setup() {
  await Promise.all(
    Object.values(database).map(db => db.setup())
  )
}

export async function teardown() {
  await Promise.all(
    Object.values(database).map(db => db.teardown())
  )
}

export function onTeardown(teardownListener: () => Promise<void>) {
  const sigHandler = (exitCode: number) =>
    () => teardownListener()
      .then(() => process.exit(0))
      .catch(() => process.exit(exitCode))

  process.on('SIGINT', sigHandler(130))
  process.on('SIGTERM', sigHandler(143))
}
