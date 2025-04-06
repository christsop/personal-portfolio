import React from 'react'
import HeroImage from '../../assets/hero-image.png'
import './Hero.css'
import { HiDownload } from "react-icons/hi";

const Hero = () => {
    return (
        <div className="hero">
            <img src={HeroImage} alt="Profile" className="hero-image" />
            <h1 className="hero-title">
                I'm <span className="hero-highlight">Christos Tsopelas</span>, Front-End Developer
            </h1>
            <p className="hero-subtitle">
                I specialize in building modern and responsive web applications.
            </p>
            <div className="hero-buttons">
                <a href="#contact" className="hero-button">Contact With Me</a>
                <a className="hero-button-secondary">Resume <div><HiDownload className="download-icon" /></div></a>
            </div>
        </div>
    )
}

export default Hero