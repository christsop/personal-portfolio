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
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        &copy; {new Date().getFullYear()} Christos. All rights reserved.
                    </p>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/chris.tsopelas.7" target="_blank" className="footer-social-link">
                            <FaFacebook />
                        </a>
                        <a href="https://www.linkedin.com/in/christos-tsopelas-77218911b/" target="_blank" className="footer-social-link">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/christsop" target="_blank" className="footer-social-link">
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
