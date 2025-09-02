import React, { useState } from 'react';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './style.css';

const HireMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [enquiry, setEnquiry] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!subject) {
      alert('Subject is required!');
      return;
    } else if (!enquiry || enquiry.length < 5) {
      alert('Please provide a valid message!');
      return;
    }
    const url = `mailto:clementadebola54@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiry)}`;
    window.open(url, '_blank');
    setSubject('');
    setEnquiry('');
    alert('Email sent successfully!');
  };

  return (
    <div className="bot-wrapper">
      <button className={`bot-button ${isOpen ? 'hidden' : ''}`} onClick={handleToggle}>
        <BiMessageSquareDetail />
        <div className="hire-me-container">
          {[...Array(16)].map((_, index) => (
            <span key={index} className={`hire-me hire-me-${index}`}>
              Hire me
            </span>
          ))}
        </div>
      </button>
      <div className={`bot-container ${isOpen ? 'open' : ''}`}>
        <div className="bot-header">
          <h2 className="bot-title">Contact Me</h2>
          <button className="close-button" onClick={handleToggle}>
            <FaTimes />
          </button>
        </div>
        <div className="contact-options">
          <div className="contact-option" onClick={() => window.open("mailto:clementadebola54@gmail.com", "_blank")}>
            <div className="contact-icon email-icon"><MdOutlineEmail /></div>
            <span>Email</span>
          </div>
          <div className="contact-option" onClick={() => window.open("", "_blank")}>
            <div className="contact-icon messenger-icon"><RiMessengerLine /></div>
            <span>Messenger</span>
          </div>
          <div className="contact-option" onClick={() => window.open("https://wa.me/+2348139621601", "_blank")}>
            <div className="contact-icon whatsapp-icon"><BsWhatsapp /></div>
            <span>WhatsApp</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="textarea"
            placeholder="Your Message"
            rows={5}
            value={enquiry}
            onChange={(e) => setEnquiry(e.target.value)}
          />
          <button className="submit-button" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default HireMe;