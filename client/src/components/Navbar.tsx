import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      style={{ height: "53px", backgroundColor: "#c44601" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 550 }}
        >
          LIBRARY
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          style={{ fontWeight: 550 }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/add"
          style={{ fontWeight: 550 }}
        >
          Add Book
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
