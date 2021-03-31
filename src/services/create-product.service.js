const productRepository = require('../repositories/products.repository');
const productColorsRepository = require('../repositories/product-colors.repository');
const productTypesRepository = require('../repositories/product-types.repository');

module.exports = productService = {
    addProduct: async function ({ name, productTypeId, productColorId }) {

        const type = await productTypesRepository.findProductTypeById(productTypeId);
        
        const color = await productColorsRepository.findProductColorById(productColorId);

        const productId = await productRepository.addProduct({ name, productTypeId, productColorId });

        return {
            id: productId,
            productType: type,
            productColor: color
        }
    }
}