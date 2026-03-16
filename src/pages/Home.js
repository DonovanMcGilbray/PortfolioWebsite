import "./Home.css";

function Home() {
    return (
        <div className = "home">
            <div className = "profile-card">
                <img
                    src = "/profile.jpg"
                    alt = "Profile"
                    className = "profile-image"
                />
                <div className = "profile-info">
                    <h1>Donovan McGilbray</h1>
                    <h2>Software Developer</h2>
                    <p>
                        I am a Computer Science student at California State University, Bakersfield - Antelope Valley,
                        with an expected graduation date of May 2027. I am interested in frontend software engineering 
                        and building web applications.
                    </p>
                    <p>
                        I work with React, JavaScript, HTML, and CSS to create responsive user interfaces and I have 
                        experience building mobile applications using React Native with Expo.
                    </p>
                    <p>
                        My projects focus on clean component design, structured data, and deploying applications using 
                        GitHub and Vercel.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;