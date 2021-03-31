class Request {
    Validations = [];

    Validate = function (description, hexadecimal) {
        if (!description) {
            this.Validations.push('Invalid description of product color');
        }

        if (!hexadecimal) {
            this.Validations.push('Invalid hexadecimal of product color');
        }
    }
}

class CreateProductColorRequest extends Request {
    Description;
    Hexadecimal;

    constructor(description, hexadecimal) {
        super();

        this.Validate(description, hexadecimal);
        if (this.Validations.length > 0) {
            return;
        }

        this.Description = description;
        this.Hexadecimal = hexadecimal;
    }
}

module.exports = CreateProductColorRequest;