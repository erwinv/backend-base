import mongoose from 'mongoose'
import objection from 'objection'
import Knex, { Knex as KnexT } from 'knex'
import { redis } from '../lib/database/'

jest.setTimeout(2000)
jest.mock('ioredis', () => require('ioredis-mock/jest'))

let knex: ReturnType<typeof Knex>

const knexConfig: KnexT.Config = {
  client: 'sqlite3',
  connection: ':memory:',
  useNullAsDefault: true,
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations/',
    loadExtensions: ['.js'],
  },
}

beforeAll(async () => {
  await Promise.all([
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    mongoose.connect(process.env.MONGODB_URI!),
    redis.setup(),
    (async () => {
      knex = Knex(knexConfig)
      await knex.migrate.latest()
      objection.Model.knex(knex)
    })(),
  ])
})

afterAll(async () => {
  await Promise.all([
    mongoose.disconnect(),
    redis.teardown(),
    (async () => {
      await knex.migrate.rollback()
      await knex.destroy()
    })(),
  ])
})
