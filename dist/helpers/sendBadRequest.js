"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty = require('./isEmpty');
const sendBadRequest = (req, res, error) => {
    const err = isEmpty(req.body) ? 'missing fields: ' : '';
    res.status(400).json({
        status: 'error',
        code: 400,
        message: err + error.message,
    });
};
module.exports = sendBadRequest;
