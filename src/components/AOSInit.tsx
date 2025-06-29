'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 120,
        });
    }, []);

    return null;
}
