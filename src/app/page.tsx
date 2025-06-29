'use client';

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Certificates from '@/components/sections/Certificates';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Experience from '@/components/sections/Experience';
import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main
            className="h-screen overflow-y-scroll scroll-smooth bg-[#0F172A] text-white font-sans 
            md:snap-y md:snap-mandatory"
        >
            <Header />
            <section className="md:snap-start  ">
                <Hero />
            </section>
            <section className="md:snap-start  ">
                <About />
            </section>
            <section className="md:snap-start  ">
                <Experience />
            </section>
            <section className="md:snap-start  ">
                <Skills />
            </section>
            <section className="md:snap-start  ">
                <Certificates />
            </section>
            <section className="md:snap-start  ">
                <Projects />
            </section>
            <section className="md:snap-start  ">
                <Contact />
            </section>
            <Footer />
        </main>
    );
}
