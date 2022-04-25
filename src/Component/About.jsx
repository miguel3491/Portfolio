import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import Fab from '@mui/material/Fab';
import DownloadIcon from '@mui/icons-material/Download';

function About(){
    return(
        <div>
            <Container>
                <Row className="row-about">
                    <Col className="column" lg = "4">
                    <img id = "profile-img" src = "https://i.ibb.co/QnRCkRh/1640036297616.jpg"/>
                    <div className="footer-contact">
                    </div>
                    </Col>
                    <Col className="column-text" lg = "6">
                    <h1>About Me</h1>
                    <p>As a recent graduate of the University of New York City College of Technology, I'm excited to pursue my career path as a Front End Developer. I am passionate about technology in general. And, I'm willing to learn any new languages that are useful in my work environment. </p>
                    <a href = "https://drive.google.com/file/d/1Vzdz8oJUPM-XF2EoCW17coaPTVl_yJPz/view?usp=sharing" target="_blank">
                    <Fab id = "download-button" color = "primary"><DownloadIcon/>Download Resume</Fab></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;