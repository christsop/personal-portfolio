import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import './Contact.css'

const EMAIL = 'tsopelasat@gmail.com';
const PHONE = '+306934831454';

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <div className="contact-container">
                <h2 className="contact-heading">Contact Me</h2>
                <div className="contact-flex">
                    <div className="contact-info">
                        <h3 className="contact-subheading">Let's Talk</h3>
                        <p>I'm open to discussing web development projects or partnership opportunities.</p>
                        <div className="contact-detail">
                            <FaEnvelope className="contact-icon" />
                            <a href={`mailto:${EMAIL}`} className="contact-link">{EMAIL}</a>
                        </div>
                        <div className="contact-detail">
                            <FaPhone className="contact-icon" />
                            <span>+{PHONE}</span>
                        </div>
                        <div className="contact-detail">
                            <FaMapMarkedAlt className="contact-icon" />
                            <span>Athens, Greece</span>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div>
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-input" placeholder="Enter You Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-input" placeholder="Enter You Email" />
                            </div>
                            <div>
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea rows="5" className="form-input" placeholder="Enter You Message"></textarea>
                            </div>
                            <button className="send-button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact