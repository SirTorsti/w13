"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    author: { type: String, required: true },
    name: { type: String, required: true },
    pages: { type: Number, required: true }
});
exports.Book = (0, mongoose_1.model)('Book', bookSchema, 'books');
