import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import EnquiryModal from './EnquiryModal';
import { categoriesData } from '../data/productsData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileProductExpand, setMobileProductExpand] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const navProductRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle outside click to close mega menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navProductRef.current && !navProductRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 250);
  };

  const toggleMegaMenuClick = (e) => {
    e.preventDefault();
    setMegaMenuOpen(prev => !prev);
  };

  const closeMenus = () => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span className="top-bar-item"><strong>QMS 9001:2015 Certified</strong></span>
            <span className="top-bar-item top-highlight">Raw to Ready All Here — Ahmedabad Works</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+916264131446" className="top-bar-link">+91 62641 31446</a>
            <a href="mailto:info@sunrise.industries" className="top-bar-link">info@sunrise.industries</a>
          </div>
        </div>
      </aside>

      {/* Main Header Navigation */}
      <header className="main-header">
        <div className="container navbar">
          <Link to="/" className="nav-brand" onClick={closeMenus}>
            <img src="/assets/images/logo.svg" alt="Sunrise Industries Logo" width="260" height="52" />
          </Link>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenus}
            >
              Home
            </Link>

            <Link 
              to="/about-us" 
              className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
              onClick={closeMenus}
            >
              About Us
            </Link>

            {/* Desktop Mega Menu Dropdown Container */}
            <div 
              className={`nav-item-dropdown ${megaMenuOpen ? 'is-open' : ''}`}
              ref={navProductRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                type="button"
                className={`nav-link nav-dropdown-btn ${location.pathname.startsWith('/product') ? 'active' : ''}`}
                onClick={toggleMegaMenuClick}
                aria-expanded={megaMenuOpen}
              >
                <span>Products</span>
                <svg className={`dropdown-caret ${megaMenuOpen ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Desktop Mega Dropdown */}
              <MegaMenu 
                isOpen={megaMenuOpen} 
                onClose={() => setMegaMenuOpen(false)} 
              />
            </div>

            {/* Mobile Accordion for Products */}
            {mobileMenuOpen && (
              <div className="mobile-product-accordion">
                <button 
                  type="button" 
                  className="mobile-accordion-toggle"
                  onClick={() => setMobileProductExpand(!mobileProductExpand)}
                >
                  <span>Explore Products</span>
                  <span>{mobileProductExpand ? '−' : '+'}</span>
                </button>
                {mobileProductExpand && (
                  <div className="mobile-accordion-body">
                    {categoriesData.map(cat => (
                      <Link 
                        key={cat.slug} 
                        to={cat.url} 
                        className="mobile-sublink"
                        onClick={closeMenus}
                      >
                        {cat.name} &rarr;
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <Link 
              to="/market-area" 
              className={`nav-link ${location.pathname === '/market-area' ? 'active' : ''}`}
              onClick={closeMenus}
            >
              Market Area
            </Link>
            
            <a href="/#specifications" className="nav-link" onClick={closeMenus}>
              Specifications
            </a>
            
            <a href="#contact" className="nav-link" onClick={closeMenus}>
              Contact Us
            </a>
          </nav>

          <div className="nav-actions">
            <button 
              type="button" 
              className="btn btn-primary btn-sm nav-quote-btn" 
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get a Quote &rarr;
            </button>
          </div>

          <button 
            className="mobile-toggle" 
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg viewBox="0 0 100 80" width="24" height="24">
              <rect width="100" height="12" rx="6"/>
              <rect y="30" width="100" height="12" rx="6"/>
              <rect y="60" width="100" height="12" rx="6"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Global RFQ Quote Modal */}
      <EnquiryModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        productName="Stainless Steel Pipe Nipples"
      />
    </>
  );
}
