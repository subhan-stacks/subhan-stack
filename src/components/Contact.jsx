import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailSignatureCard from './EmailSignatureCard';

const Contact = () => {
  const formRef = useRef(null);
  const [btnText, setBtnText] = useState('Send Message');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('Sending...');
    setErrorMessage('');

    emailjs.sendForm('service_wvrxwp7', 'template_3lcksxl', formRef.current)
      .then(() => {
        setBtnText('Message Sent!');
        if (formRef.current) formRef.current.reset();
        setIsSubmitted(true);
      }, (error) => {
        setBtnText('Failed to Send');
        console.error('FAILED...', error);
        setErrorMessage('Failed to send message. Please reach out directly on WhatsApp or Email.');
        setTimeout(() => setBtnText('Send Message'), 3000);
      });
  };

  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-card-col slide-in-left">
            <EmailSignatureCard />
          </div>
          <div className="contact-form slide-in-right">
            {isSubmitted ? (
              <div className="contact-success-state">
                <div className="contact-success-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Thank You!</h3>
                <p className="contact-success-desc">
                  Your message has been received. I will get in touch with you within <strong>one business day</strong>.
                </p>
                <button
                  type="button"
                  className="btn-send-again"
                  onClick={() => {
                    setIsSubmitted(false);
                    setBtnText('Send Message');
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="contact-error-banner">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <span>{errorMessage}</span>
                  </div>
                )}
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required name="user_name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required name="user_email" />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className={`btn send-btn${btnText === 'Sending...' ? ' sending' : ''}`} disabled={btnText === 'Sending...'}>
                  <span className="send-btn-text">{btnText}</span>
                  {btnText === 'Sending...' ? (
                    <span className="send-spinner" />
                  ) : btnText === 'Message Sent!' ? (
                    <svg className="send-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg className="send-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
