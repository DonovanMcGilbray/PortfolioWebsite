import "./About.css";
import { profile, about } from "../data/portfolioData";

function About() {
    return (
        <div className="about-container">
            <img src={profile.profileImage} alt={profile.name} className="about-image" />

            <div className="about-text">
                <h1>{about.heading}</h1>

                {about.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

                <h2>Specializations</h2>
                <ul>
                    {about.specializations.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <h2>Skills</h2>
                <ul>
                    {about.skills.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <a href={profile.resumeUrl} className="btn">
                    View Resume
                </a>
            </div>
        </div>
    );
}

export default About;
