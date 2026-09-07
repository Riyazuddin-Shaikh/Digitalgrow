import { useRef } from 'react';
import useScrollAnimation from '../Animations/useScrollAnimation';
import './H-About.css';

export default function HAbout() {
  const aboutRef = useRef(null);

  // Selector option pass kiya hai taaki left image aur right content ek sath na aakar alag-alag sequence mein reveal hon
  useScrollAnimation(aboutRef, { 
    selector: '.about-image-wrapper, .about-content-box', 
    y: 80, 
    duration: 1.3, 
    stagger: 0.25, 
    start: 'top 80%' 
  });

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="about-container">
        
        {/* Left Side: Visual Showcase with Frame Effect */}
        <div className="about-image-wrapper">
          <div className="main-img-box">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" 
              alt="Luxury Interior" 
            />
          </div>
          <div className="experience-badge">
            <span className="badge-number">25+</span>
            <span className="badge-text">Years of Excellence</span>
          </div>
        </div>

        {/* Right Side: Editorial Content */}
        <div className="about-content-box">
          <div className="section-header">
            <span className="sub-heading">ESTABLISHED DESIGN AGENCY</span>
            <h2>Architectural Precision & Timeless Aesthetics</h2>
          </div>
          
          <p className="about-desc">
            We curate spaces that reflect individual character and sophisticated taste. 
            By blending spatial psychology with modern architecture, we turn conceptual blueprints into breathtaking living realities.
          </p>

          <div className="about-features-grid">
            <div className="feat-card">
              <h3>250+</h3>
              <p>Completed Projects</p>
            </div>
            <div className="feat-card">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>

          <div className="about-action">
            <a href="#contact" className="explore-btn">DISCOVER MORE</a>
          </div>
        </div>

      </div>
    </section>
  );
}