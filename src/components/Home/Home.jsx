import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h6" color="textSecondary">
        I am a passionate developer with experience in React, JavaScript, and web technologies.
      </Typography>
    </Container>
  );
}
