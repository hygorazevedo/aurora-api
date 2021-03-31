const BaseError = require('../error');
const productColorsRepository = require('../repositories/product-colors.repository');

module.exports = productColorsService = {
    addProductColor: async function ({ description, hexadecimal }) {
        const validationResponse = await productColorsRepository.findProductColorByDescriptionAndHexadecimal(description, hexadecimal);

        if (validationResponse.length > 0) {
            throw new BaseError('Product color aready exists', 422);
        }

        return await productColorsRepository.addProductColor({ description, hexadecimal });
    }
}