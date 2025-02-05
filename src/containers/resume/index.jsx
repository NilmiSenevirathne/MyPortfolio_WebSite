import React from "react";
import { FaGraduationCap, FaFileDownload } from "react-icons/fa";
import {
  Button,
  Box,
  Card,
  Typography,
  CardContent,
  List,
  ListItem,
} from "@mui/material";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./styles.scss";

const Resume = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvPath = "/images/J.M.N.A. Senevirathne - SE.pdf"; // Ensure the PDF is in the "public/images" folder
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "J.M.N.A. Senevirathne - SE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/images/background.jpg')", // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: " ",
      }}
    >
      {/* Blurred Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",  // Optional, for dimming the background
          
        }}
      />

      <motion.div
        initial={{ opacity: 0 }} // Start with 0 opacity
        animate={{ opacity: 1 }} // Animate to full opacity
        transition={{ duration: 1 }} // Duration of the fade-in
        style={{ zIndex: 2, position: "relative" }}
      >
        {/* Resume Header */}
        <Typography variant="h3" gutterBottom align="center" color="white">
          My Resume
        </Typography>

        {/* Education Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)", marginBottom: "20px" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <FaGraduationCap style={{ marginRight: "10px" }} /> Education
              </Typography>
              <Typography variant="h6">
                B.Tech (Honors) in Information Communication Technology
              </Typography>
              <Typography>University of Ruhuna (2021 - Present)</Typography>
              <Typography>
                Specialized in Web Development, Database Management, and Software Engineering.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)", marginBottom: "20px" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                <FaFileDownload style={{ marginRight: "10px" }} /> Technical Skills
              </Typography>
              <List>
                <ListItem>
                  <strong>Programming Languages:</strong> Java, C, HTML, CSS, JavaScript
                </ListItem>
                <ListItem>
                  <strong>Frameworks & Tools:</strong> React, Spring Boot, Laravel, Git, Click Up
                </ListItem>
                <ListItem>
                  <strong>Database Management:</strong> MySQL
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
        <Box
          sx={{
          display: "flex",
          justifyContent: "center", // Horizontally centers the button
          alignItems: "center", // Vertically centers the button (if needed)
          width: "100%",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ mr: 2, position:"center"}}
            onClick={handleDownloadCV}
          >
            Download CV
          </Button>
        </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Resume;
