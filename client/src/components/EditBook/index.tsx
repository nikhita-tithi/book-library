import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Tooltip,
  Stack,
} from "@mui/material";
import useBookStore from "../../store";
import { BookFormValues, bookSchema } from "../../validation";
import styles from "../AddBook/AddBook.module.scss";

const EditBook: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useBookStore((state) => state.books);
  const updateBook = useBookStore((state) => state.updateBook);

  const bookToEdit = books.find((book) => book.id === Number(id));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormValues>({
    resolver: zodResolver(bookSchema),
    defaultValues: bookToEdit,
  });

  const onSubmit = (data: BookFormValues) => {
    updateBook(Number(id), { id: Number(id), ...data });
    navigate("/");
  };

  if (!bookToEdit) {
    return <Typography variant="h6">Book not found</Typography>;
  }

  return (
    <Container className={styles.root}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        className={styles.title}
      >
        Edit Book
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        <Stack spacing={4}>
          <Tooltip title="Edit the title of the book" aria-label="Book Title">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Title"
                  fullWidth
                  className={styles.formField}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  aria-required="true"
                />
              )}
            />
          </Tooltip>
          <Tooltip title="Edit the author of the book" aria-label="Book Author">
            <Controller
              name="author"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Author"
                  fullWidth
                  className={styles.formField}
                  error={!!errors.author}
                  helperText={errors.author?.message}
                  aria-required="true"
                />
              )}
            />
          </Tooltip>
          <Tooltip
            title="Edit the year the book was published"
            aria-label="Year Published"
          >
            <Controller
              name="yearPublished"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Year Published"
                  type="number"
                  fullWidth
                  className={styles.formField}
                  error={!!errors.yearPublished}
                  helperText={errors.yearPublished?.message}
                  aria-required="true"
                />
              )}
            />
          </Tooltip>
          <Tooltip title="Edit the genre of the book" aria-label="Book Genre">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Genre"
                  fullWidth
                  className={styles.formField}
                  error={!!errors.genre}
                  helperText={errors.genre?.message}
                  aria-required="true"
                />
              )}
            />
          </Tooltip>
        </Stack>
        <Box className={styles.buttonContainer}>
          <Tooltip title="Save changes to this book" aria-label="Save Changes">
            <Button
              variant="contained"
              color="inherit"
              type="submit"
              style={{ backgroundColor: "#c44601", color: "white" }}
            >
              Save Changes
            </Button>
          </Tooltip>
          <Tooltip
            title="Cancel and return to the home page"
            aria-label="Cancel"
          >
            <Button
              variant="contained"
              color="inherit"
              onClick={() => navigate("/")}
              style={{ marginLeft: "20px" }}
            >
              Cancel
            </Button>
          </Tooltip>
        </Box>
      </form>
    </Container>
  );
};

export default EditBook;
