import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: " ",
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
          width: "100%",
          height: "100%",
          background: "url('/images/bg1.jpg') center/cover no-repeat",
          filter: "blur(2px)", // Adjust the blur intensity
          zIndex: -1,
        }}
      />

      {/* Motion Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <Avatar
          src="/images/ID photo.JPG"
          sx={{
            width: 150,
            height: 150,
            mb: 2,
            border: "3px solid white",
          }}
        />
      </motion.div>

      {/* Motion Typography for name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 2 }}
      >
        <Typography variant="h2" fontWeight="bold">
          Ama Senevirathne
        </Typography>
      </motion.div>

      {/* Motion Typography for title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 2 }}
      >
        <Typography variant="h5">
          BICT Undergraduate | UOR | Full Stack Developer
        </Typography>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
