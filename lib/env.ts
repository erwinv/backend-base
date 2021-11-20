import { format } from 'util'
import { EnvVars, enu, num, str } from '@erwinv/envvar'

// TODO explore using Joi and Joi-extract-type instead

const envVars = new EnvVars({
  NODE_ENV: enu(['test', 'local', 'production']).default('local'),
  PORT: num(),
  // Mongo
  MONGODB_HOST: str().default('localhost'),
  MONGODB_PORT: num().default(27017),
  MONGODB_USER: str(),
  MONGODB_PASSWORD: str(),
  MONGODB_DBNAME: str().default('test'),
  MONGODB_AUTHSOURCE: str().default('admin'),
  // Postgres
  POSTGRES_HOST: str().default('localhost'),
  POSTGRES_PORT: num().default(5432),
  POSTGRES_USER: str(),
  POSTGRES_PASSWORD: str(),
  POSTGRES_DATABASE: str().default('test'),
  // Redis
  REDIS_HOST: str().default('localhost'),
  REDIS_PORT: num().default(6379),
})

const runningAsMain = require.main === module
if (runningAsMain) {
  try {
    process.stdout.write(envVars.example())
    process.exit(0)
  } catch (e) {
    process.stderr.write(format(e))
    process.exit(1)
  }
}

export default envVars.resolve()
