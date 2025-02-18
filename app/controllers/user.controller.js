const { UserService } = require('../services/user.service')

class UserController {
    constructor(userService = new UserService()) {
        this.userService = userService
    }

    async getUsers(req, res) {
        try {
            const users = await this.userService.getUsers()
            res.json(users)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async createUser(req, res) {
        try {
            const user = await this.userService.createUser(req.body)
            res.json(user)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async changeBalance(req, res) {
        try {
            const { userId } = req.params
            const { amount } = req.body

            if (!amount) throw new Error('Не указана сумма')
            if (typeof amount !== 'number') throw new Error('Сумма должна быть числом')

            const user = await this.userService.changeBalance(userId, amount)
            res.json(user)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = {
    UserController
}
