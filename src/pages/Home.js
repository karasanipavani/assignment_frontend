import React from "react";
import Navbar from "../components/Navbar";
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" style={{ marginTop: "20px" }}>
          Welcome to Letter Editor
        </Typography>
        <Typography>
          Sign in with Google to create and save letters to your Google Drive.
        </Typography>
      </Container>
    </>
  );
};

export default Home;
