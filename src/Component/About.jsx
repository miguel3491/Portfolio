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
                    </Col>
                    <Col className="column-text" lg = "6">
                    <h1>About Me</h1>
                    <p>As a recent graduate of the University of New York City College of Technology, I'm excited to pursue my career path as a software engineer. I am passionate about technology in general. And, I would like to be part of this new era of technology. </p>
                    <a href = "https://drive.google.com/file/d/1LYanxXnhWr7xjY4z6KkyrzREhgaanFha/view?usp=sharing">
                    <Fab id = "download-button" color = "primary"><DownloadIcon/>Download Resume</Fab></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;