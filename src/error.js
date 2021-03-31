class BaseError {
    Message;
    StatusCode;

  constructor(message, statusCode) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = BaseError;