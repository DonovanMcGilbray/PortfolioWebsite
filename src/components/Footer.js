import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className = "footer">
            <div className = "footer-left">
                <p>{new Date().getFullYear()} Donovan McGilbray</p>
            </div>
            <div className = "footer-right">
                <a href = "https://github.com/DonovanMcGilbray" target = "_blank" rel = "noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href = "https://www.linkedin.com/in/donovan-mcgilbray-67a2913b7" target = "_blank" rel = "noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;