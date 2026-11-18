import "./Contact.css";
import { useState } from "react";
import { contact, socialLinks } from "../data/portfolioData";
import Toast from "../components/Toast";

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
 *  - A disabled loading state on the submit button while sending.
 *  - Success / error feedback shown as a toast notification.
 *  - Local-dev fallback: `npm start` runs only the React frontend, so the
 *    /api/contact serverless function does not exist. Instead of crashing,
 *    we detect that case and simulate a successful send so the UI can be
 *    tested locally. Real sends happen on Vercel (or via `vercel dev`).
 */

// True when running on the CRA dev server (`npm start`), false in production.
const IS_LOCAL_DEV = process.env.NODE_ENV === "development";

function Contact() {
    // Form field values.
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    // Honeypot value — a real human leaves this empty; bots tend to fill it.
    const [honeypot, setHoneypot] = useState("");
    // Validation errors keyed by field name.
    const [errors, setErrors] = useState({});
    // Whether a submission is currently in flight (drives the loading button).
    const [isSending, setIsSending] = useState(false);
    // Toast notification: null, or { type: "success" | "error", message }.
    const [toast, setToast] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear a field's error as soon as the user edits it.
        setErrors((prev) => ({ ...prev, [name]: undefined }));
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

        setIsSending(true);
        setToast(null);

        try {
            // POST the form data (plus the honeypot) to our serverless function.
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, honeypot }),
            });

            // LOCAL-DEV FALLBACK:
            // Under `npm start` there is no serverless function, so the dev
            // server returns the index.html (an HTML 404) rather than JSON.
            // Detect that and simulate success so the form can be tested
            // without crashing. This branch never runs in production.
            const contentType = response.headers.get("content-type") || "";
            const isHtmlResponse = contentType.includes("text/html");
            if (IS_LOCAL_DEV && (isHtmlResponse || response.status === 404)) {
                console.info(
                    "[contact] Local dev: /api/contact is not running, simulating success. " +
                    "Use `vercel dev` to test the real Resend send."
                );
                setToast({
                    type: "success",
                    message: "Message sent! (simulated in local dev)",
                });
                setForm({ name: "", email: "", message: "" });
                return;
            }

            if (response.ok) {
                setToast({
                    type: "success",
                    message: "Thanks! Your message has been sent. I'll get back to you soon.",
                });
                setForm({ name: "", email: "", message: "" });
            } else {
                setToast({
                    type: "error",
                    message: "Something went wrong. Please try again, or email me directly.",
                });
            }
        } catch {
            // Network failure (offline, etc.) — or a non-JSON response locally.
            if (IS_LOCAL_DEV) {
                setToast({
                    type: "success",
                    message: "Message sent! (simulated in local dev)",
                });
                setForm({ name: "", email: "", message: "" });
            } else {
                setToast({
                    type: "error",
                    message: "Network error. Please check your connection and try again.",
                });
            }
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="contact-container">
            <span className="eyebrow">Contact</span>
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

            <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? "has-error" : ""}
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
                    className={errors.email ? "has-error" : ""}
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
                    className={errors.message ? "has-error" : ""}
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

                <button type="submit" className="btn" disabled={isSending}>
                    {isSending ? "Sending..." : "Send Message"}
                </button>
            </form>

            {/* Success / error feedback shown as a dismissible toast. */}
            {toast && (
                <Toast
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}

export default Contact;
