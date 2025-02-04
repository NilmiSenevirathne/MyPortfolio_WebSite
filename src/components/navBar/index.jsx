import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const navLinks = ["Home", "About Me", "Services", "Portfolio", "Contact Me"];

  return (
    <>
      <AppBar position="sticky" sx={{ background: "#1c1c1c", boxShadow: "none" }}>
        <Toolbar>
          {/* Logo / Title */}
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Ama Senevirathne | Portfolio
          </Typography>

          {/* Desktop Navigation Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map((text, index) => (
              <Button key={index} color="inherit" sx={{ fontSize: "1.5rem", mx: 1.5 }}>
                {text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Toggle Button */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleToggleDrawer}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={handleToggleDrawer}>
        <List sx={{ width: 250, background: "#1c1c1c", height: "100vh", color: "white" }}>
          {navLinks.map((text, index) => (
            <ListItem button key={index} onClick={handleToggleDrawer} sx={{ textAlign: "center" }}>
              <ListItemText primary={text} sx={{ fontSize: "1.2rem", fontWeight: "bold" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
