'use client';

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Certificates from '@/components/sections/Certificates';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-[#0F172A] text-white font-sans snap-y snap-mandatory snap-always overflow-y-scroll h-screen scroll-smooth">
            <Header />
            <section className="snap-start">
                <Hero />
            </section>
            <section className="snap-start">
                <About />
            </section>
            <section className="snap-start">
                <Skills />
            </section>
            <section className="snap-start">
                <Certificates />
            </section>
            <section className="snap-start">
                <Projects />
            </section>
            <section className="snap-start">
                <Contact />
            </section>
            <Footer />
        </main>
    );
}
