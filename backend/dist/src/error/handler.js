"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors = (erro, request, response, next) => {
    return response.status(500).json({ Message: 'Internal Server Error' });
};
exports.default = errors;
