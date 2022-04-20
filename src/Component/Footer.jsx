import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){
    return (
        <div>
            <div className="Last-section">
            <h4>Follow Me</h4>
            <ul className="footer-social">
                <a href = "https://www.linkedin.com/in/miguel-cano-36a428204/" target="_blank">
                <li className="header-icon"><LinkedInIcon fontSize = "large"/></li></a>
                <a href = "https://github.com/miguel3491" target="_blank">
                <li className="header-icon github"><GitHubIcon fontSize = "large"/></li></a>
            </ul>
            <hr />
            <i><p>© Copyright 2022 Miguel Cano</p></i>
            </div>
        </div>
    )
}

export default Footer;