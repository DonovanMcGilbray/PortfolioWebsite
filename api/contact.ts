/**
 * api/contact.ts — serverless contact-form handler (runs on Vercel).
 * ------------------------------------------------------------------
 * HOW THE CONTACT FORM SUBMITS TO RESEND:
 *
 *  1. The Contact page (src/pages/Contact.js) sends a POST request to
 *     "/api/contact" with a JSON body: { name, email, message, honeypot }.
 *
 *  2. Vercel runs THIS file as a serverless function for that route.
 *
 *  3. We validate the input, drop obvious spam via the honeypot, then call
 *     the Resend API (resend.emails.send) to deliver the message to my inbox.
 *
 *  4. We respond with JSON so the frontend can show success / error feedback.
 *
 * REQUIRED ENVIRONMENT VARIABLES (see .env.example and the README):
 *   - RESEND_API_KEY : your Resend API key (keeps the key off the client).
 *   - CONTACT_EMAIL  : the address that should receive contact messages.
 *
 * COST SAFETY ($0): the honeypot check returns early BEFORE calling Resend,
 * so spam-bot submissions never consume the free-tier email quota.
 */

import { Resend } from "resend";

// Initialize Resend with the secret API key from the environment.
// This code only runs on the server, so the key is never exposed to browsers.
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    // Only POST is allowed; anything else is rejected.
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // Vercel's Node runtime sometimes delivers req.body as a raw string
    // (unlike Next.js, which auto-parses JSON). Parse defensively so the
    // handler works regardless of how the body arrives.
    let body = req.body;
    if (typeof body === "string") {
        try {
            body = JSON.parse(body);
        } catch {
            return res.status(400).json({ error: "Invalid JSON body" });
        }
    }
    body = body || {};

    const { name, email, message, honeypot } = body;

    // --- Spam protection -------------------------------------------------
    // The honeypot field is hidden from humans. If it has any value, the
    // submission almost certainly came from a bot. We return 200 (so the bot
    // thinks it succeeded) but do NOT send an email, protecting our quota.
    if (honeypot) {
        return res.status(200).json({ success: true });
    }

    // --- Validation ------------------------------------------------------
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (!emailLooksValid) {
        return res.status(400).json({ error: "Invalid email address" });
    }

    // The recipient comes from an env var so no personal email is hardcoded.
    const toAddress = process.env.CONTACT_EMAIL;
    if (!toAddress) {
        console.error("CONTACT_EMAIL environment variable is not set.");
        return res.status(500).json({ error: "Server is not configured" });
    }

    // --- Send the email via Resend --------------------------------------
    try {
        await resend.emails.send({
            // "from" must be a domain/address verified in your Resend account.
            // Resend's onboarding sender works for testing on the free tier.
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: toAddress,
            replyTo: String(email), // so you can reply straight to the sender
            subject: `New contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Resend failed to send email:", error);
        return res.status(500).json({ error: "Failed to send email" });
    }
}
