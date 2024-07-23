import React, { useEffect } from "react";
import "./App.css";
import useBookStore from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import lib from "./images/lib_hd.jpg";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

const App: React.FC = () => {
  const fetchBooks = useBookStore((state) => state.fetchBooks);

  // fetch the data
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Router>
      <header className="nav_header">
        <img
          className="nav_image"
          alt="image of a library"
          src={lib}
          width="100%"
        />
      </header>
      <Navbar />
      <Container className="container">
        <Routes>
          <Route path="/" Component={BookList} />
          <Route path="/add" Component={AddBook} />
          <Route path="/edit/:id" Component={EditBook} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
