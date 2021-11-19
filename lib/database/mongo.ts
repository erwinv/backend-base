import mongoose from 'mongoose'
import env from '../env'

let connection: ReturnType<typeof mongoose.connect>

export default async function initializeMongoose() {
  if (!connection) {
    connection = mongoose.connect(env.MONGODB_URI.toString(), {
      user: env.MONGODB_USER,
      pass: env.MONGODB_PASSWORD,
    })
  }

  return connection
}

export async function teardownMongoose() {
  await mongoose.disconnect()
}
