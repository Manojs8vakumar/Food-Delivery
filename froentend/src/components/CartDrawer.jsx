import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Tag, 
  Check, 
  Clock, 
  Bike, 
  ShieldCheck, 
  ArrowRight,
  Heart,
  ChevronRight
} from 'lucide-react';
import { coupons } from '../data/mockData';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
  onCheckout,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon
}) {
  const [couponInput, setCouponInput] = useState('');
  const [tip, setTip] = useState(0);
  const [deliveryInstruction, setDeliveryInstruction] = useState('Leave at door');

  if (!isOpen) return null;

  const itemTotal = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Calculate delivery fee
  let deliveryFee = itemTotal > 0 ? (appliedCoupon?.freeDelivery ? 0 : 35) : 0;
  const platformFee = itemTotal > 0 ? 5 : 0;
  const taxes = Math.round(itemTotal * 0.05);

  // Calculate discount
  let discountAmount = 0;
  if (appliedCoupon && !appliedCoupon.freeDelivery) {
    const calc = Math.round((itemTotal * appliedCoupon.discountPercent) / 100);
    discountAmount = Math.min(calc, appliedCoupon.maxDiscount || calc);
  }

  const grandTotal = Math.max(0, itemTotal + deliveryFee + platformFee + taxes + tip - discountAmount);

  const handleApplyInputCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const found = coupons.find(c => c.code.toUpperCase() === couponInput.trim().toUpperCase());
    if (found) {
      onApplyCoupon(found);
      setCouponInput('');
    } else {
      alert('Invalid coupon code. Try CRAVE50 or TASTY20');
    }
  };

  return (
    <div className="cart-drawer-backdrop" onClick={onClose}>
      <div 
        className="cart-drawer-panel animate-slide-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title-box">
            <h2>Your Food Cart</h2>
            {cart.restaurant && (
              <p className="cart-restaurant-name">from {cart.restaurant.name}</p>
            )}
          </div>
          <div className="cart-header-actions">
            {cart.items.length > 0 && (
              <button 
                className="cart-clear-btn" 
                onClick={onClearCart}
                title="Empty Cart"
              >
                <Trash2 size={16} />
                <span>Clear</span>
              </button>
            )}
            <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="cart-drawer-scroll">
          {cart.items.length === 0 ? (
            <div className="empty-cart-view animate-fade-in">
              <div className="empty-cart-illustration">
                <Bike size={54} className="empty-bike-icon" />
              </div>
              <h3>Your cart is empty</h3>
              <p>Good food is always just a few clicks away! Explore top restaurants and fill up your cart.</p>
              <button className="browse-food-btn" onClick={onClose}>
                Browse Restaurants
              </button>
            </div>
          ) : (
            <div className="cart-populated-view">
              
              {/* Delivery ETA info */}
              <div className="cart-eta-banner">
                <Clock size={16} className="eta-icon" />
                <span>Delivery in <strong>{cart.restaurant?.deliveryTime || '25-30 mins'}</strong> to your doorstep</span>
              </div>

              {/* Items List */}
              <div className="cart-items-section">
                <h4 className="cart-subheading">Items Ordered</h4>
                <div className="cart-items-list">
                  {cart.items.map((item) => (
                    <div key={item.id} className="cart-item-row">
                      <div className="cart-item-left">
                        {item.isVeg ? (
                          <div className="veg-icon"><div className="veg-dot"></div></div>
                        ) : (
                          <div className="non-veg-icon"><div className="non-veg-triangle"></div></div>
                        )}
                        <div className="cart-item-details">
                          <span className="cart-item-name">{item.name}</span>
                          <span className="cart-item-unit-price">₹{item.price} each</span>
                        </div>
                      </div>

                      <div className="cart-item-right">
                        <div className="cart-stepper">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="cart-step-btn minus"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="cart-step-num">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="cart-step-btn plus"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="cart-item-line-total">
                          ₹{item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coupons & Promo Codes */}
              <div className="cart-coupons-section">
                <h4 className="cart-subheading">Coupons & Offers</h4>
                
                {appliedCoupon ? (
                  <div className="applied-coupon-pill animate-fade-in">
                    <div className="applied-coupon-left">
                      <Check size={16} className="coupon-check-icon" />
                      <div>
                        <strong>'{appliedCoupon.code}' applied</strong>
                        <p>{appliedCoupon.title}</p>
                      </div>
                    </div>
                    <button className="remove-coupon-btn" onClick={onRemoveCoupon}>
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <form className="coupon-input-form" onSubmit={handleApplyInputCoupon}>
                      <div className="coupon-input-box">
                        <Tag size={16} className="tag-icon" />
                        <input 
                          type="text" 
                          placeholder="Enter Promo Code" 
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                        />
                      </div>
                      <button type="submit" className="apply-code-btn">
                        Apply
                      </button>
                    </form>

                    <div className="available-coupons-list">
                      {coupons.map((c) => (
                        <div 
                          key={c.code} 
                          className="available-coupon-chip"
                          onClick={() => onApplyCoupon(c)}
                        >
                          <span className="coupon-code-badge">{c.code}</span>
                          <span className="coupon-chip-title">{c.title}</span>
                          <button className="chip-apply-action">APPLY</button>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Delivery Tip */}
              <div className="cart-tip-section">
                <h4 className="cart-subheading">Tip your delivery partner</h4>
                <p className="tip-caption">100% of your tip goes directly to your delivery hero</p>
                <div className="tip-pills-row">
                  {[0, 20, 30, 50].map((amount) => (
                    <button
                      key={amount}
                      className={`tip-pill ${tip === amount ? 'active' : ''}`}
                      onClick={() => setTip(amount)}
                    >
                      {amount === 0 ? 'No Tip' : `₹${amount}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bill Details */}
              <div className="cart-bill-details">
                <h4 className="cart-subheading">Bill Summary</h4>
                <div className="bill-row">
                  <span>Item Total</span>
                  <span>₹{itemTotal}</span>
                </div>
                <div className="bill-row">
                  <span>Delivery Partner Fee</span>
                  <span>{deliveryFee === 0 ? <span className="free-text">FREE</span> : `₹${deliveryFee}`}</span>
                </div>
                <div className="bill-row">
                  <span>Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>
                <div className="bill-row">
                  <span>GST and Restaurant Charges</span>
                  <span>₹{taxes}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="bill-row discount-row">
                    <span>Coupon Discount</span>
                    <span>- ₹{discountAmount}</span>
                  </div>
                )}
                {tip > 0 && (
                  <div className="bill-row">
                    <span>Delivery Tip</span>
                    <span>₹{tip}</span>
                  </div>
                )}
                <div className="bill-divider"></div>
                <div className="bill-row grand-total-row">
                  <span>To Pay</span>
                  <span className="grand-price">₹{grandTotal}</span>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="cart-cancellation-notice">
                <ShieldCheck size={16} />
                <p>Review your order and address details to avoid cancellations.</p>
              </div>

            </div>
          )}
        </div>

        {/* Drawer Bottom Sticky Checkout Bar */}
        {cart.items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="footer-total-box">
              <span className="footer-total-label">TOTAL TO PAY</span>
              <span className="footer-total-amount">₹{grandTotal}</span>
            </div>
            <button 
              className="checkout-proceed-btn"
              onClick={() => onCheckout({
                items: cart.items,
                restaurant: cart.restaurant,
                total: grandTotal,
                discount: discountAmount,
                tip,
                deliveryFee
              })}
            >
              <span>Place Order</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
