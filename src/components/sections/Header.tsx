import Link from 'next/link';

const Header = () => {
    return (
        <header
            className="fixed top-0 left-0 w-full z-50 bg-[#1E293B]/40 backdrop-blur-md border-b border-white/10 shadow-sm"
            data-aos="fade-up"
        >
            <div className="container mx-auto flex justify-between items-center px-8 py-6">
                <h1 className="text-xl font-bold tracking-wide text-white hover:text-blue-400 transition">
                    Dmytro Shatokhin
                </h1>
                <nav className="space-x-6 text-sm text-gray-300">
                    <Link href="#" className="hover:text-white transition">
                        home
                    </Link>
                    <Link href="#about" className="hover:text-white transition">
                        about
                    </Link>
                    <Link
                        href="#skills"
                        className="hover:text-white transition"
                    >
                        skills
                    </Link>
                    <Link
                        href="#certificates"
                        className="hover:text-white transition"
                    >
                        certificates
                    </Link>
                    <Link
                        href="#projects"
                        className="hover:text-white transition"
                    >
                        projects
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-white transition"
                    >
                        contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
