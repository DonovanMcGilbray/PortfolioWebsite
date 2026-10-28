import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, socialLinks } from "../data/portfolioData";

// Map each social link label to its icon so the Footer stays data-driven.
const iconFor = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
};

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>
                    © {new Date().getFullYear()} {profile.name}
                </p>
            </div>
            <div className="footer-right">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                    >
                        {iconFor[link.label] ?? link.label}
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
