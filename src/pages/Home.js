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
                        I am a student developer interested in frontend software engineering and building web applications. 
                        I can work with React, JavaScript, HTML, and CSS to create responsive interfaces. 
                        I have experience building mobile applications using React Native with Expo Go. 
                        My projects focus on clean component design, structured data, and deploying applications using GitHub and Vercel.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;