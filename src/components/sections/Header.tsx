'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#skills', label: 'skills' },
    { href: '#certificates', label: 'certificates' },
    { href: '#projects', label: 'projects' },
    { href: '#contact', label: 'contact' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                'bg-[#0F172A]/40 backdrop-blur-md border-b border-white/10 shadow-sm'
            )}
        >
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <Link
                    href="#home"
                    className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition"
                >
                    Dmytro Shatokhin
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden text-white">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    'md:hidden bg-[#1E293B]/90 backdrop-blur-md px-6 transition-all duration-300 ease-in-out',
                    menuOpen
                        ? 'max-h-96 py-4 opacity-100'
                        : 'max-h-0 py-0 opacity-0 overflow-hidden'
                )}
            >
                <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-300 hover:text-white py-2 text-base transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
