// import { sequelize } from '../database/connection.js'
import { User } from '../database/models/User.js'

export const resolvers = {
  Query: {
    hello: () => 'Hello, World'
  },
  Mutation: {
    createUser: async (_, data) => {
      const email = data.email

      const user = await User.create({
        email
      })

      return `User "${user.email}" created successfully`
    }
  }
}
