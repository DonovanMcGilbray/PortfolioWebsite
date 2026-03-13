import projects from "../data/projects";
import "./Portfolio.css";

function Portfolio() {
    return (
        <div className = "portfolio-container">
            <h1>Portfolio</h1>
            <div className = "projects-grid">
                {projects.map((project) => (
                    <div className = "project-card" key = {project.id}>
                        <div className = "project-image-container">
                            <img src = {project.image} alt = {project.title} />
                        </div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;