const mongoose = require('mongoose');

class Request {
    Validations = [];

    Validate = function (name, productTypeId, color) {
        if (!name) {
            this.Validations.push('Invalid product name');
        }
    
        if (!mongoose.Types.ObjectId.isValid(productTypeId)) {
            this.Validations.push('Invalid product type referance');
        }
    
        if (!color) {
            this.Validations.push('Invalid product color');
        }
    }
}

class CreateProductRequest extends Request {
    Name;
    ProductTypeId;
    ProductColorId;

    constructor(name, productTypeId, productColorId) {
        super();

        this.Validate(name, productTypeId, productColorId);

        if (this.Validations.length > 0) {
            return;
        }

        this.Name = name;
        this.ProductTypeId = productTypeId;
        this.ProductColorId = productColorId;
    }
}

module.exports = CreateProductRequest;