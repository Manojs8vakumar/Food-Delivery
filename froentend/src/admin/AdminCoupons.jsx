import React, { useState } from 'react';
import { 
  Tag, 
  Plus, 
  Trash2, 
  Percent, 
  Sparkles, 
  Check, 
  X,
  Copy
} from 'lucide-react';

export default function AdminCoupons({ 
  coupons, 
  onAddCoupon, 
  onDeleteCoupon 
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);

  const [form, setForm] = useState({
    code: '',
    title: '',
    discountPercent: 30,
    maxDiscount: 120,
    minOrder: 199,
    description: 'Special promo offer for Crave Foodie users'
  });

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.code.trim()) return;

    onAddCoupon({
      ...form,
      code: form.code.trim().toUpperCase(),
      discountPercent: Number(form.discountPercent) || 20,
      maxDiscount: Number(form.maxDiscount) || 100,
      minOrder: Number(form.minOrder) || 149
    });

    setIsModalOpen(false);
  };

  return (
    <div className="admin-coupons-view animate-fade-in">
      
      {/* Header bar */}
      <div className="admin-toolbar-row">
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>Promo Codes & Discount Engine</h2>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            Active discount coupons configured for cart checkout
          </p>
        </div>

        <button className="admin-primary-btn" onClick={() => setIsModalOpen(true)}>
          <Plus size={16} />
          <span>Create New Coupon</span>
        </button>
      </div>

      {/* Grid of coupon cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
        {coupons.map((coupon) => (
          <div 
            key={coupon.code}
            className="admin-card-panel"
            style={{ 
              position: 'relative', 
              borderLeft: '4px solid var(--zomato-red)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ 
                  backgroundColor: 'var(--zomato-red-light)', 
                  color: 'var(--zomato-red)', 
                  fontSize: 16, 
                  fontWeight: 800, 
                  padding: '4px 10px', 
                  borderRadius: 6,
                  letterSpacing: 1
                }}>
                  {coupon.code}
                </span>

                <button 
                  className="admin-icon-btn delete"
                  onClick={() => {
                    if (window.confirm(`Delete coupon "${coupon.code}"?`)) {
                      onDeleteCoupon(coupon.code);
                    }
                  }}
                  title="Delete coupon"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>
                {coupon.title}
              </h3>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>
                {coupon.description}
              </p>

              <div style={{ 
                backgroundColor: 'var(--bg-primary)', 
                borderRadius: 'var(--radius-sm)', 
                padding: '10px 12px', 
                fontSize: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: 6
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Min Order:</span>
                  <strong>₹{coupon.minOrder}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Max Cap:</span>
                  <strong>{coupon.maxDiscount ? `₹${coupon.maxDiscount}` : 'No limit'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Discount:</span>
                  <strong style={{ color: 'var(--zomato-green)' }}>
                    {coupon.freeDelivery ? 'Free Delivery' : `${coupon.discountPercent}% OFF`}
                  </strong>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleCopy(coupon.code)}
              style={{ 
                marginTop: 16, 
                width: '100%', 
                padding: '8px 12px', 
                borderRadius: 'var(--radius-sm)', 
                border: '1px solid var(--border-color)', 
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-primary)',
                fontSize: 12,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                cursor: 'pointer'
              }}
            >
              {copiedCode === coupon.code ? <Check size={14} color="var(--zomato-green)" /> : <Copy size={14} />}
              <span>{copiedCode === coupon.code ? 'Code Copied!' : 'Copy Code'}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal to add coupon */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Create New Promo Coupon</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', color: 'var(--text-muted)' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="admin-form-group">
                <label>Coupon Code (UPPERCASE) *</label>
                <input 
                  type="text" 
                  value={form.code}
                  onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })}
                  placeholder="e.g. FESTIVE60"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Offer Headline *</label>
                <input 
                  type="text" 
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. 60% OFF up to ₹150"
                  required
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Discount Percent (%)</label>
                  <input 
                    type="number" 
                    value={form.discountPercent}
                    onChange={(e) => setForm({ ...form, discountPercent: e.target.value })}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label>Max Discount (₹)</label>
                  <input 
                    type="number" 
                    value={form.maxDiscount}
                    onChange={(e) => setForm({ ...form, maxDiscount: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Minimum Order Amount (₹)</label>
                <input 
                  type="number" 
                  value={form.minOrder}
                  onChange={(e) => setForm({ ...form, minOrder: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label>Terms & Conditions Note</label>
                <input 
                  type="text" 
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="e.g. Valid on all orders above ₹199"
                />
              </div>

              <div className="admin-modal-actions">
                <button 
                  type="button" 
                  className="admin-cancel-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="admin-primary-btn">
                  Publish Coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
