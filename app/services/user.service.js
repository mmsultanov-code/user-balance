const { UserModel } = require('../models')

class UserService {
    constructor() {
        this.model = UserModel
    }

    async getUsers() {
        try {
            const users = await this.model.findAll()
            return users
        } catch (err) {
            throw new Error(err)
        }
    }

    async createUser(payload) {
        try {
            const user = await this.model.create(payload)
            return user
        } catch (err) {
            throw new Error(err)
        }
    }

    async changeBalance(id, amount) {
        try {
            const user = await this.model.findByPk(id)
            if (!user) {
                throw new Error('Пользователь не найден')
            }
            if (amount < 0 && user.balance < Math.abs(amount)) {
                throw new Error('Недостаточно средств')
            }

            user.balance += amount
            await user.save()

            return user
        } catch (err) {
            throw new Error(err)
        }
    }
}

module.exports = {
    UserService
}
