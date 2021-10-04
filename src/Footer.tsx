import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import ".././src/CSS/Footer.css";

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021 Khalid Alisha
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
