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
                    I am currently pursuing a Bachelor of Science in Computer Science at California State University, 
                    Bakersfield - Antelope Valley, with an anticipated graduation date of May 2027. I have earned an 
                    Associate of Science in Computer Science from Antelope Valley College in May 2025.
                </p>
                <h2>Experience</h2>
                <p>
                    Through my courses and personal projects, I have gained experience with programming languages 
                    including C, C++, Java, Python, HTML, CSS, and SQL. I enjoy learning how software systems are 
                    designed and how different technologies can work together to solve real-world problems.
                </p>
                <h2>Specializations</h2>
                <ul>
                    <li>Software Development</li>
                    <li>Mobile Application Development</li>
                    <li>Database Design and SQL</li>
                    <li>Web Application Development</li>
                </ul>
                <h2>Skills</h2>
                <ul>
                    <li>Programming: C, C++, Java, JavaScript, Python</li>
                    <li>Web Development: HTML, CSS, React</li>
                    <li>Database Development: SQL, relational database design</li>
                    <li>Developer Tools: Git, GitHub, Visual Studio Code, Vercel</li>
                </ul>
                <a href = "/resume.pdf" className = "resume-button">
                    View Resume
                </a>
            </div>
        </div>
    );
}

export default About;