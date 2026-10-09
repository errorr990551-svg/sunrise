import React from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';

const homeFaqs = [
  { q: 'What is an SS nipple?', a: 'A short piece of stainless steel pipe, threaded on one or both ends, used to connect two pipe fittings such as valves, couplings or elbows.' },
  { q: 'What is the difference between a hex nipple and a barrel nipple?', a: 'A hex nipple has a hexagonal centre for spanner grip during assembly. A barrel nipple has a plain, unthreaded middle section and gives more reach between fittings.' },
  { q: 'What is a close nipple?', a: 'A close nipple is threaded along its full length so connected fittings sit almost touching. It is used in tight spaces such as manifolds and instrument panels.' },
  { q: 'What is a reducing nipple?', a: 'A nipple with different thread sizes at each end (for example ½" to ¾"), used to step a line up or down.' },
  { q: 'Should I choose SS 304 or SS 316?', a: 'SS 304 suits general wet use, steam and food contact. SS 316 and 316L resist salt, chlorides and harsh chemicals better, so choose them for coastal, marine and chemical process lines.' },
  { q: 'What is the difference between BSP and NPT threads?', a: 'NPT has a 60° thread angle and BSP has 55°. They are not interchangeable even when the diameters look similar. Tell us your mating fitting and we will match it.' },
  { q: 'What does Schedule 40 or 80 mean?', a: "It is the pipe wall-thickness class. Schedule 80 is thicker than 40 and used for higher operating pressure or heavier duty." },
  { q: 'Can you make custom-size or custom-thread nipples?', a: 'Yes. We CNC-machine nipples to your drawing in stainless steel, mild steel, brass and aluminium.' },
  { q: 'Do you supply SS nipples in bulk to dealers?', a: 'Yes. Send your fast-moving size list for wholesale distributor pricing.' },
  { q: 'Do you export SS nipples?', a: 'Yes, we regularly export to 5+ countries with sea-worthy packing and full documentation.' },
  { q: 'Can you supply material test certificates?', a: 'We can discuss and provide chemical and mechanical test certificates with your order.' },
  { q: 'Where are you located?', a: '125-41, Small Scale Co Op Ind Estate Ltd, B/H Ajit Mill, Rakhiyal Road, Ahmedabad 380023, Gujarat, India.' }
];

export default function Home() {
  return (
    <>
      {/* Section 1: Hero Banner */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tagline">
              <h2>SS Nipple Manufacturer, Stockist and Exporter</h2>
            </div>
            <h1>Stainless Steel Nipples, Stocked and Made to Order in India</h1>
            <p className="hero-subhead">
              Hex, barrel, close, reducing and hose nipples in SS 304 and SS 316, plus MS and brass. Standard sizes from stock, special sizes machined to your drawing.
            </p>
            <p className="hero-desc">
              A nipple is a small part that causes big problems when it's wrong. A thread that doesn't match, a grade that corrodes in six months, a length that leaves no room for a spanner: any of these can stop a line or a production shift. Sunrise Industries has been manufacturing and supplying stainless steel nipples in Ahmedabad for all over india since 2010, and we treat the small part with the care the big system deserves.
            </p>

            <div className="hero-actions">
              <a href="#quote-form" className="btn btn-primary btn-lg">
                Get a Nipple Quote <span className="btn-arrow">&rarr;</span>
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
          <h2 className="trust-title">Established 2010. ISO 9001:2015 Certified. Exporting to 5+ Countries.</h2>
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
              <div className="stat-label">Export Countries</div>
              <div className="stat-sublabel">Global shipment readiness</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">ISO</div>
              <div className="stat-label">9001:2015</div>
              <div className="stat-sublabel">Certified QMS system</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Industrial Fundamentals (Paragraph left margin, Pic right side) */}
      <section className="section" id="what-is-nipple">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Industrial Fundamentals</span>
            <h2>What Is an SS Nipple, and Why Does It Matter?</h2>
            <h3>A short piece of pipe that joins two fittings, and holds the whole joint together</h3>
          </div>

          <div className="fundamentals-two-col">
            <div className="fundamentals-text">
              <p>
                A stainless steel pipe nipple is a short length of pipe, threaded on one or both ends, that connects two other fittings such as valves, couplings, elbows, tees, pumps or tanks. You'll find them on water lines, steam headers, compressed-air drops, chemical dosing lines, gauge connections and hundreds of other places inside an industrial plant.
              </p>
              <p style={{ marginTop: '1.25rem' }}>
                People choose stainless for nipples because the part sits in the wet, hot or corrosive spots of a system, where mild steel rusts and galvanised steel flakes. A stainless nipple lasts longer, stays cleaner and doesn't contaminate the fluid passing through it. That matters for food, dairy, pharma and water applications, and for any line where a leak means expensive downtime.
              </p>
              <p style={{ marginTop: '1.25rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                At Sunrise, nipples are our primary product line. We hold extensive ready stock in common sizes, and because we operate our own precision CNC machining shop, we manufacture uncommon and drawing-specific nipples under the same roof.
              </p>
            </div>

            <div className="fundamentals-photo-card">
              <img 
                src="/assets/images/Stainless Steel Pipe Fittings Collection.png" 
                alt="Stainless Steel Pipe Fittings Collection - Sunrise Industries" 
                loading="lazy"
              />
              <span className="photo-caption-badge">SS Nipple Range</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Product Range (From One Manufacturer + Right side View All Products button) */}
      <section className="section section-light" id="nipple-range">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="tagline-badge">Product Range</span>
              <h2>Every Type of SS Nipple, From One Manufacturer</h2>
              <h3 style={{ margin: 0 }}>Choose by how the joint is built, not just by size</h3>
            </div>
            <div>
              <Link to="/products" className="btn btn-outline">
                View All Products &rarr;
              </Link>
            </div>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/SS Hex Nipple.png" alt="SS Hex Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Hex Nipple</h3>
              <p className="feature-card-desc">
                A hexagon in the middle lets you grip it with a spanner while tightening, so the thread seats properly without damaging the surface. Available as equal and reducing hex nipples.
              </p>
              <Link to="/product/ss-hex-nipple" className="feature-card-btn">View Product &rarr;</Link>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/ss barrel nipple.png" alt="SS Barrel Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Barrel Nipple</h3>
              <p className="feature-card-desc">
                Threaded at both ends with a plain, unthreaded section in the centre. That plain section gives you reach between fittings and a clean surface to hold during installation.
              </p>
              <Link to="/product/ss-barrel-nipple" className="feature-card-btn">View Product &rarr;</Link>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/SS Close Nipple.png" alt="SS Close Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Close Nipple</h3>
              <p className="feature-card-desc">
                Threaded along its entire length, so the fittings you connect sit almost touching. Ideal for tight spaces like compact manifolds, gauge clusters and skids.
              </p>
              <Link to="/product/ss-close-nipple" className="feature-card-btn">View Product &rarr;</Link>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/SS Reducing Nipple.png" alt="SS Reducing Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Reducing Nipple</h3>
              <p className="feature-card-desc">
                Different thread sizes on each end (e.g. ½" to ¾"). Used where a line steps up or down in size at pumps, valves or instrument ports without adding extra reducers.
              </p>
              <Link to="/product/ss-reducing-nipple" className="feature-card-btn">View Product &rarr;</Link>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/Custom CNC Nipples.png" alt="SS Hose Nipple" loading="lazy" />
              </div>
              <h3 className="feature-card-title">SS Hose Nipple</h3>
              <p className="feature-card-desc">
                A barbed or ribbed end that securely grips flexible hose, paired with a precision threaded end for the rigid connection. Common in water, air and utility hookups.
              </p>
              <Link to="/product/ss-hose-nipple" className="feature-card-btn">View Product &rarr;</Link>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/Custom CNC Nipples.png" alt="Long & Custom Nipples" loading="lazy" />
              </div>
              <h3 className="feature-card-title">Long &amp; Custom Nipples</h3>
              <p className="feature-card-desc">
                Special lengths, mixed thread combinations, non-standard hex across-flats sizes and drawing-specific parts machined to precise engineering tolerances.
              </p>
              <Link to="/product/ss-long-nipple" className="feature-card-btn">View Product &rarr;</Link>
            </div>

            <div className="feature-card">
              <div className="product-thumb-wrap">
                <img src="/assets/images/SS Close Nipple.png" alt="MS Nipples" loading="lazy" />
              </div>
              <h3 className="feature-card-title">MS &amp; Carbon Steel Nipples</h3>
              <p className="feature-card-desc">
                Mild steel nipples in black phosphated and hot-dip galvanised finishes for water, air, fire sprinkler and structural lines.
              </p>
              <Link to="/product-category/ms-nipples" className="feature-card-btn">View Category &rarr;</Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="#quote-form" className="btn btn-primary btn-lg">
              Request Our Nipple Price List &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Engineering Excellence (Content on one side, Video holder on another) */}
      <section className="section section-dark" id="cad-prototype">
        <div className="container">
          <div className="engineering-split-grid">
            <div className="engineering-content">
              <span className="tagline-badge" style={{ color: 'var(--primary)', background: 'rgba(245, 166, 35, 0.15)' }}>
                Engineering Excellence
              </span>
              <h2>Seamless Transition from Prototype to Production</h2>
              <p>
                Need a custom SS nipple that isn't in any catalogue? Our engineering team in Ahmedabad takes your drawing or sample from first prototype to full-scale production, with material selection, CNC machining, threading and inspection all done under one roof. We machine hex, barrel, close and reducing nipples in SS 304 and SS 316, in BSP, BSPT and NPT threads, and in special lengths, mixed threads and non-standard hex sizes. With 10+ production lines, an ISO 9001:2015 certified quality system and exports to 5+ countries, we deliver precision stainless steel and turned components that fit the first time and stay consistent from batch to batch.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#quote-form" className="btn btn-primary btn-lg">
                  Request Your Custom Order &rarr;
                </a>
              </div>
            </div>

            <div className="engineering-photo-card">
              <img 
                src="/assets/images/custom fabrication.png" 
                alt="Precision CNC Machining Facility - Sunrise Industries" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Technical Data (Proper Table with borders + Two product photos on right) */}
      <section className="section" id="specifications">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Technical Data</span>
            <h2>SS Nipple Specifications</h2>
            <h3>What we offer, in one clear table</h3>
          </div>

          <div className="specs-split-grid">
            <div>
              <div style={{ overflowX: 'auto' }}>
                <table className="specs-table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: '38%' }}>Parameter</th>
                      <th>What We Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Material Grades</strong></td>
                      <td>SS 304, SS 304L, SS 316, SS 316L, Mild Steel, Brass</td>
                    </tr>
                    <tr>
                      <td><strong>Nipple Configurations</strong></td>
                      <td>Hex Nipple, Barrel Nipple, Close Nipple, Reducing Nipple, Hose Barb, Custom CNC</td>
                    </tr>
                    <tr>
                      <td><strong>Thread Standards</strong></td>
                      <td>BSP (BS 21 parallel/taper), BSPT (55° tapered), NPT (ASME B1.20.1 60° tapered)</td>
                    </tr>
                    <tr>
                      <td><strong>Wall Thickness Classes</strong></td>
                      <td>Schedule 40 (Standard) and Schedule 80 (Heavy Duty Extra Strong)</td>
                    </tr>
                    <tr>
                      <td><strong>Nominal Bore Sizes</strong></td>
                      <td>⅛" up to 4" (standard stock); custom bores machined to order</td>
                    </tr>
                    <tr>
                      <td><strong>Length Variations</strong></td>
                      <td>Standard catalogue lengths and custom cut-to-length as specified</td>
                    </tr>
                    <tr>
                      <td><strong>Raw Material Form</strong></td>
                      <td>Seamless ASTM A312 pipe stock, welded pipe stock or solid hex bar</td>
                    </tr>
                    <tr>
                      <td><strong>Surface Finishes</strong></td>
                      <td>Pickled &amp; passivated, natural machined, mirror buffed, electro-polished</td>
                    </tr>
                    <tr>
                      <td><strong>Applicable Standards</strong></td>
                      <td>ASTM A733, ASME B1.20.1, BS 21, DIN 2982, ISO 9001:2015</td>
                    </tr>
                    <tr>
                      <td><strong>Inspection &amp; Test Certificates</strong></td>
                      <td>EN 10204 3.1 Material Test Certificate, NABL lab test report on request</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: '1.25rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                If your required size or thread angle is non-standard, simply ask. Our in-house CNC shop is specifically equipped to machine custom tolerances.
              </p>
            </div>

            <div className="specs-photos-stack">
              <div className="specs-photo-card">
                <img src="/assets/images/nipples-range.jpg" alt="SS 304 and 316 Nipple Stock Range" loading="lazy" />
                <h4>Standard Stocked Sizes (⅛" to 4")</h4>
                <p>SS 304 &amp; SS 316 with stamped grade &amp; thread identification.</p>
              </div>

              <div className="specs-photo-card">
                <img src="/assets/images/Custom CNC Nipples.png" alt="Precision CNC Machined Nipples" loading="lazy" />
                <h4>Custom Machined &amp; High-Pressure Types</h4>
                <p>Schedule 80 heavy wall, custom threads, and non-standard hexes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Buying Guide (How to Get Started - Iota Flow Style) */}
      <section className="section section-light" id="how-to-get-started">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Buying Guide</span>
            <h2>How to Get Started with Your SS Nipple Requirement</h2>
            <h3>A structured 4-step workflow from engineering spec to rapid dispatch</h3>
          </div>

          <div className="iota-steps-flow">
            <div className="iota-step-card">
              <div className="iota-step-top">
                <span className="iota-step-num">01</span>
                <div className="iota-step-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="iota-step-title">Specify Grade &amp; Duty</h3>
              <p className="iota-step-desc">
                Evaluate your pipeline environment. Select SS 304 for general utilities, steam, water and food lines, or SS 316 for salt, coastal and harsh chemical media.
              </p>
              <div className="iota-step-connector">&rarr;</div>
            </div>

            <div className="iota-step-card">
              <div className="iota-step-top">
                <span className="iota-step-num">02</span>
                <div className="iota-step-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                </div>
              </div>
              <h3 className="iota-step-title">Match Thread &amp; Wall</h3>
              <p className="iota-step-desc">
                Confirm thread family: BSP (55° British Standard) vs NPT (60° American Taper). Pick Schedule 40 standard or Schedule 80 heavy duty wall.
              </p>
              <div className="iota-step-connector">&rarr;</div>
            </div>

            <div className="iota-step-card">
              <div className="iota-step-top">
                <span className="iota-step-num">03</span>
                <div className="iota-step-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="iota-step-title">Share Drawing or Sizes</h3>
              <p className="iota-step-desc">
                Select your required lengths and hex dimensions, or share your 2D/3D CAD drawing or sample part for rapid prototype turnaround.
              </p>
              <div className="iota-step-connector">&rarr;</div>
            </div>

            <div className="iota-step-card">
              <div className="iota-step-top">
                <span className="iota-step-num">04</span>
                <div className="iota-step-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="iota-step-title">Quote &amp; Dispatch</h3>
              <p className="iota-step-desc">
                Receive clear factory-direct pricing with chemical MTC certificates. In-stock orders ship immediately; custom CNC runs dispatch in 3-7 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Metallurgy Guide (Centered Content with Proper Table) */}
      <section className="section" id="metallurgy-guide">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Metallurgy Guide</span>
            <h2>SS 304, SS 316, Mild Steel or Brass Nipples: Which One?</h2>
            <h3>Match the material to the environment, not just the upfront budget</h3>
          </div>

          <div className="metallurgy-center-wrap">
            <div style={{ overflowX: 'auto' }}>
              <table className="metallurgy-table-center">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Works Well In</th>
                    <th>Not Ideal For</th>
                    <th>Typical Plant Applications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="badge badge-304">SS 304</span></td>
                    <td>Water, steam, air, dairy, food contact, indoor wet areas</td>
                    <td>Salt water, strong chlorides, high acid lines</td>
                    <td>General utility lines, brewery, kitchen equipment</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-304">SS 304L</span></td>
                    <td>Same as 304 with superior weldability &amp; low carbon</td>
                    <td>Same as 304</td>
                    <td>Welded manifold pipe assemblies &amp; skids</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-316">SS 316</span></td>
                    <td>Marine, coastal atmosphere, chemical dosing, dye houses</td>
                    <td>Concentrated boiling nitric/hydrochloric acid</td>
                    <td>Chemical process lines, coastal &amp; offshore piping</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-316">SS 316L</span></td>
                    <td>As 316, resists carbide precipitation in welded joints</td>
                    <td>Extremely strong hot acids (check charts)</td>
                    <td>Pharmaceutical sanitary systems &amp; marine skids</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-ms">Mild Steel</span></td>
                    <td>Dry compressed air, structural frames, low-cost oil lines</td>
                    <td>Wet, steam or corrosive environments</td>
                    <td>Hydraulic oil return, dry air headers, machinery frames</td>
                  </tr>
                  <tr>
                    <td><span className="badge badge-brass">Brass</span></td>
                    <td>Potable water, low-pressure gas, pneumatic instrumentation</td>
                    <td>Ammonia, strong acids, galvanic couples with SS</td>
                    <td>Domestic plumbing, pneumatic actuators, gas regulators</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: '1.75rem', fontStyle: 'italic', color: 'var(--text-muted)', textAlign: 'center', fontSize: '1rem' }}>
              A practical rule of thumb: a cheap nipple that rusts out after 9 months costs vastly more in plant downtime than a quality stainless nipple that lasts 10+ years.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Best Practices (Why Join Us in Iota Flow style with relevant icons) */}
      <section className="section section-light" id="best-practices">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Best Practices &amp; Engineering Standards</span>
            <h2>Why Industrial Engineers Rely on Sunrise Precision</h2>
            <h3>Engineered practices that eliminate leaks, galling, and unexpected downtime</h3>
          </div>

          <div className="best-practices-grid">
            <div className="best-practice-card">
              <div className="bp-icon-badge">📐</div>
              <h3 className="best-practice-title">Single-Point CNC Threading</h3>
              <p className="best-practice-desc">
                We use single-point CNC carbide tooling rather than manual dies, ensuring flawless 55° and 60° thread flanks with zero burrs or crest irregularities.
              </p>
            </div>

            <div className="best-practice-card">
              <div className="bp-icon-badge">🔍</div>
              <h3 className="best-practice-title">100% Calibrated Gauge Testing</h3>
              <p className="best-practice-desc">
                Every production batch is tested against precision Go/No-Go calibrated thread ring and plug gauges to ensure reliable, leak-free mating every time.
              </p>
            </div>

            <div className="best-practice-card">
              <div className="bp-icon-badge">🧪</div>
              <h3 className="best-practice-title">Spectro-Verified Raw Material</h3>
              <p className="best-practice-desc">
                Every lot of SS 304 and SS 316 bar and pipe is spectrometer-checked for strict nickel and molybdenum chemistry before machining starts.
              </p>
            </div>

            <div className="best-practice-card">
              <div className="bp-icon-badge">🛡️</div>
              <h3 className="best-practice-title">Pickled &amp; Passivated Surfaces</h3>
              <p className="best-practice-desc">
                All stainless nipples undergo acid pickling and passivation to strip tramp iron and regenerate a durable, corrosion-resistant chromium oxide barrier.
              </p>
            </div>

            <div className="best-practice-card">
              <div className="bp-icon-badge">⚡</div>
              <h3 className="best-practice-title">Zero-Galling Assembly Fit</h3>
              <p className="best-practice-desc">
                Controlled surface roughness (Ra) and consistent lead threads prevent galling or binding during heavy torquing on site.
              </p>
            </div>

            <div className="best-practice-card">
              <div className="bp-icon-badge">📦</div>
              <h3 className="best-practice-title">Protective Thread Caps &amp; Packing</h3>
              <p className="best-practice-desc">
                Nipples are packed with individual thread caps and heavy-duty moisture-proof cartons to eliminate transit dinging and damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Custom Fabrication (Photo in left margin, Content in right margin) */}
      <section className="section" id="custom-fabrication">
        <div className="container">
          <div className="custom-fab-grid">
            <div className="custom-fab-photo">
              <img 
                src="/assets/images/custom fabrication.png" 
                alt="Custom CNC Machining of Stainless Steel Nipples - Sunrise Industries" 
                loading="lazy" 
              />
            </div>

            <div className="custom-fab-content">
              <span className="tagline-badge">Custom Fabrication</span>
              <h2>Can't Find Your Size? We Machine It</h2>
              <p style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
                Catalogue lists only go so far. Sunrise operates dedicated CNC turning centers in Ahmedabad to machine nipples precisely to your drawing specifications.
              </p>
              <p>
                Whether you need specialized lengths, mixed threads to mate foreign equipment, or extra-thick wall Schedule 80 parts, we manufacture custom prototypes and production runs under one roof:
              </p>

              <div className="custom-fab-list">
                <div className="custom-fab-item">
                  <span className="custom-fab-bullet">&bull;</span>
                  <span><strong>Combination Threads:</strong> BSPT on one end and NPT on the other to connect imported machinery to Indian pipework.</span>
                </div>
                <div className="custom-fab-item">
                  <span className="custom-fab-bullet">&bull;</span>
                  <span><strong>Extra-Long Barrel Nipples:</strong> Machined in custom lengths (up to 1000mm) for deep tank penetrations and boiler headers.</span>
                </div>
                <div className="custom-fab-item">
                  <span className="custom-fab-bullet">&bull;</span>
                  <span><strong>Non-Standard Hex Dimensions:</strong> Custom across-flats hex bars machined to fit recessed instrument cavities.</span>
                </div>
                <div className="custom-fab-item">
                  <span className="custom-fab-bullet">&bull;</span>
                  <span><strong>Rapid Prototype to Production:</strong> Sample batches within 48-72 hours followed by volume production.</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="#quote-form" className="btn btn-primary btn-lg">
                  Upload Your Drawing &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Complementary Products (Content to side, one product photoholder with view all products link) */}
      <section className="section section-light" id="complementary-products">
        <div className="container">
          <div className="complementary-grid">
            <div>
              <span className="tagline-badge">Complementary Products</span>
              <h2>Couplings, Flanges, Pipes and More, Ordered Together</h2>
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                One supplier for the whole joint, not just the nipple
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                Most piping installations require more than just nipples. Sunrise stocks and manufactures the complete assembly of high-integrity stainless jointing hardware:
              </p>
              <ul style={{ margin: '1rem 0 1.5rem 1.25rem', lineHeight: '1.9', color: 'var(--text-primary)' }}>
                <li>&bull; <strong>SS Couplings &amp; Sockets:</strong> Full and half couplings for joining pipe &amp; nipples</li>
                <li>&bull; <strong>SS Flanges:</strong> Slip-on, blind, weld neck and threaded companion flanges</li>
                <li>&bull; <strong>IC Investment-Cast Fittings:</strong> SS elbows, tees, unions and cross fittings</li>
                <li>&bull; <strong>Pipes &amp; Tubes:</strong> ASTM A312 seamless, welded and EFW pipes</li>
                <li>&bull; <strong>Raw Materials:</strong> Stainless steel sheets, plates, coils, flats and round bars</li>
              </ul>
              <p style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
                Consolidating your bill of materials with Sunrise means one single purchase order, synchronized dispatch, and zero mismatched thread standards.
              </p>
            </div>

            <div className="complementary-photo-card">
              <img 
                src="/assets/images/Stainless Steel Pipe Fittings Collection.png" 
                alt="Stainless Steel Pipe Fittings and Nipples Range" 
                loading="lazy" 
              />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Full Pipe Fitting Hardware Range</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Available in SS 304, 304L, 316 and 316L in standard BSP and NPT threading.
              </p>
              <a href="#quote-form" className="btn btn-primary" style={{ width: '100%' }}>
                View All Products &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Applications (Centered Content + Photo Cards like Livestock in agrifutureindia.com) */}
      <section className="section" id="applications">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Applications</span>
            <h2>Industries and Applications for SS Nipples</h2>
            <h3>Wherever fluid, gas, or steam lines require a dependable, leak-proof joint</h3>
          </div>

          <div className="agri-apps-grid">
            <div 
              className="agri-app-card"
              style={{ backgroundImage: `url('/assets/images/water.jpg.jpeg')` }}
            >
              <div className="agri-app-content">
                <span className="agri-app-icon">💧</span>
                <h3 className="agri-app-title">Water &amp; Wastewater</h3>
                <p className="agri-app-desc">Pumps, chemical dosing manifolds, filtration skids, RO plants and treatment pipework.</p>
                <div className="agri-app-pills">
                  <span className="agri-app-pill">SS 304 / 316</span>
                  <span className="agri-app-pill">BARREL &amp; HEX</span>
                  <span className="agri-app-pill">BSP THREADS</span>
                </div>
              </div>
            </div>

            <div 
              className="agri-app-card"
              style={{ backgroundImage: `url('/assets/images/chemical process line.jpg.jpeg')` }}
            >
              <div className="agri-app-content">
                <span className="agri-app-icon">⚗️</span>
                <h3 className="agri-app-title">Chemical &amp; Process</h3>
                <p className="agri-app-desc">Corrosion-resistant transfer lines, acid dosing, sampling valves, and instrumentation ports.</p>
                <div className="agri-app-pills">
                  <span className="agri-app-pill">SS 316L</span>
                  <span className="agri-app-pill">SCH 80 HEAVY</span>
                  <span className="agri-app-pill">NPT TAPER</span>
                </div>
              </div>
            </div>

            <div 
              className="agri-app-card"
              style={{ backgroundImage: `url('/assets/images/food and bevrages.jpg.jpeg')` }}
            >
              <div className="agri-app-content">
                <span className="agri-app-icon">🥛</span>
                <h3 className="agri-app-title">Food, Dairy &amp; Beverage</h3>
                <p className="agri-app-desc">Hygienic utility steam lines, CIP clean-in-place lines, milk transfer, and wash-down connections.</p>
                <div className="agri-app-pills">
                  <span className="agri-app-pill">SS 304 FOOD GRADE</span>
                  <span className="agri-app-pill">CLOSE NIPPLE</span>
                  <span className="agri-app-pill">POLISHED</span>
                </div>
              </div>
            </div>

            <div 
              className="agri-app-card"
              style={{ backgroundImage: `url('/assets/images/Pharma & Clean Utilities.jpg.jpeg')` }}
            >
              <div className="agri-app-content">
                <span className="agri-app-icon">💊</span>
                <h3 className="agri-app-title">Pharma &amp; Clean Utilities</h3>
                <p className="agri-app-desc">Clean-steam distribution, WFI loops, nitrogen purge drops, and zero-scale process utilities.</p>
                <div className="agri-app-pills">
                  <span className="agri-app-pill">SS 316L DUAL CERT</span>
                  <span className="agri-app-pill">ELECTROPOLISHED</span>
                  <span className="agri-app-pill">MTC 3.1</span>
                </div>
              </div>
            </div>

            <div 
              className="agri-app-card"
              style={{ backgroundImage: `url('/assets/images/Oil, Gas & Energy.jpg.jpeg')` }}
            >
              <div className="agri-app-content">
                <span className="agri-app-icon">⚡</span>
                <h3 className="agri-app-title">Oil, Gas &amp; Energy</h3>
                <p className="agri-app-desc">High-pressure instrumentation connections, boiler steam headers, turbine lube skids, and fuel lines.</p>
                <div className="agri-app-pills">
                  <span className="agri-app-pill">SCHEDULE 80</span>
                  <span className="agri-app-pill">ASME B1.20.1 NPT</span>
                  <span className="agri-app-pill">HIGH TEMP</span>
                </div>
              </div>
            </div>

            <div 
              className="agri-app-card"
              style={{ backgroundImage: `url('/assets/images/Marine & Port Side.jpg.jpeg')` }}
            >
              <div className="agri-app-content">
                <span className="agri-app-icon">⚓</span>
                <h3 className="agri-app-title">Marine &amp; Port Side</h3>
                <p className="agri-app-desc">Salt-spray exposed dockside fluid transfer, seawater piping, marine scrubbers, and offshore skids.</p>
                <div className="agri-app-pills">
                  <span className="agri-app-pill">SS 316 MO CONTENT</span>
                  <span className="agri-app-pill">SEAWORTHY PACK</span>
                  <span className="agri-app-pill">EXPORT READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Why Choose Us (Iota Flow Style with Arrow Indicators and Factory Worker Photo) */}
      <section className="section section-light" id="why-choose-us">
        <div className="container">
          <div className="section-header text-center">
            <span className="tagline-badge">Why Choose Us</span>
            <h2>Why Buyers Across India Choose Sunrise for SS Nipples</h2>
            <h3>An unbroken chain of engineering reliability from raw billet to finished joint</h3>
          </div>

          <div className="why-choose-iota-grid">
            <div className="why-choose-photo-side">
              <img 
                src="/assets/images/why choose us.png" 
                alt="Sunrise Industries Machinist Operating CNC Machine in Ahmedabad" 
                loading="lazy" 
              />
              <div className="why-choose-badge-overlay">
                <strong>Sunrise Industries Manufacturing Plant</strong>
                <span>ISO 9001:2015 Certified In-House CNC Machining &amp; Quality Inspection Facility</span>
              </div>
            </div>

            <div className="why-choose-flow-side">
              <div className="why-flow-item">
                <div className="why-flow-icon">🏭</div>
                <div className="why-flow-text">
                  <h4>1. Direct Factory Manufacturing</h4>
                  <p>No middlemen markups. Nipples are manufactured directly at our Ahmedabad works with complete batch traceability.</p>
                </div>
              </div>

              <div className="why-flow-arrow">&darr;</div>

              <div className="why-flow-item">
                <div className="why-flow-icon">⚙️</div>
                <div className="why-flow-text">
                  <h4>2. In-House CNC Machining &amp; Customization</h4>
                  <p>10+ production lines machining hex, barrel, close and reducing configurations to your custom drawing specifications.</p>
                </div>
              </div>

              <div className="why-flow-arrow">&darr;</div>

              <div className="why-flow-item">
                <div className="why-flow-icon">📦</div>
                <div className="why-flow-text">
                  <h4>3. Raw Material Stock Under One Roof</h4>
                  <p>Substantial on-site inventory of prime SS 304, 316, brass, and MS rounds ensures zero supply chain hold-ups.</p>
                </div>
              </div>

              <div className="why-flow-arrow">&darr;</div>

              <div className="why-flow-item">
                <div className="why-flow-icon">✓</div>
                <div className="why-flow-text">
                  <h4>4. 100% Quality &amp; Gauge Inspection</h4>
                  <p>Every single thread verified against calibrated ring gauges. Full chemical and physical MTC 3.1 provided with dispatch.</p>
                </div>
              </div>

              <div className="why-flow-arrow">&darr;</div>

              <div className="why-flow-item">
                <div className="why-flow-icon">🚚</div>
                <div className="why-flow-text">
                  <h4>5. Pan-India Dispatch &amp; Global Exports</h4>
                  <p>Rapid dispatch across all 28+ Indian states within 3-7 business days, plus seaworthy export shipping worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: How to Order (Agrifuture Installation, Delivery & Support 4-Card Style) */}
      <section className="section" id="how-to-order">
        <div className="container">
          <div className="agri-order-container">
            <div className="agri-order-header">
              <h2>How to Order SS Nipples From Sunrise</h2>
              <p>Our commitment to your plant's piping reliability — straightforward, swift, and certified.</p>
            </div>

            <div className="agri-order-grid">
              <div className="agri-order-card">
                <div className="agri-order-icon">📋</div>
                <h3>1. Share Your Spec</h3>
                <p>Send your required size, thread standard (BSP/NPT), stainless grade (304/316), wall schedule, and quantities — or upload a CAD drawing.</p>
              </div>

              <div className="agri-order-card">
                <div className="agri-order-icon">💰</div>
                <h3>2. Fast Factory Quotation</h3>
                <p>We confirm transparent factory-direct pricing, availability, timeline, and material test certification options within hours.</p>
              </div>

              <div className="agri-order-card">
                <div className="agri-order-icon">⚙️</div>
                <h3>3. Picked or CNC Machined</h3>
                <p>Standard items are picked immediately from stock; custom fittings are CNC machined and 100% thread gauge inspected.</p>
              </div>

              <div className="agri-order-card">
                <div className="agri-order-icon">🚚</div>
                <h3>4. Pan-India Delivery</h3>
                <p>Dispatched with protective thread caps across India via dependable road freight in 3-7 days, or packed for sea export.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 15: FAQ (Centered Content) */}
      <section className="section section-light" id="faq">
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div className="section-header text-center">
            <span className="tagline-badge">FAQs</span>
            <h2>SS Nipple Frequently Asked Questions</h2>
            <h3>Direct answers to common questions about types, materials, threads, and dispatch</h3>
          </div>

          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      {/* Section 16: Direct Factory Quotation (Agrifuture Bottom CTA Style) */}
      <section className="section" id="quote-form">
        <div className="container">
          <div className="agri-cta-box">
            <div className="agri-cta-text">
              <h2>Need SS Nipples? Tell Us the Size, Type and Quantity.</h2>
              <p>
                Stainless steel nipples, CNC precision fittings, and raw material stock dispatched directly from our Ahmedabad manufacturing facility.
              </p>
            </div>
            <div className="agri-cta-btns">
              <a href="tel:+916264131446" className="agri-cta-btn-primary">
                Get a Quote &rarr;
              </a>
              <a href="#nipple-range" className="agri-cta-btn-secondary">
                View All Products &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
