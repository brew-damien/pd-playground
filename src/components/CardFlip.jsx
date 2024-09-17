import React from 'react';
import Button from './Button';
import Brew from '../images/brew.png';
import DavidVitas from '../images/davidvitas.png';
import Spotify from '../images/spotify.png';
import MerchStore from '../images/merch-store.png';
import Snitch from '../images/snitch.png';

const CardFlip = () => {
    const teamMembers = [
        {
            logoImage: Brew,
            siteName: 'Brew Digital',
            techStack: 'Statmamic, Antlers & Tailwind',
            brandColor: '#ffcd4e',
            link: 'https://brewdigital.com/services',
        },
        {
            logoImage: DavidVitas,
            siteName: 'David Vitas',
            techStack: 'WordPress, PHP & Tailwind',
            brandColor: '#99b613',
            link: 'https://davidvitas.com',
        },
        {
            logoImage: Spotify,
            link: 'https://spotify-api-project.vercel.app/artist/0H39MdGGX6dbnnQPt6NQkZ',
            siteName: 'Personal Spotify Search',
            brandColor: '#1cd760',
            techStack: 'React & Tailwind',
        },
        {
            logoImage: MerchStore,
            link: 'https://store.theadaptavistgroup.com/',
            siteName: 'Adaptavist Merch Store',
            brandColor: '#000a27',
            techStack: 'React & Tailwind',
        },
        {
            logoImage: Snitch,
            link: '',
            siteName: 'Snitch',
            brandColor: '#2b2929',
            techStack: 'Next.js & Tempo API',
        },
    ];

    return (
        <section className="bg-gray-900 text-white">
            <div className="container mx-auto py-24 px-8">
                <h2 className="text-7xl font-bold mb-16 text-center">Previous projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flip">
                            <div className="card-wrapper aspect-square text-left" aria-label="team member card">

                                <div className="flip-card flip-content w-full h-full card-content" style={{ '--brand-color': member.brandColor }}>
                                    <img
                                        className="absolute flip-front max-h-[80%] max-w-[80%] object-cover top-0 left-0 right-0 bottom-0 m-auto"
                                        src={member.logoImage}
                                        loading="lazy"
                                        alt={`Logo for ${member.siteName}`}
                                    />
                                    <div
                                        style={{ transform: 'rotateY(180deg)' }}
                                        className="flip-back transform h-full w-full absolute"
                                    >
                                        <div className="w-full h-full team-member-card relative">
                                            <div className="p-4 flex flex-col w-full h-full left-0 z-20 absolute top-0">
                                                <p className="uppercase text-2xl font-extrabold">{member.siteName}</p>
                                                <p className="font-bold">{member.techStack}</p>
                                                <div className="mt-auto font-semibold w-max">
                                                    {member.link && (
                                                        <Button
                                                            href={member.link}
                                                            label="View Project"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="w-full h-full bg-black opacity-30 absolute z-10 rounded-2xl"></div>
                                            <div className="flex flex-col w-full h-full rounded-2xl" style={{ backgroundColor: member.brandColor }}>
                                                <img
                                                    src={member.logoImage}
                                                    alt={`${member.siteName} logo`}
                                                    loading="lazy"
                                                    className="absolute max-h-[80%] max-w-[80%] object-cover top-0 left-0 right-0 bottom-0 m-auto"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardFlip;
