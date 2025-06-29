import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-gray-400 pt-10 pb-6 mt-20 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-70" />

            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-center md:text-left">
                    © {new Date().getFullYear()} Dmytro Shatokhin — All rights
                    reserved.
                </p>

                <div className="flex gap-6 text-white text-2xl">
                    <a
                        href="https://t.me/trillianti"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-300 hover:scale-110"
                    >
                        <FaTelegramPlane />
                    </a>
                    <a
                        href="https://github.com/trillianti"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-300 hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/dimshat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-300 hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
