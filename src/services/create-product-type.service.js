const BaseError = require('../error');
const productTypesRepository = require('../repositories/product-types.repository');

module.exports = productTypeService = {
    addProductType: async function ({ description }) {
        const validationResponse = await productTypesRepository.findProductTypeByDescription(description);

        if (validationResponse.length > 0) {
            throw new BaseError('Product type aready exists', 422);
        }

        return await productTypesRepository.addProductType({ description });
    }
}