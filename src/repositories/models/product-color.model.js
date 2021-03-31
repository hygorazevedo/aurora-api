const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequiredString = { type: String, required: true, createIndex: { unique: true } };

const CorProdutoSchema = new Schema(
    {
        description: RequiredString,
        hexadecimal: RequiredString
    }
);

const CorProduto = mongoose.model('product_colors', CorProdutoSchema);

module.exports = CorProduto;