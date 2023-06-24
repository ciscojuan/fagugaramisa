import React from "react";
import FormInput from "./FormInput";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";


const Contact = () => {


  return (
    <Container maxWidth="md">
      <Typography component="div" style={{margin: '5rem 0'}} />
      <Typography variant="h2" component="h3" gutterBottom>
        Ponte en contacto con nosotros
      </Typography>
      <FormInput />
    </Container>
  );
};

export default Contact;
