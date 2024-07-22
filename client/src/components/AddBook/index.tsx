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
import styles from "./AddBook.module.scss";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const addBook = useBookStore((state) => state.addBook);
  const books = useBookStore((state) => state.books);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormValues>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = (data: BookFormValues) => {
    const newBook = {
      id: books.length + 1,
      ...data,
      yearPublished: Number(data.yearPublished),
    };
    addBook(newBook);
    navigate("/");
  };

  return (
    <Container className={styles.root}>
      <Typography
        variant="h4"
        component="h1"
        className={styles.title}
        gutterBottom
      >
        Add New Book
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        <Stack spacing={4}>
          <Tooltip title="Enter the title of the book" aria-label="Book Title">
            <Controller
              name="title"
              control={control}
              defaultValue=""
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
          <Tooltip
            title="Enter the author of the book"
            aria-label="Book Author"
          >
            <Controller
              name="author"
              control={control}
              defaultValue=""
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
            title="Enter the year the book was published"
            aria-label="Year Published"
          >
            <Controller
              name="yearPublished"
              control={control}
              defaultValue={0}
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
          <Tooltip title="Enter the genre of the book" aria-label="Book Genre">
            <Controller
              name="genre"
              control={control}
              defaultValue=""
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
          <Tooltip title="Add this book to the library" aria-label="Add Book">
            <Button
              variant="contained"
              color="inherit"
              type="submit"
              style={{ backgroundColor: "#c44601", color: "white" }}
            >
              Add Book
            </Button>
          </Tooltip>
          <Tooltip
            title="Cancel and return to the home page"
            aria-label="Cancel and return to the home page"
          >
            <Button
              variant="contained"
              color="inherit"
              onClick={() => navigate("/")}
              style={{ marginLeft: "25px" }}
            >
              Cancel
            </Button>
          </Tooltip>
        </Box>
      </form>
    </Container>
  );
};

export default AddBook;
