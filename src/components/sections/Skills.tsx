'use client';

import { FaServer, FaCode, FaTools, FaCodeBranch } from 'react-icons/fa';
import SkillGroup from '../ui/SkillGroupCard';
import Reveal from '../ui/Reveal';

const Skills = () => {
    const skills = [
        {
            title: 'Frontend',
            icon: <FaCode className="text-blue-400 text-xl" />,
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
        {
            title: 'Backend',
            icon: <FaServer className="text-green-400 text-xl" />,
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
            icon: <FaTools className="text-purple-400 text-xl" />,
            items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vercel'],
        },
        {
            title: 'Programming',
            icon: <FaCodeBranch className="text-yellow-400 text-xl" />,
            items: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
        },
    ];

    return (
        <section
            id="skills"
            className="bg-[#0F172A] py-24 min-h-screen flex justify-center items-center snap-start"
        >
            <div className="container mx-auto px-6 text-center">
                <Reveal delay={0}>
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-tight border-b-4 border-blue-500 inline-block pb-2">
                        Skills & Expertise
                    </h3>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                        My technical skills and specialized areas of expertise
                        developed through years of hands-on experience.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-left">
                    {skills.map((group, idx) => (
                        <Reveal delay={0.2 + idx * 0.1} key={group.title}>
                            <SkillGroup
                                title={group.title}
                                icon={group.icon}
                                items={group.items}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
