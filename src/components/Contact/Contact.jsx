// src/components/Contact.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Feel free to reach out via email: myemail@example.com
      </Typography>
    </Container>
  );
};

export default Contact;
