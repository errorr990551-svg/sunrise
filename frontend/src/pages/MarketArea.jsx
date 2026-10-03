import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const marketData = [
  {
    state: 'TAMIL NADU',
    cities: [
      { name: 'Chennai', slug: 'chennai' },
      { name: 'Coimbatore', slug: 'coimbatore' },
      { name: 'Hosur', slug: 'hosur' },
      { name: 'Tiruppur', slug: 'tiruppur' },
      { name: 'Salem', slug: 'salem' },
      { name: 'Madurai', slug: 'madurai' },
      { name: 'Tiruchirappalli', slug: 'tiruchirappalli' },
      { name: 'Erode', slug: 'erode' },
      { name: 'Thoothukudi', slug: 'thoothukudi' },
      { name: 'Namakkal', slug: 'namakkal' }
    ]
  }
];

export default function MarketArea() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = marketData.map(group => {
    const term = searchTerm.toLowerCase().trim();
    const stateMatches = group.state.toLowerCase().includes(term);
    const matchedCities = group.cities.filter(c => c.name.toLowerCase().includes(term));

    if (stateMatches) {
      return group;
    }
    if (matchedCities.length > 0) {
      return {
        ...group,
        cities: matchedCities
      };
    }
    return null;
  }).filter(Boolean);

  return (
    <div className="market-area-page">
      {/* Clean Light Breadcrumb & Header matching Image 1 */}
      <section className="market-header-section">
        <div className="container">
          <nav className="market-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="separator">&gt;</span>
            <span className="current">MARKET AREA</span>
          </nav>

          <div className="market-title-wrap">
            <h1 className="market-page-title">
              India Cities : We Serve
            </h1>
            <div className="market-title-underline"></div>
            <p className="market-page-desc">
              Supplying stainless steel nipples, couplings, flanges, and precision CNC components manufactured in Ahmedabad across key manufacturing clusters with complete MTC 3.1 certification and fast dispatch.
            </p>
          </div>

          {/* Search Box */}
          <div className="market-search-wrap">
            <input
              type="text"
              placeholder="Search city (e.g. Coimbatore, Hosur, Chennai)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="market-search-input"
            />
          </div>
        </div>
      </section>

      {/* Main Grid of Tamil Nadu City Boxes matching Image 1 */}
      <section className="market-content-section">
        <div className="container">
          {filteredData.map((group) => (
            <div key={group.state} className="market-state-block">
              <div className="market-state-header">
                <h2 className="market-state-title">{group.state}</h2>
              </div>

              <div className="market-city-grid">
                {group.cities.map((city) => (
                  <Link
                    key={city.name}
                    to={`/tamil-nadu/${city.slug}`}
                    className="market-city-box"
                    title={`View detailed engineering specifications for ${city.name}`}
                  >
                    <span className="market-city-name">{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {filteredData.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
              <h3>No cities found matching "{searchTerm}"</h3>
              <p style={{ marginTop: '0.5rem' }}>Try searching another city or clear the search input.</p>
            </div>
          )}
        </div>
      </section>

      {/* Direct Quote / Dispatch Information Section */}
      <section className="section section-light" id="quote-form">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <span className="tagline-badge">Ahmedabad Works Direct Dispatch</span>
          <h2>Direct Factory Supply Across Tamil Nadu</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Whether you need SS 304, SS 316, brass, or mild steel nipples in standard sizes or custom machined to your drawing, we dispatch directly to all industrial hubs in Tamil Nadu with full documentation.
          </p>

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
    </div>
  );
}
