"use client";

import { useEffect, useState } from 'react';

export default function Loader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const onLoad = () => setVisible(false);
        if (document.readyState === 'complete') {
            setVisible(false);
            return;
        }
        window.addEventListener('load', onLoad, { once: true });

        const fallback = window.setTimeout(() => setVisible(false), 2000);

        return () => {
            window.removeEventListener('load', onLoad);
            clearTimeout(fallback);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className="preloader">
            <div className="preloader-inner">
                <div className="simple-spinner" aria-hidden="true"></div>
            </div>
        </div>
    );
}
