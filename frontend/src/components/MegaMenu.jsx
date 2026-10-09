import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesData, productsData } from '../data/productsData';

export default function MegaMenu({ isOpen, onClose }) {
  const [activeCategorySlug, setActiveCategorySlug] = useState('ss-nipples');

  const activeCategory = categoriesData.find(c => c.slug === activeCategorySlug) || categoriesData[0];
  
  // Get products for the active category
  const categoryProducts = (activeCategory.productSlugs || [])
    .map(slug => productsData[slug])
    .filter(Boolean);

  if (!isOpen) return null;

  return (
    <div 
      className="mega-menu-container"
      role="menu"
      aria-label="Products Catalog Mega Menu"
    >
      <div className="mega-menu-inner">
        {/* Left Side: Categories List */}
        <div className="mega-menu-sidebar">
          <div className="mega-menu-sidebar-header">
            <span className="sidebar-title">Product Categories</span>
          </div>
          <ul className="mega-category-list">
            {categoriesData.map(category => {
              const isActive = category.slug === activeCategorySlug;
              return (
                <li key={category.slug} className="mega-category-item">
                  <button
                    type="button"
                    className={`mega-category-btn ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveCategorySlug(category.slug)}
                    onClick={() => setActiveCategorySlug(category.slug)}
                  >
                    <span className="category-btn-text">{category.name}</span>
                    <span className="category-arrow">&rsaquo;</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mega-menu-sidebar-footer">
            <Link 
              to="/product-category/ss-nipples" 
              className="view-full-catalog-link"
              onClick={onClose}
            >
              Featured: SS Nipples Range &rarr;
            </Link>
          </div>
        </div>

        {/* Right Side: Products Grid for Selected Category */}
        <div className="mega-menu-content">
          <div className="mega-menu-content-header">
            <div>
              <span className="category-badge">{activeCategory.badge || 'Manufactured in Ahmedabad'}</span>
              <h3 className="category-heading">{activeCategory.name}</h3>
              <p className="category-subheading">{activeCategory.heroSubheading || activeCategory.metaDescription}</p>
            </div>
            <Link 
              to={activeCategory.url} 
              className="btn btn-outline-primary btn-sm view-category-btn"
              onClick={onClose}
            >
              View All {activeCategory.name} &rarr;
            </Link>
          </div>

          <div className="mega-products-grid">
            {categoryProducts.length > 0 ? (
              categoryProducts.map(product => (
                <Link
                  key={product.slug}
                  to={`/product/${product.slug}`}
                  className="mega-product-card"
                  onClick={onClose}
                >
                  <div className="product-card-thumb">
                    <img 
                      src={product.mainImage || '/assets/images/ss barrel nipple.png'} 
                      alt={product.name} 
                      loading="lazy"
                    />
                  </div>
                  <div className="product-card-info">
                    <h4 className="product-card-title">{product.name}</h4>
                    <span className="product-card-meta">
                      {product.technicalSpecs?.[1]?.details || 'BSP & NPT Threads'}
                    </span>
                  </div>
                  <span className="product-card-chevron">&rarr;</span>
                </Link>
              ))
            ) : (
              <div className="mega-empty-notice">
                <p>Custom drawings and bespoke manufacturing available on request.</p>
                <Link 
                  to={activeCategory.url} 
                  className="btn btn-primary btn-sm mt-2" 
                  onClick={onClose}
                >
                  Explore Category &rarr;
                </Link>
              </div>
            )}
          </div>

          <div className="mega-menu-footer-strip">
            <div className="footer-strip-item">
              <span className="strip-check">&#10003;</span> ISO 9001:2015 Certified Manufacturing
            </div>
            <div className="footer-strip-item">
              <span className="strip-check">&#10003;</span> Calibrated Go/No-Go Gauged Threads
            </div>
            <div className="footer-strip-item">
              <span className="strip-check">&#10003;</span> Export Standard Packing to 5+ Countries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
