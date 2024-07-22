import {create} from 'zustand';
import axios from 'axios';

const port = 3080;

export interface IBook {
    id: number;
    title: string;
    author: string;
    yearPublished: number;
    genre: string;
}

interface BookState {
    books: IBook[] | [];
    fetchBooks: () => Promise<void>;
    addBook: (book: IBook) => Promise<void>;
    updateBook: (id: number, book: IBook) => Promise<void>;
    deleteBook: (id: number) => Promise<void>;
}

const useBookStore = create<BookState>((set) => ({
    books: [],

    fetchBooks: async () => {
        const response = await axios.get(`http://localhost:${port}/books`);
        set({ books: response.data });
    },
    
    addBook: async (book: IBook) => {
        const response = await axios.post(`http://localhost:${port}/books`, book);
        set((state) => ({ books: [...state.books, response.data] }));
    },

    updateBook: async (id: number, book: IBook) => {
        const response = await axios.put(`http://localhost:${port}/books/${id}`, book);
        set((state) => ({
            books: state.books.map(b => b.id === id ? response.data : b)
        }));
    },

    deleteBook: async (id: number) => {
        await axios.delete(`http://localhost:${port}/books/${id}`);
        set((state) => ({
            books: state.books.filter(b => b.id !== id)
        }));
    }
}));

export default useBookStore;