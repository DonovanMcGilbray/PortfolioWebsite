import "./Resume.css";

function Resume() {
    return (
        <div className = "resume-container">
            <h1>Resume</h1>
            <section>
                <h2>Professional Summary</h2>
                <p>
                    Computer Science student at California State University, Bakersfield - Antelope Valley 
                    with experience in software development, mobile applications, and database systems. 
                    Learned skills in multiple programming languages including C, C++, Java, JavaScript, 
                    Python, and SQL. Experienced in building full-stack applications, mobile apps using React 
                    Native, and web applications using React. Interested in software engineering, mobile 
                    development, and building efficient systems that solve real-world problems.
                </p>
            </section>
            <section>
                <h2>Technical skills</h2>
                <ul>
                    <li><strong>Programming Languages:</strong> C, C++, Java, JavaScript, Python, HTML, CSS, SQL</li>
                    <li><strong>Developer Tools:</strong> React, React Native, Expo Go</li>
                    <li><strong>Business Software:</strong> Microsoft Word, Google Docs, Google Slides, Google Sheets</li>
                    <li><strong>Languages:</strong> English and Spanish</li>
                </ul>
            </section>
            <section>
                <h2>Education</h2>
                <p>
                    <strong>California State University, Bakersfield - Antelope Valley</strong><br/>
                    Bachelor of Science in Computer Science<br/>
                    Expected Graduation: May 2027<br/>
                    Lancaster, CA
                </p>
                <p>
                    <strong>Antelope Valley College</strong><br/>
                    Associate of Science in Computer Science<br/>
                    August 2023 - May 2025<br/>
                    Lancaster, CA
                </p>
                <p>
                    <strong>Completed Coursework:</strong> Programming Fundamentals, Discrete Structures, 
                    Computer Architecture I (Assembly Language Programming), Computer Architecture II 
                    (Computer Organization), Programming Languages, Software Engineering, Database Systems
                </p>
            </section>
            <section>
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Software Engineering - Class Experience</strong><br/>
                        Worked in a 4-person development team using Agile practices and Git version control 
                        to develop a game launcher using the Godot game engine. Managed project timelines, 
                        coordinated tasks, and presented the final project to the instructor and peers.
                    </li>
                    <li>
                        <strong>Database Systems - Class Experience</strong><br/>
                        Designed and implemented a tutoring center database using SQL, PHP, and CSS. 
                        Created ER diagrams, relational schemas, stored procedures, triggers, and queries 
                        to manage tutor and student sessions and maintain accurate data.
                    </li>
                    <li>
                        <strong>Application Development - Class Experience</strong><br/>
                        Built mobile applications using React Native and Expo Go. Developed an introduction 
                        application and a Pokemon search app using the Pokemon API to retrieve and display 
                        dynamic data.
                    </li>
                </ul>
            </section>
            <a href = "/resume.pdf" className = "resume-button">
                View Resume
            </a>
        </div>
    );
}

export default Resume;