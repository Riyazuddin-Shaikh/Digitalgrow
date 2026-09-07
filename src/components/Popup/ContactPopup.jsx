import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import './ContactPopup.css';

export default function ContactPopup({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = useCallback(() => {
    setIsSubmitted(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'flex' });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = 'auto';
      gsap.to(modalRef.current, { scale: 0.9, opacity: 0, y: 20, duration: 0.3, ease: 'power3.in' });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.style.display = 'none';
        }
      });
    }
  }, [isOpen]);

  useEffect(() => {
    let autoCloseTimer;
    if (isSubmitted) {
      autoCloseTimer = setTimeout(() => {
        handleClose();
      }, 4000);
    }
    return () => clearTimeout(autoCloseTimer);
  }, [isSubmitted, handleClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div ref={overlayRef} className="popup-overlay" style={{ display: 'none' }} onClick={handleClose}>
      <div ref= {modalRef} className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={handleClose} aria-label="Close popup">
          &times;
        </button>

        <div className="popup-image-side">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
            alt="Modern Architectural Interior" 
          />
          <div className="popup-image-overlay">
            <h3>Preface Communications</h3>
            <p>Let's discuss your next architectural project.</p>
          </div>
        </div>

        <div className="popup-form-side">
          <div className="popup-header-row">
            <h2>{isSubmitted ? 'Thank You' : 'Get in Touch'}</h2>
          </div>

          {isSubmitted ? (
            <div className="popup-success-box">
              <div className="success-icon">✓</div>
              <h3>Request Submitted Successfully</h3>
              <p>Thank you for reaching out. Our design consultants will get in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="popup-input-group">
                <label>Mobile Number <span className="required-star">*</span></label>
                <input type="tel" placeholder="+91 98765 43210" required />
              </div>

              <div className="popup-input-group">
                <label>Email Address</label>
                <input type="email" placeholder="name@example.com" />
              </div>

              <div className="popup-input-group">
                <label>Message</label>
                <textarea placeholder="Write your project details..." rows="4"></textarea>
              </div>

              <button type="submit" className="popup-submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}