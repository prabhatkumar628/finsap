import sendMail from "@/app/lib/helpers/mail";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json(); 
        const { name, subject, email, message, token } = body;

        if (!name || !subject || !email || !message || !token) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const secret = process.env.RECAPTCHA_SECRET_KEY;
        const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
        const recaptchaRes = await fetch(verifyURL, { method: "POST" });
        const recaptchaData = await recaptchaRes.json();

        // console.log("reCAPTCHA Result: !!!!!", recaptchaData);
        if (!recaptchaData.success || recaptchaData.score < 0.5) {
          return NextResponse.json(
            {
              error: "reCAPTCHA verification failed. You're detected as bot.",
            },
            { status: 400 }
          );
        }

        const mailResponse = await sendMail({ name, subject, email, message });
        if (!mailResponse.success) {
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
        }
        return NextResponse.json({
            success: true,
            message: mailResponse.message || "Email sent successfully ok",
            details: { name, subject, email, message }
        });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
