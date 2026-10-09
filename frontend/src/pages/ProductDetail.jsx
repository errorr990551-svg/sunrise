import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productsData, getProductBySlug, categoriesData } from '../data/productsData';
import EnquiryModal from '../components/EnquiryModal';

export default function ProductDetail() {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  const product = getProductBySlug(productSlug);

  // Fallback if product not found
  useEffect(() => {
    if (!product) {
      // scroll to top and maybe fallback or let it show 404 block
    } else {
      // Update page SEO title and meta description
      document.title = product.title || `${product.name} | Sunrise Industries`;
      
      const metaDescTag = document.querySelector('meta[name="description"]');
      if (metaDescTag && product.metaDescription) {
        metaDescTag.setAttribute('content', product.metaDescription);
      }
      window.scrollTo(0, 0);
    }
  }, [productSlug, product]);

  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(product?.mainImage || '/assets/images/ss barrel nipple.png');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Update selected image if product changes
  useEffect(() => {
    if (product) {
      setSelectedImage(product.mainImage || product.galleryImages?.[0] || '/assets/images/ss barrel nipple.png');
      setActiveTab('description');
      setOpenFaqIndex(0);
    }
  }, [productSlug]);

  if (!product) {
    return (
      <div className="container section text-center" style={{ padding: '6rem 1rem' }}>
        <h2>Product Not Found</h2>
        <p className="mt-3">The product you are looking for may have moved or is being updated.</p>
        <Link to="/product-category/ss-nipples" className="btn btn-primary mt-4">
          Browse SS Nipples Catalog &rarr;
        </Link>
      </div>
    );
  }

  // Get related products
  const relatedProducts = (product.relatedSlugs || [])
    .map(slug => productsData[slug])
    .filter(Boolean)
    .slice(0, 4);

  // If less than 4 related, fill from other products
  const displayedRelated = relatedProducts.length >= 4 
    ? relatedProducts 
    : [
        ...relatedProducts,
        ...Object.values(productsData).filter(p => p.slug !== product.slug && !relatedProducts.some(r => r.slug === p.slug))
      ].slice(0, 4);

  const toggleFaq = (index) => {
    setOpenFaqIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <div className="product-page-wrapper">
      {/* Breadcrumb Navigation */}
      <nav className="product-breadcrumb-nav" aria-label="breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li><span className="breadcrumb-separator">/</span></li>
            <li><Link to="/products">Products</Link></li>
            <li><span className="breadcrumb-separator">/</span></li>
            <li>
              <Link to={`/product-category/${product.categorySlug}`}>
                {product.categoryName}
              </Link>
            </li>
            <li><span className="breadcrumb-separator">/</span></li>
            <li className="active" aria-current="page">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero / Top Showcase (Inspired by Image 3) */}
      <section className="product-hero-showcase">
        <div className="container">
          <div className="product-showcase-grid">
            {/* Left Column: Product Image Gallery */}
            <div className="product-gallery-card">
              <div className="main-image-viewport">
                <span className="product-quality-badge">ISO 9001:2015</span>
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="product-main-img"
                  key={selectedImage}
                />
              </div>

              {/* Thumbnails Row */}
              <div className="product-thumb-carousel">
                {(product.galleryImages || [product.mainImage]).map((img, idx) => (
                  <button
                    type="button"
                    key={idx}
                    className={`thumb-btn ${selectedImage === img ? 'is-active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                    aria-label={`View angle ${idx + 1}`}
                  >
                    <img src={img} alt={`${product.name} preview ${idx + 1}`} />
                  </button>
                ))}
              </div>

              {/* Trust & Guarantee Pills below images */}
              <div className="product-trust-strip">
                <div className="trust-pill">
                  <span className="pill-check">&#10003;</span> 100% Calibrated Thread Gauged
                </div>
                <div className="trust-pill">
                  <span className="pill-check">&#10003;</span> MTC 3.1 Mill Test Available
                </div>
                <div className="trust-pill">
                  <span className="pill-check">&#10003;</span> Custom Drawings Machined
                </div>
              </div>
            </div>

            {/* Right Column: Key Details, Chevrons, CTA (Image 3 Style) */}
            <div className="product-meta-details">
              <div className="category-meta-tag">
                <span className="category-pill-tag">{product.categoryName}</span>
                <span className="origin-pill-tag">Made in Ahmedabad, India</span>
              </div>

              <h1 className="product-main-heading">{product.h1}</h1>

              <p className="product-hero-subhead">
                {product.heroSubheading}
              </p>

              {/* Prominent Key Features with Yellow Chevrons '>' */}
              <div className="product-key-features-block">
                <h2 className="features-block-title">Key Features</h2>
                <ul className="chevron-feature-list">
                  {product.keyFeatures.map((feat, index) => (
                    <li key={index} className="chevron-feature-item">
                      <span className="chevron-symbol">&gt;</span>
                      <span className="feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance & Standards Badge Strip */}
              <div className="compliance-badges-strip">
                <div className="compliance-item">
                  <span className="comp-bold">ISO 9001</span>
                  <span className="comp-sub">Certified</span>
                </div>
                <div className="compliance-item">
                  <span className="comp-bold">ASTM / ASME</span>
                  <span className="comp-sub">Standards</span>
                </div>
                <div className="compliance-item">
                  <span className="comp-bold">5+ Countries</span>
                  <span className="comp-sub">Export Reach</span>
                </div>
                <div className="compliance-item">
                  <span className="comp-bold">10+ Lines</span>
                  <span className="comp-sub">CNC Turning</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="product-actions-row">
                <button 
                  type="button" 
                  className="btn btn-primary btn-lg enquiry-cta-btn"
                  onClick={() => setIsEnquiryModalOpen(true)}
                >
                  Enquiry Now &rarr;
                </button>

                <a 
                  href="tel:+916264131446" 
                  className="btn btn-outline-dark btn-lg phone-cta-btn"
                >
                  Call +91 62641 31446
                </a>

                <a
                  href={`https://wa.me/916264131446?text=Hi%20Sunrise%20Industries,%20I%20need%20a%20quote%20for%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Quick Spec Highlights Card */}
              <div className="quick-specs-summary-card">
                <div className="spec-item">
                  <span className="spec-label">Sizes Available:</span>
                  <span className="spec-val">{product.technicalSpecs?.find(s => s.parameter.toLowerCase().includes('size'))?.details || '1/8" to 4" NB'}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Thread Standards:</span>
                  <span className="spec-val">BSPT, BSPP, NPT (ASME B1.20.1)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Wall Schedule:</span>
                  <span className="spec-val">SCH 40, SCH 80, Heavy Wall</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Dispatch:</span>
                  <span className="spec-val">Ready Stock & Rapid Prototypes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation Strip (Inspired by Image 3 & 4) */}
      <section className="product-tabs-section">
        <div className="container">
          <div className="product-tabs-header" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'description'}
              className={`product-tab-btn ${activeTab === 'description' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'features'}
              className={`product-tab-btn ${activeTab === 'features' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'technical'}
              className={`product-tab-btn ${activeTab === 'technical' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('technical')}
            >
              Technical Data
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'applications'}
              className={`product-tab-btn ${activeTab === 'applications' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              Applications
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'faqs'}
              className={`product-tab-btn ${activeTab === 'faqs' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('faqs')}
            >
              FAQs
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'quote'}
              className={`product-tab-btn ${activeTab === 'quote' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('quote')}
            >
              Instant Quote
            </button>
          </div>

          {/* Tab Content Panes (Image 4 Style) */}
          <div className="product-tab-content-wrapper">
            {/* 1. DESCRIPTION TAB */}
            {activeTab === 'description' && (
              <div className="tab-pane tab-pane-description animate-fade-in">
                <div className="desc-heading-wrap">
                  <h2 className="tab-section-title">{product.name} &ndash; Overview &amp; Manufacturing</h2>
                  <p className="tab-section-subtitle">
                    Manufactured with precision CNC threading at Sunrise Industries, Ahmedabad
                  </p>
                </div>

                <div className="description-text-blocks">
                  {product.descriptionParagraphs.map((para, i) => (
                    <p key={i} className="desc-paragraph">{para}</p>
                  ))}
                </div>

                {/* Solid Yellow Accent Divider Line (as seen in Image 4) */}
                <div className="yellow-accent-divider"></div>

                {/* Applications section inside description as displayed in Image 4 */}
                <div className="tab-applications-overview">
                  <h3 className="sub-section-title">Applications</h3>
                  <ul className="applications-bullet-list">
                    {product.applications.map((app, i) => (
                      <li key={i} className="application-bullet-item">
                        <span className="app-dot">&#9679;</span>
                        <span className="app-text">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 2. FEATURES TAB */}
            {activeTab === 'features' && (
              <div className="tab-pane tab-pane-features animate-fade-in">
                <h2 className="tab-section-title">Engineering Highlights &amp; Key Advantages</h2>
                <div className="features-cards-grid">
                  <div className="feature-highlight-card">
                    <div className="card-icon-circle">&#10003;</div>
                    <h3>Precision Cut Threads</h3>
                    <p>Clean BSPT, BSPP and NPT male threads cut on high-precision CNC lathes to avoid cross-threading and micro-leakages.</p>
                  </div>
                  <div className="feature-highlight-card">
                    <div className="card-icon-circle">&#9878;</div>
                    <h3>Superior Material Grades</h3>
                    <p>Formulated in SS 304, 304L, 316, 316L and carbon steel with verified chemical composition and tensile strength.</p>
                  </div>
                  <div className="feature-highlight-card">
                    <div className="card-icon-circle">&#9881;</div>
                    <h3>Custom Lengths &amp; Drawings</h3>
                    <p>Bespoke overall lengths, extra-long threads, mixed male/female connections and special schedules manufactured to order.</p>
                  </div>
                  <div className="feature-highlight-card">
                    <div className="card-icon-circle">&#128230;</div>
                    <h3>Export-Ready Packaging</h3>
                    <p>Thread protective caps, rust-preventive treatment, polythene wrapping, and robust seaworthy wooden crates for global transit.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. TECHNICAL SPECIFICATION TAB */}
            {activeTab === 'technical' && (
              <div className="tab-pane tab-pane-technical animate-fade-in">
                <div className="tech-header-wrap">
                  <h2 className="tab-section-title">Technical Specifications &ndash; {product.name}</h2>
                  <p className="tab-section-subtitle">
                    Standard production dimensions, thread forms, schedules and testing compliance
                  </p>
                </div>

                <div className="technical-table-responsive">
                  <table className="tech-spec-table">
                    <thead>
                      <tr>
                        <th style={{ width: '35%' }}>Parameter</th>
                        <th style={{ width: '65%' }}>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.technicalSpecs.map((spec, i) => (
                        <tr key={i}>
                          <td className="spec-param-name"><strong>{spec.parameter}</strong></td>
                          <td className="spec-param-val">{spec.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="custom-specs-callout">
                  <div className="callout-content">
                    <h4>Require Special Dimensions or Specific Pressure Ratings?</h4>
                    <p>
                      Our Ahmedabad facility machines non-standard lengths, heavier schedules (SCH 160 / XXS), and mixed British/American threads to exact customer drawings.
                    </p>
                  </div>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => setIsEnquiryModalOpen(true)}
                  >
                    Send Custom Drawing &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* 4. APPLICATIONS TAB */}
            {activeTab === 'applications' && (
              <div className="tab-pane tab-pane-applications animate-fade-in">
                <h2 className="tab-section-title">Recommended Industrial Applications</h2>
                <p className="tab-section-subtitle">
                  Where our {product.name} components deliver dependable zero-leak performance
                </p>

                <div className="applications-visual-grid">
                  {product.applications.map((app, i) => (
                    <div key={i} className="app-visual-card">
                      <div className="app-card-icon">&#9881;</div>
                      <h4 className="app-card-title">{app}</h4>
                      <p className="app-card-desc">
                        Engineered to endure operational pressure, temperature cycles, and rigorous fluid chemical compatibility.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. FAQS TAB */}
            {activeTab === 'faqs' && (
              <div className="tab-pane tab-pane-faqs animate-fade-in">
                <h2 className="tab-section-title">Frequently Asked Questions</h2>
                <p className="tab-section-subtitle">
                  Key answers regarding {product.name} specification, materials, and ordering
                </p>

                <div className="product-faq-accordion">
                  {product.faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div key={index} className={`faq-card-item ${isOpen ? 'is-open' : ''}`}>
                        <button
                          type="button"
                          className="faq-question-btn"
                          onClick={() => toggleFaq(index)}
                          aria-expanded={isOpen}
                        >
                          <span className="faq-q-text">{faq.q}</span>
                          <span className="faq-indicator">{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="faq-answer-pane animate-slide-down">
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 6. INSTANT QUOTE TAB */}
            {activeTab === 'quote' && (
              <div className="tab-pane tab-pane-rfq animate-fade-in">
                <div className="rfq-container-box">
                  <h2 className="tab-section-title">Request Direct Factory Quotation</h2>
                  <p className="tab-section-subtitle">
                    Share your requirements for <strong>{product.name}</strong> to receive pricing within 2 working hours.
                  </p>
                  
                  <div className="inline-rfq-form-wrap">
                    <form 
                      className="inline-rfq-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert('Thank you! Your quotation request has been submitted to Sunrise Industries sales engineering.');
                      }}
                    >
                      <div className="form-grid-2">
                        <div className="form-group">
                          <label>Full Name *</label>
                          <input type="text" required placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                          <label>Phone / WhatsApp *</label>
                          <input type="tel" required placeholder="+91 98765 43210" />
                        </div>
                      </div>

                      <div className="form-grid-2">
                        <div className="form-group">
                          <label>Email Address *</label>
                          <input type="email" required placeholder="purchase@company.com" />
                        </div>
                        <div className="form-group">
                          <label>Company / Location</label>
                          <input type="text" placeholder="Company Name & City" />
                        </div>
                      </div>

                      <div className="form-grid-3">
                        <div className="form-group">
                          <label>Preferred Grade</label>
                          <select defaultValue="SS 304">
                            <option value="SS 304">SS 304 / 304L</option>
                            <option value="SS 316">SS 316 / 316L</option>
                            <option value="MS Black">Mild Steel Black</option>
                            <option value="MS GI">Mild Steel Galvanised</option>
                            <option value="Brass">Brass</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Size Required</label>
                          <input type="text" placeholder='e.g. 1" NB SCH 40' />
                        </div>
                        <div className="form-group">
                          <label>Quantity</label>
                          <input type="text" placeholder="e.g. 200 Pcs" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Additional Notes / Length / Drawing Specs</label>
                        <textarea rows="3" placeholder="Specify any custom lengths, thread types, or delivery timelines..."></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary btn-lg mt-3">
                        Submit RFQ Now &rarr;
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* "YOU MAY ALSO BE INTERESTED IN" / People Also Like (Image 5 Style) */}
      <section className="product-related-section">
        <div className="container">
          <div className="section-title-wrap text-center">
            <h2 className="related-title">YOU MAY ALSO BE INTERESTED IN</h2>
            <div className="related-title-divider"></div>
          </div>

          <div className="related-products-grid">
            {displayedRelated.map((relProduct) => (
              <Link 
                key={relProduct.slug} 
                to={`/product/${relProduct.slug}`} 
                className="related-product-card"
              >
                <div className="related-card-img-wrap">
                  <img 
                    src={relProduct.mainImage || '/assets/images/ss barrel nipple.png'} 
                    alt={relProduct.name} 
                    loading="lazy"
                  />
                </div>
                <div className="related-card-content">
                  <h3 className="related-card-title">{relProduct.name}</h3>
                  <span className="related-card-action">View Product &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Direct Trust Strip */}
      <section className="factory-trust-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <h3>Need Custom Stainless Steel Fittings Machined to Your Drawing?</h3>
              <p>
                Sunrise Industries manufactures hex, barrel, close and reducing configurations with 10+ CNC production lines in Ahmedabad.
              </p>
            </div>
            <div className="banner-actions">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => setIsEnquiryModalOpen(true)}
              >
                Request Custom Quote &rarr;
              </button>
              <a href="tel:+916264131446" className="btn btn-outline-white">
                +91 62641 31446
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global RFQ Quote Modal */}
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
        productName={product.name}
      />
    </div>
  );
}
