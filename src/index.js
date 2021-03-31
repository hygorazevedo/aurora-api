require('express-async-errors');
const express = require('express');
const BaseError = require('./error');
const baseController = require('./controllers');
const server = express();

server.use('/v1', baseController);
server.use(function (err, request, response, next) {
    if (err instanceof BaseError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }

    return response.status(500).json({
        message: 'Internal server error',
    });
});

server.listen(3333, () => console.log('Server running on http://localhost:3333'));