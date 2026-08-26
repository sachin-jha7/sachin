import { faGithub, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-content">
                <div className="contact-container">
                    <p className="contact-text">
                        Whether you have a question or just want to say hi,
                         feel free to contact me and i'll try my best to get back to you!
                    </p>
                    <div className="contact-box-wrapper">
                        <a href="https://instagram.com/mr_vengeance4" className="contact-link">
                            <FontAwesomeIcon color="#e1306c" icon={faInstagramSquare} />
                        </a>
                        <a href="https://www.linkedin.com/in/sachin-jha-416a34332" className="contact-link">
                            <FontAwesomeIcon color="#0a66c2" icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/sachin-jha7" className="contact-link">
                            <FontAwesomeIcon color="#fff" icon={faGithub} />
                        </a>
                        <a href="mailto:sachinjhagc@gmail.com?subject=Project%20Inquiry&body=Hi%20Sachin" className="contact-link">
                            <FontAwesomeIcon color="#ea4335" icon={faEnvelope} />
                        </a>
                    </div>
                    <div>
                    <p className="footer-text">
                        Built with React.js and Vanilla CSS.
                    </p>
                    <p className="product-info">
                        v0 &copy; 2026 Sachin Jha
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}