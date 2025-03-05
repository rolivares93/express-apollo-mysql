import { DataTypes } from '@sequelize/core'
import { sequelize } from '../connection.js'

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
  },
})
