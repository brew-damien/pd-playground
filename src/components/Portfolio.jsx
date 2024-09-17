import React, { useState } from 'react';
import danishF16 from '../images/photos/ln_f35.jpg';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const cardData = [
    {
        title: 'Featured Project 1',
        description: 'A brief description of the first featured project.',
        image: danishF16,
        tags: ['React', 'TailwindCSS', 'Node.js'],
    },
    {
        title: 'Featured Project 2',
        description: 'Description of the second featured project.',
        image: danishF16,
        tags: ['Vue.js', 'Express', 'MongoDB'],
    },
    {
        title: 'Featured Project 3',
        description: 'Short description for the third project.',
        image: danishF16,
        tags: ['Angular', 'Firebase', 'TypeScript'],
    },
    {
        title: 'Featured Project 4',
        description: 'Description for the fourth featured project.',
        image: logo,
        tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    },
    {
        title: 'Featured Project 5',
        description: 'Brief overview of the fifth project.',
        image: logo,
        tags: ['Svelte', 'Supabase', 'TailwindCSS'],
    }
];

const Portfolio = () => {
    const [lightboxImage, setLightboxImage] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = (imageSrc) => {
        setLightboxImage(imageSrc);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setLightboxImage(null);
    };

    return (
        <div className="bg-gray-800 py-24">
            <div className="container mx-auto px-8">
                <h1 className="text-white text-6xl font-bold text-center pb-12">Portfolio</h1>
                <div className="grid grid-cols-3 gap-2 text-center mx-auto">
                    {cardData.map((card, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <div className="bg-gradient-to-b from-green-500 to-red-500 rounded-2xl p-1.5 h-full w-full">
                                <div className="relative bg-black rounded-xl h-full w-full flex flex-col items-center justify-center">
                                    <p className="absolute bg-black/70 top-0 w-full text-white text-xl font-bold rounded-t-xl py-2">{card.title}</p>
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="p-1 rounded-xl cursor-pointer w-full h-full"
                                            src={card.image}
                                            alt={card.title}
                                            onClick={() => openLightbox(card.image)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-8"
                    onClick={closeLightbox}
                >
                    <div className="relative flex">
                        <div className="relative">
                            <img
                                src={lightboxImage}
                                alt={`Enlarged view of portfolio item`}
                                className="max-h-[calc(100vh-96px)] w-auto rounded-l-lg"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <button
                                className="absolute top-0 right-0 pt-2 pr-2 bg-black/50 p-3 rounded-bl-lg group/close-focus"
                                onClick={closeLightbox}
                            >
                                <svg className="size-12 group/close-button duration-300 fill-gray-400 hover:rotate-90 hover:fill-gray-200 group-focus/close-focus:fill-gray-200 rounded-full" viewBox="0 0 512 512">
                                    <path d="M256,0C114.84,0,0,114.842,0,256s114.84,256,256,256s256-114.842,256-256S397.16,0,256,0z M256,462.452 c-113.837,0-206.452-92.614-206.452-206.452S142.163,49.548,256,49.548S462.452,142.163,462.452,256S369.837,462.452,256,462.452z" />
                                    <polygon className="group-hover/close-button:fill-red-500" points="355.269,191.767 320.233,156.731 256,220.964 191.767,156.731 156.731,191.767 220.964,256 156.731,320.233 191.767,355.269 256,291.036 320.233,355.269 355.269,320.233 291.036,256" />
                                </svg>
                            </button>
                            <button
                                className="absolute top-1/2 -translate-y-1/2 right-0 bg-black/50 py-3 rounded-l-lg group/expand"
                                onClick={closeLightbox}
                            >
                                <svg className="stroke-gray-400 group-hover/expand:stroke-gray-200 size-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={(e) => e.stopPropagation()}>
                                    <path d="M9 6L15 12L9 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="bg-white text-black p-8 rounded-r-lg w-[700px]" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-4xl font-semibold pb-4">Danish F-16: E-006</h2>
                            <div className="flex flex-wrap gap-2 pb-8">
                                <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">General Dynamics</span>
                                <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">Danish</span>
                                <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">F-16</span>
                                <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">England</span>
                                <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">Canon R7</span>
                                <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">RAW</span>
                            </div>
                            <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>


                        <Link
                            to={`${encodeURIComponent(lightboxImage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-200 hover:underline focus:text-gray-200 focus:underline absolute bottom-0 left-0 px-3 py-2 bg-black/50 rounded-tr-lg rounded-bl-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Open image in new tab
                            <span className="sr-only">(opens in a new tab)</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
