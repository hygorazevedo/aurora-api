const express = require('express');
const CreateProductRequest = require('./create-product.request');
const productRepository = require('../../repositories/products.repository');
const productColorsRepository = require('../../repositories/product-colors.repository');
const productTypesRepository = require('../../repositories/product-types.repository');
const productService = require('../../services/create-product.service');

const productsController = express.Router();

productsController.get('/products', async (request, response) => {
    const { productType } = request.query;

    if (!productType) {
        return response.status(200).json([]);
    }
    
    const type = await productTypesRepository.findProductTypeById(productType);
    if (!type) {
        return response.status(200).json([]);
    }

    const products = await productRepository.getProducts(productType);
    if (!products) {
        return response.status(200).json([]);
    }
    
    return response.status(200).json(products);
});

productsController.post('/products', async (request, response) => {
    const { name, productTypeId, productColorId } = request.body;
    const productRequest = new CreateProductRequest(name, productTypeId, productColorId);

    if (productRequest.Validations.length > 0) {
        return response.status(412).json({ validations: productRequest.Validations });
    }

    const product = await productService.addProduct({ 
        name: productRequest.Name, 
        productTypeId: productRequest.ProductTypeId, 
        productColorId: productRequest.ProductColorId
    });

    return response.status(201).json(product);
});

module.exports = productsController;