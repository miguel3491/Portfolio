import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){
    return (
        <div>
            <div className="footer-contact">
                <h4>Contact:</h4>
                <p className="address">Phone: 347-593-2039</p>
                <p className="address">Email: miguelcano3491@gmail.com</p>
            </div>
            <i><p>© Copyright 2022 Miguel Cano</p></i>
            <ul className="footer-social">
                        <a href = "https://www.linkedin.com/in/miguel-cano-36a428204/">
                        <li className="header-icon"><LinkedInIcon fontSize = "large"/></li></a>
                        <a href = "https://github.com/miguel3491/WebDev">
                        <li className="header-icon github"><GitHubIcon fontSize = "large"/></li></a>
            </ul>
        </div>
    )
}

export default Footer;