const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const UserModel = sequelize.define(
    'users',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        balance: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 }
    },
    {
        timestamps: false
    }
)

module.exports = {
    UserModel
}
