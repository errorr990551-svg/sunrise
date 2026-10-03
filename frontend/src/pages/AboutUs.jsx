import React from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';

const aboutFaqs = [
  { q: 'When was Sunrise Industries established?', a: 'In 2010, in Ahmedabad, Gujarat, India.' },
  { q: 'What is your main product?', a: 'Stainless steel nipples, alongside pipe fittings, flanges, industrial pipes and custom CNC precision parts.' },
  { q: 'Are you ISO certified?', a: 'Yes, our quality management system is certified to ISO 9001:2015.' },
  { q: 'Do you export?', a: 'Yes, we regularly export to 5+ countries with full documentation and export-grade packing.' },
  { q: 'Can I visit the facility?', a: 'Yes. Contact us via phone or email to arrange a technical visit to our Ahmedabad manufacturing facility.' }
];

export default function AboutUs() {
  return (
    <>
      {/* Section 1: Banner */}
      <section className="page-banner">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">About Us</span>
          </nav>
          <h1>About Sunrise Industries: SS Nipples and Precision Parts From Ahmedabad</h1>
          <p className="page-banner-sub">
            Making and stocking stainless steel nipples, fittings and CNC parts since 2010.
          </p>
        </div>
      </section>

      {/* Section 2: Our story */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Our Origins</span>
            <h2>We Started With a Small Part and Built a Business Around It</h2>
            <h3>Why a nipple manufacturer cares so much about getting details right</h3>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p>
              Sunrise Industries began in 2010 as a modest operation in Ahmedabad. From early on, our focus was the stainless steel nipple: a short, simple-looking fitting that does a very demanding job. When it's right, nobody notices. When it's wrong, a line leaks, a plant stops and somebody gets a phone call.
            </p>
            <p style={{ marginTop: '1rem' }}>
              That reality shaped how we work. We learned to check threads, grades and lengths carefully, because a nipple that's a fraction off or the wrong material is worse than no nipple at all. As customers came back, they started asking for more: couplings and flanges to go with the nipples, then pipes and tubes, then custom machined parts. We grew to meet those needs without losing the discipline that nipples taught us.
            </p>
            <p style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
              Today we run 10+ production lines, hold stainless steel, mild steel and brass in stock, and supply buyers across India and overseas.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: By the numbers */}
      <section className="trust-strip">
        <div className="container">
          <h2 className="trust-title">Sunrise at a Glance</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">2010</div>
              <div className="stat-label">Year Established</div>
              <div className="stat-sublabel">Founded in Ahmedabad</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Experience</div>
              <div className="stat-sublabel">Combined industrial expertise</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Production Lines</div>
              <div className="stat-sublabel">Advanced CNC &amp; threading</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Export Markets</div>
              <div className="stat-sublabel">International deliveries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">ISO</div>
              <div className="stat-label">9001:2015</div>
              <div className="stat-sublabel">Certified QMS system</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What we do */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Capabilities</span>
            <h2>From a Single Nipple to a Full Production Run</h2>
            <h3>Our core product and everything that grew around it</h3>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <h3 className="feature-card-title">Stainless Steel Nipples</h3>
              <p className="feature-card-desc">
                Hex, barrel, close, reducing and hose nipples in SS 304 and 316, with mild steel and brass options.
              </p>
              <a href="#contact" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">Fittings &amp; Flanges</h3>
              <p className="feature-card-desc">
                SS couplings, flanges and investment-cast pipe fittings engineered for high pressure joints.
              </p>
              <a href="#contact" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">Pipes, Tubes &amp; Flat Products</h3>
              <p className="feature-card-desc">
                Seamless, welded and EFW pipes, plus stainless sheets, plates, coils and slit strips.
              </p>
              <a href="#contact" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">Special Products</h3>
              <p className="feature-card-desc">
                Perforated sheets, expanded metal mesh, decorative sheets and profiles, billets and special alloy plates.
              </p>
              <a href="#contact" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">Custom Machining</h3>
              <p className="feature-card-desc">
                CNC machining in stainless, mild steel, brass and aluminium, from one-off prototypes to mass production.
              </p>
              <a href="#contact" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">Fabrication &amp; Finishing</h3>
              <p className="feature-card-desc">
                Laser cutting, sheet-metal bending, powder coating, pickling passivation and PVD coating.
              </p>
              <a href="#contact" className="feature-card-btn">Click Here</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Mission and vision */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Purpose &amp; Direction</span>
            <h2>What We're Here to Do</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: 'var(--light-bg)', padding: '2.5rem', borderRadius: '4px', borderLeft: '4px solid var(--primary-accent)' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Our Mission</h3>
              <p style={{ lineHeight: '1.7', color: 'var(--text-primary)' }}>
                To supply nipples and fittings that fit right the first time and last in service, with honest advice and reliable delivery.
              </p>
            </div>

            <div style={{ background: 'var(--light-bg)', padding: '2.5rem', borderRadius: '4px', borderLeft: '4px solid var(--primary-accent)' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Our Vision</h3>
              <p style={{ lineHeight: '1.7', color: 'var(--text-primary)' }}>
                To be the first name industrial buyers think of for stainless steel nipples and fittings, in India and across our export markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How we work */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Manufacturing Process</span>
            <h2>How a Nipple Gets Made at Sunrise</h2>
            <h3>Four steps, each with a check</h3>
          </div>

          <ol className="steps-list">
            <li><strong>Material selection:</strong> We choose the right grade and wall thickness from stock, or source it to your exact chemical and mechanical requirement.</li>
            <li><strong>Cutting and machining:</strong> Pipe stock is cut to length, then threaded and CNC machined to the required type and size dimensions.</li>
            <li><strong>Inspection:</strong> Threads are checked with calibrated ring/plug gauges, dimensions measured, and surface finishes verified before leaving the floor.</li>
            <li><strong>Packing and dispatch:</strong> Parts are packed with protective thread sleeves to prevent transport damage and shipped domestically or exported.</li>
          </ol>
          <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '1rem' }}>
            Because material, machining and finishing sit under one roof, there are fewer handoffs where something can go wrong.
          </p>
        </div>
      </section>

      {/* Section 7: Quality */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Quality Assurance</span>
            <h2>Quality You Can Point To</h2>
            <h3>An ISO 9001:2015 system behind every batch</h3>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p>
              Our quality management system is certified to ISO 9001:2015. In practice, that means documented procedures, defined inspection points and records we can trace back when a customer asks a question. For buyers who need material documentation, we can discuss and furnish chemical and mechanical test certificates with your order.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Core values */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Principles</span>
            <h2>What We Stand For</h2>
          </div>

          <div className="conditions-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="condition-item">
              <h4>Precision</h4>
              <p>Threads and dimensions have to match. We measure with calibrated gauges instead of assuming.</p>
            </div>
            <div className="condition-item">
              <h4>Honesty</h4>
              <p>If 304 won't last in your application and 316 will, we'll say so, even when 304 is the cheaper sale.</p>
            </div>
            <div className="condition-item">
              <h4>Responsiveness</h4>
              <p>Clear technical questions, quick quotes and no vague answers.</p>
            </div>
            <div className="condition-item">
              <h4>Reliability</h4>
              <p>Orders arrive when promised, packed properly, with all paperwork in order.</p>
            </div>
            <div className="condition-item">
              <h4>Continuous Improvement</h4>
              <p>We keep upgrading machines and methods, so complex parts become routine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Industries and markets */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Markets We Serve</span>
            <h2>Who We Supply</h2>
            <h3>Industrial buyers across sectors, in India and overseas</h3>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p>
              We supply manufacturers, OEMs, fabricators, dealers and exporters across water treatment, chemical and process plants, food and dairy, pharma utilities, oil and gas, marine, textile, automotive, power and building services. Our exports reach 5+ countries across multiple continents.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Visit us */}
      <section className="section section-light" id="visit">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Factory Location</span>
            <h2>Come and See Where It's Made</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Ahmedabad Manufacturing Facility</h3>
              <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                <strong>Address:</strong><br />
                125-41, Small Scale Co Op Ind Estate Ltd,<br />
                B/H Ajit Mill, Rakhiyal Road,<br />
                Ahmedabad 380023, Gujarat, India.
              </p>
              <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                <strong>Call:</strong> +91 62641 31446 | +91 97830 43132<br />
                <strong>Email:</strong> info@sunrise.industries | sales@sunrise.industries
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <a href="tel:+916264131446" className="btn btn-primary btn-md">
                  Arrange a Factory Visit &rarr;
                </a>
              </div>
            </div>

            <div style={{ borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--light-border)', minHeight: '300px' }}>
              <iframe
                title="Sunrise Industries Location Map"
                src="https://maps.google.com/maps?q=Rakhiyal+Road+Ahmedabad+380023&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: About FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">FAQs</span>
            <h2>About Sunrise FAQs</h2>
          </div>
          <FaqAccordion items={aboutFaqs} />
        </div>
      </section>

      {/* Section 13: Final CTA */}
      <section className="section section-light" id="quote-form">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="tagline-badge">Work With Us</span>
          <h2>Looking for an SS Nipple Supplier You Can Rely On?</h2>
          <h3 style={{ color: 'var(--text-muted)', fontWeight: 500, marginBottom: '2rem' }}>
            Tell us what you need.
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="tel:+916264131446" className="btn btn-primary btn-lg">
              Get a Quote &rarr;
            </a>
            <a href="tel:+916264131446" className="btn btn-outline btn-lg">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
