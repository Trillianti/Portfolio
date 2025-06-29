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
        <div className="bg-[#1E293B] rounded-xl p-6 border border-white/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/10 p-3 rounded-full">{icon}</div>
                <h4 className="text-lg font-semibold text-white">{title}</h4>
            </div>
            <ul className="list-disc list-inside text-blue-300 space-y-1">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillGroupCard;
