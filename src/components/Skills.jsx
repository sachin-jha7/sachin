export default function Skills() {
    
    return (
        <section id="skills" className="skill-section">
            <div className="section-content">
                <p className="heading">Skills</p>
                <p style={{ fontSize: "18px", fontWeight: "500", color: "#d8d6d6" }}>Technologies i work with</p>
                
                <div className="tech-box">
                    <div>
                        <p className="tech-type-heading">Backend</p>
                        <p className="tech-name">&gt; NodeJS, ExpressJS, Mongoose, Socket.IO, WebRTC, WebSockets.</p>
                    </div>
                    <div>
                        <p className="tech-type-heading">Database</p>
                        <p className="tech-name">&gt; MongoDB, SQL.</p>
                    </div>
                    <div>
                        <p className="tech-type-heading">Frontend</p>
                        <p className="tech-name">&gt; ReactJS, JavaScript, HTML, CSS, Responsive Design.</p>
                    </div>
                    <div>
                        <p className="tech-type-heading">Tools</p>
                        <p className="tech-name">&gt; Git/GitHub, Visual Studio Code.</p>
                    </div>
                    <div>
                        <p className="tech-type-heading">Deployment</p>
                        <p className="tech-name">&gt; Render, Vercel, Netlify.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
