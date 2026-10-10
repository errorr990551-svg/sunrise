import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const marketData = [
  {
    state: 'TAMIL NADU',
    stateSlug: 'tamil-nadu',
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
  },
  {
    state: 'MAHARASHTRA',
    stateSlug: 'maharashtra',
    cities: [
      { name: 'Mumbai', slug: 'mumbai' },
      { name: 'Pune', slug: 'pune' },
      { name: 'Nashik', slug: 'nashik' },
      { name: 'Chhatrapati Sambhajinagar', slug: 'chhatrapati-sambhajinagar' },
      { name: 'Nagpur', slug: 'nagpur' },
      { name: 'Kolhapur', slug: 'kolhapur' },
      { name: 'Thane', slug: 'thane' },
      { name: 'Navi Mumbai', slug: 'navi-mumbai' },
      { name: 'Solapur', slug: 'solapur' },
      { name: 'Palghar', slug: 'palghar' }
    ]
  },
  {
    state: 'KARNATAKA',
    stateSlug: 'karnataka',
    cities: [
      { name: 'Bengaluru', slug: 'bengaluru' },
      { name: 'Mysuru', slug: 'mysuru' },
      { name: 'Hubballi–Dharwad', slug: 'hubballi-dharwad' },
      { name: 'Belagavi', slug: 'belagavi' },
      { name: 'Mangaluru', slug: 'mangaluru' },
      { name: 'Tumakuru', slug: 'tumakuru' },
      { name: 'Ballari', slug: 'ballari' },
      { name: 'Davanagere', slug: 'davanagere' },
      { name: 'Kalaburagi', slug: 'kalaburagi' },
      { name: 'Kolar', slug: 'kolar' }
    ]
  },
  {
    state: 'TELANGANA',
    stateSlug: 'telangana',
    cities: [
      { name: 'Hyderabad', slug: 'hyderabad' },
      { name: 'Medchal–Jeedimetla', slug: 'medchal-jeedimetla' },
      { name: 'Sangareddy–Patancheru', slug: 'sangareddy-patancheru' },
      { name: 'Shamshabad–Shadnagar', slug: 'shamshabad-shadnagar' },
      { name: 'Warangal', slug: 'warangal' },
      { name: 'Karimnagar', slug: 'karimnagar' },
      { name: 'Nizamabad', slug: 'nizamabad' },
      { name: 'Khammam–Kothagudem', slug: 'khammam-kothagudem' },
      { name: 'Nalgonda–Suryapet', slug: 'nalgonda-suryapet' },
      { name: 'Ramagundam–Peddapalli', slug: 'ramagundam-peddapalli' }
    ]
  },
  {
    state: 'WEST BENGAL',
    stateSlug: 'west-bengal',
    cities: [
      { name: 'Kolkata', slug: 'kolkata' },
      { name: 'Howrah', slug: 'howrah' },
      { name: 'Haldia', slug: 'haldia' },
      { name: 'Durgapur', slug: 'durgapur' },
      { name: 'Asansol–Raniganj', slug: 'asansol-raniganj' },
      { name: 'Kharagpur–Midnapore', slug: 'kharagpur-midnapore' },
      { name: 'Siliguri', slug: 'siliguri' },
      { name: 'Hooghly–Serampore', slug: 'hooghly-serampore' },
      { name: 'Bardhaman', slug: 'bardhaman' },
      { name: 'Barrackpore–Kalyani', slug: 'barrackpore-kalyani' }
    ]
  },
  {
    state: 'MADHYA PRADESH',
    stateSlug: 'madhya-pradesh',
    cities: [
      { name: 'Indore', slug: 'indore' },
      { name: 'Pithampur–Dhar', slug: 'pithampur-dhar' },
      { name: 'Bhopal–Mandideep', slug: 'bhopal-mandideep' },
      { name: 'Jabalpur', slug: 'jabalpur' },
      { name: 'Gwalior–Malanpur', slug: 'gwalior-malanpur' },
      { name: 'Dewas–Ujjain', slug: 'dewas-ujjain' },
      { name: 'Singrauli', slug: 'singrauli' },
      { name: 'Satna–Katni', slug: 'satna-katni' },
      { name: 'Ratlam–Neemuch', slug: 'ratlam-neemuch' },
      { name: 'Sagar–Bina', slug: 'sagar-bina' }
    ]
  },
  {
    state: 'ANDHRA PRADESH',
    stateSlug: 'andhra-pradesh',
    cities: [
      { name: 'Visakhapatnam', slug: 'visakhapatnam' },
      { name: 'Anakapalle–Parawada', slug: 'anakapalle-parawada' },
      { name: 'Vijayawada', slug: 'vijayawada' },
      { name: 'Guntur', slug: 'guntur' },
      { name: 'Rajahmundry–Kakinada', slug: 'rajahmundry-kakinada' },
      { name: 'Nellore–Krishnapatnam', slug: 'nellore-krishnapatnam' },
      { name: 'Tirupati–Sri City', slug: 'tirupati-sri-city' },
      { name: 'Kurnool', slug: 'kurnool' },
      { name: 'Anantapur–Hindupur', slug: 'anantapur-hindupur' },
      { name: 'Eluru–Bhimavaram', slug: 'eluru-bhimavaram' }
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
      {/* Hero / Header Section matching Homepage theme */}
      <section className="market-header-section">
        <div className="container">
          <nav className="market-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="separator">&gt;</span>
            <span className="current">MARKET AREA</span>
          </nav>

          <div className="market-title-wrap">
            <span className="tagline-badge">Domestic &amp; Regional Supply</span>
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
              placeholder="Search city (e.g. Hyderabad, Bengaluru, Mumbai, Pune, Chennai)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="market-search-input"
            />
          </div>
        </div>
      </section>

      {/* Main Grid of State City Boxes */}
      <section className="market-content-section">
        <div className="container">
          {filteredData.map((group) => (
            <div key={group.state} className="market-state-block">
              <div className="market-state-header">
                <span className="tagline-badge" style={{ margin: 0 }}>Active Industrial Corridor</span>
                <h2 className="market-state-title" style={{ marginTop: '0.35rem' }}>{group.state}</h2>
              </div>

              <div className="market-city-grid">
                {group.cities.map((city) => (
                  <Link
                    key={city.name}
                    to={`/${group.stateSlug}/${city.slug}`}
                    className="market-city-box"
                    title={`View detailed engineering specifications for ${city.name}`}
                  >
                    <span className="market-city-name">{city.name}</span>
                    <span className="market-city-badge">&rarr;</span>
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

      {/* Direct Quote / Dispatch Information Section in Agri CTA style */}
      <section className="section" id="quote-form">
        <div className="container">
          <div className="agri-cta-box">
            <div className="agri-cta-text">
              <h2>Direct Factory Supply Across Andhra Pradesh, Madhya Pradesh, West Bengal, Telangana, Karnataka, Maharashtra, Tamil Nadu &amp; All Over India</h2>
              <p>
                Stainless steel nipples, CNC precision fittings, and raw material stock dispatched directly from our Ahmedabad manufacturing facility to your city.
              </p>
            </div>
            <div className="agri-cta-btns">
              <a href="tel:+916264131446" className="agri-cta-btn-primary">
                Call Factory: +91 62641 31446 &rarr;
              </a>
              <a href="/#nipple-range" className="agri-cta-btn-secondary">
                View All Products &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
