import { useParams, Link } from "react-router-dom";
import { projects } from "../data/portfolioData";
import "./detail.css";

function PortfolioDetail() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="detail-not-found">
                <h2>Project not found</h2>
                <Link to="/portfolio" className="btn">
                    Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <div className="detail-container">
            <Link to="/portfolio" className="detail-back">
                ← Back to Portfolio
            </Link>

            <h1>{project.title}</h1>

            <img src={project.image} alt={project.title} className="detail-image" />

            {/* description is an array of paragraphs in portfolioData. */}
            {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}

            <h2>Tech Stack</h2>
            <div className="detail-tags">
                {project.tech.map((tech) => (
                    <span key={tech} className="detail-tag">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="detail-links">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                    >
                        View on GitHub
                    </a>
                )}
            </div>
        </div>
    );
}

export default PortfolioDetail;
