import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Portfolio.css";

function Portfolio() {
    return (
        <div className = "portfolio-container">
            <h1>Portfolio</h1>
            <div className = "projects-grid">
                {projects.map((project) => (
                    <Link 
                        to = {`/portfolio/${project.slug}`}
                        key = {project.id}
                        className = "project-card"
                    >
                        <div className = "project-image-container">
                            <img src = {project.image} alt = {project.title} />
                        </div>
                        <h2>{project.title}</h2>
                        <p>{project.shortDescription}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;