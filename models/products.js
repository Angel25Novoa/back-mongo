const mongoose = require('mongoose');

const { Schema, model } = mongoose

//! Schema es una clase que nos permite crear un modelo de datos para enviar o recibir en mongo
const productSchema = new Schema({
  name: String,
  description: String,
  sku:Number,
  price:Number,
  timestamps: false,
  versionKey: false,
})

//? model() o mongoose.model() le da un nombre a nuestro objeto que creamos como Schema ya que sin esto no lo podríamos usar
const ProductModel = model('Products', productSchema)

module.exports = ProductModel