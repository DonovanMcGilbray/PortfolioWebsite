import "./Contact.css";
import { useState } from "react";

function Contact() {
    const [status, setStatus] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message")
        };
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if(response.ok) {
            setStatus("Message sent successfully");
            e.target.reset();
        } else {
            setStatus("Failed to send message");
        }
    };
    return (
        <div className = "contact-container">
            <h1>Contact</h1>
            <p>
                Here's my GitHub and LinkedIn.
            </p>
            <div className = "contact-links">
                <a href = "https://www.linkedin.com/in/donovan-mcgilbray-67a2913b7" target = "_blank" rel = "noopener noreferrer">
                    LinkedIn
                </a>
                <a href = "https://github.com/DonovanMcGilbray" target = "_blank" rel = "noopener noreferrer">
                    GitHub
                </a>
            </div>
            <form className = "contact-form" onSubmit = {handleSubmit}>
                <label>Name</label>
                <input 
                    name = "name" 
                    type = "text" 
                    placeholder = "Your name" 
                    required
                />
                <label>Email</label>
                <input 
                    name = "email" 
                    type = "email" 
                    placeholder = "Your email" 
                    required
                />
                <label>Message</label>
                <textarea 
                    name = "message" 
                    placeholder = "Your message: " 
                    rows = "5" 
                    required
                />
                <button type = "submit">Send Message</button>
            </form>
            <p>{status}</p>
        </div>
    );
}

export default Contact;