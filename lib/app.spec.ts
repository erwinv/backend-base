import supertest from 'supertest'
import app from './app'

const api = supertest.agent(app().callback())

test('GET /', async () => {
  const response = await api.get('/')
  expect(response.status).toBe(404)
})

test('GET /ping', async () => {
  const response = await api.get('/ping')
  expect(response.status).toBe(200)
  expect(response.text).toBe<string>('pong')
})
