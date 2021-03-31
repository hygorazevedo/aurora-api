const express = require('express');
const CreateProductRequest = require('./create-product.request');
const productRepository = require('../../repositories/products.repository');
const productService = require('../../services/create-product.service');

const productsController = express.Router();

productsController.get('/products', async (request, response) => {
    const { productType } = request.query;

    if (!productType || !productRepository.validateObjectId(productType)) {
        return response.status(200).json([]);
    }

    const products = await productRepository.getProducts(productType);
    if (!products) {
        return response.status(200).json([]);
    }

    return response.status(200).json(products);
});

productsController.post('/products', async (request, response) => {
    const { name, productType, color } = request.body;
    const productRequest = new CreateProductRequest(name, productType, color);

    if (productRequest.Validations.length > 0) {
        return response.status(412).json({ validations: productRequest.Validations });
    }

    await productService.addProduct({ 
        name: productRequest.Name, 
        productType: productRequest.ProductTypeId, 
        color: productRequest.Color
    });

    return response.status(201).json({});
});

module.exports = productsController;