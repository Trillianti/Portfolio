'use client';

import React from 'react';

interface SkillGroupCardProps {
    title: string;
    icon: React.ReactNode;
    items: string[];
}

const SkillGroupCard: React.FC<SkillGroupCardProps> = ({
    title,
    icon,
    items,
}) => {
    return (
        <div className="group relative bg-[#1E293B] rounded-2xl p-6 border border-blue-600/30 shadow-md hover:shadow-blue-400/30 hover:-translate-y-1 transition-all duration-300">
            {/* Градієнтний бордер-підсвітка */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-blue-500/40 group-hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.25)] transition-all duration-500" />

            {/* Заголовок + іконка */}
            <div className="flex items-center gap-3 mb-4 z-10 relative">
                <div className="bg-gradient-to-tr from-blue-500 via-purple-600 to-indigo-500 p-3 rounded-full shadow-lg shadow-blue-500/30 text-white text-xl">
                    {icon}
                </div>
                <h4 className="text-lg font-semibold text-white">{title}</h4>
            </div>

            {/* Список скілів */}
            <ul className="list-disc list-inside text-blue-200 space-y-1 z-10 relative">
                {items.map((item) => (
                    <li
                        key={item}
                        className="transition-colors duration-200 group-hover:text-white"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillGroupCard;
