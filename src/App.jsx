import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopsSection from './components/ShopsSection';
import FeaturedSection from './components/FeaturedSection';
import ProductsSection from './components/ProductsSection';
import SweetSection from './components/SweetSection';
import FlavorsSection from './components/FlavorsSection';
import BlogSection from './components/BlogSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import { useCart } from './CartContext';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { homeStyle } = useCart();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Clear theme classes
    document.body.classList.remove('theme-dark', 'theme-pastel', 'theme-warm');
    
    // Toggle active theme
    if (homeStyle === 'home-3') {
      document.body.classList.add('theme-dark');
    } else if (homeStyle === 'home-2') {
      document.body.classList.add('theme-pastel');
    } else if (homeStyle === 'home-6') {
      document.body.classList.add('theme-warm');
    }
  }, [homeStyle]);

  const renderContent = () => {
    switch (homeStyle) {
      case 'home-4':
        // Flavors First
        return (
          <>
            <Hero />
            <FlavorsSection />
            <ShopsSection />
            <FeaturedSection />
            <ProductsSection />
            <SweetSection />
            <BlogSection />
            <NewsletterSection />
          </>
        );
      case 'home-5':
        // Minimalist
        return (
          <>
            <Hero />
            <FeaturedSection />
            <ProductsSection />
            <FlavorsSection />
            <BlogSection />
          </>
        );
      case 'home-7':
        // Products First
        return (
          <>
            <Hero />
            <ProductsSection />
            <ShopsSection />
            <FeaturedSection />
            <SweetSection />
            <FlavorsSection />
            <BlogSection />
            <NewsletterSection />
          </>
        );
      case 'home-8':
        // Blog First
        return (
          <>
            <Hero />
            <BlogSection />
            <ShopsSection />
            <FeaturedSection />
            <ProductsSection />
            <SweetSection />
            <FlavorsSection />
            <NewsletterSection />
          </>
        );
      default:
        // Default standard (home-1, home-2, home-3, home-6)
        return (
          <>
            <Hero />
            <ShopsSection />
            <FeaturedSection />
            <ProductsSection />
            <SweetSection />
            <FlavorsSection />
            <BlogSection />
            <NewsletterSection />
          </>
        );
    }
  };

  return (
    <>
      <a href="#home" className="sr-only"
        style={{ position:'absolute', top:'-100%', left:0, background:'var(--primary)', color:'white', padding:'8px 16px', zIndex:9999, fontWeight:600 }}
        onFocus={e => (e.target.style.top = '0')}
        onBlur={e => (e.target.style.top = '-100%')}>
        Skip to main content
      </a>

      <Navbar />

      <main id="home">
        {renderContent()}
      </main>

      <Footer />

      <button
        className={`scroll-top${showScrollTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="scroll-top-btn"
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}

export default App;
