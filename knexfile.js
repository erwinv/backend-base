import 'dotenv/config'
import env from './build/lib/env.js'

export default {
  makeMigration: {
    client: 'pg',
    migrations: {
      directory: 'migrations/',
      extension: 'ts',
    },
  },
  runMigration: {
    client: 'pg',
    connection: {
      host: env.POSTGRES_HOST,
      database: env.POSTGRES_DATABASE,
      user: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'build/migrations/',
      loadExtensions: ['.js'],
    },
  },
}
