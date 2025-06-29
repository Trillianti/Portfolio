'use client';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const About = () => {
    return (
        <section
            id="about"
            className="bg-[#1E293B] py-32 min-h-screen flex justify-center items-center snap-start"
        >
            <div className="container mx-auto px-6 text-center">
                <Reveal>
                    <h3 className="text-4xl font-bold text-white mb-6 border-b-4 border-blue-500 inline-block pb-2">
                        About Me
                    </h3>
                </Reveal>

                <Reveal delay={0.1}>
                    <h4 className="text-xl font-semibold text-white mb-4">
                        Backend Developer & Software Engineer
                    </h4>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
                        I&apos;m a backend-focused software engineer with a
                        strong foundation in scalable architecture and modern
                        server-side technologies. I enjoy designing reliable
                        APIs, managing databases efficiently, and building
                        systems that handle real-world complexity with clarity
                        and performance.
                    </p>
                </Reveal>

                <Reveal delay={0.3}>
                    <p className="max-w-3xl mx-auto mt-4 text-gray-400">
                        My journey in backend development began with a curiosity
                        about how things work under the hood – from server logic
                        to data pipelines. Over time, it has evolved into a
                        passion for building powerful systems that scale and
                        serve millions of users.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10 text-left">
                    <Reveal delay={0.4}>
                        <div className="bg-[#0F172A] p-6 rounded-lg border border-blue-800 shadow-md">
                            <h5 className="text-white font-semibold mb-4">
                                Contact Details
                            </h5>
                            <p>
                                <span className="text-blue-300">Name:</span>{' '}
                                Dmytro Shatokhin
                            </p>
                            <p>
                                <span className="text-blue-300">Email:</span>{' '}
                                dimshat1@gmail.com
                            </p>
                            <p>
                                <span className="text-blue-300">Location:</span>{' '}
                                Ukraine, Cherkasy
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <div className="bg-[#0F172A] p-6 rounded-lg border border-blue-800 shadow-md">
                            <h5 className="text-white font-semibold mb-4">
                                Professional Info
                            </h5>
                            <p>
                                <span className="text-blue-300">
                                    Speciality:
                                </span>{' '}
                                Backend Developer
                            </p>
                            <p>
                                <span className="text-blue-300">
                                    Availability:
                                </span>{' '}
                                Available for hire
                            </p>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.6}>
                    <Link
                        href="#"
                        className="mt-10 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition shadow"
                    >
                        Download Resume
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
