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
        <div className="relative group bg-[#0F172A] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500 hover:shadow-blue-500/20 shadow-lg">
            <div className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} mb-5`}
                >
                    {icon}
                </div>

                {/* Title and provider */}
                <div className="flex-1">
                    <h4 className="text-white text-xl font-semibold leading-snug mb-1">
                        {title}
                    </h4>
                    <p className="text-sm text-gray-400 italic">{provider}</p>
                </div>

                {/* CTA button */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-500 group-hover:text-white transition"
                >
                    <span className="relative z-10 px-4 py-2 bg-blue-500/10 group-hover:bg-blue-600 rounded-lg transition-all duration-300 group-hover:shadow-md">
                        View Certificate →
                    </span>
                </a>
            </div>

            {/* subtle gradient ring on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 blur-2xl transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};

export default CertificateCard;
