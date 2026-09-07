import { useRef } from 'react';
import useScrollAnimation from '../Animations/useScrollAnimation';
import './H-Work.css';

export default function HWork() {
  const workSectionRef = useRef(null);

  useScrollAnimation(workSectionRef, {
    selector: '.work-editorial-item', // Crucial: Targets each item individually as it scrolls into view
    y: 80,
    duration: 1.2,
    stagger: 0.2,
    start: 'top 85%'
  });

  const works = [
    {
      id: '01',
      category: 'INTERIOR CATALOGUE',
      title: 'Residential Living Spaces',
      description: 'High-end curated portfolios featuring luxury living rooms, modern kitchens, and custom bedroom interior designs.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '02',
      category: 'PRINTED BROCHURE',
      title: 'Hardcover Design Compendium',
      description: 'Physical bound books showcasing architectural case studies, floor plans, and comprehensive project overviews.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '03',
      category: 'COMMERCIAL SPREAD',
      title: 'Corporate & Office Spaces',
      description: 'Sleek, architectural layouts and spatial plans designed for multinational workplaces and executive boardrooms.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '04',
      category: 'DIGITAL LOOKBOOK',
      title: 'Hospitality & Hotels',
      description: 'Immersive digital presentations highlighting resort aesthetics, fine-dining architecture, and lighting dynamics.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '05',
      category: 'PORTFOLIO VOLUME',
      title: 'Architectural Monograph Book',
      description: 'Exquisite editorial layout designed in a book format, focusing on minimalist structure, blueprint details, and sketches.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '06',
      category: 'MATERIAL SWATCH BOOK',
      title: 'Finish & Texture Compilations',
      description: 'Meticulously structured bound swatches displaying wood veneers, metallic trims, and premium fabric samples.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="work-section" id="work" ref={workSectionRef}>
      <div className="work-container">
        
        {/* Section Header */}
        <div className="work-header-box">
          <span className="sub-heading">CATALOGUE SPECIALIZATIONS</span>
          <h2>Crafted Architectural Portfolios & Layout Books</h2>
          <div className="header-line"></div>
        </div>

        {/* Dynamic Editorial Work List (6 Items Alternating) */}
        <div className="work-editorial-list">
          {works.map((item, index) => (
            <div className={`work-editorial-item ${index % 2 === 1 ? 'reverse-layout' : ''}`} key={item.id}>
              
              {/* Image Preview Box */}
              <div className="work-img-container">
                <img src={item.image} alt={item.title} />
                <span className="floating-id">{item.id}</span>
              </div>

              {/* Text Content Box */}
              <div className="work-info-container">
                <span className="work-cat-tag">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="work-link-wrapper">
                  <a href="#contact" className="work-explore-link">
                    <span>VIEW SPREAD</span>
                    <svg className="arrow-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}