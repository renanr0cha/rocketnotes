const AppError = require('../utils/AppError');

class UsersController {
  /** MÉTODOS PADRÃO de um controller
  * index - GET para listar vários registros
  * show - GET para exibir um registro específico
  * create - POST para criar um registro
  * update - PUT para atualizar um registro
  * delete - DELETE para remover um registro
  */

  create(request, response) {
    const { name, email, password } = request.body

    if(!name) {
      throw new AppError("Name Required")
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = UsersController