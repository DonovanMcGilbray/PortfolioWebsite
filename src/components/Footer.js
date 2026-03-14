import "./Footer.css";

function Footer() {
    return (
        <footer className = "footer">
            <p>{new Date().getFullYear()} Donovan McGilbray</p>
            <div className = "footer-links">
                <a href = "https://github.com/DonovanMcGilbray" target = "_blank" rel = "noopener noreferrer">
                    GitHub
                </a>
                <a href = "https://www.linkedin.com/in/donovan-mcgilbray-67a2913b7" target = "_blank" rel = "noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;