import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { citiesData } from '../data/citiesData';

export default function CitiesWeServe() {
  const [selectedState, setSelectedState] = useState('tamil-nadu');
  const [searchTerm, setSearchTerm] = useState('');

  const cityList = Object.values(citiesData);

  const filteredCities = cityList.filter(city => {
    const term = searchTerm.toLowerCase();
    return (
      city.name.toLowerCase().includes(term) ||
      city.subHeading.toLowerCase().includes(term) ||
      city.tagline.toLowerCase().includes(term)
    );
  });

  return (
    <>
      {/* Page Hero with High-Contrast Yellow Tagline Banner */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="separator">/</span>
              <span className="current">Cities We Serve</span>
            </nav>

            <div className="hero-tagline">
              <h2>National Industrial Supply Network</h2>
            </div>

            <h1>Cities We Serve Across India</h1>
            <p className="hero-subhead">
              Manufacturing and dispatching high-precision SS 304, SS 316, brass, and mild steel nipples directly from our Ahmedabad factory to industrial clusters nationwide.
            </p>
            <p className="hero-desc">
              Every city has unique operating conditions: coastal salt air in Chennai and Thoothukudi, pump and motor vibration in Coimbatore, dyehouse acids in Tiruppur, automotive repeatability in Hosur, boiler specifications in Trichy, or transport rig duty in Namakkal. Select a state below to explore detailed engineering data, specifications, and supply terms.
            </p>

            <div className="hero-actions">
              <a href="#state-selector" className="btn btn-primary btn-lg">
                Explore States &amp; Cities <span className="btn-arrow">&darr;</span>
              </a>
              <a href="#quote-form" className="btn btn-outline-white btn-lg">
                Request National RFQ
              </a>
              <a href="tel:+916264131446" className="btn btn-outline-white btn-lg">
                Call +91 62641 31446
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Hierarchy Navigation: India -> State -> Cities */}
      <section className="section section-light" id="state-selector" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="tagline-badge">Hierarchical Supply Coverage</span>
            <h2>Supply Coverage: India &rarr; States &rarr; Industrial Cities</h2>
            <h3>Select a state to view all connected manufacturing zones and city specifications</h3>
          </div>

          {/* Level 1: Country Card (India) */}
          <div className="country-box">
            <div className="country-header">
              <div className="country-flag-icon">&#127470;&#127475;</div>
              <div>
                <span className="country-tag">Central Production Base</span>
                <h3 className="country-title">India — Central Manufacturing &amp; National Freight</h3>
              </div>
            </div>
            <div className="country-body">
              <p>
                All stainless steel nipples, couplings, flanges, and CNC components are produced under our <strong>ISO 9001:2015</strong> quality management system at our Ahmedabad, Gujarat manufacturing facility. Direct freight routes connect to state distribution hubs across western, northern, and southern India with scheduled transit windows.
              </p>
            </div>
          </div>

          {/* Level 2: States Selector */}
          <div style={{ marginTop: '2.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
              Select Active or Upcoming State:
            </h4>

            <div className="state-tab-grid">
              {/* Tamil Nadu - ACTIVE */}
              <button
                type="button"
                className={`state-tab-btn ${selectedState === 'tamil-nadu' ? 'active' : ''}`}
                onClick={() => setSelectedState('tamil-nadu')}
              >
                <div className="state-tab-top">
                  <span className="state-name">Tamil Nadu</span>
                  <span className="state-status-badge active-badge">10 Cities Active</span>
                </div>
                <p className="state-tab-desc">
                  Southern industrial corridor: automotive, pumps, textile dyeing, kitchen equipment &amp; coastal ports.
                </p>
              </button>

              {/* Gujarat - Domestic Hub */}
              <div className="state-tab-btn disabled-state">
                <div className="state-tab-top">
                  <span className="state-name">Gujarat</span>
                  <span className="state-status-badge domestic-badge">Home Hub</span>
                </div>
                <p className="state-tab-desc">
                  Ahmedabad, Surat, Vadodara, Rajkot &amp; Jamnagar (Direct ex-works local dispatch).
                </p>
              </div>

              {/* Maharashtra - Coming Soon */}
              <div className="state-tab-btn disabled-state">
                <div className="state-tab-top">
                  <span className="state-name">Maharashtra</span>
                  <span className="state-status-badge upcoming-badge">Coming Soon</span>
                </div>
                <p className="state-tab-desc">
                  Mumbai, Pune, Nashik, Aurangabad &amp; Nagpur industrial zones.
                </p>
              </div>

              {/* Karnataka - Coming Soon */}
              <div className="state-tab-btn disabled-state">
                <div className="state-tab-top">
                  <span className="state-name">Karnataka</span>
                  <span className="state-status-badge upcoming-badge">Coming Soon</span>
                </div>
                <p className="state-tab-desc">
                  Bengaluru, Belagavi, Hubballi &amp; Mangaluru manufacturing corridor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level 3: Cities of the Selected State (Tamil Nadu) */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="state-active-header">
            <div>
              <span className="tagline-badge">State Industrial Belt</span>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
                Tamil Nadu — 10 Specialized Industrial Cities
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '820px' }}>
                Click any city box below to view tailored engineering copy, local operating conditions, recommended metallurgy (SS 304 vs 316), Schedule 40/80 specifications, and city-specific ordering guidelines.
              </p>
            </div>

            {/* Live Search Filter */}
            <div className="city-search-box">
              <input
                type="text"
                placeholder="Search city, sector, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="city-search-input"
              />
            </div>
          </div>

          {/* Detailed 10 City Boxes */}
          <div className="cities-detailed-grid">
            {filteredCities.map((city) => (
              <div key={city.slug} className="city-detailed-box">
                <div className="city-box-top">
                  <span className="city-box-tag">{city.tagline}</span>
                  <h3 className="city-box-title">{city.name}</h3>
                  <p className="city-box-sub">{city.subHeading}</p>
                </div>

                <div className="city-box-middle">
                  <div className="city-box-feature">
                    <strong>Primary Sectors:</strong>
                    <span>{city.industries ? city.industries.slice(0, 3).map(i => i.name).join(', ') : 'Industrial Manufacturing'}</span>
                  </div>
                  <div className="city-box-feature">
                    <strong>Recommended Metallurgy:</strong>
                    <span>SS 304, SS 316 / 316L, Brass &amp; Mild Steel</span>
                  </div>
                  <div className="city-box-feature">
                    <strong>Key Problem Solved:</strong>
                    <span>{city.conditions && city.conditions[0] ? city.conditions[0].title : 'Vibration & Leak Prevention'}</span>
                  </div>
                </div>

                <div className="city-box-bottom">
                  <Link to={`/tamil-nadu/${city.slug}`} className="btn btn-primary btn-block">
                    View {city.name} Data &amp; Specs &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <p>No cities found matching "{searchTerm}". Please clear your search.</p>
            </div>
          )}

          {/* Quick Summary Reference Table */}
          <div style={{ marginTop: '4rem' }}>
            <div className="section-header">
              <span className="tagline-badge">Fast Comparison</span>
              <h2>Tamil Nadu Cities Summary Matrix</h2>
              <h3>Quick technical reference by city and manufacturing focus</h3>
            </div>

            <div className="table-container">
              <table className="specs-table">
                <thead>
                  <tr>
                    <th>City Hub</th>
                    <th>Major Industrial Clusters</th>
                    <th>Primary Metal / Specs</th>
                    <th>Key Application Focus</th>
                    <th>City Page</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Chennai</strong></td>
                    <td>Ambattur, Oragadam, Sriperumbudur, Manali, Ennore</td>
                    <td>SS 316/316L, SS 304, Sch 40/80</td>
                    <td>Coastal salt air, automotive coolants, ports</td>
                    <td><Link to="/tamil-nadu/chennai" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                  <tr>
                    <td><strong>Coimbatore</strong></td>
                    <td>Kurichi, Ganapathy, Singanallur, Kalapatti</td>
                    <td>SS 304, Brass, Reducing Hex</td>
                    <td>Pumps, motors, valves, wet-grinders</td>
                    <td><Link to="/tamil-nadu/coimbatore" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                  <tr>
                    <td><strong>Hosur</strong></td>
                    <td>SIPCOT Hosur, Zuzuwadi, Shoolagiri</td>
                    <td>SS 304, Brass, MS, Custom Drawings</td>
                    <td>Two-wheelers, CVs, electronics &amp; test rigs</td>
                    <td><Link to="/tamil-nadu/hosur" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                  <tr>
                    <td><strong>Tiruppur</strong></td>
                    <td>Palladam, Avinashi, Perumanallur, Veerapandi</td>
                    <td>SS 316 / 316L, Steam Sch 80</td>
                    <td>Reactive dye liquor, steam lines &amp; ZLD plants</td>
                    <td><Link to="/tamil-nadu/tiruppur" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                  <tr>
                    <td><strong>Salem</strong></td>
                    <td>Ammapet, Fairlands, Omalur, Attur, Mettur</td>
                    <td>SS 304, Wholesale Assortments</td>
                    <td>Kitchen equipment, utensil plants, steel trade</td>
                    <td><Link to="/tamil-nadu/salem" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                  <tr>
                    <td><strong>Madurai</strong></td>
                    <td>Thirumangalam, Melur, Dindigul, Theni</td>
                    <td>Food-grade SS 304, MEP Packages</td>
                    <td>Hotels, hospital sterilizers &amp; building services</td>
                    <td><Link to="/tamil-nadu/madurai" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                  <tr>
                    <td><strong>Tiruchirappalli</strong></td>
                    <td>Thuvakudi, Tiruverumbur, Golden Rock</td>
                    <td>Schedule 80 SS 304/316, ASTM A733</td>
                    <td>BHEL boiler ancillaries, railway &amp; defence</td>
                    <td><Link to="/tamil-nadu/tiruchirappalli" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                  <tr>
                    <td><strong>Erode</strong></td>
                    <td>Perundurai, Bhavani, Chennimalai</td>
                    <td>Food-grade SS 304, Textile SS 316</td>
                    <td>Turmeric boiling, spice processing &amp; looms</td>
                    <td><Link to="/tamil-nadu/erode" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                  <tr>
                    <td><strong>Thoothukudi</strong></td>
                    <td>Tuticorin Port, Tiruchendur, Kovilpatti</td>
                    <td>Marine SS 316L, Export Packing</td>
                    <td>VOC port berths, salt pans, chemical &amp; seafood</td>
                    <td><Link to="/tamil-nadu/thoothukudi" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                  <tr>
                    <td><strong>Namakkal</strong></td>
                    <td>Tiruchengode, Rasipuram, Paramathi</td>
                    <td>Heavy-wall MS, SS 304, Brass</td>
                    <td>Truck chassis, borewell rigs &amp; liquid tankers</td>
                    <td><Link to="/tamil-nadu/namakkal" style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Open Data &rarr;</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Direct RFQ CTA */}
      <section className="section section-light" id="quote-form">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="tagline-badge">National Dispatch</span>
          <h2>Need SS Nipples Dispatched to Your Facility?</h2>
          <h3 style={{ color: 'var(--text-muted)', fontWeight: 500, marginBottom: '2rem' }}>
            Tell us your city, required sizes, and quantities for direct factory rates.
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="tel:+916264131446" className="btn btn-primary btn-lg">
              Call Factory: +91 62641 31446 <span className="btn-arrow">&rarr;</span>
            </a>
            <a href="mailto:sales@sunrise.industries" className="btn btn-outline btn-lg">
              Email Sales RFQ
            </a>
            <a href="https://wa.me/916264131446" className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
