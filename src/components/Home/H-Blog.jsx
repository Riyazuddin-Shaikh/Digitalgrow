import { useRef } from 'react';
import useScrollAnimation from '../Animations/useScrollAnimation';
import './H-Blog.css';

export default function HBlog() {
  const blogRef = useRef(null);

  useScrollAnimation(blogRef, {
    selector: '.blog-header-box, .blog-card',
    y: 80,
    duration: 1.3,
    stagger: 0.2,
    start: 'top 80%'
  });

  const blogs = [
    {
      id: '01',
      category: 'ARCHITECTURE',
      title: 'The Evolution of Minimalist Spatial Design',
      date: 'March 15, 2026',
      description: 'Exploring how negative space and raw concrete finishes redefine modern residential architecture and luxury living.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '02',
      category: 'EDITORIAL LAYOUTS',
      title: 'Curating Print Compendiums for Studios',
      date: 'February 28, 2026',
      description: 'Why physical hardcover monographs remain an essential tactile asset for high-end architecture practices.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '03',
      category: 'MATERIALITY',
      title: 'The Psychology of Wood and Stone',
      date: 'February 10, 2026',
      description: 'How natural textures influence emotional resonance and acoustic warmth within commercial and home interiors.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '04',
      category: 'SUSTAINABILITY',
      title: 'Eco-Responsive Structural Innovation',
      date: 'January 22, 2026',
      description: 'Integrating passive climate control and sustainable materials into contemporary high-end urban buildings.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="blog-section" id="blog" ref={blogRef}>
      <div className="blog-container">
        
        {/* Section Header */}
        <div className="blog-header-box">
          <span className="sub-heading">JOURNAL & INSIGHTS</span>
          <h2>Architectural Thoughts & Design Perspectives</h2>
          <div className="header-line"></div>
        </div>

        {/* Blog Cards Grid (2x2 Layout: 2 Top, 2 Bottom) */}
        <div className="blog-grid">
          {blogs.map((item) => (
            <div className="blog-card" key={item.id}>
              <div className="blog-img-box">
                <img src={item.image} alt={item.title} />
                <span className="blog-date">{item.date}</span>
              </div>
              <div className="blog-content-box">
                <span className="blog-cat-tag">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}