import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPuzzlePiece, faTerminal, faUser } from '@fortawesome/free-solid-svg-icons';
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
    return (
        // <div className="page">
        <>
            <header>
                <div className="nav">
                    <p>&lt; Sachin /&gt;</p>
                </div>
            </header>
            <main>
                {<Hero />}
                {<Projects />}
                {<Skills />}
                {<About />}
                {<Contact />}
            </main>

            <div className="navigation-bar">
                {/* <div className="nav-btn"><FontAwesomeIcon icon={faHome} /></div> */}
                <a className="nav-btn" href="#hero"><FontAwesomeIcon icon={faHome} /></a>
                <a href="#projects" className="nav-btn"><FontAwesomeIcon icon={faTerminal} /></a>
                <a href="#skills" className="nav-btn"><FontAwesomeIcon icon={faPuzzlePiece} /></a>
                {/* <div className="nav-btn"><FontAwesomeIcon icon={faUser} /></div> */}
                <a href="#contact" className="nav-btn"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>

        {/* </div> */}
        </>
    )
}