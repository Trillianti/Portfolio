import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1E293B] text-gray-400 py-6 text-sm text-center mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-4">
                <p className="mb-2 md:mb-0">
                    © {new Date().getFullYear()} Dmytro Shatokhin. All rights
                    reserved.
                </p>
                <div className="flex gap-4 text-white text-xl">
                    <a
                        href="https://t.me/trillianti"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTelegramPlane className="hover:text-blue-400 transition" />
                    </a>
                    <a
                        href="https://github.com/trillianti"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="hover:text-blue-400 transition" />
                    </a>
                    <a
                        href="https://linkedin.com/in/dimshat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="hover:text-blue-400 transition" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
