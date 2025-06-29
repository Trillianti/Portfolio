'use client';

import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const About = () => {
    const birthDate = new Date('2008-11-04');
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }
    return (
        <section
            id="about"
            className="bg-[#0F172A] py-32 min-h-screen flex justify-center items-center"
        >
            <div className="container mx-auto px-6 text-center">
                <Reveal>
                    <h3 className="text-5xl font-bold text-white mb-4 tracking-tight border-b-4 border-gradient-to-r from-blue-400 to-purple-500 inline-block pb-2">
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
                        I&apos;m a {age}-year-old backend developer from
                        Ukraine, currently based in Ukraine. With a strong
                        passion for clean architecture and scalable systems, I
                        focus on crafting robust APIs, efficient databases, and
                        well-structured backend services.
                    </p>
                </Reveal>

                <Reveal delay={0.3}>
                    <p className="max-w-3xl mx-auto mt-5 text-gray-400 text-base">
                        My background blends software engineering with
                        real-world problem solving. I’ve contributed to startups
                        and freelance projects where reliability, performance,
                        and clarity mattered most. Now, I’m open to new
                        challenges where I can grow as an engineer and bring
                        meaningful value to teams and users.
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
                                    Ukraine
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
