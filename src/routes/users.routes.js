const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const userRoutes = Router()








const usersController = new UsersController()

// usando http method POST (no insomnia)
userRoutes.post("/", usersController.create)

userRoutes.put("/:id", usersController.update)

module.exports = userRoutes