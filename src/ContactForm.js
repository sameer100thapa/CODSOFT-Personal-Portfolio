import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-me-container">
      <h1 className="contact-me-header">Send Your Message</h1>
      <div className="contact-me-form-container">
        <form className="contact-me-form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="form-textarea"
            />
          </div>
          <button className="contact-me-button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;