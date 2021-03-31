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
    Color;

    constructor(name, productTypeId, color) {
        super();

        this.Validate(name, productTypeId, color);

        if (this.Validations.length > 0) {
            return;
        }

        this.Name = name;
        this.ProductTypeId = productTypeId;
        this.Color = color;
    }
}

module.exports = CreateProductRequest;