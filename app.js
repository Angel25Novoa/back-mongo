const express = require('express')
const router  = require('./apis/index')

//! esto es indispensable para levantar un servidor con express.js ya que la ejecución de esta librería es lo que nos permite tener un servidor funcional
const app = express()

/*
  Como nuestro navegador siempre hace un get para obtener la página web que vamos a visitar 
  siempre que abramos la ruta raíz de este proyecto nos aparecerá el mensaje dentro de res.send()
  ya que res.send() es un método que nos permite dar una respuesta X en el endpoint indicado
*/
app.get('/', (req, res) => {
  res.send({
    message: 'Hola mundo'
  })
})

//? esto permitirá que las respuestas de app estén en .json 
app.use(express.json())
//? aquí estamos diciendo que habrá mas rutas para consultar y que vienen en la importación de ('./apis/index')
app.use(router)

module.exports = app