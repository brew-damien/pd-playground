import React, { useState, useEffect } from 'react';
import Navbar from '../blocks/Navbar';
import Hero from '../blocks/Hero';
import About from '../blocks/About';
import CardFlip from '../blocks/CardFlip';
import AnimatedCard from '../blocks/AnimatedCard';
import ParagraphAndImage from '../blocks/ParagraphAndImage';
import Form from '../blocks/Form';
import Footer from '../blocks/Footer';

const Home = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [inputSequence, setInputSequence] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            setInputSequence((prev) => (prev + event.key).slice(-4));
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        if (inputSequence === 'flip') {
            setIsFlipped(!isFlipped);
            setInputSequence('');
        }
    }, [inputSequence]);

    return (
        <div
            className={`min-h-screen transition-transform duration-500 ease-in-out ${isFlipped ? 'flip-animation' : ''
                } ${isFlipped ? 'scale-x-[-1]' : ''}`}
        >
            <Navbar label="Log in" />
            <Hero />
            <About label1="About Me" label2="Contact" />
            <CardFlip />
            <AnimatedCard />
            <ParagraphAndImage />
            <Form />
            <Footer />
        </div>
    );
};

export default Home;


