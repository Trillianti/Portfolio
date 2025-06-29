'use client';

import { FaCode, FaNetworkWired, FaServer } from 'react-icons/fa';
import CertificateCard from '../ui/CertificateCard';
import Reveal from '@/components/ui/Reveal';

const certificatesData = [
    {
        title: 'Introduction to Back-End Development',
        provider: 'Coursera – Meta',
        link: 'https://www.coursera.org/account/accomplishments/verify/06BKTPBT5875',
        gradient: 'from-green-400 to-emerald-500',
        icon: <FaServer className="text-white text-xl" />,
    },
    {
        title: 'Object Oriented Programming in JavaScript',
        provider: 'Coddy.tech',
        link: 'https://coddy.tech/certifications/WB7lip-VnvzFX',
        gradient: 'from-yellow-400 to-orange-500',
        icon: <FaCode className="text-white text-xl" />,
    },
    {
        title: 'JavaScript (Intermediate) Certificate',
        provider: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/4e572f857b2b',
        gradient: 'from-yellow-400 to-orange-500',
        icon: <FaCode className="text-white text-xl" />,
    },
    {
        title: 'Rest API (Intermediate) Certificate',
        provider: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/395b7c3874f2',
        gradient: 'from-blue-500 to-indigo-600',

        icon: <FaNetworkWired className="text-white text-xl" />, // ← или любую другую из списка
    },
];

const Certificates = () => {
    return (
        <section
            id="certificates"
            className="relative z-10 bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-24 min-h-screen flex justify-center items-center"
        >
            <div className="container mx-auto px-6 text-center">
                <Reveal>
                    <h3 className="text-5xl font-bold text-white mb-6 tracking-tight border-b-4 border-gradient-to-r from-green-400 to-blue-500 inline-block pb-2">
                        Certificates
                    </h3>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-gray-300 mb-14 max-w-2xl mx-auto text-lg leading-relaxed">
                        Verified achievements reflecting my growth,
                        specialization, and ongoing passion for mastering modern
                        technologies.
                    </p>
                </Reveal>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
                    {certificatesData.map((cert, idx) => (
                        <Reveal key={idx} delay={0.2 + idx * 0.1}>
                            <CertificateCard {...cert} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
