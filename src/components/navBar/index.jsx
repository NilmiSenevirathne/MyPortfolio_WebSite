import { AppBar, Toolbar, Typography,Button } from "@mui/material";
import React from "react";
import { useState } from "react";



const Navbar = () =>{

    const [toggleIcon, setToggleicon] = useState(false)

    const handleToggleIcon = ()=>{
        setToggleicon(!toggleIcon)
    }

    return(
       <AppBar position="sticky" sx={{background: '#1c1c1c'}}>
            <Toolbar>
                <Typography variant="h4" sx={{flexGrow: 1, fontWeight: "bold"}}>
                    Ama Senevirathne | Portfolio
                </Typography>

                 <Button color="inherit" sx={{ fontSize: "1.5rem", p: 2 }}>Home</Button>
                 <Button color="inherit" sx={{ fontSize: "1.5rem", p: 2 }}>About Me</Button>
                 <Button color="inherit" sx={{ fontSize: "1.5rem", p: 2 }}>Services</Button>
                 <Button color="inherit" sx={{ fontSize: "1.5rem", p: 2 }}>Portfolio</Button>
                 <Button color="inherit" sx={{ fontSize: "1.5rem", p: 2 }}>Contact Me</Button>
                 

            </Toolbar>

       </AppBar>
    )
}
export default Navbar;