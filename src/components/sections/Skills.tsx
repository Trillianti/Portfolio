'use client';

import { FaServer, FaCode, FaTools, FaCodeBranch } from 'react-icons/fa';
// import SkillGroup from '../ui/SkillGroupCard';
import Reveal from '../ui/Reveal';

const Skills = () => {
    const skills = [
        {
            title: 'Backend',
            icon: <FaServer className="text-green-400 text-2xl" />,
            items: [
                'Node.js',
                'Express.js',
                'NestJS',
                'RESTful APIs',
                'MySQL',
                'PostgreSQL',
                'Prisma',
            ],
        },
        {
            title: 'Development Tools',
            icon: <FaTools className="text-purple-400 text-2xl" />,
            items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vercel'],
        },
        {
            title: 'Programming',
            icon: <FaCodeBranch className="text-yellow-400 text-2xl" />,
            items: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
        },
        {
            title: 'Frontend',
            icon: <FaCode className="text-blue-400 text-2xl" />,
            items: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'React',
                'Next.js',
                'TypeScript',
                'TailwindCSS',
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="relative z-10 bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-24 min-h-screen flex justify-center items-center"
        >
            <div className="container mx-auto px-6 text-center">
                <Reveal delay={0}>
                    <h3 className="text-5xl font-bold text-white mb-4 tracking-tight border-b-4 border-gradient-to-r from-blue-400 to-purple-500 inline-block pb-2">
                        Skills & Expertise
                    </h3>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                        My technical stack and strengths built through hands-on
                        experience and real-world projects.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 text-left">
                    {skills.map((group, idx) => (
                        <Reveal delay={0.2 + idx * 0.1} key={group.title}>
                            <div className="bg-[#0f1b33] p-6 rounded-xl border border-blue-700/30 shadow-lg hover:shadow-blue-400/20 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-white text-xl">
                                        {group.icon}
                                    </div>
                                    <h4 className="text-white text-lg font-semibold tracking-wide">
                                        {group.title}
                                    </h4>
                                </div>
                                <ul className="text-gray-300 list-disc list-inside space-y-1">
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
