import React, { useEffect, useState } from 'react'
import HeroImage from '../../assets/hero-image.png'
import './Hero.css'
import { HiDownload } from "react-icons/hi";

const Hero = () => {
    const fullText = "Front-End Developer";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (index < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[index]);
                setIndex(prev => prev + 1);
            }, 130);
        } else {
            // Reset typing effect after 3 seconds pause
            timeout = setTimeout(() => {
                setDisplayedText('');
                setIndex(0);
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div className="hero">
            <img src={HeroImage} alt="Profile" className="hero-image" />
            <h1 className="hero-title">
                I'm <span className="hero-highlight">Christos Tsopelas, </span>
                <span className="typewriter-text">{displayedText}<span className="cursor">|</span></span>
            </h1>
            <p className="hero-subtitle">
                I specialize in building modern and responsive web applications.
            </p>
            <div className="hero-buttons">
                <a href="#contact" className="hero-button">Contact With Me</a>
                <a className="hero-button-secondary" href="/resume.pdf" download>Resume <HiDownload className="download-icon" /></a>
            </div>
        </div>
    )
}

export default Hero;
