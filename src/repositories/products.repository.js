require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./models/product.model');

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

        return product._id;
    },

    getProducts: async function (productType) {
        return await Produto.find({ 'productTypeId': productType });
    }
}