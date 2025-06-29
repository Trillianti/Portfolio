'use client';
import React from 'react';

type CertificateCardProps = {
    title: string;
    provider: string;
    link: string;
    icon: React.ReactNode;
    gradient: string;
};

const CertificateCard = ({
    title,
    provider,
    link,
    icon,
    gradient,
}: CertificateCardProps) => {
    return (
        <div className="bg-[#1E293B] p-6 rounded-2xl border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-5">
                <div
                    className={`p-3 rounded-full bg-gradient-to-br ${gradient}`}
                >
                    {icon}
                </div>
                <div>
                    <h4 className="text-white text-lg font-semibold">
                        {title}
                    </h4>
                    <p className="text-sm text-gray-400 italic">{provider}</p>
                </div>
            </div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
            >
                View Certificate
            </a>
        </div>
    );
};

export default CertificateCard;
