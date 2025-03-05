import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
    dialect: process.env.DB_DRIVER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false
  }
)
