import React, { useState, useEffect } from 'react';
import Gradient2 from '../images/gradient-2.jpg';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="pt-44 pb-16 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-8 py-20">
                <div className="flex flex-col items-center text-center uppercase">
                    <div className="text-container">
                        <h1 className="md:text-7xl lg:text-9xl font-bold" aria-label="Personal">Personal</h1>
                    </div>
                    <div className="parallax-bg">
                        <h2 className="lg:text-9xl font-black text-black/0 bg-clip-text" aria-label="Development">Development</h2>
                    </div>
                    <h1
                        className="text-9xl font-black text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `url(${Gradient2})`,
                            backgroundPosition: `center ${offset * -0.5}px`,
                            backgroundSize: 'cover',
                            WebkitBackgroundClip: 'text',
                        }}
                        aria-label="Animation"
                    >
                        Animation
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
