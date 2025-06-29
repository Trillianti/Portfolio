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
        if (res.ok) {
            setSubmitted(true);
            setForm({ name: '', email: '', subject: '', message: '' });
        }
    };

    return (
        <section id="contact" className="bg-[#0F172A] py-24 text-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
                {/* LEFT - Info */}
                <Reveal>
                    <div className="space-y-6">
                        <h3 className="text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block pb-2">
                            Get In Touch
                        </h3>
                        <p className="text-gray-400 max-w-md">
                            Have a project in mind or want to discuss
                            opportunities? I&apos;d love to hear from you.
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
                            <a
                                href="https://t.me/trillianti"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTelegramPlane className="text-2xl hover:text-blue-400 transition" />
                            </a>
                            <a
                                href="https://linkedin.com/in/dimshat"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
                            </a>
                            <a
                                href="https://github.com/trillianti"
                                target="_blank"
                                rel="noreferrer"
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
                        className="bg-[#1E293B] p-8 rounded-2xl shadow-md space-y-6 w-full"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                name="name"
                                value={form.name}
                                placeholder="Your name"
                                onChange={handleChange}
                                className="p-3 rounded-lg bg-[#0F172A] border border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
                                required
                            />
                            <input
                                name="email"
                                value={form.email}
                                placeholder="Your email"
                                type="email"
                                onChange={handleChange}
                                className="p-3 rounded-lg bg-[#0F172A] border border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
                                required
                            />
                        </div>
                        <input
                            name="subject"
                            value={form.subject}
                            placeholder="Subject"
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#0F172A] border border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            required
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            placeholder="Your message"
                            rows={5}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#0F172A] border border-blue-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition w-full"
                        >
                            ✉️ Send Message
                        </button>
                        {submitted && (
                            <p className="text-green-400 text-sm mt-3 text-center animate-pulse">
                                ✅ Thank you! Your message has been sent.
                            </p>
                        )}
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
