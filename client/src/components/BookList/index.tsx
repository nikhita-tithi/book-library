import React from "react";
import { Grid, Button, Container, Tooltip } from "@mui/material";
import useBookStore from "../../store";
import BookCard from "../BookCard";
import { Link } from "react-router-dom";
import styles from "./BookList.module.scss";

const BookList: React.FC = () => {
  const books = useBookStore((state) => state.books);

  return (
    <Container className={styles.root}>
      <Grid container spacing={4} mt={2}>
        {books.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
      <Tooltip title="Add a new book to the library" aria-label="Add New Book">
        <Button
          variant="contained"
          color="inherit"
          className={styles.addButton}
          component={Link}
          to="/add"
          aria-label="Add New Book"
        >
          Add New Book
        </Button>
      </Tooltip>
    </Container>
  );
};

export default BookList;
