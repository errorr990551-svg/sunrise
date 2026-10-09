import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categoriesData, productsData } from '../data/productsData';
import EnquiryModal from '../components/EnquiryModal';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState('Stainless Steel Nipples');

  useEffect(() => {
    document.title = 'Industrial Pipe Nipples & Fittings Manufacturer | Sunrise Industries';
    window.scrollTo(0, 0);
  }, []);

  const allProductsList = Object.values(productsData);

  const filteredProducts = allProductsList.filter(prod => {
    const matchesCategory = selectedCategory === 'all' || prod.categorySlug === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.primaryKeywords?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-directory-wrapper">
      <nav className="product-breadcrumb-nav" aria-label="breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li><span className="breadcrumb-separator">/</span></li>
            <li className="active" aria-current="page">All Products</li>
          </ol>
        </div>
      </nav>

      <section className="products-hero-banner">
        <div className="container text-center">
          <span className="tagline-badge">Complete Factory Catalog</span>
          <h1 className="products-catalog-h1">Industrial Pipe Nipples &amp; Threaded Fittings</h1>
          <p className="products-catalog-sub">
            Precision manufactured in SS 304, SS 316, Mild Steel and Brass at our Ahmedabad facility.
          </p>

          <div className="catalog-search-bar">
            <input 
              type="text" 
              placeholder="Search by nipple type, material grade, or thread standard..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="products-filter-bar">
        <div className="container">
          <div className="filter-pills-row">
            <button
              type="button"
              className={`filter-pill ${selectedCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Products ({allProductsList.length})
            </button>
            {categoriesData.map(cat => (
              <button
                key={cat.slug}
                type="button"
                className={`filter-pill ${selectedCategory === cat.slug ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat.slug)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-directory-grid">
            {filteredProducts.map(prod => (
              <div key={prod.slug} className="product-dir-card">
                <div className="dir-card-media">
                  <img 
                    src={prod.mainImage || '/assets/images/ss barrel nipple.png'} 
                    alt={prod.name} 
                    loading="lazy" 
                  />
                  <span className="dir-cat-badge">{prod.categoryName}</span>
                </div>

                <div className="dir-card-body">
                  <h3 className="dir-product-title">
                    <Link to={`/product/${prod.slug}`}>{prod.name}</Link>
                  </h3>
                  <p className="dir-product-desc">{prod.heroSubheading}</p>

                  <ul className="dir-features-list">
                    {prod.keyFeatures.slice(0, 3).map((f, i) => (
                      <li key={i}><span className="mini-chev">&gt;</span> {f}</li>
                    ))}
                  </ul>

                  <div className="dir-card-footer">
                    <Link to={`/product/${prod.slug}`} className="btn btn-outline-primary btn-sm">
                      View Details &rarr;
                    </Link>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        setModalProduct(prod.name);
                        setIsModalOpen(true);
                      }}
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-5">
              <h3>No matching products found</h3>
              <p>Try clearing your search query or selecting a different category.</p>
              <button 
                type="button" 
                className="btn btn-primary mt-3" 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={modalProduct}
      />
    </div>
  );
}
