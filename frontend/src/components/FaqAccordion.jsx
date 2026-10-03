import React, { useState } from 'react';

export default function FaqAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="faq-icon" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}>
                <svg viewBox="0 0 320 512" width="10" height="10">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/>
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="faq-answer" style={{ display: 'block' }}>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
