// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios'; // Ensure axios is installed

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            // Replace with your backend server URL
            // const response = await axios.post('http://localhost:5001/api/send-message', formData);
            const response = await axios.post('https://portfolio-backend-v8to.onrender.com/api/send-message', formData);
            if (response.data.success) {
                setStatus('Message sent successfully!');
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            setStatus('Error sending message. Please try again later.');
        }
    };

    return (
        <div id="contact" className="contact-section">
            <h2>&lt;contact me&gt;</h2>

            <div className="contact-details">
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <p>Email: <a href="mailto:mananbatra2003.mb@gmail.com">mananbatra2003.mb@gmail.com</a></p>
                </div>

                <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/mananbatra03/" target="_blank" rel="noreferrer">mananbatra03</a></p>
                </div>

                <div className="contact-item">
                    <i className="fab fa-github"></i>
                    <p>GitHub: <a href="hhttps://github.com/mananbatraa" target="_blank" rel="noreferrer">mananbatraa</a></p>
                </div>

                <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Location: <span>Faridabad, India</span></p>
                </div>

                <div className="contact-item">
                    <i className="fas fa-file-download"></i>
                    <p><a href="https://drive.google.com/file/d/1heezpijDJNqfGV-g1oyDspflwk8Ml_0W/view" target='_blank' rel='noopener noreferrer'  download>Download Resume</a></p>
                </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
                {status && <p>{status}</p>} {/* Status message */}
            </form>
        </div>
    );
};

export default Contact;