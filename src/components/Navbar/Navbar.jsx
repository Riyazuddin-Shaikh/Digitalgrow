import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import logoImage from '../../assets/home/logo.png';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = ['Home', 'About', 'Services', 'Blog', 'Contact'];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const navRef = useRef(null);

  useEffect(() => {
    const el = navRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power4.out', delay: 0.1 }
      );
    }

    const sections = NAV_ITEMS.map((item) => {
      const id = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase();
      const targetEl = document.getElementById(id) || document.querySelector(`.${id}-section`) || document.querySelector('.banner-main-container');
      return { name: item, element: targetEl };
    });

    const triggers = [];

    sections.forEach(({ name, element }) => {
      if (!element) return;

      const st = ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveLink(name),
        onEnterBack: () => setActiveLink(name),
      });

      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const handleLinkClick = (item) => {
    setActiveLink(item);
  };

  return (
    <aside className="sidebar-wrapper" ref={navRef}>
      <nav className="sidebar-container">
        
        {/* Top Logo Box with Real Image */}
        <div className="sidebar-logo-box">
          <a href="#home" className="brand-logo" onClick={() => handleLinkClick('Home')}>
            <img src={logoImage} alt="Company Logo" className="real-logo-img" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="sidebar-nav-group">
          <ul className="nav-menu">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item} 
                className={activeLink === item ? 'active' : ''}
                onClick={() => handleLinkClick(item)}
              >
                <a href={`#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Phone Number Section */}
        <div className="sidebar-footer">
          <a href="tel:+919876543210" className="sidebar-phone">
            <span className="phone-title">Call Us</span>
            <span className="phone-num">+91 98765 43210</span>
          </a>
        </div>

      </nav>
    </aside>
  );
}