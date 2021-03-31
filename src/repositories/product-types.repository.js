const mongoose = require('mongoose');
const TipoProduto = require('./models/product-type.model');

process.env.USER = 'aurura_admin_dev';
process.env.PASSWORD = 'aurorawomandev'

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@developcluster.xykrk.mongodb.net/aurora_db`, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = productTypesRepository = {
    addProductType: async function ({ description }) {
        const productType = new TipoProduto({
            description
        });

        await productType.save();

        return {
            id: productType._id,
            description: productType.description
        };
    },

    getProductTypes: async function () {
        return await TipoProduto.find();
    },

    findProductTypeById: async function (id) {
        return await TipoProduto.findById(id);
    },

    findProductTypeByDescription: async function (description) {
        return await TipoProduto.find({ 'description': description });
    }
}