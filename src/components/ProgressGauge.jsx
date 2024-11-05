import React, { useEffect, useRef } from 'react';
import { animateElement, updateTextContent, updateProgressCircle, setupIntersectionObserver } from '../index.js';

const ProgressGauge = ({ endValue }) => {
    const gaugeRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        function animateProgressCircle(element, endValue) {
            const duration = endValue * 30;
            const circumference = 2 * Math.PI * 42;
            element.style.strokeDasharray = `${circumference}`;
            element.style.strokeDashoffset = `${circumference}`;
            animateElement(element, endValue, duration, updateProgressCircle);
        }

        function animateTextContent(element, endValue) {
            const duration = endValue * 30;
            animateElement(element, endValue, duration, updateTextContent);
        }

        setupIntersectionObserver('[data-progress-gauge]', [gaugeRef.current], (container) => {
            const progressCircle = container.querySelector('#progress-circle');
            const countElement = textRef.current;
            if (progressCircle && !isNaN(endValue)) {
                animateProgressCircle(progressCircle, endValue);
                if (countElement) {
                    animateTextContent(countElement, endValue);
                }
            }
        });
    }, [endValue]);

    return (
        <div data-progress-gauge={endValue} ref={gaugeRef} className="relative w-24 h-24">
            <svg className="w-full h-full">
                <circle cx="50%" cy="50%" r="42" strokeWidth="8" stroke="#E5E7EB" fill="transparent" />
                <circle
                    id="progress-circle"
                    cx="50%"
                    cy="50%"
                    r="42"
                    strokeWidth="8"
                    stroke="#027d95"
                    fill="transparent"
                    strokeDasharray="0"
                    strokeDashoffset="0"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                />
            </svg>
            <div ref={textRef} className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                0%
            </div>
        </div>
    );
};

export default ProgressGauge;
