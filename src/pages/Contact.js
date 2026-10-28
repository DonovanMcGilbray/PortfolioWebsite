import "./Contact.css";
import { useState } from "react";
import { contact, socialLinks } from "../data/portfolioData";

/**
 * Contact page
 * ------------
 * Renders the contact form and sends submissions to the serverless
 * function at /api/contact (see api/contact.ts), which forwards the
 * message to my inbox using the Resend API.
 *
 * Features:
 *  - Client-side validation (name, email, message).
 *  - A hidden "honeypot" field to silently drop spam bots.
 *  - A loading state on the submit button while the request is in flight.
 *  - Clean success / error feedback messages.
 */
function Contact() {
    // Form field values.
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    // Honeypot value — a real human leaves this empty; bots tend to fill it.
    const [honeypot, setHoneypot] = useState("");
    // Validation errors keyed by field name.
    const [errors, setErrors] = useState({});
    // "idle" | "loading" | "success" | "error"
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Simple, readable validation. Returns an object of error messages.
    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = "Please enter your name.";
        if (!form.email.trim()) {
            next.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            next.email = "Please enter a valid email address.";
        }
        if (!form.message.trim()) next.message = "Please enter a message.";
        return next;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Run validation before doing any network work.
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setStatus("loading");

        try {
            // POST the form data (plus the honeypot) to our serverless function.
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, honeypot }),
            });

            if (response.ok) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            // Network failure (offline, etc.).
            setStatus("error");
        }
    };

    return (
        <div className="contact-container">
            <h1>{contact.heading}</h1>
            <p className="contact-intro">{contact.intro}</p>

            <div className="contact-links">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                />
                {errors.message && (
                    <span className="field-error">{errors.message}</span>
                )}

                {/*
                  Honeypot field: hidden from humans with CSS and marked
                  aria-hidden + tabIndex -1 so screen readers and keyboard users
                  skip it. Spam bots that auto-fill every input will populate it,
                  letting the server drop the submission without wasting our free
                  Resend email quota.
                */}
                <input
                    type="text"
                    name="honeypot"
                    className="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                />

                <button type="submit" className="btn" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>
            </form>

            {/* Feedback messages shown after a submission attempt. */}
            {status === "success" && (
                <p className="form-feedback success">
                    Thanks! Your message has been sent. I'll get back to you soon.
                </p>
            )}
            {status === "error" && (
                <p className="form-feedback error">
                    Something went wrong. Please try again, or email me directly.
                </p>
            )}
        </div>
    );
}

export default Contact;
