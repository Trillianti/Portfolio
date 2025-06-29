'use client';

import { useState } from 'react';
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaTelegramPlane,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';
import Reveal from '../ui/Reveal';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        if (res.ok) setSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="bg-[#0F172A] py-24 snap-start text-white"
        >
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
                {/* LEFT - Info */}
                <Reveal>
                    <div className="space-y-6">
                        <h3 className="text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block pb-2">
                            Get In Touch
                        </h3>
                        <p className="text-gray-400 max-w-md">
                            Have a project in mind or want to discuss potential
                            opportunities? I'd love to hear from you!
                        </p>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-blue-400 text-xl" />
                                <span>dimshat1@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-blue-400 text-xl" />
                                <span>+380 96 408 68 97</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                                <span>Cherkasy, Ukraine</span>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-6">
                            <a href="https://t.me/trillianti" target="_blank">
                                <FaTelegramPlane className="text-2xl hover:text-blue-400 transition" />
                            </a>
                            <a
                                href="https://linkedin.com/in/dimshat"
                                target="_blank"
                            >
                                <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
                            </a>
                            <a
                                href="https://github.com/trillianti"
                                target="_blank"
                            >
                                <FaGithub className="text-2xl hover:text-blue-400 transition" />
                            </a>
                        </div>
                    </div>
                </Reveal>

                {/* RIGHT - Form */}
                <Reveal delay={0.1}>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-[#1E293B] p-8 rounded shadow-lg space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                name="name"
                                placeholder="Your name"
                                className="p-3 rounded bg-[#0F172A] border border-blue-600"
                                onChange={handleChange}
                                required
                            />
                            <input
                                name="email"
                                placeholder="Your email"
                                className="p-3 rounded bg-[#0F172A] border border-blue-600"
                                onChange={handleChange}
                                required
                                type="email"
                            />
                        </div>
                        <input
                            name="subject"
                            placeholder="Subject"
                            className="w-full p-3 rounded bg-[#0F172A] border border-blue-600"
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            rows={5}
                            className="w-full p-3 rounded bg-[#0F172A] border border-blue-600"
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-medium w-full"
                        >
                            ✉️ Send Message
                        </button>
                        {submitted && (
                            <p className="text-green-400 text-sm mt-4 text-center">
                                ✅ Message sent successfully!
                            </p>
                        )}
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
