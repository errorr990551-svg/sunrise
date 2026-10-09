import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { citiesData } from '../data/citiesData';
import FaqAccordion from '../components/FaqAccordion';

// Industry background image mapping
const industryImages = [
  '/assets/images/water.jpg.jpeg',
  '/assets/images/chemical process line.jpg.jpeg',
  '/assets/images/food and bevrages.jpg.jpeg',
  '/assets/images/Pharma & Clean Utilities.jpg.jpeg',
  '/assets/images/Oil, Gas & Energy.jpg.jpeg',
  '/assets/images/Marine & Port Side.jpg.jpeg'
];

const industryIcons = ['🚗', '⚡', '🏭', '⚗️', '⚓', '💧'];

export default function CityDetail() {
  const { citySlug } = useParams();
  const city = citiesData[citySlug];

  React.useEffect(() => {
    if (city) {
      document.title = city.title || `${city.name} | Sunrise Industries`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && city.metaDescription) {
        metaDesc.setAttribute('content', city.metaDescription);
      }
    }
  }, [city]);

  if (!city) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2>City Hub Not Found</h2>
        <p style={{ margin: '1.5rem 0', color: 'var(--text-muted)' }}>
          Please select one of our active industrial supply regions across India:
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/market-area" className="btn btn-primary btn-sm">
            View All Cities We Serve (Market Area) &rarr;
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Section 1: Hero Banner */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="separator">/</span>
              <Link to="/market-area">Market Area</Link>
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
              <a href="#nipple-range" className="btn btn-outline-white btn-lg">
                View All Products &rarr;
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

      {/* Section 3: Regional Analysis (Industrial Fundamentals 2-Col Style) */}
      <section className="section" id="regional-analysis">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Regional Analysis</span>
            <h2>{city.whyTitle}</h2>
            <h3>{city.whySubtitle}</h3>
          </div>

          <div className="fundamentals-two-col">
            <div className="fundamentals-text">
              {city.whyParagraphs.map((p, idx) => (
                <p key={idx} style={{ marginTop: idx > 0 ? '1.25rem' : 0 }}>{p}</p>
              ))}
            </div>

            <div className="fundamentals-photo-card">
              <img 
                src="/assets/images/Stainless Steel Pipe Fittings Collection.png" 
                alt={`Stainless Steel Pipe Fittings and Nipples for ${city.name}`} 
                loading="lazy"
              />
              <span className="photo-caption-badge">Precision Joints for {city.name} Industrial Plants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Product Range (From One Manufacturer + Split Header + Photos) */}
      <section className="section section-light" id="nipple-range">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="tagline-badge">Local Demand Profile</span>
              <h2>The SS Nipples {city.name} Buyers Order Most</h2>
              <h3 style={{ margin: 0 }}>Choose by connection type, then size, then stainless grade</h3>
            </div>
            <div>
              <a href="#specifications" className="btn btn-outline">
                View All Products &rarr;
              </a>
            </div>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/SS Hex Nipple.png" alt="SS Hex Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Hex Nipple</h3>
              <p className="feature-card-desc">
                The industrial workhorse. The hexagon lets you hold the nipple with a spanner while tightening, protecting threads and providing a leak-tight joint.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/ss barrel nipple.png" alt="SS Barrel Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Barrel Nipple</h3>
              <p className="feature-card-desc">
                Threaded at both ends with a plain, unthreaded centre. Used where you need length between a valve and a tee, pump outlet or manifold port.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/SS Close Nipple.png" alt="SS Close Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Close Nipple</h3>
              <p className="feature-card-desc">
                Fully threaded along its entire body so fittings sit nearly touching. Common on compact equipment manifolds, skids and instrument panels.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/SS Reducing Nipple.png" alt="SS Reducing Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Reducing Nipple</h3>
              <p className="feature-card-desc">
                Steps a line up or down from one nominal size to another (e.g. ¾" down to ½") at gauge, sensor, or pump connections without redundant fittings.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/7a8533f9-c0ee-4957-8664-a72711dc71b7.png" alt="SS Hose Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Hose Nipple</h3>
              <p className="feature-card-desc">
                Barbed or ribbed end for gripping flexible hose securely, with a threaded pipe end for the rigid machine connection.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/Custom CNC Nipples.png" alt="Custom CNC Nipples" loading="lazy" />
              </div>
              <h3 className="feature-card-title">Custom CNC Nipples</h3>
              <p className="feature-card-desc">
                Special lengths, mixed-thread ends (BSPT to NPT), and non-standard hex flats machined to drawing for OEM and prototype requirements.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="#quote-form" className="btn btn-primary btn-lg">
              Request {city.name} Nipple Price List &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Engineering Excellence Banner */}
      <section className="section section-dark" id="engineering-excellence">
        <div className="container">
          <div className="engineering-split-grid">
            <div className="engineering-content">
              <span className="tagline-badge" style={{ color: 'var(--primary)', background: 'rgba(245, 166, 35, 0.15)' }}>
                Engineering Excellence
              </span>
              <h2>Precision CNC Turning for {city.name} Industrial Plants</h2>
              <p>
                Need a custom SS nipple that isn't in any catalogue? Our engineering team in Ahmedabad takes your drawing or sample from first prototype to full-scale production, with material selection, CNC machining, threading and inspection all done under one roof. We machine hex, barrel, close and reducing nipples in SS 304 and SS 316, in BSP, BSPT and NPT threads, and in special lengths, mixed threads and non-standard hex sizes. With 10+ production lines, an ISO 9001:2015 certified quality system and fast dispatch to {city.name}, we deliver precision components that fit the first time.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary btn-lg">
                  Request Custom {city.name} Order &rarr;
                </a>
              </div>
            </div>

            <div className="engineering-photo-card">
              <img 
                src="/assets/images/custom fabrication.png" 
                alt={`Precision CNC Machining Facility for ${city.name} - Sunrise Industries`} 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Engineer's Matrix (Proper Table with Borders + 2 Photos) */}
      <section className="section" id="specifications">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Engineer's Matrix</span>
            <h2>{city.snapshotTitle}</h2>
            <h3>Engineering reference matrix for {city.name} industrial environments</h3>
          </div>

          <div className="specs-split-grid">
            <div>
              <div style={{ overflowX: 'auto' }}>
                <table className="specs-table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: '32%' }}>Application / Duty</th>
                      <th>Grade</th>
                      <th>Type</th>
                      <th>Thread / Wall</th>
                      <th>Engineering Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {city.snapshotTable.map((row, idx) => (
                      <tr key={idx}>
                        <td><strong>{row.app}</strong></td>
                        <td><span className="badge badge-316">{row.grade}</span></td>
                        <td>{row.type}</td>
                        <td>{row.thread || row.wall || 'BSPT / NPT'}</td>
                        <td>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {city.snapshotNote && (
                <p style={{ marginTop: '1.25rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  {city.snapshotNote}
                </p>
              )}
            </div>

            <div className="specs-photos-stack">
              <div className="specs-photo-card">
                <img src="/assets/images/nipples-range.jpg" alt={`${city.name} SS Nipple Stock Range`} loading="lazy" />
                <h4>Certified Stock Sizes (⅛" to 4")</h4>
                <p>SS 304 &amp; 316 with stamped grade &amp; thread identification.</p>
              </div>

              <div className="specs-photo-card">
                <img src="/assets/images/Custom CNC Nipples.png" alt={`${city.name} Custom Machined Nipples`} loading="lazy" />
                <h4>Heavy Duty Schedule 80 Types</h4>
                <p>NPT and BSP threads machined to exact mating specs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Four Questions (Iota Flow Step Cards Style) */}
      <section className="section section-light" id="buying-checklist">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Buying Guide</span>
            <h2>{city.questionsTitle || `Questions to Ask Before You Order in ${city.name}`}</h2>
            <h3>{city.questionsSubtitle || `Tailored specifically for ${city.name}'s industrial conditions`}</h3>
          </div>

          <div className="iota-steps-flow">
            {city.questions.map((q, idx) => (
              <div key={q.num} className="iota-step-card">
                <div className="iota-step-top">
                  <span className="iota-step-num">{q.num}</span>
                  <div className="iota-step-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="iota-step-title">{q.title}</h3>
                <p className="iota-step-desc">{q.text}</p>
                {idx < city.questions.length - 1 && (
                  <div className="iota-step-connector">&rarr;</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Metallurgy Guide (Centered with Proper Table) */}
      <section className="section" id="metallurgy-guide">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Metallurgy Guide</span>
            <h2>SS 304, SS 316, MS or Brass: {city.name} Edition</h2>
            <h3>Match the material to the line environment, not just the upfront budget</h3>
          </div>

          <div className="metallurgy-center-wrap">
            <div style={{ overflowX: 'auto' }}>
              <table className="metallurgy-table-center">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Works Well When…</th>
                    <th>Think Twice When…</th>
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
              <p style={{ marginTop: '1.75rem', fontStyle: 'italic', color: 'var(--text-muted)', textAlign: 'center', fontSize: '1rem' }}>
                {city.materialRule}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Section 9: Operational Realities & Fitting Tips (Iota Flow Careers Style) */}
      <section className="section section-light" id="best-practices">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Operational Realities</span>
            <h2>{city.conditionsTitle}</h2>
            <h3>{city.conditionsSubtitle}</h3>
          </div>

          <div className="best-practices-grid">
            {city.conditions.map((cond, idx) => (
              <div key={idx} className="best-practice-card">
                <div className="bp-icon-badge">
                  {idx === 0 ? '🌊' : idx === 1 ? '🌧️' : idx === 2 ? '⚡' : idx === 3 ? '⚙️' : '⏱️'}
                </div>
                <h3 className="best-practice-title">{cond.title}</h3>
                <p className="best-practice-desc">{cond.text}</p>
              </div>
            ))}
          </div>

          {/* Fitting Tips Grid */}
          <div style={{ marginTop: '4rem' }}>
            <div className="section-header text-center">
              <span className="tagline-badge">Field Fitting Advice</span>
              <h2>Fitting Stainless Nipples in {city.name} Without Headaches</h2>
              <h3>Practical field habits that save plant hours and prevent leaks</h3>
            </div>

            <div className="best-practices-grid">
              {city.fittingTips.map((tip, idx) => (
                <div key={idx} className="best-practice-card">
                  <div className="bp-icon-badge">🔧</div>
                  <h3 className="best-practice-title">Tip {idx + 1}</h3>
                  <p className="best-practice-desc">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Custom Nipples (Photo Left, Content Right) */}
      <section className="section" id="custom-fabrication">
        <div className="container">
          <div className="custom-fab-grid">
            <div className="custom-fab-photo">
              <img 
                src="/assets/images/custom fabrication.png" 
                alt={`Custom CNC Machined SS Nipples for ${city.name}`} 
                loading="lazy" 
              />
            </div>

            <div className="custom-fab-content">
              <span className="tagline-badge">CNC Machining</span>
              <h2>Special Nipples for {city.name} Fabricators and OEMs</h2>
              <p style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
                When the catalogue size isn't the size you need. We CNC-machine nipples to drawing or sample in stainless steel, mild steel, brass and aluminium:
              </p>

              <div className="custom-fab-list">
                {city.customDetails.map((detail, idx) => (
                  <div key={idx} className="custom-fab-item">
                    <span className="custom-fab-bullet">&bull;</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="#quote-form" className="btn btn-primary btn-lg">
                  Upload Your Drawing or Sample &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Complete Supply / Complementary Products */}
      <section className="section section-light" id="complementary-products">
        <div className="container">
          <div className="complementary-grid">
            <div>
              <span className="tagline-badge">Complete Supply</span>
              <h2>Order Couplings, Flanges and Pipes With Your Nipples</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {city.completeLineText}
              </p>
              <ul style={{ margin: '1rem 0 1.5rem 1.25rem', lineHeight: '1.9', color: 'var(--text-primary)' }}>
                <li>&bull; <strong>SS Couplings &amp; Sockets:</strong> Full, half and reducing couplings</li>
                <li>&bull; <strong>SS Companion Flanges:</strong> Table D/E, ANSI 150/300# slip-on &amp; blind</li>
                <li>&bull; <strong>IC Investment Cast Fittings:</strong> High precision 90° elbows, tees and unions</li>
                <li>&bull; <strong>Pipes &amp; Tubes:</strong> ASTM A312 seamless and welded in SS 304 and 316</li>
              </ul>
              <p style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
                Direct dispatch from Ahmedabad ensures synchronized delivery for your entire piping bill of materials.
              </p>
            </div>

            <div className="complementary-photo-card">
              <img 
                src="/assets/images/Stainless Steel Pipe Fittings Collection.png" 
                alt={`Pipe Fitting Range for ${city.name}`} 
                loading="lazy" 
              />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Full Jointing Hardware Range</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Manufactured and stocked under one roof at Sunrise Industries.
              </p>
              <a href="#quote-form" className="btn btn-primary" style={{ width: '100%' }}>
                View All Products &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Where City's SS Nipples Go / Industries Served (Agrifuture Style Cards) */}
      <section className="section" id="industries">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Sectors Served</span>
            <h2>Where {city.name}'s SS Nipples Go</h2>
            <h3>Engineered piping solutions for {city.name}'s core manufacturing clusters</h3>
          </div>

          <div className="agri-apps-grid">
            {city.industries.map((ind, idx) => (
              <div 
                key={idx}
                className="agri-app-card"
                style={{ backgroundImage: `url('${industryImages[idx % industryImages.length]}')` }}
              >
                <div className="agri-app-content">
                  <span className="agri-app-icon">{industryIcons[idx % industryIcons.length]}</span>
                  <h3 className="agri-app-title">{ind.name}</h3>
                  <p className="agri-app-desc">{ind.desc}</p>
                  <div className="agri-app-pills">
                    <span className="agri-app-pill">SS 316 / 304</span>
                    <span className="agri-app-pill">SCH 40 / 80</span>
                    <span className="agri-app-pill">BSP / NPT</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 13: Why City Buyers Choose Sunrise (Iota Flow Style with Arrows + Worker Photo) */}
      <section className="section section-light" id="why-sunrise">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Our Commitment</span>
            <h2>Why {city.name} Buyers Choose Sunrise for SS Nipples</h2>
            <h3>Direct manufacturer accountability from Ahmedabad to {city.name}</h3>
          </div>

          <div className="why-choose-iota-grid">
            <div className="why-choose-photo-side">
              <img 
                src="/assets/images/why choose us.png" 
                alt="Sunrise Industries CNC Machining Shop" 
                loading="lazy" 
              />
              <div className="why-choose-badge-overlay">
                <strong>Sunrise Industries Direct Supply</strong>
                <span>Supplying {city.name} plants with ISO 9001:2015 certified fittings</span>
              </div>
            </div>

            <div className="why-choose-flow-side">
              {city.whySunrise.map((reason, idx) => (
                <React.Fragment key={idx}>
                  <div className="why-flow-item">
                    <div className="why-flow-icon">✓</div>
                    <div className="why-flow-text">
                      <h4>Pillar {idx + 1}</h4>
                      <p>{reason}</p>
                    </div>
                  </div>
                  {idx < city.whySunrise.length - 1 && (
                    <div className="why-flow-arrow">&darr;</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Logistics / How It Works (Agrifuture Installation, Delivery & Support Style) */}
      <section className="section" id="logistics">
        <div className="container">
          <div className="agri-order-container">
            <div className="agri-order-header">
              <h2>From Ahmedabad to {city.name}: How It Works</h2>
              <p>Direct dispatches with established road freight carriers across {city.stateName || 'Tamil Nadu'}.</p>
            </div>

            <div className="agri-order-grid">
              {city.deliverySteps.map((step, idx) => (
                <div key={idx} className="agri-order-card">
                  <div className="agri-order-icon">
                    {idx === 0 ? '📋' : idx === 1 ? '💰' : idx === 2 ? '⚙️' : '🚚'}
                  </div>
                  <h3>Step {idx + 1}</h3>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 15: FAQ (Centered Content) */}
      <section className="section section-light" id="faq">
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div className="section-header text-center">
            <span className="tagline-badge">FAQs</span>
            <h2>{city.name} SS Nipple Frequently Asked Questions</h2>
            <h3>Direct engineering answers for buyers and project engineers in {city.name}</h3>
          </div>

          <FaqAccordion items={city.faqs} />
        </div>
      </section>

      {/* Section 16: Final CTA (Agrifuture Bottom CTA Style + Interlinks) */}
      <section className="section" id="quote-form">
        <div className="container">
          <div className="agri-cta-box">
            <div className="agri-cta-text">
              <h2>{city.ctaHeadline}</h2>
              <p>{city.ctaSub}</p>
            </div>
            <div className="agri-cta-btns">
              <a href="tel:+916264131446" className="agri-cta-btn-primary">
                Call +91 62641 31446 &rarr;
              </a>
              <a href="#nipple-range" className="agri-cta-btn-secondary">
                View All Products &rarr;
              </a>
            </div>
          </div>

          {/* Interlinking Neighbouring Cities */}
          {city.neighbourLinks && city.neighbourLinks.length > 0 && (
            <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--light-border)', textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>Neighbouring Industrial Supply Belts:</h4>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
                {city.neighbourLinks.map((nb) => (
                  <Link 
                    key={nb.slug || nb.name} 
                    to={nb.to || `/${nb.stateSlug || city.stateSlug || (city.stateName === 'Madhya Pradesh' ? 'madhya-pradesh' : (city.stateName === 'West Bengal' ? 'west-bengal' : (city.stateName === 'Telangana' ? 'telangana' : (city.stateName === 'Maharashtra' ? 'maharashtra' : (city.stateName === 'Karnataka' ? 'karnataka' : 'tamil-nadu')))))}/${nb.slug}`} 
                    style={{ color: 'var(--primary-dark)', fontWeight: 600 }}
                  >
                    &rarr; {nb.name}
                  </Link>
                ))}
                <Link to="/market-area" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>
                  &rarr; All Cities We Serve (Market Area)
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
