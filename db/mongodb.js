const mongoose = require("mongoose");
const url = 'mongo-url'

//! mongoose.connect() es un método que recibirá la url personalizada de nuestro cluster para conectarse con el mismo y poder realizar operaciones CRUD
mongoose.connect(url, {}, () => {
  console.log('----')
  console.log('Conexión a la BD exitosa')
  console.log('----')
})

module.exports = mongoose