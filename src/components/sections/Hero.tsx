'use client';

import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E293B] to-[#0F172A]"
        >
            {/* Полупрозрачный фон с клетками */}
            <div className="absolute inset-0 z-0 bg-[length:40px_40px] bg-[repeating-linear-gradient(0deg,_rgba(255,255,255,0.03)_0px,_rgba(255,255,255,0.03)_1px,_transparent_1px,_transparent_40px),repeating-linear-gradient(90deg,_rgba(255,255,255,0.03)_0px,_rgba(255,255,255,0.03)_1px,_transparent_1px,_transparent_40px)]" />

            {/* Контент поверх */}
            <div className="relative z-10 container mx-auto grid md:grid-cols-2 items-center px-8">
                <Reveal delay={0}>
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl font-extrabold mb-4 leading-tight">
                            Hi, I&apos;m <br />
                            <span className="text-blue-400">
                                Dmytro Shatokhin,
                            </span>
                            <br />
                            Backend Developer
                        </h2>
                        <p className="text-gray-400 mt-4 md:max-w-[500px] text-center md:text-left">
                            I build scalable backend systems with clean
                            architecture, strong database design, and efficient
                            APIs.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4 mt-6">
                            <Link
                                href="/cv.pdf"
                                target="_blank"
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
                        <div className="relative md:w-[350px] md:h-[350px] w-[300px] h-[300px] rounded-xl">
                            {/* Градієнтне світіння позаду зображення */}
                            <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-indigo-500 blur-lg opacity-50 animate-pulse"></div>

                            {/* Основне зображення */}
                            <Image
                                src="/dmytro.JPG"
                                alt="Dmytro Shatokhin"
                                width={1000}
                                height={1000}
                                className="relative z-10 rounded-xl object-cover w-full h-full shadow-xl"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
