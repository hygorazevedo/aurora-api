const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequiredString = { type: String, required: true, createIndex: { unique: true } };

const TipoProdutoSchema = new Schema(
    {
        description: RequiredString
    }
);

const TipoProduto = mongoose.model('product_types', TipoProdutoSchema);

module.exports = TipoProduto;