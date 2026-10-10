import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { andhraPradeshData } from './src/data/andhraPradeshData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allCities = [
  { slug: 'visakhapatnam', name: 'Visakhapatnam' },
  { slug: 'anakapalle-parawada', name: 'Anakapalle–Parawada' },
  { slug: 'vijayawada', name: 'Vijayawada' },
  { slug: 'guntur', name: 'Guntur' },
  { slug: 'rajahmundry-kakinada', name: 'Rajahmundry–Kakinada' },
  { slug: 'nellore-krishnapatnam', name: 'Nellore–Krishnapatnam' },
  { slug: 'tirupati-sri-city', name: 'Tirupati–Sri City' },
  { slug: 'kurnool', name: 'Kurnool' },
  { slug: 'anantapur-hindupur', name: 'Anantapur–Hindupur' },
  { slug: 'eluru-bhimavaram', name: 'Eluru–Bhimavaram' }
];

function generateHtml(city) {
  const currentSlug = city.slug;
  const canonicalUrl = `https://sunrise.industries/andhra-pradesh/${currentSlug}/`;

  // JSON-LD FAQs
  const faqSchema = (city.faqs || []).map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a
    }
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": city.h1,
        "serviceType": "Industrial SS Nipple Supply and CNC Machining",
        "description": city.subHeading,
        "provider": {
          "@type": "Organization",
          "name": "Sunrise Industries",
          "url": "https://sunrise.industries/"
        },
        "areaServed": {
          "@type": "City",
          "name": city.name,
          "containedInPlace": {
            "@type": "State",
            "name": "Andhra Pradesh"
          }
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Sunrise Industries",
        "telephone": "+91-62641-31446",
        "email": "sales@sunrise.industries",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "125-41, Small Scale Co Op Ind Estate Ltd, B/H Ajit Mill, Rakhiyal Road",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380023",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqSchema
      }
    ]
  };

  // Dropdown items
  const dropdownItems = allCities.map(c => {
    const isActive = c.slug === currentSlug ? ' active' : '';
    const label = c.slug === currentSlug ? `${c.name} (Current)` : c.name;
    return `            <a href="../${c.slug}/" class="dropdown-item${isActive}">${label}</a>`;
  }).join('\n');

  // Hero paragraphs
  const heroParasHtml = (city.heroParagraphs || []).map(p => `        <p class="hero-desc">${p}</p>`).join('\n');

  // Trust stats
  const trustStatsHtml = (city.trustStats || []).map(s => `        <div class="stat-card">
          <div class="stat-number">${s.num}</div>
          <div class="stat-label">${s.label}</div>
          <div class="stat-sublabel">${s.sub}</div>
        </div>`).join('\n');

  // Why paragraphs
  const whyParasHtml = (city.whyParagraphs || []).map(p => `        <p style="margin-top: 1.25rem;">${p}</p>`).join('\n');

  // Snapshot table
  const snapshotRowsHtml = (city.snapshotTable || []).map(row => `            <tr>
              <td><strong>${row.app}</strong></td>
              <td>${row.grade}</td>
              <td>${row.wall || 'Sch 40 / 80'}</td>
              <td>${row.type}</td>
              <td>${row.note}</td>
            </tr>`).join('\n');

  // Questions
  const questionsHtml = (city.questions || []).map(q => `        <div class="question-card">
          <div class="question-num">${q.num}</div>
          <h3 class="question-title">${q.title}</h3>
          <p class="question-text">${q.text}</p>
        </div>`).join('\n');

  // Material table
  const materialRowsHtml = (city.materialTable || []).map(m => `            <tr>
              <td><strong>${m.mat}</strong></td>
              <td>${m.good}</td>
              <td>${m.bad}</td>
            </tr>`).join('\n');

  // Conditions
  const conditionsHtml = (city.conditions || []).map(c => `        <div class="condition-item">
          <h4>${c.title}</h4>
          <p>${c.text}</p>
        </div>`).join('\n');

  // Fitting tips
  const tipsHtml = (city.fittingTips || []).map(t => `        <li>${t}</li>`).join('\n');

  // Custom details
  const customListHtml = (city.customDetails || []).map(d => `        <li>${d}</li>`).join('\n');

  // Industries
  const industriesHtml = (city.industries || []).map(ind => `        <div class="feature-card">
          <h3 class="feature-card-title">${ind.name}</h3>
          <p class="feature-card-desc">${ind.desc}</p>
        </div>`).join('\n');

  // Why Sunrise
  const whySunriseHtml = (city.whySunrise || []).map(w => `        <li>${w}</li>`).join('\n');

  // Delivery steps
  const deliveryHtml = (city.deliverySteps || []).map((step, idx) => `        <li><strong>Step ${idx + 1}:</strong> ${step}</li>`).join('\n');

  // FAQs
  const faqsHtml = (city.faqs || []).map(f => `        <div class="faq-item">
          <button class="faq-question">
            <span>${f.q}</span>
            <span class="faq-icon"><svg viewBox="0 0 320 512" width="10" height="10"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg></span>
          </button>
          <div class="faq-answer">
            ${f.a}
          </div>
        </div>`).join('\n');

  // Neighbour links
  const neighbourHtml = (city.neighbourLinks || []).map(nb => {
    const href = nb.stateSlug && nb.stateSlug !== 'andhra-pradesh' 
      ? `../../${nb.stateSlug}/${nb.slug}/` 
      : `../${nb.slug}/`;
    return `          <a href="${href}" style="color: var(--primary-dark); font-weight: 600;">&rarr; ${nb.name}</a>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>${city.title}</title>
  <meta name="description" content="${city.metaDescription}">
  <meta name="keywords" content="${city.keywords}">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="../../css/style.css">
  <link rel="stylesheet" href="../../css/components.css">

  <!-- Schema.org JSON-LD Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
</head>
<body>

  <!-- Top Announcement Bar -->
  <aside class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <span class="top-bar-item"><strong>QMS 9001:2015 Certified</strong></span>
        <span class="top-bar-item top-highlight">Supplying ${city.name} Industrial Plants from Ahmedabad Works</span>
      </div>
      <div class="top-bar-right">
        <a href="tel:+916264131446" class="top-bar-link">+91 62641 31446</a>
        <a href="mailto:info@sunrise.industries" class="top-bar-link">info@sunrise.industries</a>
      </div>
    </div>
  </aside>

  <!-- Main Header Navigation -->
  <header class="main-header">
    <div class="container navbar">
      <a href="../../" class="nav-brand">
        <img src="../../assets/images/logo.svg" alt="Sunrise Industries Logo" width="260" height="52">
      </a>

      <nav class="nav-menu">
        <a href="../../" class="nav-link">Home</a>
        <a href="../../about-us/" class="nav-link">About Us</a>
        <a href="../../#nipple-range" class="nav-link">SS Nipples</a>
        
        <div class="nav-item-dropdown">
          <a href="#" class="nav-link active">
            Andhra Pradesh Cities
            <svg class="dropdown-arrow" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>
          </a>
          <div class="dropdown-menu">
${dropdownItems}
          </div>
        </div>

        <a href="#specifications" class="nav-link">Specifications</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>

      <div class="nav-actions">
        <a href="#quote-form" class="btn btn-primary btn-sm">Get ${city.name} Quote &rarr;</a>
      </div>

      <button class="mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <svg viewBox="0 0 100 80"><rect width="100" height="12" rx="6"/><rect y="30" width="100" height="12" rx="6"/><rect y="60" width="100" height="12" rx="6"/></svg>
      </button>
    </div>
  </header>

  <!-- Section 1: Hero -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="../../">Home</a>
          <span class="separator">/</span>
          <a href="../../market-area">Andhra Pradesh</a>
          <span class="separator">/</span>
          <span class="current">${city.name}</span>
        </nav>
        <div class="hero-tagline">
          <h2>${city.tagline}</h2>
        </div>
        <h1>${city.h1}</h1>
        <p class="hero-subhead">
          ${city.subHeading}
        </p>
${heroParasHtml}

        <div class="hero-actions">
          <a href="#quote-form" class="btn btn-primary btn-lg">Get a ${city.name} Quote <span class="btn-arrow">&rarr;</span></a>
          <a href="#quote-form" class="btn btn-outline-white btn-lg">Send Your Specification</a>
          <a href="tel:+916264131446" class="btn btn-outline-white btn-lg">Call +91 62641 31446</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Trust strip -->
  <section class="trust-strip">
    <div class="container">
      <h2 class="trust-title">${city.trustTitle}</h2>
      <div class="stats-grid">
${trustStatsHtml}
      </div>
    </div>
  </section>

  <!-- Section 3: Why City -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Regional Analysis</span>
        <h2>${city.whyTitle}</h2>
        <h3>${city.whySubtitle}</h3>
      </div>
      <div class="fundamentals-two-col">
        <div class="fundamentals-text">
${whyParasHtml}
        </div>
        <div class="fundamentals-photo-card">
          <img 
            src="../../assets/images/Stainless Steel Pipe Fittings Collection.png" 
            alt="Stainless Steel Pipe Fittings and Nipples for ${city.name}" 
            loading="lazy"
          >
          <span class="photo-caption-badge">Precision Joints for ${city.name} Heavy Industry &amp; Plants</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: The range -->
  <section class="section section-light" id="nipple-range">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Product Range</span>
        <h2>${city.rangeTitle}</h2>
        <h3>${city.rangeSubtitle}</h3>
      </div>

      <div class="cards-grid">
        <div class="feature-card">
          <div class="product-thumb-wrap">
            <img src="../../assets/images/SS Hex Nipple.png" alt="SS Hex Nipple" loading="lazy">
          </div>
          <h3 class="feature-card-title">SS 316 / 316L Hex Nipple</h3>
          <p class="feature-card-desc">The standard choice for outdoor, port-side, process, instrument and chemical lines. Controlled tightening and easy re-torque.</p>
          <a href="#quote-form" class="feature-card-btn">Click Here</a>
        </div>
        <div class="feature-card">
          <div class="product-thumb-wrap">
            <img src="../../assets/images/ss barrel nipple.png" alt="SS Barrel Nipple" loading="lazy">
          </div>
          <h3 class="feature-card-title">SS 316 / 304 Barrel Nipple</h3>
          <p class="feature-card-desc">Reach between valves, tanks and heat exchangers on coastal and plant pipework with full NPT/BSPT threading.</p>
          <a href="#quote-form" class="feature-card-btn">Click Here</a>
        </div>
        <div class="feature-card">
          <div class="product-thumb-wrap">
            <img src="../../assets/images/SS Close Nipple.png" alt="SS Close Nipple" loading="lazy">
          </div>
          <h3 class="feature-card-title">SS Close Nipple</h3>
          <p class="feature-card-desc">Compact fully threaded connections on instrument manifolds, reactor sample points and tight skid piping.</p>
          <a href="#quote-form" class="feature-card-btn">Click Here</a>
        </div>
        <div class="feature-card">
          <div class="product-thumb-wrap">
            <img src="../../assets/images/SS Reducing Nipple.png" alt="SS Reducing Nipple" loading="lazy">
          </div>
          <h3 class="feature-card-title">SS Reducing Nipple</h3>
          <p class="feature-card-desc">Precision steps from header to instrument or branch without redundant fittings. Available in equal hex flats.</p>
          <a href="#quote-form" class="feature-card-btn">Click Here</a>
        </div>
        <div class="feature-card">
          <div class="product-thumb-wrap">
            <img src="../../assets/images/7a8533f9-c0ee-4957-8664-a72711dc71b7.png" alt="SS Hose Nipple" loading="lazy">
          </div>
          <h3 class="feature-card-title">Schedule 80 &amp; Hose Nipples</h3>
          <p class="feature-card-desc">Heavy-wall nipples for steam boilers and severe duty, plus ribbed SS hose nipples for seafood, agro and plant wash-downs.</p>
          <a href="#quote-form" class="feature-card-btn">Click Here</a>
        </div>
        <div class="feature-card">
          <div class="product-thumb-wrap">
            <img src="../../assets/images/Custom CNC Nipples.png" alt="Custom CNC Nipples" loading="lazy">
          </div>
          <h3 class="feature-card-title">Custom CNC Nipples</h3>
          <p class="feature-card-desc">Machined to drawing or sample in SS 316L, 304, MS, brass and aluminium with mixed NPT/BSPT threads for imported skids.</p>
          <a href="#quote-form" class="feature-card-btn">Click Here</a>
        </div>
      </div>

      <div style="text-align: center; margin-top: 2.5rem;">
        <a href="#quote-form" class="btn btn-primary btn-lg">Request a ${city.name} Price List &rarr;</a>
      </div>
    </div>
  </section>

  <!-- Engineering Excellence Banner -->
  <section class="section section-dark" id="engineering-excellence">
    <div class="container">
      <div class="engineering-split-grid">
        <div class="engineering-content">
          <span class="tagline-badge" style="color: var(--primary); background: rgba(245, 166, 35, 0.15);">Engineering Excellence</span>
          <h2>Precision CNC Turning for ${city.name} Industrial Plants</h2>
          <p>
            Need a custom SS nipple that isn't in any catalogue? Our engineering team in Ahmedabad takes your drawing or sample from first prototype to full-scale production, with material selection, CNC machining, threading and inspection all done under one roof. We machine hex, barrel, close and reducing nipples in SS 304 and SS 316, in BSP, BSPT and NPT threads, and in special lengths, mixed threads and non-standard hex sizes. With 10+ production lines, an ISO 9001:2015 certified quality system and fast dispatch to ${city.name}, we deliver precision components that fit the first time.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#quote-form" class="btn btn-primary btn-lg">Request Custom ${city.name} Order &rarr;</a>
          </div>
        </div>
        <div class="engineering-photo-card">
          <img src="../../assets/images/custom fabrication.png" alt="Precision CNC Machining Facility for ${city.name} - Sunrise Industries" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: City supply snapshot -->
  <section class="section" id="specifications">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Engineer Matrix</span>
        <h2>${city.snapshotTitle}</h2>
        <h3>Reference recommendations for ${city.name} facilities</h3>
      </div>

      <div class="table-container">
        <table class="specs-table">
          <thead>
            <tr>
              <th>Where / Duty</th>
              <th>Grade / Material</th>
              <th>Wall / Schedule</th>
              <th>Type</th>
              <th>Engineering Note</th>
            </tr>
          </thead>
          <tbody>
${snapshotRowsHtml}
          </tbody>
        </table>
      </div>
      <p style="margin-top: 1rem; font-size: 0.95rem; color: var(--text-muted);">
        ${city.snapshotNote}
      </p>
    </div>
  </section>

  <!-- Section 6: Choosing the right nipple -->
  <section class="section section-light">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Buying Guide</span>
        <h2>${city.questionsTitle}</h2>
        <h3>${city.questionsSubtitle}</h3>
      </div>

      <div class="four-questions-grid">
${questionsHtml}
      </div>
    </div>
  </section>

  <!-- Section 7: Material guide -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Metallurgy Guide</span>
        <h2>${city.materialTitle}</h2>
        <h3>${city.materialSubtitle}</h3>
      </div>

      <div class="table-container">
        <table class="specs-table">
          <thead>
            <tr>
              <th>Material</th>
              <th>Good for</th>
              <th>Not good for</th>
            </tr>
          </thead>
          <tbody>
${materialRowsHtml}
          </tbody>
        </table>
      </div>
      <p style="margin-top: 1rem; font-size: 0.95rem; color: var(--text-muted);">
        ${city.materialRule}
      </p>
    </div>
  </section>

  <!-- Section 8: Local conditions -->
  <section class="section section-light">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Local Realities</span>
        <h2>${city.conditionsTitle}</h2>
        <h3>${city.conditionsSubtitle}</h3>
      </div>

      <div class="conditions-grid">
${conditionsHtml}
      </div>
    </div>
  </section>

  <!-- Section 9: Fitting tips -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Maintenance Tips</span>
        <h2>${city.fittingTipsTitle}</h2>
        <h3>${city.fittingTipsSubtitle}</h3>
      </div>

      <ul class="tips-list">
${tipsHtml}
      </ul>
    </div>
  </section>

  <!-- Section 10: Custom nipples -->
  <section class="section section-light">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">CNC Machining</span>
        <h2>${city.customTitle}</h2>
        <h3>${city.customSubtitle}</h3>
      </div>
      <p>
        We CNC-machine nipples to sample or drawing in stainless steel, mild steel, brass and aluminium. Regular requirements from ${city.name} include:
      </p>
      <ul style="margin: 1rem 0 1.5rem 1.5rem; line-height: 1.8;">
${customListHtml}
      </ul>
      <div style="margin-top: 1.5rem;">
        <a href="#quote-form" class="btn btn-primary btn-lg">Send Your Sample or Drawing &rarr;</a>
      </div>
    </div>
  </section>

  <!-- Section 11: Complete the line -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Complete Supply</span>
        <h2>Couplings, Flanges, Pipes and Coatings With Your Nipples</h2>
        <h3>Consolidated single-enquiry supply from Ahmedabad works</h3>
      </div>
      <p>
        ${city.completeLineText}
      </p>
    </div>
  </section>

  <!-- Section 12: Industries -->
  <section class="section section-light">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Sectors Served</span>
        <h2>${city.name} Industries We Supply</h2>
        <h3>High-performance threaded connections across core clusters</h3>
      </div>

      <div class="cards-grid">
${industriesHtml}
      </div>
    </div>
  </section>

  <!-- Section 13: Why Sunrise -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Why Sunrise</span>
        <h2>Why ${city.name} Buyers Choose Sunrise</h2>
        <h3>Direct manufacturer accountability and transparent supply</h3>
      </div>

      <ul class="why-list">
${whySunriseHtml}
      </ul>
    </div>
  </section>

  <!-- Section 14: Delivery and ordering -->
  <section class="section section-light">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">Logistics</span>
        <h2>From Ahmedabad to ${city.name}: How It Works</h2>
        <h3>Scheduled national freight corridors with secure packaging</h3>
      </div>

      <ol class="steps-list">
${deliveryHtml}
      </ol>
      <p style="margin-top: 1.5rem; font-size: 0.95rem; color: var(--text-muted);">
        Dispatched by road freight along the national highway corridor. Freight and transit time are confirmed in your quote. Combine requirements into one larger order to keep freight sensible.
      </p>
    </div>
  </section>

  <!-- Section 15: FAQ -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="tagline-badge">FAQs</span>
        <h2>${city.name} SS Nipple FAQs</h2>
        <h3>Technical answers on materials, deliveries and specifications</h3>
      </div>

      <div class="faq-accordion">
${faqsHtml}
      </div>
    </div>
  </section>

  <!-- Section 16: Final CTA -->
  <section class="section section-light" id="quote-form">
    <div class="container" style="max-width: 800px; text-align: center;">
      <span class="tagline-badge">Direct Factory Quotation</span>
      <h2>${city.ctaHeadline}</h2>
      <h3 style="color: var(--text-muted); font-weight: 500; margin-bottom: 2rem;">${city.ctaSub}</h3>
      <div style="display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap;">
        <a href="tel:+916264131446" class="btn btn-primary btn-lg">Call +91 62641 31446 <span class="btn-arrow">&rarr;</span></a>
        <a href="mailto:sales@sunrise.industries" class="btn btn-outline btn-lg">Email ${city.name} RFQ</a>
      </div>

      <!-- Interlinking Neighbouring Cities -->
      <div style="margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid var(--light-border); text-align: left;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem;">Connected Industrial Supply Belts:</h4>
        <div style="display: flex; gap: 1.25rem; flex-wrap: wrap; font-size: 0.95rem;">
${neighbourHtml}
          <a href="../../market-area" style="color: var(--primary-dark); font-weight: 700;">&rarr; All Cities We Serve (Market Area)</a>
          <a href="../../" style="color: var(--text-primary); font-weight: 600;">&larr; Back to Home</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Shared Contact Block (End of every page) -->
  <section class="container" id="contact">
    <div class="shared-contact-card">
      <div class="contact-card-header">
        <h3>Sunrise Industries — Direct Factory Contact</h3>
        <p>Stainless steel nipples, CNC precision fittings, and raw material stock dispatched from Ahmedabad.</p>
      </div>
      <div class="contact-card-grid">
        <div>
          <div class="contact-group-title">Phone &amp; Direct Assistance</div>
          <div class="contact-group-links">
            <a href="tel:+916264131446" class="contact-item-link">&#9742; +91 62641 31446</a>
            <a href="tel:+919783043132" class="contact-item-link">&#9742; +91 97830 43132</a>
          </div>
        </div>
        <div>
          <div class="contact-group-title">Official Email Enquiries</div>
          <div class="contact-group-links">
            <a href="mailto:info@sunrise.industries" class="contact-item-link">&#9993; info@sunrise.industries</a>
            <a href="mailto:sales@sunrise.industries" class="contact-item-link">&#9993; sales@sunrise.industries</a>
            <a href="mailto:exports@sunrise.industries" class="contact-item-link">&#9993; exports@sunrise.industries</a>
          </div>
        </div>
        <div>
          <div class="contact-group-title">Manufacturing Plant &amp; Works</div>
          <div class="contact-address">
            125-41, Small Scale Co Op Ind Estate Ltd,<br>
            B/H Ajit Mill, Rakhiyal Road,<br>
            Ahmedabad 380023, Gujarat, India.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-top">
      <div class="footer-brand">
        <a href="../../">
          <img src="../../assets/images/logo-white.svg" alt="Sunrise Industries" width="220" height="44">
        </a>
        <p>
          Supplying SS 304, 316 and 316L industrial nipples manufactured in Ahmedabad to ${city.name} ports, plants, mills and contractors. Certified ISO 9001:2015.
        </p>
      </div>

      <div class="footer-col">
        <h4>SS Nipples</h4>
        <div class="footer-links">
          <a href="../../#hex-nipple">SS Hex Nipple</a>
          <a href="../../#barrel-nipple">SS Barrel Nipple</a>
          <a href="../../#close-nipple">SS Close Nipple</a>
          <a href="../../#reducing-nipple">SS Reducing Nipple</a>
          <a href="../../#hose-nipple">SS Hose Nipple</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Andhra Pradesh Hubs</h4>
        <div class="footer-links">
          <a href="../visakhapatnam/">Visakhapatnam</a>
          <a href="../anakapalle-parawada/">Anakapalle–Parawada</a>
          <a href="../vijayawada/">Vijayawada</a>
          <a href="../guntur/">Guntur</a>
          <a href="../rajahmundry-kakinada/">Rajahmundry–Kakinada</a>
          <a href="../nellore-krishnapatnam/">Nellore–Krishnapatnam</a>
          <a href="../tirupati-sri-city/">Tirupati–Sri City</a>
          <a href="../kurnool/">Kurnool</a>
          <a href="../anantapur-hindupur/">Anantapur–Hindupur</a>
          <a href="../eluru-bhimavaram/">Eluru–Bhimavaram</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Direct Contact</h4>
        <div class="footer-links">
          <a href="tel:+916264131446">+91 62641 31446</a>
          <a href="mailto:sales@sunrise.industries">sales@sunrise.industries</a>
          <a href="../../about-us/">About Sunrise</a>
          <a href="../../#faq">Engineering FAQs</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>2026 &copy; Sunrise Industries | All Rights Reserved.</p>
        <p>Powered by <a href="https://bitstreaks.com/" target="_blank" rel="noopener" class="powered-by">Bitstreaks Technology</a></p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="../../js/main.js"></script>
</body>
</html>
`;
}

// Ensure base dir exists
const baseDir = path.join(__dirname, 'andhra-pradesh');
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

for (const [slug, city] of Object.entries(andhraPradeshData)) {
  const cityDir = path.join(baseDir, slug);
  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
  }
  const filePath = path.join(cityDir, 'index.html');
  const html = generateHtml(city);
  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`Generated static page: ${filePath}`);
}

console.log('All 10 Andhra Pradesh static HTML pages generated successfully!');
