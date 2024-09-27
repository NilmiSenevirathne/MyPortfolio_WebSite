import React from 'react';
import { Container, Typography, LinearProgress, Button, Box, Grid } from '@mui/material';
import myImage from '../../images/my.jpg'; // Update the path to your image

const skills = [
  { label: 'Design', value: 85 },
  { label: 'HTML5', value: 98 },
  { label: 'CSS3', value: 97 },
  { label: 'React', value: 88 },
  { label: 'Bootstrap', value: 92 },
  { label: 'Spring Boot', value: 70 },

];

const About = () => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
          <img 
            src={myImage} 
            alt="My Profile" 
            style={{ width: '80%', borderRadius: '50%' }} // Adjust size and shape as needed
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
            Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisiacal country, in which roasted parts of sentences fly into your mouth.
          </Typography>
          
          <Typography variant="h5" gutterBottom style={{ marginTop: '30px' }}>
            Skills
          </Typography>
          {skills.map(skill => (
            <Box key={skill.label} style={{ marginBottom: '20px' }}>
              <Typography variant="body1">{skill.label}</Typography>
              <LinearProgress variant="determinate" value={skill.value} />
              <Typography variant="caption" color="textSecondary">{`${skill.value}%`}</Typography>
            </Box>
          ))}

          <Box style={{ marginTop: '30px' }}>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Hire Me
            </Button>
            <Button variant="outlined" color="primary">
              Download CV
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
