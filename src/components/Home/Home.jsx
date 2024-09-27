import React from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import coverImage from '../../images/cover1.jpeg'; // Adjust the path based on your structure

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh', // Full height for the background
    backgroundImage: `url(${coverImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(0px)', // Blur effect
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Center the content
    textAlign: 'center',
    color: 'white', // Change text color for better visibility
    zIndex: 1, // Ensure content is above the blurred background
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.background}>
      <div className={classes.content}>
        <Typography variant="h3" gutterBottom>
          I'm Ama Senevirathne
        </Typography>
        <Typography variant="h6">
          A Full Stack Developer
        </Typography>
        <Typography variant="body1">
          A work from Sri Lanka
        </Typography>
      </div>
    </Container>
  );
}
