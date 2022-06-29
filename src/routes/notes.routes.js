const { Router } = require('express')

const NotesController = require('../controllers/NotesController')

const notesRoutes = Router()




const notesController = new NotesController()

// usando http method POST (no insomnia)
notesRoutes.post("/:user_id", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)
notesRoutes.get("/", notesController.index)

module.exports = notesRoutes