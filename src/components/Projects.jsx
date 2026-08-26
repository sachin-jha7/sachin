import data from "../Data/data";

export default function Projects() {
    return (
        <section id="projects" className="project-section">
            <div className="section-content">
                <p className="heading">Projects</p>
                <div className="card-container">
                    {
                        data.map((item, idx) => {
                            return (
                                <div key={idx} className="card">
                                    <video src={item.videoUrl} muted playsInline autoPlay loop controls={false} />
                                    <p className="card-name">{item.name}</p>
                                    <p className="card-about">{item.about}</p>

                                    <div className="tech-btns">

                                        {
                                            item.techStack.map((tech, idx) => {
                                                return (
                                                    <button key={idx}>{tech}</button>
                                                )
                                            })
                                        }

                                    </div>
                                    <div className="btns">
                                        <a href={item.siteLink}>View Site</a>
                                        <a href={item.repoLink}>Codebase</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}