import React, { useState, useEffect } from 'react';

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
        <section className="py-24 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-8">
                <div className="flex flex-col items-center text-center uppercase">
                    <div className="">
                        <h1 className="text-animation m-0 font-black text-black/0 bg-repeat bg-clip-text bg-[url('./images/bg.jpg')] lg:text-[110px]" aria-label="Personal">Personal</h1>
                    </div>
                    <div className="font-black text-black/0 bg-repeat bg-clip-text bg-cover bg-[url('./images/gradient.jpg')]">
                        <h2 className="text-[110px] font-black text-black/0 bg-clip-text" aria-label="Development">Development</h2>
                    </div>
                    <h1
                        className="backgroundPosition text-[110px] font-black text-black/0 bg-clip-text bg-[url('./images/gradient-2.jpg')] bg-cover"
                        style={{
                            backgroundPosition: `center ${offset * -0.5}px`,
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
