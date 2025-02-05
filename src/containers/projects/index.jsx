import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import framer-motion

const Projects = () => {
  const projectDetails = [
    {
      id: 1,
      title: 'Tools Management System',
      description: 'The Tools Management System you developed for Dilum BMK Engineers is designed to manage and track various tools used by the company.It helps with efficient tracking, storing, and assigning tools to different employees or departments. The system likely features functionalities such as adding, editing, and deleting tools, tracking their availability and usage, and ensuring tools are appropriately assigned to users or projects. It also supports the generation of reports and provides an overview of the companys tool inventory, helping with resource management and ensuring no tools are lost or misplaced.',
      image: '/images/toolsmgt.png', 

    },
    {
      id: 2,
      title: 'School Management System',
      description: 'This is the description of Project 2.',
      image: '/images/project2.jpg', // Replace with your project image path
    },
    {
      id: 3,
      title: 'Java Based Inventory Management System',
      description: 'Java Inventory Management System: A user-friendly desktop application developed in Java with JavaFX, this Java GUI project facilitates efficient buying and selling of goods. It features robust report generation, invoice creation, and serves as a comprehensive solution for desktop-based inventory management.Technologies used:JavaFX,CSS,MySQL.',
      image: '/images/inventory.jpg', // Replace with your project image path
    },

    {
        id: 4,
        title: 'Sathmaga Educational Management System',
        description: 'This is the description of Project 3.',
      image: '/images/project3.jpg', // Replace with your project image path
    }
      
    
  ];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: "url('/images/background.jpg')", // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
      }}
    >
      {/* Blurred overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Content Section */}
      <Box sx={{ position: "relative", zIndex: 1, width: '100%' }}>
        <Typography
          variant="h3"
          fontWeight={600}
          color="white"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: 5,
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)",
          }}
        >
          My Projects
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {projectDetails.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              {/* Motion Card for animation */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 4 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
