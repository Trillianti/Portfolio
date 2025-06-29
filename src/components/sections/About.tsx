'use client';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const About = () => {
    return (
        <section
            id="about"
            className="bg-[#0F172A] py-32 min-h-screen flex justify-center items-center"
        >
            <div className="container mx-auto px-6 text-center">
                <Reveal>
                    <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 mb-6 pb-3">
                        About Me
                    </h3>
                </Reveal>

                <Reveal delay={0.1}>
                    <h4 className="text-2xl font-semibold text-blue-300 mb-6">
                        Backend Developer & Software Engineer
                    </h4>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
                        I&apos;m a backend-focused software engineer passionate
                        about building robust and scalable server-side systems.
                        I enjoy crafting clean architectures, managing complex
                        databases, and creating efficient APIs that drive
                        real-world applications.
                    </p>
                </Reveal>

                <Reveal delay={0.3}>
                    <p className="max-w-3xl mx-auto mt-5 text-gray-400 text-base">
                        My journey began with curiosity about backend logic and
                        data structures. Today, it’s evolved into a mission to
                        deliver reliable solutions that scale and empower users
                        worldwide.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-14 text-left">
                    <Reveal delay={0.4}>
                        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-2xl border border-blue-800/30 shadow-md hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-sm">
                            <h5 className="text-white text-lg font-semibold mb-4">
                                📬 Contact Details
                            </h5>
                            <ul className="text-gray-300 space-y-2 text-sm">
                                <li>
                                    <span className="text-blue-400">Name:</span>{' '}
                                    Dmytro Shatokhin
                                </li>
                                <li>
                                    <span className="text-blue-400">
                                        Email:
                                    </span>{' '}
                                    dimshat1@gmail.com
                                </li>
                                <li>
                                    <span className="text-blue-400">
                                        Location:
                                    </span>{' '}
                                    Ukraine, Cherkasy
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-2xl border border-purple-800/30 shadow-md hover:shadow-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                            <h5 className="text-white text-lg font-semibold mb-4">
                                💼 Professional Info
                            </h5>
                            <ul className="text-gray-300 space-y-2 text-sm">
                                <li>
                                    <span className="text-blue-400">
                                        Speciality:
                                    </span>{' '}
                                    Backend Developer
                                </li>
                                <li>
                                    <span className="text-blue-400">
                                        Availability:
                                    </span>{' '}
                                    Open to work
                                </li>
                                <li>
                                    <span className="text-blue-400">
                                        Focus:
                                    </span>{' '}
                                    Clean code, performance, scalability
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.6}>
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className="mt-12 inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        📄 Download Resume
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
