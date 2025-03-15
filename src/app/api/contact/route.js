import sendMail from "@/app/lib/helpers/mail";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json(); 
        const { name, subject, email, message } = body;

        if (!name || !subject || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
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
