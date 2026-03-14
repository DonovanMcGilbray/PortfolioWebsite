import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if(req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }
    const { name, email, message } = req.body;
    if(!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "dmcgilbray@csub.edu",
            replyTo: email,
            subject: `New contact from ${name}`,
            text: `
            Name: ${name}
            Email: ${email}
            ${message}
            `,
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to send email" });
    }
}