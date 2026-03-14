import "./Contact.css";

function Contact() {
    return (
        <div className = "contact-container">
            <h1>Contact</h1>
            <p>
                Here's my GitHub and LinkedIn.
            </p>
            <div className = "contact-links">
                <a href = "" target = "_blank" rel = "noopener noreferrer">
                    LinkedIn
                </a>
                <a href = "https://github.com/DonovanMcGilbray" target = "_blank" rel = "noopener noreferrer">
                    GitHub
                </a>
            </div>
            <form className = "contact-form">
                <label>Name</label>
                <input type = "text" placeholder = "Your name" required/>
                <label>Email</label>
                <input type = "email" placeholder = "Your email" required/>
                <label>Message</label>
                <textarea placeholder = "Your message: " rows = "5" required/>
                <button type = "submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;