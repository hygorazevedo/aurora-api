const mongoose = require('mongoose');
const CorProduto = require('./product-color.model');
const TipoProduto = require('./product-type.model');

const Schema = mongoose.Schema;

const RequiredString = { type: String, required: true, createIndex: { unique: true } };

const ProductSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: RequiredString,
        productTypeId: { type: Schema.Types.ObjectId, ref: TipoProduto },
        color: { type: Schema.Types.ObjectId, ref: CorProduto }
    },
    { _id: false, autoIndex: false }
);

const Produto = mongoose.model('products', ProductSchema);

module.exports = Produto;