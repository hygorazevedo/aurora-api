const express = require('express');
const CreateProductTypeRequest = require('./create-product-type.request');
const productTypeService = require('../../services/create-product-type.service');
const productTypesRepository = require('../../repositories/product-types.repository');

const productTypesController = express.Router();

productTypesController.get('/productTypes', async (request, response) => {
    const productTypes = await productTypesRepository.getProductTypes();
    return response.status(200).json(productTypes);
});

productTypesController.post('/productTypes', async (request, response) => {
    const { description } = request.body;

    const productTypeRequest = new CreateProductTypeRequest(description);
    
    if (productTypeRequest.Validations.length > 0) {
        return response.status(412).json({ validations: productTypeRequest.Validations })
    }

    const productType = await productTypeService.addProductType({ description: productTypeRequest.Description });

    return response.status(201).json(productType);
});

module.exports = productTypesController;