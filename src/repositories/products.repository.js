const mongoose = require('mongoose');
const Produto = require('./models/product.model');

process.env.USER = 'aurura_admin_dev';
process.env.PASSWORD = 'aurorawomandev'

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@developcluster.xykrk.mongodb.net/aurora_db`, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = productRepository = {
    addProduct: async function ({ name, productTypeId, productColorId }) {
        const product = new Produto({
            _id: new mongoose.Types.ObjectId,
            name,
            productTypeId,
            productColorId
        });


        await product.save();

        return {
            id: product._id,
            name: product.name,
            productTypeId: product.productTypeId,
            productColorId: product.productColorId
        }
    },

    getProducts: async function (productType) {
        return await Produto.find({ 'productTypeId': productType });
    }
}