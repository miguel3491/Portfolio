import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import About from "./About"
import Projects from "./Projects";
import {Animator, ScrollContainer, ScrollPage, batch, FadeIn} from "react-scroll-motion";
import "../styles.css"

function App(){
    return(
        <div>
            <ScrollContainer>
                <ScrollPage page = {0}>
                    <Animator animation = {batch(FadeIn())}>
            <header id = "header">
                <Header></Header>
            </header>
                    </Animator>
                </ScrollPage>
            
            <section id = "about">
                <About></About>
            </section>


            <section id = "projects">
                <Projects></Projects>
            </section>

            <footer id = "footer">
                <Footer></Footer>
            </footer>
            </ScrollContainer>
        </div>
    )
}

export default App;