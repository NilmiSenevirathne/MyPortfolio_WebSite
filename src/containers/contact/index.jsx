import React, { useState } from "react";
import { Typography, Container, Grid, Box, Button, TextField } from "@mui/material";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion"; // Import motion

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .send(
        "service_9yfrgrs",  
        "template_xfauq7w",  
        formData,            
        "fQpUZHpePnkC_2EmXSmxO"       
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setSuccessMessage("Thank you for reaching out! I'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" }); // Reset form fields
        },
        (error) => {
          console.error("Error sending email", error);
          setErrorMessage("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <Box
      sx={{
        position: "",
        minHeight: "100vh",
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />
      <Container maxWidth="md" sx={{ padding: "40px", zIndex: 1 }}>
        {/* Animated heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom color="white">
              Get In Touch
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Grid container spacing={3} justifyContent="center" sx={{ marginBottom: "20px" }}>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <FaEnvelope style={{ marginRight: "10px", color: "white" }} />
                <Typography variant="body1" color="white">Email: amasenevirathne2001@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <FaPhone style={{ marginRight: "10px", color: "white" }} />
                <Typography variant="body1" color="white">Phone: +94 76 961 8715</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <FaMapMarkerAlt style={{ marginRight: "10px", color: "white" }} />
                <Typography variant="body1" color="white">Location: Kegalle, Sri Lanka</Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          style={{ marginTop: "30px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ backgroundColor: "white" }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ backgroundColor: "white" }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            margin="normal"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            sx={{ backgroundColor: "white" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: "10px",
              width: "150px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            startIcon={<FaPaperPlane />}
          >
            Send Message
          </Button>
        </motion.form>

        {/* Success or Error Message */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Typography variant="body1" color="green" sx={{ marginTop: "20px" }}>
              {successMessage}
            </Typography>
          </motion.div>
        )}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Typography variant="body1" color="red" sx={{ marginTop: "20px" }}>
              {errorMessage}
            </Typography>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default Contact;
