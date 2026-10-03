/**
 * SUNRISE INDUSTRIES - CORE INTERACTIVITY JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true' || false;
      mobileToggle.setAttribute('aria-expanded', !expanded);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        
        // Optional: close other open items for single-accordion style
        faqItems.forEach((other) => {
          if (other !== item) other.classList.remove('is-open');
        });

        item.classList.toggle('is-open', !isOpen);
      });
    }
  });

  // 3. RFQ & Inquiry Form Interactivity
  const rfqForms = document.querySelectorAll('.rfq-form');
  rfqForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerText : 'Submit';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting Request...';
      }

      setTimeout(() => {
        alert('Thank you! Your SS Nipple enquiry has been received by Sunrise Industries. Our technical sales team in Ahmedabad will review your specification and respond with a detailed quote within 24 hours.');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
        }
      }, 700);
    });
  });

  // 4. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
