import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';

const EMAIL = 'tsopelasat@gmail.com';
const PHONE = '306934831454';

const Contact = () => {
    const form = useRef();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const handleFormSubmission = () => {
        form.current.reset();
        setIsFormSubmitted(true);
        setTimeout(() => setIsFormSubmitted(false), 5000);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.EMAILJS_USER_ID
        )
            .then((result) => {
                console.log(result.text);
                handleFormSubmission();
            }, (error) => {
                console.log(error.text);
            });
    };

    function adjustHeight(element) {
        element.style.height = "1px";
        element.style.height = (25+element.scrollHeight)+"px";
    }

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
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div>
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" name="name" className="form-input" placeholder="Enter Your Name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" className="form-input" placeholder="Enter Your Email" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea onPaste={(e)=>adjustHeight(e.target)} onKeyUp={(e)=>adjustHeight(e.target)} name="message" rows="5" className="form-input message" placeholder="Enter Your Message" required></textarea>
                            </div>
                            <div className="contact-form-actions">
                                {isFormSubmitted && <div className="thank-you">Thank you for reaching out</div>}
                                <button type="submit" className="send-button">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
