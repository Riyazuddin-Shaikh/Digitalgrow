import { useRef, useState } from 'react';
import useScrollAnimation from '../Animations/useScrollAnimation';
import './H-Contact.css';

export default function HContact() {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useScrollAnimation(contactRef, {
    selector: '.contact-header-box, .contact-content-grid',
    y: 80,
    duration: 1.3,
    stagger: 0.2,
    start: 'top 80%'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. Your message has been sent successfully.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact" ref={contactRef}>
      <div className="contact-container">
        
        {/* Section Header */}
        <div className="contact-header-box">
          <span className="sub-heading">GET IN TOUCH</span>
          <h2>Let's Discuss Your Architectural Vision</h2>
          <div className="header-line"></div>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-content-grid">
          
          {/* Left Column: Info */}
          <div className="contact-info-col">
            <h3>Preface Communications</h3>
            <p className="contact-intro">
              We collaborate with visionary clients worldwide. Reach out to discuss spatial design, monographs, or editorial lookbooks.
            </p>

            <div className="info-item">
              <span className="info-label">OFFICE LOCATION</span>
              <p>127, First Floor, Kirti Shikhar Building,<br />District Centre, Janakpuri<br />New Delhi – 110058, India</p>
            </div>

            <div className="info-item">
              <span className="info-label">DIRECT INQUIRIES</span>
              <p>
                teampreface@gmail.com<br />
                prefacecreative@gmail.com<br />
                +91-9810968828, +91-8076022293<br />
                +91-11-41588967
              </p>
            </div>

            <div className="info-item">
              <span className="info-label">WORKING HOURS</span>
              <p>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Full Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Project Type / Subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Project Details & Requirements..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">SEND MESSAGE</button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}