import "./Home.css";
import { Link } from "react-router-dom";
import { profile, home } from "../data/portfolioData";

function Home() {
    return (
        <div className="home-content">
            <div className="profile-card">
                <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="profile-image"
                />
                <div className="profile-info">
                    <h1>{home.heading}</h1>
                    <h2 className="profile-role">{home.subheading}</h2>

                    {/* Each paragraph of the intro comes from portfolioData. */}
                    {home.intro.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <div className="home-actions">
                        <Link to="/portfolio" className="btn">
                            View My Work
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
