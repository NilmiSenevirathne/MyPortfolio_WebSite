// src/components/Projects.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Projects = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Here are some of my projects:
        <ul>
          <li>Project 1: A web application for managing tasks.</li>
          <li>Project 2: An e-commerce platform.</li>
          <li>Project 3: A portfolio website.</li>
        </ul>
      </Typography>
    </Container>
  );
};

export default Projects;
