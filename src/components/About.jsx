import React from 'react';
import PropTypes from 'prop-types';
import Bubbles from './Bubbles';
import Button from './Button';

const About = ({ label1, label2 }) => {
    return (
        <div className="relative bg-gray-800 text-white">
            <div className="absolute inset-0">
                <Bubbles />
            </div>
            <div className="relative">
                <div className="container mx-auto py-24 px-8">
                    <div className="flex flex-col z-40 w-max mx-auto">
                        <h1 className="text-7xl font-bold mb-10 text-center z-40">What is this page?</h1>
                        <p className="text-xl max-w-2xl mx-auto text-center mb-10 z-40">
                            This is going to be a page where I add all the hover effects and animations I have enjoyed creating, as well as adding in new animations and features.
                        </p>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md z-40">
                            <Button
                                type="button"
                                label={label1}
                                aria-label={`About action: ${label1}`}
                            />
                            <Button
                                type="button"
                                label={label2}
                                aria-label={`About action: ${label2}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Prop types for About component
About.propTypes = {
    label1: PropTypes.string,
    label2: PropTypes.string,
};

export default About;