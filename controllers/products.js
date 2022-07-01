const ProductModel =  require('../models/products')

//? model.find() es un metodo de mongoose que nos permite buscar dentro de la base de datos
const getProducts = async() => {
  return ProductModel.find({})
}

//? Para crear un nuevo elemento en la base de datos debemos pasar el body de nuestra petición como un nuevo modelo
//? después de crear el nuevo modelo usaremos el metodo .save() para enviarlo a nuestra base de datos
const createProduct = async(body) => {
  const newProduct = new ProductModel(body)
  await newProduct.save()
  return newProduct
}

module.exports = {getProducts, createProduct}