'use client';
import Reveal from '@/components/ui/Reveal';

const experiences = [
    {
        title: 'DebetPro',
        company: 'Self-employed',
        location: 'Ukraine',
        period: '2024 – now',
        description: 'Business applications development',
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-[#0F172A] py-32 px-4 sm:px-6 relative"
        >
            <div className="container mx-auto max-w-6xl">
                <Reveal>
                    <h3 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 mb-20">
                        Experience
                    </h3>
                </Reveal>

                <div className="relative flex flex-col items-center">
                    {/* Animated central line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 animate-pulse" />

                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <Reveal key={index} delay={index * 0.2}>
                                <div
                                    className={`relative w-full mb-24 flex flex-col sm:flex-row items-center ${
                                        isLeft
                                            ? 'sm:justify-start'
                                            : 'sm:justify-end'
                                    }`}
                                >
                                    {/* Card */}
                                    <div
                                        className={`bg-[#1E293B] border border-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 w-full sm:w-[45%] transition-all duration-300 hover:scale-[1.015] ${
                                            isLeft
                                                ? 'sm:mr-auto text-left'
                                                : 'sm:ml-auto text-left'
                                        }`}
                                    >
                                        <h4 className="text-xl font-bold text-white mb-1">
                                            {exp.title}
                                        </h4>
                                        <div className="text-sm text-blue-400 mb-1">
                                            {exp.company} • {exp.location}
                                        </div>
                                        <div className="text-xs italic text-gray-400 mb-3">
                                            {exp.period}
                                        </div>
                                        <p className="text-sm text-gray-300">
                                            {exp.description}
                                        </p>
                                    </div>

                                    {/* Dot in center */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-tr from-blue-400 via-purple-500 to-indigo-500 w-6 h-6 rounded-full shadow-lg border-4 border-[#0F172A] z-10" />
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
