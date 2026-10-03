import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/">
            <img src="/assets/images/logo-white.svg" alt="Sunrise Industries" width="220" height="44" />
          </Link>
          <p>
            Established in 2010 in Ahmedabad. ISO 9001:2015 certified manufacturer and stockist of stainless steel nipples, couplings, flanges, and CNC machined components serving industries nationwide and exporting globally.
          </p>
        </div>

        <div className="footer-col">
          <h4>SS Nipples</h4>
          <div className="footer-links">
            <a href="/#nipple-range">SS Hex Nipple</a>
            <a href="/#nipple-range">SS Barrel Nipple</a>
            <a href="/#nipple-range">SS Close Nipple</a>
            <a href="/#nipple-range">SS Reducing Nipple</a>
            <a href="/#nipple-range">SS Hose Nipple</a>
            <a href="/#nipple-range">Custom CNC Nipples</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Market Area</h4>
          <div className="footer-links">
            <Link to="/market-area" style={{ fontWeight: 700, color: 'var(--primary)' }}>&rarr; View Market Area (India)</Link>
            <Link to="/tamil-nadu/chennai">Chennai (Port &amp; Auto)</Link>
            <Link to="/tamil-nadu/coimbatore">Coimbatore (Pumps &amp; Motors)</Link>
            <Link to="/tamil-nadu/hosur">Hosur (Auto &amp; Electronics)</Link>
            <Link to="/tamil-nadu/tiruppur">Tiruppur (Dyeing &amp; Bleaching)</Link>
            <Link to="/tamil-nadu/salem">Salem (Kitchen &amp; SS)</Link>
            <Link to="/tamil-nadu/madurai">Madurai (Hotels &amp; MEP)</Link>
            <Link to="/tamil-nadu/tiruchirappalli">Tiruchirappalli (Boilers)</Link>
            <Link to="/tamil-nadu/erode">Erode (Turmeric &amp; Weaving)</Link>
            <Link to="/tamil-nadu/thoothukudi">Thoothukudi (Marine Port)</Link>
            <Link to="/tamil-nadu/namakkal">Namakkal (Trucks &amp; Rigs)</Link>
          </div>
        </div>

        <div className="footer-col">
          <h4>Direct Contact</h4>
          <div className="footer-links">
            <a href="tel:+916264131446">+91 62641 31446</a>
            <a href="tel:+919783043132">+91 97830 43132</a>
            <a href="mailto:sales@sunrise.industries">sales@sunrise.industries</a>
            <Link to="/about-us">About Sunrise</Link>
            <a href="/#specifications">Specification Matrix</a>
            <a href="/#faq">Engineering FAQs</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>2026 &copy; Sunrise Industries | All Rights Reserved.</p>
          <p>
            Powered by{' '}
            <a href="https://bitstreaks.com/" target="_blank" rel="noopener noreferrer" className="powered-by">
              Bitstreaks Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
