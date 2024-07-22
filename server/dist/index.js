"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 3080;
app_1.app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import { bookData } from './constants';
// export const app = express();
// const port = 3080;
// app.use(cors());
// app.use(express.json());
// export interface IBook {
//     id: number;
//     title: string;
//     author: string;
//     yearPublished: number;
//     genre: string;
// }
// export let booksData: IBook[] = bookData
// // GET API to fetch all the books data
// app.get('/books', (req: Request, res: Response) => {
//     res.json(booksData);
// });
// // POST API to add new books
// app.post('/books', (req: Request, res: Response) => {
//     const newBook: IBook = req.body;
//     newBook.id = booksData.length ? booksData[booksData.length - 1].id + 1 : 1;
//     booksData.push(newBook);
//     res.status(201).json(newBook);
// });
// // PUT API to update an existing book
// app.put('/books/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     const updatedBook: IBook = req.body;
//     const index = booksData.findIndex(book => book.id === parseInt(id));
//     if (index !== -1) {
//         booksData[index] = { ...updatedBook, id: parseInt(id) };
//         res.json(booksData[index]);
//     } else {
//         res.status(404).send('Book not found');
//     }
// });
// // DELETE API to delete a book from the list
// app.delete('/books/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     booksData = booksData.filter(book => book.id !== parseInt(id));
//     res.status(204).send();
// });
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
