import { useRef } from 'react';
import useScrollAnimation from '../Animations/useScrollAnimation';
import './H-Service.css';

export default function HService() {
  const serviceRef = useRef(null);

  // Selector option pass kiya hai taaki heading aur individual service cards scroll ke sath ek-ek karke progressive reveal hon
  useScrollAnimation(serviceRef, {
    selector: '.service-header-box, .service-card',
    y: 80,
    duration: 1.3,
    stagger: 0.15,
    start: 'top 80%'
  });

  const services = [
    {
      id: '01',
      title: 'Catalogue & Brochure Layout',
      description: 'Crafting high-end editorial layouts and print-ready master files that showcase interior collections with pristine visual hierarchy.',
    },
    {
      id: '02',
      title: 'Digital Lookbook Design',
      description: 'Designing interactive, high-resolution digital lookbooks optimized for client presentations and seamless web viewing.',
    },
    {
      id: '03',
      title: 'Spatial Brand Identity',
      description: 'Developing cohesive typography, luxury color palettes, and brand guidelines tailored exclusively for architecture firms.',
    },
    {
      id: '04',
      title: 'Material Board Curation',
      description: 'Presenting physical and digital material palettes, textures, and finish samples through clean, refined presentation pages.',
    },
    {
      id: '05',
      title: '3D Render Presentation',
      description: 'Structuring architectural and interior 3D visualizations into professional, publication-grade portfolio spreads.',
    },
    {
      id: '06',
      title: 'Corporate Portfolio Design',
      description: 'Showcasing completed architectural projects, milestones, and design manifestos in premium hardcover or digital formats.',
    }
  ];

  return (
    <section className="service-section" id="services" ref={serviceRef}>
      <div className="service-container">
        
        {/* Section Header */}
        <div className="service-header-box">
          <span className="sub-heading">CATALOGUE & DESIGN EXPERTISE</span>
          <h2>Elevating Architectural Portfolios & Brand Assets</h2>
          <div className="header-line"></div>
        </div>

        {/* Services Cards Grid (6 Professional Cards) */}
        <div className="services-grid">
          {services.map((item) => (
            <div className="service-card" key={item.id}>
              <div className="card-top-bar">
                <span className="service-number">{item.id}</span>
                <div className="card-line"></div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}