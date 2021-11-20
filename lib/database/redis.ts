import IoRedis from 'ioredis'
import env from '../env'

let ioRedis: InstanceType<typeof IoRedis>

export async function setup() {
  ioRedis = new IoRedis({
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
  })
}

export async function teardown() {
  if (ioRedis) {
    ioRedis.disconnect()
  }
}

export function client() {
  return ioRedis
}
