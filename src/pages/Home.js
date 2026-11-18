import "./Home.css";
import { Link } from "react-router-dom";
import { profile, home } from "../data/portfolioData";

function Home() {
    return (
        <div className="home-content">
            <div className="profile-card glass-card">
                <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="profile-image"
                />
                <div className="profile-info">
                    <span className="eyebrow">{home.subheading}</span>
                    <h1>{home.heading}</h1>

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
