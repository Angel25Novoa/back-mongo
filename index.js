const app = require('./app.js')
require( './db/mongodb.js')

//!un puerto es indispensable para cualquier aplicación de backend
const PORT = 5000

//? app.listen() es un método que en este caso recibe dos parámetros el primero es el puerto donde se va a ejecutar 
//? y el segundo una función callback que nos indicará que hace una vez que esta funcionando en este caso lo usamos para saber que todo está de forma correcta
app.listen(PORT, () => {
  console.log(`El server esta corriendo en el puerto ${PORT}`)
})