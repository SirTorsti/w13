"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Book_1 = require("../models/Book");
const router = (0, express_1.Router)();
router.post('/api/book', async (req, res) => {
    try {
        const book = new Book_1.Book(req.body);
        await book.save();
        res.json(book);
    }
    catch (error) {
        console.error(`Error while creating book: ${error.message}`);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.get('/api/book/:name', async (req, res) => {
    try {
        const book = await Book_1.Book.findOne({ name: req.params.name });
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        }
    }
    catch (error) {
        console.error(`Error while fetching book: ${error.message}`);
        res.status(500).json({ message: 'Internal server error'
        });
    }
});
exports.default = router;
