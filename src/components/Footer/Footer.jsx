import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3 className="footer-title">Christos</h3>
                        <p className="footer-description">
                            Full-Stack Developer based in Greece, specializing in web and
                            software development.
                        </p>
                    </div>
                    <div className="footer-form">
                        <form className="form">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="email-input"
                            />
                            <button type="submit" className="subscribe-button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        &copy; {new Date().getFullYear()} Christos. All rights reserved.
                    </p>
                    <div className="footer-social">
                        <a href="#" className="footer-social-link">
                            <FaFacebook />
                        </a>
                        <a href="#" className="footer-social-link">
                            <FaTwitter />
                        </a>
                        <a href="#" className="footer-social-link">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="footer-social-link">
                            <FaGithub />
                        </a>
                    </div>
                    <div className="footer-links">
                        <a href="#" className="footer-link">
                            Privacy
                        </a>
                        <a href="#" className="footer-link">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
