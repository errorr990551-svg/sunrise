import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { citiesData } from '../data/citiesData';
import FaqAccordion from '../components/FaqAccordion';

export default function CityDetail() {
  const { citySlug } = useParams();
  const city = citiesData[citySlug];

  if (!city) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2>City Hub Not Found</h2>
        <p style={{ margin: '1.5rem 0', color: 'var(--text-muted)' }}>
          Please select one of our active Tamil Nadu supply regions:
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {Object.values(citiesData).map((c) => (
            <Link key={c.slug} to={`/tamil-nadu/${c.slug}`} className="btn btn-outline btn-sm">
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Section 1: Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="separator">/</span>
              <Link to="/cities-we-serve">Cities We Serve</Link>
              <span className="separator">/</span>
              <span className="current">{city.name}</span>
            </nav>
            <div className="hero-tagline">
              <h2>{city.tagline}</h2>
            </div>
            <h1>{city.h1}</h1>
            <p className="hero-subhead">{city.subHeading}</p>
            {city.heroParagraphs.map((para, idx) => (
              <p key={idx} className="hero-desc">{para}</p>
            ))}

            <div className="hero-actions">
              <a href="#quote-form" className="btn btn-primary btn-lg">
                Get a {city.name} Quote <span className="btn-arrow">&rarr;</span>
              </a>
              <a href="#quote-form" className="btn btn-outline-white btn-lg">
                Send Your Size List
              </a>
              <a href="tel:+916264131446" className="btn btn-outline-white btn-lg">
                Call +91 62641 31446
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust strip */}
      <section className="trust-strip">
        <div className="container">
          <h2 className="trust-title">{city.trustTitle}</h2>
          <div className="stats-grid">
            {city.trustStats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sublabel">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why City */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Regional Analysis</span>
            <h2>{city.whyTitle}</h2>
            <h3>{city.whySubtitle}</h3>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {city.whyParagraphs.map((p, idx) => (
              <p key={idx} style={{ marginTop: idx > 0 ? '1rem' : 0 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The range */}
      <section className="section section-light" id="nipple-range">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Local Demand Profile</span>
            <h2>The SS Nipples {city.name} Buyers Order Most</h2>
            <h3>Choose by connection type, then size, then grade</h3>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <h3 className="feature-card-title">SS Hex Nipple</h3>
              <p className="feature-card-desc">
                The industrial workhorse. The hexagon lets you hold the nipple with a spanner while tightening, protecting threads and providing a leak-tight joint.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">SS Barrel Nipple</h3>
              <p className="feature-card-desc">
                Threaded at both ends with a plain, unthreaded centre. Used where you need length between a valve and a tee or pump outlet.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">SS Close Nipple</h3>
              <p className="feature-card-desc">
                Fully threaded along its entire body so fittings sit nearly touching. Common on compact equipment manifolds and instrument panels.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">SS Reducing Nipple</h3>
              <p className="feature-card-desc">
                Steps a line up or down from one nominal size to another (e.g. ¾" down to ½") at gauge, sensor, or pump connections.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">SS Hose Nipple</h3>
              <p className="feature-card-desc">
                Barbed or ribbed end for gripping flexible hose securely, with a threaded pipe end for the rigid machine connection.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">Custom CNC Nipples</h3>
              <p className="feature-card-desc">
                Special lengths, mixed-thread ends (BSPT to NPT), and non-standard hex flats machined to drawing for OEM and prototype work.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="#quote-form" className="btn btn-primary btn-lg">
              Request {city.name} Price List &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: City supply snapshot */}
      <section className="section" id="specifications">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Engineer's Matrix</span>
            <h2>{city.snapshotTitle}</h2>
            <h3>Engineering reference matrix for {city.name} industrial environments</h3>
          </div>

          <div className="table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Application / Duty</th>
                  <th>Grade</th>
                  <th>Type</th>
                  <th>Thread</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {city.snapshotTable.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.app}</strong></td>
                    <td>{row.grade}</td>
                    <td>{row.type}</td>
                    <td>{row.thread}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {city.snapshotNote && (
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              {city.snapshotNote}
            </p>
          )}
        </div>
      </section>

      {/* Section 6: Choosing the right nipple */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Checklist</span>
            <h2>Four Questions to Ask Before You Order</h2>
            <h3>Tailored specifically for {city.name} conditions</h3>
          </div>

          <div className="four-questions-grid">
            {city.questions.map((q) => (
              <div key={q.num} className="question-card">
                <div className="question-num">{q.num}</div>
                <h3 className="question-title">{q.title}</h3>
                <p className="question-text">{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Material guide */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Metallurgy</span>
            <h2>SS 304, SS 316, MS or Brass: {city.name} Edition</h2>
            <h3>Match the material to the line environment, not just the budget</h3>
          </div>

          <div className="table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Fine when…</th>
                  <th>Think twice when…</th>
                </tr>
              </thead>
              <tbody>
                {city.materialTable.map((m, idx) => (
                  <tr key={idx}>
                    <td><strong>{m.mat}</strong></td>
                    <td>{m.good}</td>
                    <td>{m.bad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {city.materialRule && (
            <p style={{ marginTop: '1.25rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              {city.materialRule}
            </p>
          )}
        </div>
      </section>

      {/* Section 8: Local conditions */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Operational Realities</span>
            <h2>{city.conditionsTitle}</h2>
            <h3>{city.conditionsSubtitle}</h3>
          </div>

          <div className="conditions-grid">
            {city.conditions.map((cond, idx) => (
              <div key={idx} className="condition-item">
                <h4>{cond.title}</h4>
                <p>{cond.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Fitting tips */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Installation Advice</span>
            <h2>Fitting Stainless Nipples Without Headaches</h2>
            <h3>Field practices that save plant hours and prevent leaks</h3>
          </div>

          <ul className="tips-list">
            {city.fittingTips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 10: Custom nipples */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">CNC Machining</span>
            <h2>Special Nipples for {city.name} Fabricators and OEMs</h2>
            <h3>When the catalogue size isn't the size you need</h3>
          </div>
          <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            We CNC-machine nipples to drawing or sample in stainless steel, mild steel, brass and aluminium. Typical {city.name} custom requests include:
          </p>

          <ul style={{ maxWidth: '850px', margin: '1.5rem auto', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            {city.customDetails.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="#quote-form" className="btn btn-primary btn-lg">
              Upload Your Drawing or Sample &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Section 11: Complete the line */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Complete Supply</span>
            <h2>Order Couplings, Flanges and Pipes With Your Nipples</h2>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p>{city.completeLineText}</p>
          </div>
        </div>
      </section>

      {/* Section 12: Industries */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Sectors Served</span>
            <h2>Where {city.name}'s SS Nipples Go</h2>
          </div>

          <div className="cards-grid">
            {city.industries.map((ind, idx) => (
              <div key={idx} className="feature-card">
                <h3 className="feature-card-title">{ind.name}</h3>
                <p className="feature-card-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 13: Why Sunrise */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Our Commitment</span>
            <h2>Why {city.name} Buyers Choose Sunrise</h2>
          </div>

          <ul className="why-list">
            {city.whySunrise.map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 14: Delivery and ordering */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Logistics</span>
            <h2>From Ahmedabad to {city.name}: How It Works</h2>
            <h3>Direct dispatches with established road freight carriers</h3>
          </div>

          <ol className="steps-list">
            {city.deliverySteps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 15: FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">FAQs</span>
            <h2>{city.name} SS Nipple FAQs</h2>
          </div>

          <FaqAccordion items={city.faqs} />
        </div>
      </section>

      {/* Section 16: Final CTA & Interlinks */}
      <section className="section section-light" id="quote-form">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="tagline-badge">Direct Factory Quotation</span>
          <h2>{city.ctaHeadline}</h2>
          <h3 style={{ color: 'var(--text-muted)', fontWeight: 500, marginBottom: '2rem' }}>
            {city.ctaSub}
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="tel:+916264131446" className="btn btn-primary btn-lg">
              Call +91 62641 31446 <span className="btn-arrow">&rarr;</span>
            </a>
            <a href="mailto:sales@sunrise.industries" className="btn btn-outline btn-lg">
              Email {city.name} RFQ
            </a>
          </div>

          {/* Interlinking Neighbouring Cities */}
          {city.neighbourLinks && city.neighbourLinks.length > 0 && (
            <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--light-border)', textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Neighbouring Industrial Supply Belts:</h4>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
                {city.neighbourLinks.map((nb) => (
                  <Link key={nb.slug} to={`/tamil-nadu/${nb.slug}`} style={{ color: 'var(--primary-dark)', fontWeight: 600 }}>
                    &rarr; {nb.name}
                  </Link>
                ))}
                <Link to="/cities-we-serve" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>
                  &rarr; All Cities We Serve (India &rarr; Tamil Nadu)
                </Link>
                <Link to="/" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  &larr; Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
