import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Contact Me
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'center', padding: '20px' }}>
          <Typography variant="h6">Contact Info</Typography>
          <Typography variant="body1">
            Hinguralakanda, Dehiowita, Kegalle, Sri Lanka
          </Typography>
          <Typography variant="body1">+94 769 618 715</Typography>
          <Typography variant="body1">amasenevirathne2001@gmail.com</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
