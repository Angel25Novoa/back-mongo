const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { productsController } = require('../controllers')
const { getProducts, createProduct } = productsController


//? en este modulo lo único que hacemos es crear las rutas para poder usar las funciones de crear y obtener los elementos de la base de datos
router.get('/', async (req, res) => {
  const products = await getProducts()
  res.send(products)
})

router.post('/', async (req, res) => {
  const body = req.body
  console.log(body)
  try {
    const newProduct = await createProduct(body)
    res.status(201)
    res.send(newProduct)
  } catch (err) {
    console.error(err)
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400)
      return res.send({
        message: 'Error de validación',
        reason: err.message
      })
    }
    res.status(500)
    return res.send({
      error: err.message
    })
  }
})

module.exports = router