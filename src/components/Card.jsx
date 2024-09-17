import React, { useEffect, useState, useRef } from 'react';
import EXIF from 'exif-js';
import { Link } from 'react-router-dom';
import danish_f16 from '../images/photos/danish_f16.jpg';
import turkish_f16 from '../images/photos/turkish_f16.jpg';
import sk_c130 from '../images/photos/sk_c130.jpg';
import f35 from '../images/photos/ln_f35.jpg';
import rc135 from '../images/photos/mildenhall_rc135u.jpg';
import watermark_turkish_f16 from '../images/watermark_photos/watermark_turkish_f16.jpg';
import watermark_danish_f16 from '../images/watermark_photos/watermark_danish_f16.jpg';
import watermark_ln_f35 from '../images/watermark_photos/watermark_ln_f35.jpg';
import watermark_sk_c130 from '../images/watermark_photos/watermark_sk_c130.jpg';
import watermark_rc135u from '../images/watermark_photos/watermark_rc135u.jpg';

const Card = () => {
    const [exifData, setExifData] = useState({});
    const [showExif, setShowExif] = useState({});
    const [lightboxImage, setLightboxImage] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const closeButtonRef = useRef(null);
    const prevFocusedElementRef = useRef(null);

    useEffect(() => {
        document.documentElement.classList.toggle('overflow-hidden', isLightboxOpen);

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeLightbox();
            }
        };

        if (isLightboxOpen) {
            prevFocusedElementRef.current = document.activeElement;
            closeButtonRef.current?.focus();
            window.addEventListener('keydown', handleKeyDown);
        } else {
            prevFocusedElementRef.current?.focus();
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLightboxOpen]);

    const cardData = [
        {
            title: 'Konya Airport, Konya',
            paragraphs: [
                "Body: Canon 7D MK2",
                "Lens: Canon EF 70-300mm f4-5.6",
            ],
            image: turkish_f16,
            watermarkImage: watermark_turkish_f16,
            aperture: 'f8.0',
            iso: '200',
            shutterSpeed: '1/1000',
            focalLength: '300mm',
        },
        {
            title: 'RAF Fairford, Gloucester',
            paragraphs: [
                "Body: Canon R7 Mirrorless",
                "Lens: Canon RF 100-400mm f5.6-8",
            ],
            image: danish_f16,
            watermarkImage: watermark_danish_f16,
            aperture: 'f8.0',
            iso: '100',
            shutterSpeed: '1/1600',
            focalLength: '292mm',
        },
        {
            title: 'RAF Lakenheath, Suffolk',
            paragraphs: [
                "Body: Canon 7D MK2",
                "Lens: Canon EF 100-400mm f4.5-5.6",
            ],
            image: f35,
            watermarkImage: watermark_ln_f35,
            aperture: 'f8.0',
            iso: '100',
            shutterSpeed: '1/125',
            focalLength: '400mm',
        },
        {
            title: 'K-16 Air Base, Seongnam',
            paragraphs: [
                "Body: Canon 7D MK2",
                "Lens: Canon EF 100-400mm f4.5-5.6",
            ],
            image: sk_c130,
            watermarkImage: watermark_sk_c130,
            aperture: 'f8.0',
            iso: '100',
            shutterSpeed: '1/125',
            focalLength: '400mm',
        },
        {
            title: 'RAF Mildenhall, Suffolk',
            paragraphs: [
                "Body: Canon 7D MK2",
                "Lens: Canon EF 100-400mm f4.5-5.6",
            ],
            image: rc135,
            watermarkImage: watermark_rc135u,
            aperture: 'f8.0',
            iso: '100',
            shutterSpeed: '1/125',
            focalLength: '400mm',
        },
    ];

    const handleImageLoad = (image) => {
        EXIF.getData(image, function () {
            const allExifData = EXIF.getAllTags(this);
            setExifData((prevData) => ({
                ...prevData,
                [image.src]: allExifData,
            }));
        });
    };

    const handleToggleExif = (imageSrc) => {
        setShowExif((prevShowExif) => ({
            ...prevShowExif,
            [imageSrc]: !prevShowExif[imageSrc],
        }));
    };

    const openLightbox = (imageSrc) => {
        setLightboxImage(imageSrc);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setLightboxImage(null);
    };

    return (
        <section className="bg-gray-800 text-black">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 py-24">
                {cardData.map((card, index) => {
                    const isExifVisible = showExif[card.image];
                    return (
                        <div key={index} className={`relative flex flex-col justify-between group/card bg-white rounded-lg border border-gray-800 hover:border-[#027d95] hover:bg-black hover:text-white duration-200 shadow-lg overflow-hidden`}>
                            <div className="container mx-auto">
                                <div className="px-8 pt-8">
                                    <h2 className="text-xl font-bold mb-4">{card.title} &#128205;</h2>
                                    <ul className="regular-14 flex flex-col gap-4 text-gray-500 group-hover/card:text-gray-300 mb-4">
                                        {card.paragraphs.map((paragraph, index) => (
                                            <li key={index}>
                                                <p>{paragraph}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="relative overflow-hidden">
                                <button
                                    className="group/details absolute z-20 inline-flex bg-black/60 rounded-br-lg pr-2"
                                    onClick={() => handleToggleExif(card.image)}
                                    aria-label={`${isExifVisible ? 'Hide' : 'Show'} image details for ${card.title}`}
                                >
                                    <svg className="size-8 py-2" fill="none" viewBox="0 0 496.304 496.303">
                                        {isExifVisible ? (
                                            <g>
                                                <circle className="stroke-gray-400 group-hover/details:stroke-gray-200" cx="248.152" cy="248.152" r="223.152" strokeWidth="30" fill="transparent" />
                                                <path className="fill-gray-400 group-hover/details:fill-gray-200" d="M345.826,325.828c9.77,9.769,9.77,25.597,0,35.366c-9.769,9.769-25.597,9.769-35.366,0l-62.308-62.307l-62.308,62.307 c-9.769,9.769-25.597,9.769-35.366,0c-9.769-9.769-9.769-25.597,0-35.366l62.308-62.308l-62.308-62.308 c-9.769-9.769-9.769-25.597,0-35.366c9.769-9.769,25.597-9.769,35.366,0l62.308,62.308l62.308-62.308 c9.769-9.769,25.597-9.769,35.366,0c9.77,9.769,9.77,25.597,0,35.366l-62.308,62.308L345.826,325.828z" />
                                            </g>
                                        ) : (
                                            <g>
                                                <circle className="stroke-gray-400 group-hover/details:stroke-gray-200" cx="248.146" cy="248.152" r="223.152" strokeWidth="30" fill="transparent" />
                                                <path className="fill-gray-400 group-hover/details:fill-gray-200" d="M319.536,383.42v32.852c0,1.383-1.123,2.494-2.482,2.494H196.45c-1.374,0-2.482-1.117-2.482-2.494V383.42 c0-1.372,1.114-2.482,2.482-2.482h34.744V205.831h-35.101c-1.375,0-2.468-1.111-2.468-2.474v-33.6 c0-1.38,1.1-2.479,2.468-2.479h82.293c1.371,0,2.482,1.105,2.482,2.479v211.181h36.186c1.359,0,2.482,1.11,2.482,2.482z M209.93,105.927c0-20.895,16.929-37.829,37.829-37.829c20.886,0,37.826,16.935,37.826,37.829s-16.94,37.829-37.826,37.829 C226.853,143.756,209.93,126.822,209.93,105.927z" />
                                            </g>
                                        )}
                                    </svg>
                                    <span className="text-gray-400 group-hover/details:text-gray-200 my-auto">
                                        {isExifVisible ? 'Hide Details' : 'Show Details'}
                                    </span>
                                </button>
                                <button
                                    className="absolute right-0 z-20 inline-flex bg-black/60 rounded-bl-lg group/expand"
                                    onClick={() => openLightbox(card.image)}
                                    aria-label={`Expand ${card.title} image`}
                                >
                                    <svg className="size-8 py-2 stroke-gray-400 group-hover/expand:stroke-gray-200" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                                        <line x1="21" x2="14" y1="3" y2="10" /><line x1="3" x2="10" y1="21" y2="14" />
                                    </svg>
                                </button>
                                <img
                                    className="duration-300 transform origin-center group-hover/card:scale-105 cursor-pointer"
                                    src={card.image}
                                    alt={`Detailed view of ${card.title}`}
                                    onClick={() => openLightbox(card.image)}
                                    onLoad={(e) => handleImageLoad(e.target)}
                                />
                                <div
                                    className={`absolute inset-0 bg-black bg-opacity-70 p-4 z-10 transform transition-transform duration-500 ease-in-out ${isExifVisible ? 'translate-x-0' : '-translate-x-full'
                                        }`}
                                >
                                    <div className="flex justify-center">
                                        <div className="absolute p-8 w-full h-full top-0 flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-8 text-white">
                                                <div className="flex justify-center">
                                                    <div className="absolute p-8 w-full h-full top-0 flex items-center justify-center">
                                                        <div className="grid grid-cols-2 gap-8 text-white">
                                                            <div className={`inline-flex  ${isExifVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                                                                style={{ transition: `${isExifVisible ? 'opacity 1s ease-in-out 0.2s, transform 1s ease-in-out' : 'opacity 0s ease-in-out 0s, transform 0s ease-in-out'}` }}>
                                                                <svg className="size-10 fill-white my-auto mr-2" viewBox="0 0 32 32">
                                                                    <path d="M16 1.25c-8.146 0-14.75 6.604-14.75 14.75s6.604 14.75 14.75 14.75c8.146 0 14.75-6.604 14.75-14.75v0c-0.010-8.142-6.608-14.74-14.749-14.75h-0.001zM18.453 20.25h-4.907l-2.454-4.25 2.454-4.25h4.923l2.439 4.248zM20.198 11.75h8.34c0.451 1.272 0.712 2.74 0.712 4.268 0 2.788-0.868 5.374-2.349 7.501l0.028-0.043zM27.919 10.25h-13.506l4.181-7.242c4.137 0.858 7.512 3.548 9.29 7.164l0.035 0.078zM16 2.75c0.331 0 0.656 0.026 0.982 0.050l-6.755 11.701-4.172-7.226c2.433-2.777 5.985-4.522 9.945-4.524h0zM5.056 8.544l6.758 11.706h-8.353c-0.451-1.272-0.712-2.739-0.712-4.268 0-2.78 0.863-5.358 2.335-7.482l-0.029 0.044zM4.081 21.75h13.506l-4.18 7.242c-4.138-0.858-7.513-3.548-9.291-7.164l-0.035-0.078zM16 29.25c-0.331 0-0.656-0.026-0.982-0.050l6.754-11.697 4.157 7.241c-2.432 2.766-5.977 4.503-9.929 4.506h-0z"></path>
                                                                </svg>
                                                                <p className="my-auto">{card.aperture}</p>
                                                            </div>
                                                            <div className={`inline-flex  ${isExifVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                                                                style={{ transition: `${isExifVisible ? 'opacity 1s ease-in-out 0.5s, transform 1.3s ease-in-out' : 'opacity 0s ease-in-out 0s, transform 0s ease-in-out'}` }}>
                                                                <svg className="size-10 fill-white my-auto mr-2" viewBox="8 2 16 28" >
                                                                    <path d="M24,21H21a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v6A2,2,0,0,1,24,21Zm-3-8v6h3V13Z M15,21H10V19h5V17H12a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2h5v2H12v2h3a2,2,0,0,1,2,2v2A2,2,0,0,1,15,21Z M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,24V8H28V24Z M6,11H8V21H6Z" />
                                                                </svg>
                                                                <p className="my-auto">{card.iso}</p>
                                                            </div>
                                                            <div className={`inline-flex  ${isExifVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                                                                style={{ transition: `${isExifVisible ? 'opacity 1s ease-in-out 0.8s, transform 1.6s ease-in-out' : 'opacity 0s ease-in-out 0s, transform 0s ease-in-out'}` }}>
                                                                <svg className="size-10 stroke-white my-auto mr-2" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M12 9M21 6L19 4M10 2H14M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C20 17.4183 16.4183 21 12 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path className="fill-white" d="M298.197,210.197l-56,56c-0.086,0.086-0.16,0.178-0.241,0.266C238.805,264.89,235.255,264,231.5,264 c-12.958,0-23.5,10.542-23.5,23.5c0,3.755,0.89,7.305,2.463,10.456c-0.089,0.081-0.181,0.155-0.266,0.241l-16,16 c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197l16-16 c0.086-0.086,0.16-0.178,0.241-0.266c3.152,1.573,6.701,2.463,10.456,2.463c12.958,0,23.5-10.542,23.5-23.5 c0-3.755-0.89-7.305-2.463-10.456c0.089-0.081,0.181-0.155,0.266-0.241l56-56c2.929-2.929,2.929-7.678,0-10.606 C305.875,207.268,301.125,207.268,298.197,210.197z M231.5,296c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5 S236.187,296,231.5,296z" transform="scale(0.05) translate(8, -30)" strokeWidth="6" strokeLinecap="round" />
                                                                </svg>
                                                                <p className="my-auto">{card.shutterSpeed}</p>
                                                            </div>
                                                            <div className={`inline-flex  ${isExifVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                                                                style={{ transition: `${isExifVisible ? 'opacity 1s ease-in-out 1.1s, transform 2.1s ease-in-out' : 'opacity 0s ease-in-out 0s, transform 0s ease-in-out'}` }}>
                                                                <svg className="size-10 fill-white my-auto mr-2" viewBox="0 0 400 400">
                                                                    <path d="M320 25c-1 0-11 6-23 12l-28 15c-7 4-52 29-53 29l-18 10c-6 3-12 6-12 6-1 0-2 1-3 2-1 1-7 4-12 7-6 3-11 6-13 7-1 1-5 3-9 5-8 4-27 14-45 25-5 3-14 8-20 11-12 6-36 19-47 26-24 13-23 33 1 47 11 6 44 24 44 24 1 0 22 12 34 18 5 4 17 10 25 14 9 5 17 9 19 10 2 1 5 3 7 4 3 1 12 6 21 11 6 4 16 9 16 9 0 0 53 29 57 31 2 2 4 3 4 3 0 0 11 6 25 13 27 15 28 15 32 14 14-4 13-24 0-32l-4-2 1-3c15-35 25-65 28-85 5-32 7-62 4-81-6-40-12-64-27-99-6-17-6-15-1-17 16-9 11-36-6-31zm-19 58c34 69 34 163 0 234-6 12-5 12-13 8-3-2-11-6-18-10-7-3-15-7-17-8-3-2-34-19-45-24-3-2-3-2 0-6 24-31 24-119 0-152-3-5-4-4 7-9 12-6 32-17 37-20 6-4 41-22 42-22 0 0 3 4 5 9zm-118 61c15 26 16 82 1 112-4 7-5 7-10-3-15-28-14-84 2-110 3-4 4-4 7 1zm-48 19c-2 11-3 23-3 37s1 26 3 37c1 3 1 6 1 6-1 0-13-7-23-13-5-2-13-7-19-10-5-2-14-7-21-11l-11-6v-3-3l14-8c8-4 15-8 15-8 0 0 8-4 16-9 33-18 29-17 28-10z" />
                                                                </svg>
                                                                <p className="my-auto">{card.focalLength}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-8"
                    onClick={closeLightbox}
                >
                    <div className="relative">
                        <img
                            src={lightboxImage}
                            alt={`Enlarged view of ${lightboxImage}`}
                            className="max-w-full max-h-[calc(100vh-96px)] mx-auto"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="absolute top-0 right-0 pt-2 pr-2 bg-black/50 p-3 rounded-bl-lg group/close-focus"
                            onClick={closeLightbox}
                            ref={closeButtonRef}
                        >
                            <svg className="size-12 group/close-button  duration-300 fill-gray-400 hover:rotate-90 hover:fill-gray-200 group-focus/close-focus:fill-gray-200 rounded-full" viewBox="0 0 512 512">
                                <g>
                                    <path d="M256,0C114.84,0,0,114.842,0,256s114.84,256,256,256s256-114.842,256-256S397.16,0,256,0z M256,462.452 c-113.837,0-206.452-92.614-206.452-206.452S142.163,49.548,256,49.548S462.452,142.163,462.452,256S369.837,462.452,256,462.452z" />
                                    <polygon className="group-hover/close-button:fill-red-500 " points="355.269,191.767 320.233,156.731 256,220.964 191.767,156.731 156.731,191.767 220.964,256 156.731,320.233 191.767,355.269 256,291.036 320.233,355.269 355.269,320.233 291.036,256" />
                                </g>
                            </svg>
                        </button>
                        <Link
                            to={`${encodeURIComponent(lightboxImage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-200 hover:underline focus:text-gray-200 focus:underline absolute bottom-0 left-0 px-3 py-2 bg-black/50 rounded-tr-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Open in new tab
                            <span className="sr-only">(opens in a new tab)</span>
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Card;
