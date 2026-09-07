import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'; 
import Footer from './components/Footer/Footer'; 
import Preloader from './components/Preloder/Preloader';
import ScrollToTop from './components/Scroll-top/ScrollToTop';
import ContactPopup from './components/Popup/ContactPopup';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Preloader khatam hone ke baad 5 second ka timer chalega
  const handlePreloaderComplete = () => {
    setIsLoading(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  };

  return (
    <div className="app-container" style={{ display: 'flex', width: '100%', minHeight: '100vh', position: 'relative' }}>
      
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <Navbar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Home />
        <Footer />
      </div>

      <ScrollToTop />

      {/* Automatic popup after 5 seconds with Skip button */}
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

    </div>
  );
}