import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Bubbles = () => {
    const bubbleCount = 50;
    const swayTypes = ["sway-left-to-right", "sway-right-to-left"];

    const createBubble = useCallback(() => ({
        id: uuidv4(),
        leftOffset: `${Math.floor(Math.random() * 100)}%`,
        radius: `${Math.floor(Math.random() * 10) + 1}vw`,
        floatDuration: `${Math.floor(Math.random() * 6) + 6}s`,
        swayDuration: `${Math.floor(Math.random() * 2) + 4}s`,
        floatDelay: `${Math.floor(Math.random() * 4)}s`,
        swayDelay: `${Math.floor(Math.random() * 4)}s`,
        swayType: swayTypes[Math.floor(Math.random() * 2)],
        isVisible: true
    }), []);

    const [bubbles, setBubbles] = useState(() =>
        Array.from({ length: bubbleCount }, createBubble)
    );

    const handleClick = (id) => {
        setBubbles(prevBubbles =>
            prevBubbles.map(bubble =>
                bubble.id === id ? { ...bubble, isVisible: false } : bubble
            )
        );

        setTimeout(() => {
            setBubbles(prevBubbles =>
                prevBubbles.map(bubble =>
                    bubble.id === id ? createBubble() : bubble
                )
            );
        }, 100);
    };

    return (
        <div className="bubbles">
            {bubbles.map(({ id, leftOffset, radius, floatDuration, swayDuration, floatDelay, swayDelay, swayType, isVisible }) => (
                <div
                    key={id}
                    className={`bubble ${isVisible ? '' : 'hidden'}`}
                    style={{
                        '--bubble-left-offset': leftOffset,
                        '--bubble-radius': radius,
                        '--bubble-float-duration': floatDuration,
                        '--bubble-sway-duration': swayDuration,
                        '--bubble-float-delay': floatDelay,
                        '--bubble-sway-delay': swayDelay,
                        '--bubble-sway-type': swayType
                    }}
                    onClick={() => handleClick(id)}
                    aria-label="Pop bubble"
                ></div>
            ))}
        </div>
    );
};

export default Bubbles;