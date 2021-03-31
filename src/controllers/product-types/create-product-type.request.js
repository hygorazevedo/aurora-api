class Request {
    Validations = [];

    Validate = function (description) {
        if (!description) {
            this.Validations.push('Invalid description of product type');
        }
    }
}

class CreateProductTypeRequest extends Request {
    Description;

    constructor(description) {
        super();

        this.Validate(description);
        if (this.Validations.length > 0) {
            return;
        }

        this.Description = description;
    }
}

module.exports = CreateProductTypeRequest;