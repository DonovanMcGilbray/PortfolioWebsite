import "./Resume.css";
import { profile, resume } from "../data/portfolioData";

function Resume() {
    return (
        <div className="resume-container">
            <h1>Resume</h1>

            <section>
                <h2>Professional Summary</h2>
                <p>{resume.summary}</p>
            </section>

            <section>
                <h2>Technical Skills</h2>
                <ul>
                    {resume.technicalSkills.map((skill) => (
                        <li key={skill.label}>
                            <strong>{skill.label}:</strong> {skill.value}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Education</h2>
                {resume.education.map((edu) => (
                    <p key={edu.school}>
                        <strong>{edu.school}</strong>
                        <br />
                        {edu.credential}
                        <br />
                        {edu.timeframe}
                        <br />
                        {edu.location}
                    </p>
                ))}
                <p>
                    <strong>Completed Coursework:</strong> {resume.coursework}
                </p>
            </section>

            <section>
                <h2>Experience</h2>
                <ul>
                    {resume.experience.map((item) => (
                        <li key={item.role}>
                            <strong>{item.role}</strong>
                            <br />
                            {item.summary}
                        </li>
                    ))}
                </ul>
            </section>

            <a href={profile.resumeUrl} className="btn">
                View Resume PDF
            </a>
        </div>
    );
}

export default Resume;
