import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color="textSecondary">
        I am a software developer with a keen interest in building scalable web applications. My skills include React, Node.js, and more.
      </Typography>
    </Container>
  );
};

export default About;