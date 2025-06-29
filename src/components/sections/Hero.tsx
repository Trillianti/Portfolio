'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const Hero = () => {
    return (
        <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E293B] to-[#0F172A] flex items-center justify-center min-h-screen pt-32 snap-start">
            <div className="container mx-auto grid md:grid-cols-2 items-center px-8">
                <Reveal delay={0}>
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl font-extrabold mb-4 leading-tight">
                            Hi, I&apos;m <br />
                            <span className="text-blue-400">
                                Dmytro Shatokhin
                            </span>
                            ,<br />
                            Backend Developer
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-md">
                            I build scalable backend systems with clean
                            architecture, strong database design, and efficient
                            APIs.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4 mt-6">
                            <Link
                                href="#"
                                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium shadow transition"
                            >
                                Open CV
                            </Link>
                            <Link
                                href="#contact"
                                className="px-5 py-2 border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white rounded transition"
                            >
                                Contact Info
                            </Link>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="mt-10 md:mt-0 flex justify-center">
                        <Image
                            src="/dmytro.JPG"
                            alt="Dmytro Shatokhin"
                            width={350}
                            height={350}
                            className="rounded-xl w-[350px] h-[350px] object-cover shadow-xl border-4 border-blue-600"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
