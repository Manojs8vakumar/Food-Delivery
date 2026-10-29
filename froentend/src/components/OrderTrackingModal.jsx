import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Bike, 
  ChefHat, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  ShoppingBag,
  RotateCw
} from 'lucide-react';

export default function OrderTrackingModal({ order, onClose, onOrderAgain }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [etaMinutes, setEtaMinutes] = useState(25);

  const steps = [
    {
      id: 1,
      title: 'Order Confirmed',
      desc: 'Restaurant has accepted your order',
      icon: CheckCircle2,
      time: 'Just now'
    },
    {
      id: 2,
      title: 'Food is Being Prepared',
      desc: 'Chef is preparing your meal fresh and hot',
      icon: ChefHat,
      time: 'In 5-10 mins'
    },
    {
      id: 3,
      title: 'Out for Delivery',
      desc: 'Delivery partner has picked up your order',
      icon: Bike,
      time: 'In 15 mins'
    },
    {
      id: 4,
      title: 'Order Delivered',
      desc: 'Enjoy your delicious feast!',
      icon: Sparkles,
      time: 'Delivered'
    }
  ];

  // Auto advance simulator every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < 4) {
          return prev + 1;
        }
        return prev;
      });
      setEtaMinutes((prev) => Math.max(0, prev - 7));
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const advanceStepManual = () => {
    setCurrentStep((prev) => Math.min(4, prev + 1));
    setEtaMinutes((prev) => Math.max(0, prev - 8));
  };

  if (!order) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="order-tracking-modal-card animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="tracking-modal-header">
          <div>
            <div className="order-id-badge">ORDER #CRV-{Math.floor(100000 + Math.random() * 900000)}</div>
            <h2 className="tracking-title">
              {currentStep === 4 ? 'Order Delivered 🎉' : 'Live Order Tracking'}
            </h2>
            <p className="tracking-subtitle">
              From <strong>{order.restaurant?.name || 'Restaurant'}</strong>
            </p>
          </div>
          <button className="tracking-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* ETA & Status Card */}
        <div className="tracking-eta-card">
          <div className="eta-badge-row">
            <div className="eta-left">
              <Clock size={20} className="eta-clock-icon" />
              <div>
                <span className="eta-label">ESTIMATED DELIVERY</span>
                <span className="eta-time-val">{currentStep === 4 ? 'Arrived!' : `${etaMinutes} mins`}</span>
              </div>
            </div>
            {currentStep < 4 && (
              <button 
                className="advance-sim-btn" 
                onClick={advanceStepManual}
                title="Fast forward simulation step"
              >
                <RotateCw size={13} />
                <span>Next Step</span>
              </button>
            )}
          </div>

          {/* Progress Bar */}
          <div className="step-progress-track">
            <div 
              className="step-progress-fill" 
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            ></div>
          </div>

          {/* Steps Horizontal / Vertical List */}
          <div className="tracking-steps-list">
            {steps.map((st) => {
              const Icon = st.icon;
              const isPassed = currentStep >= st.id;
              const isCurrent = currentStep === st.id;

              return (
                <div 
                  key={st.id} 
                  className={`tracking-step-item ${isPassed ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                >
                  <div className="step-icon-bubble">
                    <Icon size={16} />
                  </div>
                  <div className="step-text-meta">
                    <span className="step-title">{st.title}</span>
                    <span className="step-desc">{st.desc}</span>
                  </div>
                  <span className="step-time-badge">{st.time}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Hero Card */}
        {currentStep >= 2 && (
          <div className="delivery-hero-card animate-fade-in">
            <div className="rider-avatar">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" 
                alt="Delivery Partner" 
              />
            </div>
            <div className="rider-info">
              <div className="rider-name-row">
                <span className="rider-name">Vikram Sharma</span>
                <span className="rider-rating">★ 4.9</span>
              </div>
              <span className="rider-vehicle">TVS Jupiter • DL 4S AK 9281</span>
              <span className="rider-tag">Vaccinated & Temperature checked</span>
            </div>
            <button className="call-rider-btn" onClick={() => alert('Connecting to Vikram Sharma (+91 98765 43210)...')}>
              <Phone size={15} />
              <span>Call</span>
            </button>
          </div>
        )}

        {/* Order Items Summary */}
        <div className="tracking-summary-box">
          <h4 className="tracking-summary-title">
            <ShoppingBag size={15} />
            <span>Order Summary ({order.items.length} items)</span>
          </h4>
          <div className="summary-items-scroll">
            {order.items.map((item) => (
              <div key={item.id} className="summary-item-row">
                <span>{item.quantity}x {item.name}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="summary-bill-total">
            <span>Total Paid (incl. taxes)</span>
            <span className="paid-total">₹{order.total}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="tracking-modal-footer">
          <button className="order-more-btn" onClick={onOrderAgain}>
            Order More Food
          </button>
          <button className="close-tracking-btn" onClick={onClose}>
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
