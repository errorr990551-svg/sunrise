import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoriesData, productsData } from '../data/productsData';

// Curated compact metadata badges to keep cards neat and uniform like SS Nipples
const COMPACT_SPEC_MAP = {
  // Custom Metal Manufacturing
  'custom-metal-fabrication': 'SS, MS, Brass & Al',
  'prototype-development': '1 to 50 pcs typical',
  'mass-production': 'High volume runs',
  'sheet-metal-fabrication': '0.5 mm to 6 mm',
  'laser-cutting': 'Up to 25 mm plate',
  'press-components': '10T to 150T press',
  'welding-fabrication': 'TIG, MIG & Arc',
  'surface-finishing-polishing': 'Satin, mirror & matte',
  
  // CNC Machining Services
  'cnc-turning': '2 mm to 150 mm dia',
  'cnc-milling': 'Up to 600 mm travel',
  'cnc-machined-components': 'Turning & milling',
  'vmc-machining': 'Precision VMC',
  'cnc-drilling': '1 mm to 50 mm hole',
  'cnc-thread-cutting': 'BSP, NPT, Metric',
  'precision-shafts-bushes': '3 mm to 150 mm dia',
  'multi-axis-cnc-machining': 'Multi-axis CNC',
  'custom-cnc-fasteners': '2 mm to 60 mm dia',

  // SS Sheets & Circles
  'ss-304-sheet': '0.5 mm to 6 mm',
  'ss-316-sheet': '0.5 mm to 6 mm',
  'ss-perforated-sheet': 'Round & hex holes',
  'ss-circle': '50 mm to 1200 mm',
  'ss-chequered-plate': 'Tear & diamond pattern',
  'ss-plate': '6 mm to 50 mm',
  'ss-coil': 'Slit & wide coils',
  'ss-decorative-sheet': 'Gold, mirror & PVD',
  'ss-shim-sheet': '0.05 mm to 1 mm',

  // Brass Parts
  'brass-turned-parts': 'CW614N & IS 319',
  'brass-fittings': 'BSP & NPT threads',
  'brass-bushes': 'Plain & flanged',
  'brass-nuts': 'Hex & lock nuts',
  'brass-washers': 'Plain & spring',
  'brass-inserts': 'Knurled threaded',
  'brass-cable-glands': 'IP68 certified',
  'brass-terminals': 'Electrical & earth'
};

function getCompactSpec(product) {
  if (!product) return '';
  if (COMPACT_SPEC_MAP[product.slug]) {
    return COMPACT_SPEC_MAP[product.slug];
  }
  const raw = product.technicalSpecs?.[1]?.details || product.technicalSpecs?.[0]?.details || 'Custom Specifications';
  if (raw.length > 26) {
    const firstPart = raw.split(',')[0].trim();
    if (firstPart.length <= 26) return firstPart;
    return raw.slice(0, 24) + '...';
  }
  return raw;
}

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
                      {getCompactSpec(product)}
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
