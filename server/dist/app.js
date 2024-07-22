"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksData = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const constants_1 = require("./constants");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.booksData = constants_1.bookData;
// GET API to fetch all the books data
exports.app.get('/books', (req, res) => {
    res.json(exports.booksData);
});
// POST API to add new books
exports.app.post('/books', (req, res) => {
    const newBook = req.body;
    newBook.id = exports.booksData.length ? exports.booksData[exports.booksData.length - 1].id + 1 : 1;
    exports.booksData.push(newBook);
    res.status(201).json(newBook);
});
// PUT API to update an existing book
exports.app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const updatedBook = req.body;
    const index = exports.booksData.findIndex(book => book.id === parseInt(id));
    if (index !== -1) {
        exports.booksData[index] = Object.assign(Object.assign({}, updatedBook), { id: parseInt(id) });
        res.json(exports.booksData[index]);
    }
    else {
        res.status(404).send('Book not found');
    }
});
// DELETE API to delete a book from the list
exports.app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    exports.booksData = exports.booksData.filter(book => book.id !== parseInt(id));
    res.status(204).send();
});
