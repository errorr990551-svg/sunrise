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

const tnCities = [
  { name: 'Chennai', slug: 'chennai', highlight: 'Port & Automotive Hub' },
  { name: 'Coimbatore', slug: 'coimbatore', highlight: 'Pump & Motor Manufacturing' },
  { name: 'Hosur', slug: 'hosur', highlight: 'Auto, EV & Electronics Corridor' },
  { name: 'Tiruppur', slug: 'tiruppur', highlight: 'Knitwear & Dyeing Units' },
  { name: 'Salem', slug: 'salem', highlight: 'Kitchen Equipment & SS Trade' },
  { name: 'Madurai', slug: 'madurai', highlight: 'Hotels, Hospitals & MEP' },
  { name: 'Tiruchirappalli', slug: 'tiruchirappalli', highlight: 'Boiler Ancillaries & Precision' },
  { name: 'Erode', slug: 'erode', highlight: 'Turmeric Processing & Weaving' },
  { name: 'Thoothukudi', slug: 'thoothukudi', highlight: 'Marine-Grade Salt & Port' },
  { name: 'Namakkal', slug: 'namakkal', highlight: 'Truck Body & Borewell Rigs' },
];

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tagline">
              <h2>SS Nipple Manufacturer, Stockist and Exporter</h2>
            </div>
            <h1>Stainless Steel Nipples, Stocked and Made to Order in Ahmedabad</h1>
            <p className="hero-subhead">
              Hex, barrel, close, reducing and hose nipples in SS 304 and SS 316, plus MS and brass. Standard sizes from stock, special sizes machined to your drawing.
            </p>
            <p className="hero-desc">
              A nipple is a small part that causes big problems when it's wrong. A thread that doesn't match, a grade that corrodes in six months, a length that leaves no room for a spanner: any of these can stop a line or a production shift. Sunrise Industries has been making and supplying stainless steel nipples from Ahmedabad since 2010, and we treat the small part with the care the big system deserves.
            </p>

            <div className="hero-actions">
              <a href="#quote-form" className="btn btn-primary btn-lg">
                Get a Nipple Quote <span className="btn-arrow">&rarr;</span>
              </a>
              <a href="#quote-form" className="btn btn-outline-white btn-lg">
                Send Your Drawing
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

      {/* Section 3: What is an SS nipple */}
      <section className="section" id="what-is-nipple">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Industrial Fundamentals</span>
            <h2>What Is an SS Nipple, and Why Does It Matter?</h2>
            <h3>A short piece of pipe that joins two fittings, and holds the whole joint together</h3>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p>
              A stainless steel pipe nipple is a short length of pipe, threaded on one or both ends, that connects two other fittings such as valves, couplings, elbows, tees, pumps or tanks. You'll find them on water lines, steam headers, compressed-air drops, chemical dosing lines, gauge connections and hundreds of other places inside a plant.
            </p>
            <p style={{ marginTop: '1rem' }}>
              People choose stainless for nipples because the part sits in the wet, hot or corrosive spots of a system, where mild steel rusts and galvanised steel flakes. A stainless nipple lasts longer, stays cleaner and doesn't contaminate the fluid passing through it. That matters for food, dairy, pharma and water applications, and for any line where a leak means downtime.
            </p>
            <p style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
              At Sunrise, nipples are our main product. We hold stock in the common sizes, and because we run our own CNC machining, we can make the uncommon ones too.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: The range */}
      <section className="section section-light" id="nipple-range">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Product Range</span>
            <h2>Every Type of SS Nipple, From One Supplier</h2>
            <h3>Choose by how the joint is built, not just by size</h3>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <h3 className="feature-card-title">SS Hex Nipple</h3>
              <p className="feature-card-desc">
                A hexagon in the middle lets you grip it with a spanner while tightening, so the thread seats properly without damaging the surface. Available as equal and reducing hex nipples.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">SS Barrel Nipple</h3>
              <p className="feature-card-desc">
                Threaded at both ends with a plain, unthreaded section in the centre. That plain section gives you reach between fittings and a surface to hold.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">SS Close Nipple</h3>
              <p className="feature-card-desc">
                Threaded along its entire length, so the fittings you connect sit almost touching. Ideal for tight spaces like compact manifolds and skids.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">SS Reducing Nipple</h3>
              <p className="feature-card-desc">
                Different thread sizes on each end (e.g. ½" to ¾"). Used where a line steps up or down in size at pumps, valves or instrument ports.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">SS Hose Nipple</h3>
              <p className="feature-card-desc">
                A barbed or ribbed end that grips a flexible hose, with a threaded end for the rigid connection. Common in water and utility hookups.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">Long &amp; Custom Nipples</h3>
              <p className="feature-card-desc">
                Special lengths, unusual thread combinations, non-standard hex sizes and drawing-specific parts machined to order.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">MS &amp; Brass Nipples</h3>
              <p className="feature-card-desc">
                Mild steel nipples for dry, painted, low-cost lines. Brass nipples for water, gas and electrical hardware.
              </p>
              <a href="#quote-form" className="feature-card-btn">Click Here</a>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="#quote-form" className="btn btn-primary btn-lg">
              Request Our Nipple Price List &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CAD Prototype to Production Banner */}
      <section className="cad-banner">
        <div className="container">
          <div className="cad-banner-content">
            <span className="cad-badge">Engineering Excellence</span>
            <h2>Seamless Transition from Prototype to Production</h2>
            <p>
              Our team of engineering and manufacturing experts have experience creating precision stainless and turned components for a wide variety of industries worldwide.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#quote-form" className="btn btn-primary btn-lg">
                View Products &rarr;
              </a>
              <a href="#quote-form" className="btn btn-outline-white btn-lg">
                Get Quote Now &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Specifications */}
      <section className="section" id="specifications">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Technical Data</span>
            <h2>SS Nipple Specifications</h2>
            <h3>What we offer, in one table</h3>
          </div>

          <div className="table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>What we offer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Material</strong></td>
                  <td>SS 304, SS 304L, SS 316, SS 316L; mild steel; brass</td>
                </tr>
                <tr>
                  <td><strong>Types</strong></td>
                  <td>Hex, barrel, close, reducing, hose, custom</td>
                </tr>
                <tr>
                  <td><strong>Thread standards</strong></td>
                  <td>BSP, BSPT (tapered), NPT</td>
                </tr>
                <tr>
                  <td><strong>Wall thickness</strong></td>
                  <td>Schedule 40 and Schedule 80</td>
                </tr>
                <tr>
                  <td><strong>Nominal sizes</strong></td>
                  <td>⅛" to 4" (standard and custom bores)</td>
                </tr>
                <tr>
                  <td><strong>Length</strong></td>
                  <td>Standard lengths and cut-to-length as specified</td>
                </tr>
                <tr>
                  <td><strong>Construction</strong></td>
                  <td>Seamless or welded pipe stock</td>
                </tr>
                <tr>
                  <td><strong>Surface finish</strong></td>
                  <td>Plain, polished, pickled or as specified</td>
                </tr>
                <tr>
                  <td><strong>Referenced standards</strong></td>
                  <td>ASTM A733, ASME B1.20.1</td>
                </tr>
                <tr>
                  <td><strong>Certification</strong></td>
                  <td>Material test certificates on request</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1.25rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            If your size or thread isn't listed, ask. Our CNC machining capacity is how we handle the "can you make this one?" requests.
          </p>
        </div>
      </section>

      {/* Section 6: Choosing the right nipple */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Buying Guide</span>
            <h2>How to Choose the Right SS Nipple: Four Questions</h2>
            <h3>Answer these and your order almost writes itself</h3>
          </div>

          <div className="four-questions-grid">
            <div className="question-card">
              <div className="question-num">01</div>
              <h3 className="question-title">What grade of stainless?</h3>
              <p className="question-text">
                SS 304 handles water, steam, air, food contact and general wet areas well. SS 316 and 316L contain molybdenum, which helps them resist salt, chlorides, dyes, acids and many chemicals. If your line is near the coast, carries brine or runs through a chemical process, go for 316. If clean water or air, 304 is usually enough and costs less.
              </p>
            </div>

            <div className="question-card">
              <div className="question-num">02</div>
              <h3 className="question-title">Which thread?</h3>
              <p className="question-text">
                This is where most wrong orders happen. NPT threads have a 60° angle, BSP threads have 55°. BSPT and NPT are both tapered but are not interchangeable, even when the size looks the same. Parallel BSP (BSPP) seals differently from tapered threads. Tell us what your mating fitting is, and we'll match it.
              </p>
            </div>

            <div className="question-card">
              <div className="question-num">03</div>
              <h3 className="question-title">How thick is the wall?</h3>
              <p className="question-text">
                Schedule 40 is standard wall and suits most utility lines. Schedule 80 has a thicker wall for higher pressure or tougher duty. If you're unsure, share your operating pressure and we'll recommend.
              </p>
            </div>

            <div className="question-card">
              <div className="question-num">04</div>
              <h3 className="question-title">Which type and length?</h3>
              <p className="question-text">
                Hex when you need spanner grip. Barrel when you need reach. Close when space is tight. Reducing when sizes change. Not sure? Send us a clear photo of the mating part and size marking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Material guide */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Metallurgy Guide</span>
            <h2>SS 304, SS 316, Mild Steel or Brass Nipples: Which One?</h2>
            <h3>Match the material to the environment, not just the budget</h3>
          </div>

          <div className="table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Works well in</th>
                  <th>Not ideal for</th>
                  <th>Typical use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>SS 304</strong></td>
                  <td>Water, steam, air, food, dairy, indoor wet areas</td>
                  <td>Salt water, strong chlorides, harsh chemicals</td>
                  <td>General plant pipework, kitchens, utilities</td>
                </tr>
                <tr>
                  <td><strong>SS 304L</strong></td>
                  <td>Same as 304, easier to weld</td>
                  <td>Same as 304</td>
                  <td>Welded pipe assemblies</td>
                </tr>
                <tr>
                  <td><strong>SS 316</strong></td>
                  <td>Marine, coastal, chemical, dye houses</td>
                  <td>Very strong acids (check chart)</td>
                  <td>Process lines, outdoor and coastal use</td>
                </tr>
                <tr>
                  <td><strong>SS 316L</strong></td>
                  <td>As 316, better for welded work</td>
                  <td>Same as 316</td>
                  <td>Welded chemical and marine assemblies</td>
                </tr>
                <tr>
                  <td><strong>Mild steel</strong></td>
                  <td>Dry, painted, low-cost lines</td>
                  <td>Wet or corrosive areas</td>
                  <td>Dry compressed air, structural frames</td>
                </tr>
                <tr>
                  <td><strong>Brass</strong></td>
                  <td>Water, gas, electrical hardware</td>
                  <td>Ammonia, strong acids</td>
                  <td>Plumbing, pneumatics, electrical fittings</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1.25rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            A practical rule: a cheaper nipple that fails after a year costs more than a stainless one that lasts ten. For anything in a wet, hot or chemical line, we'd rather quote you the right grade than the lowest price.
          </p>
        </div>
      </section>

      {/* Section 8: Fitting and installation tips */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Best Practices</span>
            <h2>Fitting SS Nipples Without Leaks</h2>
            <h3>Five habits that save plant hours</h3>
          </div>

          <ul className="tips-list">
            <li><strong>Use thread sealant:</strong> PTFE tape or a suitable paste on tapered threads gives a better seal and eases assembly.</li>
            <li><strong>Don't over-tighten:</strong> Tapered threads seal by wedging. Extra force doesn't improve the seal and can crack a fitting or gall the thread.</li>
            <li><strong>Match the thread family:</strong> Don't force BSPT into NPT. Even if it starts, it will leak.</li>
            <li><strong>Support the pipe:</strong> A long nipple with a heavy valve on the end is a lever. Add a support bracket.</li>
            <li><strong>Keep threads clean:</strong> Dirt and swarf from cutting can scratch threads and cause leaks.</li>
          </ul>
        </div>
      </section>

      {/* Section 9: Custom nipples */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Custom Fabrication</span>
            <h2>Can't Find Your Size? We Machine It</h2>
            <h3>Custom-length, special-thread and unusual-hex nipples made to drawing</h3>
          </div>
          <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Catalogue lists only go so far. Because Sunrise also runs CNC machining, we can make nipples outside standard ranges: special lengths, mixed thread combinations, non-standard hex sizes and tight tolerances, in stainless steel, mild steel, brass and aluminium.
          </p>

          <ul style={{ maxWidth: '850px', margin: '1.5rem auto', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            <li>A nipple with BSPT on one end and NPT on the other, to connect imported equipment to Indian lines.</li>
            <li>Extra-long barrel nipples for equipment that needs reach.</li>
            <li>Machined hex nipples with specific across-flats dimensions.</li>
            <li>Prototype batches of a new design before a production order.</li>
            <li>OEM parts needed in repeat batches.</li>
          </ul>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="#quote-form" className="btn btn-primary btn-lg">
              Upload Your Drawing &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Section 10: Complete the line */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Complementary Products</span>
            <h2>Couplings, Flanges, Pipes and More, Ordered Together</h2>
            <h3>One supplier for the whole joint, not just the nipple</h3>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p>Most jobs need more than a nipple. We also supply:</p>
            <ul style={{ margin: '1rem 0 1.5rem 1.5rem', lineHeight: '1.8' }}>
              <li>SS couplings for joining pipe and nipples</li>
              <li>SS flanges for larger connections</li>
              <li>IC (investment-cast) pipe fittings for complex shapes</li>
              <li>Seamless, welded and EFW pipes and tubes</li>
              <li>Sheets, plates, coils and strips</li>
              <li>Perforated sheets and expanded metal mesh</li>
              <li>Special alloy sheets and plates</li>
              <li>Laser cutting, sheet-metal fabrication, powder coating and PVD coating</li>
            </ul>
            <p style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
              Ordering together means one quote, one dispatch and one supplier to call.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: Where SS nipples are used */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Applications</span>
            <h2>Industries and Applications for SS Nipples</h2>
            <h3>Wherever a pipe needs a dependable joint</h3>
          </div>

          <div className="cards-grid">
            <div className="feature-card">
              <h3 className="feature-card-title">Water &amp; Wastewater</h3>
              <p className="feature-card-desc">Pumps, chemical dosing lines, filters and treatment skids.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">Chemical &amp; Process</h3>
              <p className="feature-card-desc">Corrosion-resistant transfer lines, valves and gauge ports.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">Food, Dairy &amp; Beverage</h3>
              <p className="feature-card-desc">Hygienic water, steam, CIP and wash-down connections.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">Pharma &amp; Clean Utilities</h3>
              <p className="feature-card-desc">Clean-service and plant utility piping with zero scale flaking.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">Oil, Gas &amp; Energy</h3>
              <p className="feature-card-desc">Small-bore instrumentation, sampling points, and boiler headers.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-card-title">Marine &amp; Port Side</h3>
              <p className="feature-card-desc">Coastal, salt-exposed and dockside fluid handling systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Why Sunrise */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Why Choose Us</span>
            <h2>Why Buyers Choose Sunrise for SS Nipples</h2>
          </div>

          <ul className="why-list">
            <li><strong>Nipples are our main line:</strong> We know thread, grade and length details, because we handle them every day.</li>
            <li><strong>Ready stock plus custom machining:</strong> Common sizes from stock, special sizes made to order.</li>
            <li><strong>Raw material under the same roof:</strong> We hold stainless, mild steel and brass stock, so supply doesn't depend on a third party.</li>
            <li><strong>ISO 9001:2015 certified:</strong> A documented quality system sits behind every batch.</li>
            <li><strong>Straight advice:</strong> We'll tell you if 304 won't last in your application and 316 will.</li>
            <li><strong>Export-ready:</strong> Packing and documentation for overseas shipments.</li>
            <li><strong>Fast quotes:</strong> Send size, type, thread, grade and quantity.</li>
          </ul>
        </div>
      </section>

      {/* Section 13: How to order & Tamil Nadu Hubs */}
      <section className="section" id="tamil-nadu">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">Order Process</span>
            <h2>How to Order SS Nipples From Sunrise</h2>
          </div>

          <ol className="steps-list">
            <li><strong>Send your requirement:</strong> Size, type, thread, grade, schedule and quantity. Or a drawing or photo.</li>
            <li><strong>Get a quote:</strong> We confirm price, availability and timeline.</li>
            <li><strong>We supply or make:</strong> Stock is picked, or the nipple is machined to your drawing, then inspected.</li>
            <li><strong>Packed and dispatched:</strong> Sent across India by road freight, or exported with the right documentation.</li>
          </ol>

          <div style={{ marginTop: '3.5rem' }}>
            <div className="section-header">
              <span className="tagline-badge">Specialized State Coverage</span>
              <h2>Supplying Tamil Nadu Industrial Clusters</h2>
              <h3>Manufactured and dispatched directly from our Ahmedabad facility</h3>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/cities-we-serve" className="btn btn-outline btn-sm">
                  View All Cities We Serve (India &rarr; Tamil Nadu) &rarr;
                </Link>
              </div>
            </div>

            <div className="city-grid">
              {tnCities.map((city) => (
                <Link key={city.slug} to={`/tamil-nadu/${city.slug}`} className="city-card">
                  <h4>{city.name} &rarr;</h4>
                  <p>{city.highlight}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: FAQ */}
      <section className="section section-light" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="tagline-badge">FAQs</span>
            <h2>SS Nipple FAQs</h2>
            <h3>Answers to common questions about types, materials, threads, and delivery</h3>
          </div>

          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      {/* Section 15: Final CTA */}
      <section className="section" id="quote-form">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="tagline-badge">Direct Factory Quotation</span>
          <h2>Need SS Nipples? Tell Us the Size, Type and Quantity.</h2>
          <h3 style={{ color: 'var(--text-muted)', fontWeight: 500, marginBottom: '2rem' }}>
            We'll come back with a clear quote.
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="tel:+916264131446" className="btn btn-primary btn-lg">
              Get a Quote &rarr;
            </a>
            <a href="https://wa.me/916264131446" className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">
              WhatsApp
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
