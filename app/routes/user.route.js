const express = require('express')
const router = express.Router()
const { UserController } = require('../controllers/user.controller')

const userController = new UserController()

router.get('/', userController.getUsers.bind(userController))
router.post('/', userController.createUser.bind(userController))
router.patch('/:userId', userController.changeBalance.bind(userController))

module.exports = router
