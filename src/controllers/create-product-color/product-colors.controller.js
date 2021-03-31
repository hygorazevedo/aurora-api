const express = require('express');
const CreateProductColorRequest = require('./create-product-color.request');
const productColorService = require('../../services/create-product-color.service');
const productColorsRepository = require('../../repositories/product-colors.repository');

const productColosController = express.Router();

productColosController.get('/productColors', async (request, response) => {
    const productColors = await productColorsRepository.getProductColors();
    return response.status(200).json(productColors);
});

productColosController.post('/productColors', async (request, response) => {
    const { description, hexadecimal } = request.body;

    const productColorRequest = new CreateProductColorRequest(description, hexadecimal);
    
    if (productColorRequest.Validations.length > 0) {
        return response.status(412).json({ validations: productColorRequest.Validations })
    }

    const productColor = await productColorService.addProductColor({ 
        description: productColorRequest.Description,
        hexadecimal: productColorRequest.Hexadecimal
    });

    return response.status(200).json(productColor);
});

module.exports = productColosController;