const { Umzug, SequelizeStorage } = require('umzug')
const { sequelize } = require('./config/database')
const userRoutes = require('./routes/user.route')
const express = require('express')
require('dotenv').config()
const app = express()

const PORT = Number(process.env.PORT) || 3000

app.use(express.json())
app.use('/users', userRoutes)

const umzug = new Umzug({
    migrations: {
        glob: ['app/migrations/*.js']
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console
})

const startServer = async () => {
    try {
        await sequelize.authenticate()
        console.log('Соединение с базой данных успешно установлено.')

        await umzug.up()
        console.log('Миграции выполнены.')

        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`)
        })
    } catch (error) {
        console.error('Ошибка при запуске сервера:', error)
    }
}

startServer()
