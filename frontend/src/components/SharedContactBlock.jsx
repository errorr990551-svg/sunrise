import React from 'react';

export default function SharedContactBlock() {
  return (
    <section className="container" id="contact" style={{ marginTop: '2rem' }}>
      <div className="shared-contact-card">
        <div className="contact-card-header">
          <h3>Sunrise Industries — Direct Factory Contact</h3>
          <p>
            Stainless steel nipples, CNC precision fittings, and raw material stock dispatched directly from our Ahmedabad manufacturing facility.
          </p>
        </div>
        <div className="contact-card-grid">
          <div>
            <div className="contact-group-title">Phone &amp; Direct Assistance</div>
            <div className="contact-group-links">
              <a href="tel:+916264131446" className="contact-item-link">&#9742; +91 62641 31446</a>
              <a href="tel:+919783043132" className="contact-item-link">&#9742; +91 97830 43132</a>
            </div>
          </div>
          <div>
            <div className="contact-group-title">Official Email Enquiries</div>
            <div className="contact-group-links">
              <a href="mailto:info@sunrise.industries" className="contact-item-link">&#9993; info@sunrise.industries</a>
              <a href="mailto:sales@sunrise.industries" className="contact-item-link">&#9993; sales@sunrise.industries</a>
              <a href="mailto:exports@sunrise.industries" className="contact-item-link">&#9993; exports@sunrise.industries</a>
            </div>
          </div>
          <div>
            <div className="contact-group-title">Manufacturing Plant &amp; Works</div>
            <div className="contact-address">
              125-41, Small Scale Co Op Ind Estate Ltd,<br />
              B/H Ajit Mill, Rakhiyal Road,<br />
              Ahmedabad 380023, Gujarat, India.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
