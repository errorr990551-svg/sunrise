import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/">
            <img src="/assets/images/logo-white.svg" alt="Sunrise Industries" width="220" height="44" />
          </Link>
          <p>
            Established in 2010 in Ahmedabad. ISO 9001:2015 certified manufacturer and stockist of stainless steel nipples, couplings, flanges, and precision CNC turned components serving all over India and exporting globally.
          </p>
          <div className="footer-address-mini">
            <strong>Works &amp; Facility:</strong><br />
            125-41, Small Scale Co Op Ind Estate Ltd,<br />
            B/H Ajit Mill, Rakhiyal Road,<br />
            Ahmedabad 380023, Gujarat, India.
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/products">Products Catalog</Link>
            <a href="#footer-contact">Contact</a>
            <Link to="/market-area">Market Area</Link>
          </div>
        </div>

        <div className="footer-col">
          <h4>SS Nipples</h4>
          <div className="footer-links">
            <Link to="/product/ss-hex-nipple">SS Hex Nipple</Link>
            <Link to="/product/ss-barrel-nipple">SS Barrel Nipple</Link>
            <Link to="/product/ss-close-nipple">SS Close Nipple</Link>
            <Link to="/product/ss-reducing-nipple">SS Reducing Nipple</Link>
            <Link to="/product/ss-hose-nipple">SS Hose Nipple</Link>
            <Link to="/product-category/ss-nipples">View All SS Nipples &rarr;</Link>
          </div>
        </div>

        <div className="footer-col" id="footer-contact">
          <h4>Contact Details</h4>
          <div className="footer-links">
            <div className="footer-contact-item">
              <span className="footer-contact-label">Phone Support:</span>
              <a href="tel:+916264131446">+91 62641 31446</a>
              <a href="tel:+919783043132">+91 97830 43132</a>
            </div>
            <div className="footer-contact-item" style={{ marginTop: '0.4rem' }}>
              <span className="footer-contact-label">Email Enquiries:</span>
              <a href="mailto:sales@sunrise.industries">sales@sunrise.industries</a>
              <a href="mailto:info@sunrise.industries">info@sunrise.industries</a>
              <a href="mailto:exports@sunrise.industries">exports@sunrise.industries</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>© 2026 Sunrise Industries | All Rights Reserved.</p>
          <p className="signature-credit">
            Designed and Promoted By{' '}
            <a href="https://errorr.in" target="_blank" rel="noopener noreferrer" className="errorr-link">
              Errorr.in
            </a>{' '}
            - Best Digital Marketing Company in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
