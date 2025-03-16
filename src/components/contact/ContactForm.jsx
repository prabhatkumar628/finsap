"use client";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { Poppins } from 'next/font/google';
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
const unbounded = Poppins({ subsets: ['latin'], weight: ['200', "300", '500', '600'] });

const contactSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters long"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
});

const ContactForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Validate with Zod
        const validationResult = contactSchema.safeParse(formData);
        if (!validationResult.success) {
            setError(validationResult.error.errors[0].message);
            return;
        }

        setLoading(true)
        try {
            const response = await axios.post("/api/contact", formData);
            if (response.data.success) {
                setSuccess("Your message has been sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
            }
        } catch (err) {
            setError(err.response?.data?.error || "Something went wrong!");
        } finally {
           setLoading(false)
        }
    };

    return (
        <div className={`${unbounded.className} max-w-md mx-auto p-6 lg:p-8 bg-white text-[#053d99] rounded-2xl contact-form`}>
            <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
            {loading && <Loading/> }

            {error && <p className={`text-red-500 text-sm pb-2 text-center`}>{error}</p>}
            {success && <p className={`text-green-500 text-sm pb-2 text-center`}>{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 contact-form outline-none border border-white focus:border-[#0dd4ff]"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 contact-form outline-none border border-white focus:border-[#0dd4ff]"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 contact-form outline-none border border-white focus:border-[#0dd4ff]"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 contact-form outline-none border border-white focus:border-[#0dd4ff]"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-[#0dd4ff] text-white py-2 hover:bg-[#0dd3ffd0] transition-all duration-200 ease-linear"
                >
                    { "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
