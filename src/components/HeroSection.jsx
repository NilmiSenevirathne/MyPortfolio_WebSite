import React from "react";
import { Box, Typography, Avatar } from "@mui/material";


const HeroSection = () => {
    return (
        
        <Box
        sx={{
          position: "relative",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Blurred Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "150%",
          height: "150%",
          background: "url('/images/bg1.jpg') center/cover no-repeat",
          filter: "blur(2px)", // Adjust the blur intensity
          zIndex: -1,
        }}
      />
        <Avatar
          src="/images/ID photo.JPG"
          sx={{ width: 150, height: 150, mb: 2, border: "3px solid white" }}
        />
        <Typography variant="h2" fontWeight="bold">
          Ama Senevirathne
        </Typography>
        <Typography variant="h5">BICT Undergraduate | Full Stack Developer</Typography>
      </Box>
    );
  };
  
  export default HeroSection;