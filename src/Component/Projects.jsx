import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faCss3, faHtml5, faNodeJs} from "@fortawesome/free-brands-svg-icons"


function Projects(){

    const [control, setControll] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setControll(selectedIndex);
      };

    return (
        <div className="Carousel-item">
            <h1>My Projects</h1>
            <Carousel onSelect={handleSelect}>
                <Carousel.Item interval = {40000}>
                    <img className="project-image" src = "https://i.ibb.co/h8FfqJk/To-Dolist-back-End.png"></img>
                    <Carousel.Caption>
                        <h3>TodoList</h3>
                        <div className="project-description">
                        <p className="description-skills"><FontAwesomeIcon icon={faHtml5}/>HTML</p>    
                        <p className="description-skills"><span> <FontAwesomeIcon icon={faCss3} />CSS</span></p>  
                        <p className="description-skills"><span> <FontAwesomeIcon icon={faJs} />Javascript</span></p>               
                        <p className="description-skills"><span> <FontAwesomeIcon icon={faNodeJs} />NodeJS</span></p>                       
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval = {1200}>
                <img  className="project-image" src="https://i.ibb.co/TBDsbgD/Radio-Video-Surverillance.png" alt="Image Two"/>
                    <Carousel.Caption>
                        <h3>Radar Video Surverillance</h3>
                        <div className="project-description">
                        <p className="description-skills">
                            
                        </p>                       
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval = {40000}>
                <img className="project-image" src="https://i.ibb.co/YpJBLnG/Notetext.png" alt="Image Three"/>
                    <Carousel.Caption>
                        <h3>NoteText</h3>
                        <div className="project-description">
                        <p className="description-skills"><FontAwesomeIcon icon={faHtml5}/>HTML</p>    
                        <p className="description-skills"><span> <FontAwesomeIcon icon={faCss3} />CSS</span></p>  
                        <p className="description-skills"><span> <FontAwesomeIcon icon={faJs} />Javascript</span></p>               
                        <p className="description-skills"><span> <FontAwesomeIcon icon={faReact} />React</span></p>  
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Projects;