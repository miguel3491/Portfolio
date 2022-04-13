import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactsIcon from '@mui/icons-material/Contacts';


function Header(){

    return(
        <div>
            <nav id = "nav-wrap">
                <ul className="navbar">
                    <a href="#header">
                    <li className="home-bar"><HomeIcon id = "nav-icon" fontSize="small"/>Home</li></a>
                    <a href = "#about">
                    <li className="home-bar"><InfoIcon id = "nav-icon" fontSize="small"/>About</li></a>
                    <a href="#projects">
                    <li className="home-bar"><AccountTreeIcon id = "nav-icon" fontSize="small"/>Projects</li></a>
                    <a href="#footer">
                    <li className="home-bar"><ContactsIcon id = "nav-icon" fontSize="small"/>Contact</li></a>
                </ul>
            </nav>
            <div className="home-banner">
                <div className="banner-text">
                    <h1>Miguel Cano</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    <hr></hr>
                    <ul className="Social">
                        <a href = "https://www.linkedin.com/in/miguel-cano-36a428204/">
                        <li className="header-icon"><LinkedInIcon color="primary" fontSize = "large"/></li></a>
                        <a href = "https://github.com/miguel3491/WebDev">
                        <li className="header-icon github"><GitHubIcon fontSize = "large"/></li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;

// https://react-resume-template.herokuapp.com/#home // Inspiration