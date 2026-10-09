import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriesData, productsData, getCategoryBySlug } from '../data/productsData';
import EnquiryModal from '../components/EnquiryModal';

export default function CategoryDetail() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState('');

  useEffect(() => {
    if (category) {
      document.title = category.title || `${category.name} | Sunrise Industries`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && category.metaDescription) {
        metaDesc.setAttribute('content', category.metaDescription);
      }
      window.scrollTo(0, 0);
    }
  }, [categorySlug, category]);

  if (!category) {
    return (
      <div className="container section text-center" style={{ padding: '6rem 1rem' }}>
        <h2>Category Not Found</h2>
        <p className="mt-3">The product category you requested does not exist.</p>
        <Link to="/" className="btn btn-primary mt-4">
          Return to Homepage &rarr;
        </Link>
      </div>
    );
  }

  // Fetch products in this category
  const products = (category.productSlugs || [])
    .map(slug => productsData[slug])
    .filter(Boolean);

  const openQuoteForProduct = (prodName) => {
    setSelectedProductForModal(prodName);
    setIsModalOpen(true);
  };

  return (
    <div className="category-page-wrapper">
      {/* Category Breadcrumb */}
      <nav className="product-breadcrumb-nav" aria-label="breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li><span className="breadcrumb-separator">/</span></li>
            <li><Link to="/products">Categories</Link></li>
            <li><span className="breadcrumb-separator">/</span></li>
            <li className="active" aria-current="page">{category.name}</li>
          </ol>
        </div>
      </nav>

      {/* Category Hero */}
      <section className="category-hero-section">
        <div className="container">
          <div className="category-hero-layout">
            <div className="category-hero-content">
              <div className="category-tagline">
                <span className="hero-badge">{category.badge || 'Direct Factory Manufacturer'}</span>
                <span className="iso-tag">ISO 9001:2015 Certified</span>
              </div>

              <h1 className="category-h1-title">{category.h1}</h1>

              <p className="category-hero-desc">
                {category.description}
              </p>

              <div className="category-hero-highlights">
                <div className="highlight-pill">
                  <span className="pill-check">&#10003;</span> 10+ CNC Production Lines
                </div>
                <div className="highlight-pill">
                  <span className="pill-check">&#10003;</span> Ready Stock in All Standard Sizes
                </div>
                <div className="highlight-pill">
                  <span className="pill-check">&#10003;</span> Export Packaging to 5+ Countries
                </div>
              </div>

              <div className="category-hero-actions">
                <button 
                  type="button" 
                  className="btn btn-primary btn-lg"
                  onClick={() => openQuoteForProduct(category.name)}
                >
                  Get Instant Category Quote &rarr;
                </button>
                <a href="tel:+916264131446" className="btn btn-outline-white btn-lg">
                  Call: +91 62641 31446
                </a>
              </div>
            </div>

            <div className="category-hero-media">
              <img 
                src={category.image || '/assets/images/ss barrel nipple.png'} 
                alt={category.name} 
                className="category-hero-featured-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="category-products-grid-section">
        <div className="container">
          <div className="section-title-wrap text-center">
            <span className="tagline-badge">Complete Product Lineup</span>
            <h2 className="section-main-heading">Explore {category.name} Types &amp; Sizes</h2>
            <p className="section-sub-desc">
              Precision machined from raw bar and pipe to finished fittings under one roof in Ahmedabad.
            </p>
          </div>

          <div className="category-cards-grid">
            {products.length > 0 ? (
              products.map(prod => (
                <div key={prod.slug} className="category-product-card">
                  <div className="card-thumb-wrap">
                    <img 
                      src={prod.mainImage || '/assets/images/ss barrel nipple.png'} 
                      alt={prod.name} 
                      loading="lazy"
                    />
                    <span className="card-pill-grade">
                      {prod.technicalSpecs?.[0]?.details?.split(',')?.[0] || 'SS 304 / 316'}
                    </span>
                  </div>

                  <div className="card-body-content">
                    <h3 className="card-product-title">
                      <Link to={`/product/${prod.slug}`}>{prod.name}</Link>
                    </h3>

                    <p className="card-product-desc">
                      {prod.heroSubheading}
                    </p>

                    <ul className="card-features-mini">
                      {prod.keyFeatures.slice(0, 3).map((f, i) => (
                        <li key={i}>
                          <span className="mini-chevron">&gt;</span> {f}
                        </li>
                      ))}
                    </ul>

                    <div className="card-specs-row">
                      <span className="spec-badge">
                        Size: {prod.technicalSpecs?.find(s => s.parameter.toLowerCase().includes('size'))?.details || '1/8" to 4"'}
                      </span>
                      <span className="spec-badge">
                        Threads: {prod.technicalSpecs?.find(s => s.parameter.toLowerCase().includes('thread'))?.details || 'BSP / NPT'}
                      </span>
                    </div>

                    <div className="card-actions-flex">
                      <Link to={`/product/${prod.slug}`} className="btn btn-outline-primary btn-sm">
                        View Details &rarr;
                      </Link>
                      <button 
                        type="button" 
                        className="btn btn-primary btn-sm"
                        onClick={() => openQuoteForProduct(prod.name)}
                      >
                        Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="category-empty-state">
                <h3>Custom Manufacturing Catalog</h3>
                <p>We manufacture custom parts for this category to customer drawings. Send your CAD/sample for an instant quote.</p>
                <button 
                  type="button" 
                  className="btn btn-primary mt-3"
                  onClick={() => openQuoteForProduct(category.name)}
                >
                  Submit Drawing &rarr;
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quality Assurance Strip */}
      <section className="category-qa-section">
        <div className="container">
          <div className="qa-grid">
            <div className="qa-box">
              <div className="qa-icon">&#9878;</div>
              <h4>100% Calibrated Thread Gauging</h4>
              <p>Every single nipple thread is tested with calibrated Go/No-Go plug and ring gauges to eliminate cross-threading and field leaks.</p>
            </div>
            <div className="qa-box">
              <div className="qa-icon">&#128393;</div>
              <h4>Direct Mill Test Certs (MTC 3.1)</h4>
              <p>Supplied with complete chemical and physical analysis certificates matching ASTM A733, ASME B1.20.1, and IS standards.</p>
            </div>
            <div className="qa-box">
              <div className="qa-icon">&#128736;</div>
              <h4>Precision CNC Machined</h4>
              <p>Turned on multi-axis CNC machines from premium raw stainless steel pipe, bar stock, or heavy wall carbon steel tubing.</p>
            </div>
            <div className="qa-box">
              <div className="qa-icon">&#127757;</div>
              <h4>Export-Standard Seaworthy Packing</h4>
              <p>Individually capped threads, anti-corrosion barrier wrapping, and heavy wooden palletized crates dispatched globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories Selector */}
      <section className="other-categories-section">
        <div className="container">
          <div className="section-title-wrap text-center">
            <h2>Explore Other Product Categories</h2>
            <div className="related-title-divider"></div>
          </div>

          <div className="category-pills-wrap">
            {categoriesData.filter(c => c.slug !== category.slug).map(c => (
              <Link 
                key={c.slug} 
                to={c.url} 
                className="category-nav-pill"
              >
                <span>{c.name}</span>
                <span className="pill-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={selectedProductForModal || category.name}
      />
    </div>
  );
}
