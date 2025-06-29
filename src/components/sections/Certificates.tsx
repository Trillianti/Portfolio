import { FaCode, FaServer } from 'react-icons/fa';
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
];

const Certificates = () => {
    return (
        <section
            id="certificates"
            className="bg-[#1E293B] py-24 h-screen flex justify-center items-center snap-start"
        >
            <div className="container mx-auto px-6 text-center">
                <Reveal>
                    <h3 className="text-4xl font-extrabold text-white mb-4 tracking-tight border-b-4 border-blue-500 inline-block pb-2">
                        Certificates
                    </h3>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                        Verified achievements that reflect my growth,
                        specialization, and continuous passion for learning.
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
