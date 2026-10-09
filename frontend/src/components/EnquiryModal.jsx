import React, { useState } from 'react';

export default function EnquiryModal({ isOpen, onClose, productName = 'SS Barrel Nipple' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    grade: 'SS 304',
    size: '1/2" NB',
    quantity: '100 Pcs',
    notes: `Looking for quote on ${productName}. Please share pricing and dispatch lead time.`
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate submission
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-header">
          <span className="modal-badge">Direct Factory RFQ</span>
          <h3 className="modal-title">Request a Quick Quote</h3>
          <p className="modal-subtitle">
            Instant factory pricing for <strong>{productName}</strong> from our Ahmedabad manufacturing facility.
          </p>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon">&#10003;</div>
            <h4>Thank You for Your Enquiry!</h4>
            <p>Our sales engineer is reviewing your requirement and will share a formal quote within 2 working hours.</p>
            <div className="quick-contact-reminder">
              Need immediate dispatch? Call: <a href="tel:+916264131446">+91 62641 31446</a>
            </div>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Rajesh Sharma" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Phone / WhatsApp *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g. +91 98765 43210" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Business Email *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="e.g. purchase@company.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Company / Location</label>
                <input 
                  type="text" 
                  placeholder="e.g. Apex Piping, Mumbai" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row form-row-three">
              <div className="form-group">
                <label>Material Grade</label>
                <select 
                  value={formData.grade}
                  onChange={(e) => setFormData({...formData, grade: e.target.value})}
                >
                  <option value="SS 304">SS 304</option>
                  <option value="SS 304L">SS 304L</option>
                  <option value="SS 316">SS 316</option>
                  <option value="SS 316L">SS 316L</option>
                  <option value="Mild Steel (Black)">Mild Steel (Black)</option>
                  <option value="Mild Steel (Galvanised)">Mild Steel (GI)</option>
                  <option value="Brass">Brass</option>
                </select>
              </div>

              <div className="form-group">
                <label>Size / Schedule</label>
                <select 
                  value={formData.size}
                  onChange={(e) => setFormData({...formData, size: e.target.value})}
                >
                  <option value={'1/8" NB'}>1/8" NB</option>
                  <option value={'1/4" NB'}>1/4" NB</option>
                  <option value={'3/8" NB'}>3/8" NB</option>
                  <option value={'1/2" NB'}>1/2" NB</option>
                  <option value={'3/4" NB'}>3/4" NB</option>
                  <option value={'1" NB'}>1" NB</option>
                  <option value={'1-1/4" NB'}>1-1/4" NB</option>
                  <option value={'1-1/2" NB'}>1-1/2" NB</option>
                  <option value={'2" NB'}>2" NB</option>
                  <option value={'2-1/2" NB'}>2-1/2" NB</option>
                  <option value={'3" NB'}>3" NB</option>
                  <option value={'4" NB'}>4" NB</option>
                  <option value="Custom Size">Custom Size</option>
                </select>
              </div>

              <div className="form-group">
                <label>Estimated Qty</label>
                <input 
                  type="text" 
                  placeholder="e.g. 500 pcs" 
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Requirement Details / Custom Length / Thread Specification</label>
              <textarea 
                rows="3" 
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              />
            </div>

            <div className="modal-actions">
              <button type="submit" className="btn btn-primary modal-submit-btn">
                Submit RFQ & Get Quote &rarr;
              </button>
              <p className="privacy-note">
                🔒 Direct factory price. No spam. MTC 3.1 test certificates provided on request.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
