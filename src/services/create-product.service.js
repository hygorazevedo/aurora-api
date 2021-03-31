const productRepository = require('../repositories/products.repository');

module.exports = productService = {
    addProduct: async function ({ name, productTypeId, productColorId }) {
        await productRepository.addProduct({ name, productTypeId, productColorId });
    }
}