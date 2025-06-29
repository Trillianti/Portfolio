'use client';

import Reveal from '../ui/Reveal';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
    {
        title: 'Portfolio Website',
        description:
            'Personal portfolio built with Next.js, TailwindCSS, and Framer Motion. Fully responsive and optimized for performance.',
        tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
        image: '/projects/portfolio.png',
        github: 'https://github.com/Trillianti/Portfolio',
        live: 'https://portfolio-trilliantis-projects.vercel.app/',
    },
    {
        title: 'RealWorld API Clone',
        description:
            'Robust backend for the RealWorld app with scalable architecture, secure JWT auth, and full CRUD operations using PostgreSQL.',
        tech: ['Node.js', 'Nest.js', 'Prisma', 'JWT', 'PostgreSQL'],
        image: '/projects/realworld.png',
        github: 'https://github.com/Trillianti/real-world',
        live: 'https://real-world-ash5.onrender.com/docs',
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-24 min-h-screen flex justify-center items-center bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
        >
            <div className="container mx-auto px-6 text-center">
                <Reveal>
                    <h3 className="text-5xl font-bold text-white mb-4 tracking-tight border-b-4 border-gradient-to-r from-green-400 to-blue-500 inline-block pb-2">
                        Projects
                    </h3>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                        A selection of projects that showcase my technical
                        skills, creativity, and focus on real-world solutions.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 mt-6">
                    {projects.map((project, idx) => (
                        <Reveal key={idx} delay={0.2 + idx * 0.1}>
                            <div className="group bg-[#0F172A] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={350}
                                        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="p-6 text-left flex flex-col h-full">
                                    <h4 className="text-white text-2xl font-semibold mb-2">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-auto flex gap-4 text-blue-400">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white transition"
                                            >
                                                <FaGithub size={18} />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white transition"
                                            >
                                                <FaExternalLinkAlt size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
