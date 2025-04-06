import React, { useEffect, useState } from 'react'
import HeroImage from '../../assets/hero-image.png'
import './Hero.css'
import { HiDownload } from "react-icons/hi";

const Hero = () => {
    const fullText = "Front-End Developer";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[index]);
                setIndex(prev => prev + 1);
            }, 130);

            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <div className="hero">
            <img src={HeroImage} alt="Profile" className="hero-image" />
            <h1 className="hero-title">
                I'm <span className="hero-highlight">Christos Tsopelas, </span>
                <span className="typewriter-text">{displayedText}</span>
            </h1>
            <p className="hero-subtitle">
                I specialize in building modern and responsive web applications.
            </p>
            <div className="hero-buttons">
                <a href="#contact" className="hero-button">Contact With Me</a>
                <a className="hero-button-secondary" href="/resume.pdf" download>Resume <div><HiDownload className="download-icon" /></div></a>
            </div>
        </div>
    )
}

export default Hero;
