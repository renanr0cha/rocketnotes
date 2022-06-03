require("express-async-errors")

const migrationsRun = require("./database/sqlite/migrations")
const AppError = require('./utils/AppError');

//importando express
const express = require('express')



const routes = require("./routes")

migrationsRun()
//usando express na variavel
const app = express()

//informando a aplicação que o express vai usar o json pra apresentar dados 
app.use(express.json())

app.use(routes)

app.use(( error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

// usando http method get com route params (obrigatório)
// app.get("/message/:id/:user", (request, response) => {

//   const { id, user } = request.params

//   response.send(`
//   Id da mensagem: ${id}.
//   Para o usuário: ${user}.`)
// })

// usando http method get com query params (opcional)
// app.get("/users", (req, res) => {
//   const { page, limit } = req.query

//   res.send(`Página: ${page}. Mostrar: ${limit}`)
// })




// definindo porta a ser usada
const PORT = 3333

// mensagem pra verificar se tá rodando o server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

