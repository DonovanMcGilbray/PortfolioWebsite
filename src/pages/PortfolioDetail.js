import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function PortfolioDetail() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);
    if(!project) {
        return <h2>Project not found</h2>;
    }
    return (
        <div style = {{ maxWidth: "800px", margin: "50px auto" }}>
            <h1>{project.title}</h1>
            <img 
                src = {project.image}
                alt = {project.title}
                style = {{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
            />
            <p>{project.description}</p>
            <h2>Tech Stack</h2>
            <ul>
                {project.tech.map((tech, index) => (
                    <li key = {index}>{tech}</li>
                ))}
            </ul>
            {project.github && (
                <p>
                    <a href = {project.github} target = "_blank" rel = "noreferrer">
                        View GitHub
                    </a>
                </p>
            )}
            <Link to = "/portfolio">Back to Portfolio</Link>
        </div>
    );
}

export default PortfolioDetail;