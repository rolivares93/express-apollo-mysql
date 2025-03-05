import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import express from 'express'
import { server } from './apollo/server.js'
import { sequelize } from './database/connection.js'

const app = express()
const port = process.env.PORT || 4321

try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

await server.start()
await sequelize.sync()

// await User.create({
//   email: 'e@mail.com'
// })

app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({ req, res }),
  })
)

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
)
