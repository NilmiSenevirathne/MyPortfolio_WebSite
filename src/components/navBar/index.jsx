import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleToggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <>
      <AppBar position="sticky" sx={{ background: "#1c1c1c" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Ama Senevirathne | Portfolio
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button component={Link} to="/" color="inherit" sx={{ fontSize: "1.2rem", mx: 1.5 }}>Home</Button>
            <Button component={Link} to="/about" color="inherit" sx={{ fontSize: "1.2rem", mx: 1.5 }}>About Me</Button>
            <Button component={Link} to="/resume" color="inherit" sx={{ fontSize: "1.2rem", mx: 1.5 }}>Resume</Button>
            <Button component={Link} to="/projects" color="inherit" sx={{ fontSize: "1.2rem", mx: 1.5 }}>Projects</Button>
            <Button component={Link} to="/contact" color="inherit" sx={{ fontSize: "1.2rem", mx: 1.5 }}>Contact Me</Button>


          </Box>

          {/* Mobile Menu Button */}
          <IconButton color="inherit" sx={{ display: { xs: "block", md: "none" } }} onClick={handleToggleDrawer}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={handleToggleDrawer}>
        <List sx={{ width: 250, background: "#1c1c1c", height: "100vh", color: "white" }}>
          <ListItem button component={Link} to="/" onClick={handleToggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={handleToggleDrawer}>
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button component={Link} to="/resume" onClick={handleToggleDrawer}>
            <ListItemText primary="Resume" />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={handleToggleDrawer}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={handleToggleDrawer}>
            <ListItemText primary="Contact Me" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
