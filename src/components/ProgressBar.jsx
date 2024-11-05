import React, { useEffect, useRef } from 'react';
import { animateElement, updateProgressBar, setupIntersectionObserver } from '../index.js';

const ProgressBar = ({ endValue }) => {
    const barContainerRef = useRef(null);
    const barRef = useRef(null);

    useEffect(() => {
        function animateProgressBar(element, endValue) {
            const duration = endValue * 30;
            animateElement(element, endValue, duration, updateProgressBar);
        }

        setupIntersectionObserver('[data-progress-bar]', [barContainerRef.current], (barContainer) => {
            const barElement = barRef.current;
            if (barElement && !isNaN(endValue)) {
                animateProgressBar(barElement, endValue);
            }
        });
    }, [endValue]);

    return (
        <div
            ref={barContainerRef}
            className="w-full h-8 bg-gray-300 rounded-full"
            data-progress-bar={endValue}
        >
            <div ref={barRef} className="bg-[#027d95] h-full w-0 rounded-full"></div>
        </div>
    );
};

export default ProgressBar;
