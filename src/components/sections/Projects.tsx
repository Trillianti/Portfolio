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
        live: 'https://yourportfolio.com',
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
            className="py-24 min-h-screen flex justify-center items-center snap-start"
        >
            <div className="container mx-auto px-6 text-center">
                <Reveal>
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-tight border-b-4 border-blue-500 inline-block pb-2">
                        Projects
                    </h3>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                        A selection of projects that showcase my technical
                        skills, creativity, and focus on real-world solutions.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 mt-6">
                    {projects.map((project, idx) => (
                        <Reveal key={idx} delay={0.2 + idx * 0.1}>
                            <div className="bg-[#0F172A] rounded-xl border border-white/10 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6 flex flex-col flex-1 justify-between">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-2">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 text-sm text-blue-300 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-blue-900/30 px-2 py-1 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex gap-4 text-blue-400 mt-auto">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-blue-500 transition"
                                            >
                                                <FaGithub size={18} />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-blue-500 transition"
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
