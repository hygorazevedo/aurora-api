const express = require('express');
const productsController = require('./create-product/products.controller');
const productColorsController = require('./create-product-color/product-colors.controller');
const productTypesController = require('./create-product-type/product-types.controller');

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