import React from "react";
import AboutImage from "../../assets/hero-image.png";
import './About.css';

const About = () => {
    return (
        <div className="about-section" id="about">
            <div className="about-container">
                <h2 className="about-title">About Me</h2>
                <div className="about-content">
                    <img src={AboutImage} alt="" className="about-image" />
                    <div className="about-text">
                        <p className="about-description">
                            I am a passionate Front-end developer with 8 years of experience mainly working with Javascript
                            and React focusing on delivering high-quality user experiences and looking forward to contributing
                            to a highly collaborative work environment, finding solutions and determining customer satisfaction.
                        </p>
                        <div className="skill-list">
                            <div className="skill-item">
                                <label htmlFor="reactjs" className="skill-label">Javascript</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-11-12"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <label htmlFor="reactjs" className="skill-label">React JS</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-11-12"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <label htmlFor="reactjs" className="skill-label">Vue</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-10-12"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <label htmlFor="reactjs" className="skill-label">Angular</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-10-12"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <label htmlFor="nodejs" className="skill-label">Node JS</label>
                                <div className="skill-bar">
                                    <div className="skill-fill fill-9-12"></div>
                                </div>
                            </div>
                        </div>
                        <div className="about-stats">
                            <div>
                                <h3 className="stat-number">8+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div>
                                <h3 className="stat-number">20+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="stat-number">5+</h3>
                                <p>Companies worked with</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
