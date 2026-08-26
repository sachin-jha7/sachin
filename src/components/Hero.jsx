export default function Hero() {

    const textStyle = {
        fontSize: window.innerWidth >= 630 && window.innerWidth <= 800 ? "65px" : window.innerWidth <= 430 ? "35px" : ""
    }

    return (
        <section id="hero" className="hero-section">
            <div className="section-content">
                <div >
                    <p className="name">Sachin Jha</p>
                    <p className="title">[ full-stack-dev ]</p>
                </div>
                <div >
                    <div id="slider">
                        <div id="slide">
                            <p id="heading">Developer</p>
                            <p id="heading">Problem Solver</p>
                            <p id="heading" style={textStyle} >React Enthusiast</p>
                            <p id="heading" style={textStyle} >Full-Stack Engineer</p>
                            <p id="heading">Developer</p>
                        </div>
                    </div>
                    <p className="info">ensuring effortless simplicity & user-friendly functionality</p>
                    <a href="#projects" className="cta-btn">See Projects</a>
                </div>
            </div>
        </section>
    )
}