import React from "react";
import { useState } from "react";
import {FaBars,FaReact} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {HiX} from 'react-icons/hi';
import './styles.scss'

const data = [
    {
        label : 'HOME',
        to: '/'
    },
    {
        label : 'ABOUT ME',
        to: '/about'
    },
    {
        label : 'RESUME',
        to: '/resume'
    },
    {
        label : 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label : 'SKILLS',
        to: '/skills'
    },
    {
        label : 'CONTACT',
        to: '/contact'
    }


]

const Navbar = () =>{

    const [toggleIcon, setToggleicon] = useState(false)

    const handleToggleIcon = ()=>{
        setToggleicon(!toggleIcon)
    }

    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to={'/'} className="navbar-container-logo">
                        <FaReact size={30}/>
                    </Link>

                </div>
                <ul className="navbar-container-menu">
                    {
                       data.map((item,key) => (
                        <li key={key} className="navbar-container-menu-item">
                               <Link className="navbar-container-menu-item-links" to={item.to}>
                                   {item.label}
                               </Link>
                        </li>
                       ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>  
                    {
                        toggleIcon ? <HiX/> :<FaBars size={30}/>
                    }

                </div>


            </nav>

        </div>
    )
}
export default Navbar;