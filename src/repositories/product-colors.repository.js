const mongoose = require('mongoose');
const CorProduto = require('./models/product-color.model');

process.env.USER = 'aurura_admin_dev';
process.env.PASSWORD = 'aurorawomandev'

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@developcluster.xykrk.mongodb.net/aurora_db`, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = productColorsRepository = {
    addProductColor: async function ({ description, hexadecimal }) {
        const productColor = new CorProduto({
            description,
            hexadecimal
        });

        await productColor.save();

        return {
            id: productColor._id,
            description: productColor.description,
            hexadecimal: productColor.hexadecimal
        };
    },

    getProductColors: async function () {
        return await CorProduto.find();
    },

    findProductColorById: async function (id) {
        return await CorProduto.findById(id);
    },

    findProductColorByDescriptionAndHexadecimal: async function (description, hexadecimal) {
        return await CorProduto.find({ 'description': description, 'hexadecimal': hexadecimal });
    }
}