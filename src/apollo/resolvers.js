// import { sequelize } from "../database/connection.js"
import { User } from '../database/models/User.js'

export const resolvers = {
  Query: {
    hello: async () => {
      // await sequelize.sync()

      const user = await User.create({
        email: 'e@mail.com'
      })

      return `User (${user.email}) created successfully `
    },
  },
}
