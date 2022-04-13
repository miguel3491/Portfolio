import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import About from "./About"
import Projects from "./Projects";
import "../styles.css"

function App(){
    return(
        <div>
            <header id = "header">
                <Header></Header>
            </header>

            <section id = "about">
                <About></About>
            </section>

            <section id = "projects">
                <Projects></Projects>
            </section>

            <footer id = "footer">
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default App;