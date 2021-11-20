import mongoose from 'mongoose'
import env from '../env'

let connection: Awaited<ReturnType<typeof mongoose.connect>>

export async function setup() {
  if (!connection) {
    const uri = new URL(env.MONGODB_DBNAME, `mongodb://${env.MONGODB_HOST}:${env.MONGODB_PORT}`)
    uri.searchParams.set('authSource', env.MONGODB_AUTHSOURCE)

    connection = await mongoose.connect(uri.toString(), {
      user: env.MONGODB_USER,
      pass: env.MONGODB_PASSWORD,
    })
  }
}

export async function teardown() {
  if (connection) {
    await connection.disconnect()
  }
}
