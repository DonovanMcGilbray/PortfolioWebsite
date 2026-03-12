import "./About.css";

function About() {
    return (
        <div className = "about-container">
            <img
                src = "/profile.jpg"
                alt = "Profile"
                className = "about-image"
            />
            <div className = "about-text">
                <h1>About Me</h1>
                <p>
                    My name is Donovan McGilbray ...
                </p>
                <h2>Experience</h2>
                <p>
                    ...
                </p>
                <h2>Specializations</h2>
                <ul>
                    <li>...</li>
                </ul>
                <h2>Skills</h2>
                <ul>
                    <li>...</li>
                </ul>
                <a href = "/resume.pdf" className = "resume-button">
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default About;