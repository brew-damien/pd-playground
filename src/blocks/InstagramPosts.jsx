import { algoliasearch } from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, RefinementList, Pagination } from 'react-instantsearch';
import React, { useState } from 'react';
import profilePicture from '../images/photos/pfp.jpg';
import CommentBox from '../blocks/CommentBox';

const algoliaAppId = 'AOHLP8T79N';
const algoliaApiKey = '0545f6263e9f962d87ec7c2b112cbe16';
const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);

export default function InstagramPosts() {

    const [lightboxImage, setLightboxImage] = useState(null);
    const [lightboxData, setLightboxData] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isRightSectionVisible, setIsRightSectionVisible] = useState(true);

    const extractHashtags = (caption) => {
        const hashtagPattern = /#\w+/g;
        const hashtags = (caption.match(hashtagPattern) || []).map(tag => tag.replace('#', ''));
        const cleanedCaption = caption.replace(hashtagPattern, '').trim();
        return { cleanedCaption, hashtags };
    };

    const openLightbox = (hit) => {
        const { cleanedCaption, hashtags } = extractHashtags(hit.caption || '');
        setLightboxImage(hit.media_url);
        setLightboxData({
            ...hit,
            caption: cleanedCaption,
            hashtags,
            userProfilePicture: hit.user?.profile_picture_url || profilePicture,
        });
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setLightboxImage(null);
        setLightboxData(null);
    };

    const toggleRightSection = () => {
        setIsRightSectionVisible(!isRightSectionVisible);
    };

    function Hit({ hit }) {
        const { cleanedCaption } = extractHashtags(hit.caption || '');

        return (
            <div className="flex items-center justify-center group">
                <div className="rounded-xl p-1.5 h-full w-full instagram-logo z-20">
                    <div className="relative bg-black rounded-lg w-full flex flex-col items-center justify-between h-full z-20">
                        <div className="group-hover:block absolute z-10 -translate-y-[200%] group-hover:translate-y-0 duration-200 w-full">
                            <p className="text-2xl font-semibold text-white bg-black/50 rounded-t-lg z-10">
                                <h2 className="font-semibold text-2xl py-4 text-center">
                                    {cleanedCaption}
                                </h2>
                            </p>
                        </div>
                        <div className="flex items-center m-1 overflow-hidden rounded-lg">
                            <img
                                src={hit.media_url}
                                alt={hit.name || 'Instagram Image'}
                                className="cursor-pointer aspect-square object-cover duration-200 transform origin-center group-hover:scale-[105%]"
                                onClick={() => openLightbox(hit)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black py-24">
            <div className="container mx-auto text-white">
                <InstantSearch searchClient={searchClient} indexName="index">
                    <h1 className="text-5xl text-center font-semibold pb-16">My photography portfolio</h1>
                    <div className="">
                        <SearchBox className="px-2 rounded-full mx-auto mb-16" placeholder="Search..." />
                    </div>
                    <RefinementList attribute="objectId" />
                    <Hits hitComponent={Hit} />
                    <Pagination className="pt-8" />
                </InstantSearch>

                {isLightboxOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-8"
                        onClick={closeLightbox}
                    >
                        <div className="relative flex bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <div className="relative flex">
                                <a href={lightboxData?.permalink} className="">
                                    <img
                                        src={lightboxImage}
                                        alt="Enlarged view"
                                        className="max-h-[calc(100vh-96px)] max-w-full rounded-l-lg"
                                    />
                                </a>
                                <button
                                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-l-lg h-[80px] z-50"
                                    onClick={toggleRightSection}
                                >
                                    {isRightSectionVisible ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {isRightSectionVisible && (
                                <div className="bg-white text-black p-8 w-[700px] flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-4xl font-semibold pb-4">{lightboxData?.caption || 'No Caption'}</h2>
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {lightboxData?.hashtags?.map((hashtag, index) => (
                                                <a
                                                    key={index}
                                                    href={`https://www.instagram.com/explore/tags/${hashtag}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full">
                                                        {hashtag}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                        <div>
                                            <a
                                                href={`https://www.instagram.com/${lightboxData?.username}`}
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline inline-flex items-center"
                                            >
                                                <img
                                                    src={lightboxData?.userProfilePicture || profilePicture}
                                                    alt={`${lightboxData?.username || 'Instagram User'}'s profile`}
                                                    className="w-10 h-10 rounded-full mr-1"
                                                />
                                                <p className="text-lg">@{lightboxData?.username || 'No Username'}</p>
                                            </a>
                                        </div>
                                        <div className="absolute bottom-0 w-[550px] mb-8">
                                            <CommentBox />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
