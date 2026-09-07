import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const subRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const counterObj = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Number counter animation from 0 to 100%
    tl.to(counterObj, {
      value: 100,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.round(counterObj.value)}%`;
        }
      }
    })
    // Simultaneous staggered entrance for brand elements
    .fromTo(
      subRef.current,
      { opacity: 0, y: 15, letterSpacing: '8px' },
      { opacity: 1, y: 0, letterSpacing: '4px', duration: 0.9, ease: 'power3.out' },
      '-=1.0'
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power4.out' },
      '-=0.7'
    )
    .fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: 'power2.inOut' },
      '-=0.6'
    )
    // Cinematic curtain lift effect with a sleek scale-down wrapper
    .to(counterRef.current, { opacity: 0, duration: 0.3 }, '+=0.2')
    .to(preloaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: 'power4.inOut'
    });
  }, [onComplete]);

  return (
    <div className="preloader-overlay" ref={preloaderRef}>
      <div className="preloader-content">
        <span ref={subRef} className="preloader-sub">ARCHITECTURAL STUDIO</span>
        <h1 ref={titleRef} className="preloader-title">Preface Communications</h1>
        <div ref={lineRef} className="preloader-line"></div>
        <div ref={counterRef} className="preloader-counter">0%</div>
      </div>
    </div>
  );
}