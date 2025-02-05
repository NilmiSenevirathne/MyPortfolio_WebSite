import React from "react";
import { Typography, Card, Grid, Box, Button, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const AboutMe = () => {

 // Function to handle CV download
 const handleDownloadCV = () => {
  const cvPath = "/images/J.M.N.A. Senevirathne - SE.pdf"; // Place your PDF in the "public/cv" folder
  const link = document.createElement("a");
  link.href = cvPath;
  link.download = "J.M.N.A. Senevirathne - SE.pdf"; // Set the file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <Box
      sx={{
        position: " ",
        minHeight: "100vh",
        backgroundImage: "url('/images/background.jpg')", // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      {/* Blurred Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)", // Apply blur effect
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Optional dark overlay
        }}
      />

      {/* Content */}
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: 1000,
          zIndex: 1, // Ensure content is above the blurred background
          p: 5,
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Light transparent background
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {/* Profile Picture Section */}
        <Grid item xs={12} md={5} display="flex" justifyContent="center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Card sx={{ boxShadow: 3, borderLeft: "5px solid orange", p: 2, backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
              <Avatar
                src="/images/id2.jpg"
                alt="Profile"
                sx={{ width: 250, height: 250, mx: "auto" }}
              />
            </Card>
          </motion.div>
        </Grid>

        {/* About Me Section */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" fontWeight={600} color="white" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h6" color="white" sx={{ mb: 3 }}>
            Hi, I'm <strong>J.M. Nilmi Ama Senevirathne</strong>, a passionate and self-motivated undergraduate in Information and Communication Technology (BICT) at the University of Ruhuna. With a strong foundation in programming and software development, I thrive in solving complex problems and adapting to new challenges in the ever-evolving tech industry.
            </Typography>

            {/* Personal Details */}
            {[
              { label: "Name", value: "J.M. Nilmi Ama Senevirathne" },
              { label: "Email", value: "amasenevirathne2001@gmail.com" },
              { label: "Phone", value: "+94 76 961 8715" },
              { label: "Date of Birth", value: "16-Jan-2001" },
              { label: "Nationality", value: "Sri Lankan" },
              { label: "Address", value: "Kegalle, Sri Lanka" },
            ].map((item, index) => (
              <Typography key={index} variant="body1" color="white">
                <strong>{item.label}:</strong> {item.value}
              </Typography>
            ))}

            {/* Action Buttons */}
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="warning" sx={{ mr: 2 }}>
                Hire Me
              </Button>
              <Button variant="contained" color="secondary" onClick={handleDownloadCV}>
                Download CV
              </Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
