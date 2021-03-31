const express = require('express');
const productsController = require('./products/products.controller');
const productColorsController = require('./product-colors/product-colors.controller');
const productTypesController = require('./product-types/product-types.controller');

const baseController = express.Router();

baseController.use(express.json());
baseController.use(productsController);
baseController.use(productColorsController);
baseController.use(productTypesController);

baseController.get('/', (request, response) => {
    return response.json([
        {
            title: 'Products',
            methods: [
                {
                    method: 'GET /{productType}/products'
                },
                {
                    method: 'POST /{tipoProduto}/products'
                }
            ]
        },
        {
            title: 'ProductTypes',
            methods: [
                {
                    method: 'GET /productTypes'
                },
                {
                    method: 'POST /productTypes'
                }
            ]
        },
    ]);
});

module.exports = baseController;