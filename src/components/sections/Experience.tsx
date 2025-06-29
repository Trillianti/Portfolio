'use client';
import Reveal from '@/components/ui/Reveal';

const experiences = [
    {
        title: 'DebetPro',
        company: 'software developer',
        location: 'Ukraine',
        period: '2024 – now',
        description: 'Business applications development ',
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-[#0F172A] py-28 px-4 sm:px-6 min-h-screen flex justify-center items-center relative"
        >
            <div className="container mx-auto max-w-5xl text-center">
                <Reveal>
                    <h3 className="text-5xl font-bold text-white mb-4 tracking-tight border-b-4 border-gradient-to-r from-blue-400 to-purple-500 inline-block pb-2">
                        Experience
                    </h3>
                </Reveal>

                <div className="relative flex flex-col items-center">
                    {/* Центр. линия */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 animate-pulse" />

                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <Reveal key={index} delay={index * 0.2}>
                                <div className="relative sm:min-w-[600px] mb-20 flex flex-col sm:flex-row items-center min-h-[180px]">
                                    {/* Точка */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-tr from-blue-400 via-purple-500 to-indigo-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full shadow-lg border-4 border-[#0F172A] z-10" />

                                    {/* Карточка */}
                                    <div
                                        className={`bg-[#1E293B] border border-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-6 w-[90%] sm:w-[45%] transition-all duration-300 hover:scale-[1.015] ${
                                            isLeft
                                                ? 'sm:mr-auto sm:ml-0 sm:text-left'
                                                : 'sm:ml-auto sm:mr-0 sm:text-left'
                                        } text-center sm:text-left flex flex-col justify-center`}
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
                                        <p className="text-sm text-gray-300 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
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
