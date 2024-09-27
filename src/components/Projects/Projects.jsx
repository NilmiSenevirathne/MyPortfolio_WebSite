// src/components/Projects.jsx
import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
} from '@mui/material';
import toolManagementImage from '../../images/toolmgt.png'; // Update this path according to your project structure



const projects = [
  {
    title: 'Tool Management System ',
    description: 'A web application for managing tools inventory tasks.',
    image: toolManagementImage, // Replace with your image URL
    link: 'https://dilumbmkengineers.online/', // Replace with your project link
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform.',
    image: 'https://via.placeholder.com/300', // Replace with your image URL
    link: '#', // Replace with your project link
  },
  {
    title: 'Project 3',
    description: 'A portfolio website.',
    image: 'https://via.placeholder.com/300', // Replace with your image URL
    link: '#', // Replace with your project link
  },
];

const Projects = () => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  href={project.link}
                  target="_blank"
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
