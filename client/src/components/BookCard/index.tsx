import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import useBookStore, { IBook } from "../../store";
import styles from "./BookCard.module.scss";
import {
  DeleteForeverOutlined,
  ModeEditOutlineOutlined,
} from "@mui/icons-material";
import CardTag from "../CardTag/index";

const imageList = [
  require("./../../images/bookImages/1.jpg"),
  require("./../../images/bookImages/2.jpg"),
  require("./../../images/bookImages/3.jpg"),
  require("./../../images/bookImages/4.jpg"),
  require("./../../images/bookImages/5.jpg"),
  require("./../../images/bookImages/6.jpg"),
];

interface IBookCardProps {
  book: IBook;
}

const BookCard: React.FC<IBookCardProps> = (props) => {
  const { book } = props;
  const deleteBook = useBookStore((state) => state.deleteBook);
  const [open, setOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);

  const handleClickOpen = (id: number) => {
    setSelectedBookId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBookId(null);
  };

  const handleDelete = () => {
    if (selectedBookId !== null) {
      deleteBook(selectedBookId);
      handleClose();
    }
  };

  return (
    <>
      <Card className={styles.card}>
        <CardMedia
          sx={{ minHeight: 140, height: 140 }}
          image={imageList[Math.floor(Math.random() * imageList.length)]}
          title="Books"
        />
        <CardContent className={styles.cardContent}>
          <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Typography
              variant="h5"
              component="div"
              height="30%"
              className={styles.title}
              gutterBottom
            >
              {book.title}
            </Typography>
            <Box color="textSecondary" className={styles.author}>
              - by {book.author}
            </Box>
            <Box className={styles.tagBox}>
              <CardTag
                name="Published Year"
                value={book.yearPublished}
                color="#f8b8d0"
              />
              <CardTag name="Genre" value={book.genre} color="#cfebb6" />
            </Box>
          </Stack>
        </CardContent>
        <Box className={styles.buttonContainer}>
          <Tooltip title="Edit this book" aria-label={`Edit ${book.title}`}>
            <Button
              variant="contained"
              color="inherit"
              size="small"
              component={Link}
              to={`/edit/${book.id}`}
              aria-label={`Edit ${book.title}`}
              className={styles.buttons}
            >
              <ModeEditOutlineOutlined />
              Edit Book
            </Button>
          </Tooltip>
          <Tooltip title="Delete this book" aria-label={`Delete ${book.title}`}>
            <Button
              // variant="contained"
              // color="error"
              onClick={() => handleClickOpen(book.id)}
              aria-label={`Delete ${book.title}`}
              className={styles.deleteButton}
            >
              <DeleteForeverOutlined
                color="error"
                viewBox="2 3 20 18"
                style={{ height: "30px", width: "30px" }}
              />
            </Button>
          </Tooltip>
        </Box>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={styles.delTitle}>
          {"Delete Book"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this book?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={styles.dialog}>
          <Button onClick={handleClose} color="inherit" variant="contained">
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="inherit"
            autoFocus
            variant="contained"
            className={styles.buttons}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BookCard;
