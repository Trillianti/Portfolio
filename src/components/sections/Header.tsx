'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#1E293B]/40 backdrop-blur-md border-b border-white/10 shadow-sm">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-lg sm:text-xl font-bold tracking-wide text-white hover:text-blue-400 transition">
                    Dmytro Shatokhin
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm text-gray-300">
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

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-white">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Animated) */}
            <div
                className={clsx(
                    'md:hidden bg-[#1E293B] px-6 overflow-hidden transition-all duration-300 ease-in-out',
                    menuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
                )}
            >
                {[
                    { href: '#', label: 'home' },
                    { href: '#about', label: 'about' },
                    { href: '#skills', label: 'skills' },
                    { href: '#certificates', label: 'certificates' },
                    { href: '#projects', label: 'projects' },
                    { href: '#contact', label: 'contact' },
                ].map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-sm text-gray-300 hover:text-white transition"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </header>
    );
};

export default Header;
