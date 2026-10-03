import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenus = () => {
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

            <a 
              href="/#nipple-range" 
              className="nav-link"
              onClick={closeMenus}
            >
              SS Nipples
            </a>
            
            <a href="/#specifications" className="nav-link" onClick={closeMenus}>
              Specifications
            </a>
            
            <a href="#contact" className="nav-link" onClick={closeMenus}>
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <a href="#quote-form" className="btn btn-primary btn-sm" onClick={closeMenus}>
              Get a Quote &rarr;
            </a>
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
    </>
  );
}
