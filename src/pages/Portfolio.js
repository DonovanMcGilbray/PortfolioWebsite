import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData";
import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <p className="portfolio-intro">A selection of projects I have built.</p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <Link
                        to={`/portfolio/${project.slug}`}
                        key={project.id}
                        className="project-card"
                    >
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-body">
                            <h2>{project.title}</h2>
                            <p>{project.shortDescription}</p>
                            <div className="project-tags">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="project-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
