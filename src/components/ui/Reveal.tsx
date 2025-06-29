'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '0px 0px -100px 0px',
    });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay }}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            {children}
        </motion.div>
    );
}
