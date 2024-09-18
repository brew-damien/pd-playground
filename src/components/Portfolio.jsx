import React, { useState, useEffect } from 'react';

const Portfolio = () => {
    const [instagramData, setInstagramData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [lightboxData, setLightboxData] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        const fetchInstagramData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN);
                const data = await response.json();
                setInstagramData(data.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchInstagramData();
    }, []);

    const extractHashtags = (caption) => {
        const hashtagPattern = /#\w+/g;
        const hashtags = caption.match(hashtagPattern) || [];
        const cleanedCaption = caption.replace(hashtagPattern, '').trim();
        return { cleanedCaption, hashtags };
    };

    const openLightbox = (post) => {
        const { cleanedCaption, hashtags } = extractHashtags(post.caption || '');
        setLightboxImage(post.media_url);
        setLightboxData({
            ...post,
            caption: cleanedCaption,
            hashtags
        });
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setLightboxImage(null);
        setLightboxData(null);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="bg-gray-800 py-24">
            <div className="container mx-auto px-8">
                <h1 className="text-white text-6xl font-bold text-center pb-12">Instagram Portfolio</h1>

                {/* Grid for Instagram Posts */}
                <div className="grid grid-cols-3 gap-2 text-center mx-auto">
                    {instagramData.map((post, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <div
                                className="relative rounded-2xl p-1.5 h-full w-full"
                                style={{
                                    background: 'linear-gradient(to bottom left, #515BD4, #8134AF, #DD2A7B, #FEDA77, #F58529)',
                                    borderRadius: '1rem'
                                }}
                            >
                                <div className="relative bg-black rounded-xl h-full w-full flex flex-col items-center justify-center">
                                    <p className="absolute bg-black/70 top-0 w-full text-white text-xl font-bold rounded-t-xl py-2">
                                        {extractHashtags(post.caption || '').cleanedCaption || 'Instagram Post'}
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="p-1 rounded-xl cursor-pointer w-full h-full"
                                            src={post.media_url}
                                            alt={post.caption || 'Instagram Image'}
                                            onClick={() => openLightbox(post)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white p-4 rounded-lg mt-12">
                    <h2 className="text-2xl font-bold mb-4">Raw Instagram Data (Temporary)</h2>
                    <pre className="text-xs text-left">{JSON.stringify(instagramData, null, 2)}</pre>
                </div>
            </div>
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-8"
                    onClick={closeLightbox}
                >
                    <div className="flex bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <a href={lightboxData?.permalink}>
                            <img
                                src={lightboxImage}
                                alt="Enlarged view"
                                className="max-h-[calc(100vh-96px)] w-auto rounded-l-lg"
                            />
                        </a>
                        <div className="bg-white text-black p-8 w-[700px] flex flex-col justify-between">
                            <div>
                                <h2 className="text-4xl font-semibold pb-4">{lightboxData?.caption || 'No Caption'}</h2>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {lightboxData?.hashtags.map((hashtag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                                        >
                                            {hashtag}
                                        </span>
                                    ))}
                                </div>

                                <p className="pb-4">@{lightboxData?.username || 'No Username'}</p>
                            </div>
                        </div>
                        <button
                            className="absolute top-0 right-0 pt-2 pr-2 bg-black/50 p-3 rounded-bl-lg"
                            onClick={closeLightbox}
                        >
                            <svg className="fill-gray-400 hover:fill-gray-200" viewBox="0 0 512 512">
                                <path d="M256,0C114.84,0,0,114.842,0,256s114.84,256,256,256s256-114.842,256-256S397.16,0,256,0z M256,462.452 c-113.837,0-206.452-92.614-206.452-206.452S142.163,49.548,256,49.548S462.452,142.163,462.452,256S369.837,462.452,256,462.452z" />
                                <polygon points="355.269,191.767 320.233,156.731 256,220.964 191.767,156.731 156.731,191.767 220.964,256 156.731,320.233 191.767,355.269 256,291.036 320.233,355.269 355.269,320.233 291.036,256" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
