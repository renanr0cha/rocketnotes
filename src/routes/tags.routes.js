const { Router } = require('express')

const TagsController = require('../controllers/TagsController')

const tagsRoutes = Router()


const tagsController = new TagsController()

// usando http method POST (no insomnia)

tagsRoutes.get("/:user_id", tagsController.index)

module.exports = tagsRoutes