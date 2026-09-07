import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);
  const containerRef = useRef(null);
  const pathLength = 283; // Circumference for r = 45 (2 * PI * 45)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      // Update SVG circular progress stroke
      if (progressRef.current) {
        const drawLength = pathLength - scrollPercent * pathLength;
        progressRef.current.style.strokeDashoffset = drawLength;
      }

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      if (isVisible) {
        gsap.to(containerRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out',
          display: 'flex'
        });
      } else {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: 'power3.in',
          onComplete: () => {
            if (containerRef.current && window.scrollY <= 300) {
              containerRef.current.style.display = 'none';
            }
          }
        });
      }
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="scroll-top-wrapper" 
      onClick={scrollToTop} 
      style={{ display: 'none' }}
      aria-label="Scroll to top"
    >
      <svg className="scroll-progress-svg" viewBox="0 0 100 100">
        <circle className="bg-circle" cx="50" cy="50" r="45" />
        <circle 
          ref={progressRef} 
          className="progress-circle" 
          cx="50" 
          cy="50" 
          r="45" 
          style={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
        />
      </svg>
      <div className="scroll-icon-box">
        <svg className="arrow-up-svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m-7 7l7-7 7 7"></path>
        </svg>
        <span className="scroll-text">TOP</span>
      </div>
    </div>
  );
}