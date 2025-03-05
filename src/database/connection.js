import { Sequelize } from '@sequelize/core'
import { MariaDbDialect } from '@sequelize/mariadb'

// export const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD, {
//     dialect: MariaDbDialect,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     logging: false
//   }
// )

export const sequelize = new Sequelize({
  dialect: MariaDbDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  showWarnings: true,
  connectTimeout: 1000,
})
