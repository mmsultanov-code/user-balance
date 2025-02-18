module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.createTable('users', {
            id: { type: 'INTEGER', primaryKey: true, autoIncrement: true },
            balance: { type: 'FLOAT', allowNull: false, defaultValue: 0 }
        })

        await queryInterface.bulkInsert('users', [{ balance: 10000 }])
    },
    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('users')
    }
}
