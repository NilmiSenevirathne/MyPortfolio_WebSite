import React from "react";
import { Typography, Card, CardContent, Grid, Box } from "@mui/material";
import { FaUserGraduate, FaLaptopCode, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box sx={{ p: 5, textAlign: "center", backgroundColor: "#f5f5f5" }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" gutterBottom fontWeight={600}>
          About Me
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h6" sx={{ maxWidth: 800, mx: "auto", mb: 3 }}>
          Hi, I'm <strong>J.M. Nilmi Ama Senevirathne</strong>, a passionate Full Stack Developer specialized in React.js, Spring Boot, and Laravel. I love designing and developing interactive, responsive web applications that provide a seamless user experience.
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {[
          {
            icon: <FaUserGraduate size={40} />, 
            title: "Education", 
            description: "Bachelor of Information Communication Technology \n University of Ruhuna"
          },
          
          {
            icon: <FaTools size={40} />, 
            title: "Skills", 
            description: "React.js, Material-UI, JavaScript, Spring Boot, SQL"
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Card sx={{ maxWidth: 300, mx: "auto", boxShadow: 3, borderRadius: 2, p: 2 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Box sx={{ mb: 2, color: "primary.main" }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "pre-line" }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;