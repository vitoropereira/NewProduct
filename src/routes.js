const express = require('express')

const ProductsController = require('./controller/ProductController')

const routes = express.Router()

routes.get('/products', ProductsController.index)
routes.post('/products', ProductsController.create)
routes.get('/products/:id', ProductsController.show)
routes.put('/products/:id', ProductsController.update)
routes.delete('/products/:id', ProductsController.destroy)



module.exports = routes