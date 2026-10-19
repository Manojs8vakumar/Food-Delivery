import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Plus, 
  Minus, 
  Info,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function RestaurantMenuModal({
  restaurant,
  onClose,
  cart,
  onAddToCart,
  onUpdateCartQuantity,
  onOpenCart
}) {
  const [vegOnly, setVegOnly] = useState(false);
  const [bestsellerOnly, setBestsellerOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!restaurant) return null;

  // Extract unique categories from menu
  const categories = ['All', ...new Set(restaurant.menu.map(item => item.category))];

  // Filter items
  const filteredMenuItems = restaurant.menu.filter(item => {
    if (vegOnly && !item.isVeg) return false;
    if (bestsellerOnly && !item.isBestseller) return false;
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    return true;
  });

  const getItemQuantity = (itemId) => {
    const cartItem = cart.items.find(i => i.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="menu-modal-container animate-fade-in" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Image */}
        <div className="menu-modal-hero">
          <img 
            src={restaurant.banner || restaurant.image} 
            alt={restaurant.name} 
            className="menu-hero-img" 
          />
          <div className="menu-hero-gradient"></div>
          
          <button className="menu-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          <div className="menu-hero-content">
            <div className="hero-top-badges">
              {restaurant.safetyBadged && (
                <span className="safety-pill">
                  <ShieldCheck size={13} />
                  <span>Safety Verified</span>
                </span>
              )}
              {restaurant.discount && (
                <span className="discount-pill">
                  <Sparkles size={13} />
                  <span>{restaurant.discount}</span>
                </span>
              )}
            </div>
            <h1 className="menu-restaurant-title">{restaurant.name}</h1>
            <p className="menu-restaurant-cuisine">{restaurant.cuisines.join(' • ')}</p>
            <p className="menu-restaurant-address">{restaurant.address}</p>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="menu-stats-bar">
          <div className="stat-box">
            <div className="stat-rating-badge">
              <span>{restaurant.rating}</span>
              <Star size={12} fill="currentColor" />
            </div>
            <div className="stat-info">
              <span className="stat-value">{restaurant.ratingCount}</span>
              <span className="stat-sub">Delivery Ratings</span>
            </div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-box">
            <Clock size={20} className="stat-icon" />
            <div className="stat-info">
              <span className="stat-value">{restaurant.deliveryTime}</span>
              <span className="stat-sub">Delivery Time</span>
            </div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-box">
            <div className="stat-info">
              <span className="stat-value">₹{restaurant.costForOne} for one</span>
              <span className="stat-sub">Average Cost</span>
            </div>
          </div>
        </div>

        {/* Filter & Category Controls */}
        <div className="menu-nav-controls">
          <div className="menu-filter-toggles">
            <button 
              className={`menu-filter-btn ${vegOnly ? 'active' : ''}`}
              onClick={() => setVegOnly(!vegOnly)}
            >
              <div className="veg-icon" style={{ width: 14, height: 14 }}>
                <div className="veg-dot" style={{ width: 6, height: 6 }}></div>
              </div>
              <span>Veg Only</span>
            </button>

            <button 
              className={`menu-filter-btn ${bestsellerOnly ? 'active' : ''}`}
              onClick={() => setBestsellerOnly(!bestsellerOnly)}
            >
              <Star size={13} className="star-icon-small" />
              <span>Bestsellers</span>
            </button>
          </div>

          <div className="menu-categories-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`menu-cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        <div className="menu-items-scroll-area">
          <div className="menu-items-count-header">
            <h3>Menu ({filteredMenuItems.length} dishes)</h3>
          </div>

          <div className="menu-items-list">
            {filteredMenuItems.map((item) => {
              const qty = getItemQuantity(item.id);

              return (
                <div key={item.id} className="menu-dish-card">
                  <div className="dish-details-col">
                    <div className="dish-top-meta">
                      {item.isVeg ? (
                        <div className="veg-icon" title="Vegetarian">
                          <div className="veg-dot"></div>
                        </div>
                      ) : (
                        <div className="non-veg-icon" title="Non-Vegetarian">
                          <div className="non-veg-triangle"></div>
                        </div>
                      )}

                      {item.isBestseller && (
                        <span className="bestseller-star-badge">
                          <Star size={10} fill="#f5a623" color="#f5a623" />
                          <span>Bestseller</span>
                        </span>
                      )}
                    </div>

                    <h4 className="dish-name">{item.name}</h4>
                    <div className="dish-price">₹{item.price}</div>

                    {item.rating && (
                      <div className="dish-rating-line">
                        <span className="dish-rating-badge">
                          ★ {item.rating}
                        </span>
                        <span className="dish-votes">({item.votes} ratings)</span>
                      </div>
                    )}

                    <p className="dish-description">{item.description}</p>
                  </div>

                  {/* Dish Image & Add Button */}
                  <div className="dish-img-col">
                    <div className="dish-img-wrapper">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="dish-photo" 
                        loading="lazy" 
                      />
                      
                      <div className="dish-action-container">
                        {qty === 0 ? (
                          <button 
                            className="add-to-cart-btn"
                            onClick={() => onAddToCart(restaurant, item)}
                          >
                            <span>ADD</span>
                            <Plus size={14} />
                          </button>
                        ) : (
                          <div className="quantity-stepper">
                            <button 
                              className="step-btn minus" 
                              onClick={() => onUpdateCartQuantity(item.id, qty - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="step-count">{qty}</span>
                            <button 
                              className="step-btn plus" 
                              onClick={() => onUpdateCartQuantity(item.id, qty + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="customisable-text">Customisable</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sticky Bottom Cart Bar inside Modal if Cart has items */}
        {cart.restaurant && cart.restaurant.id === restaurant.id && cart.items.length > 0 && (
          <div className="modal-bottom-cart-bar animate-fade-in">
            <div className="bottom-cart-info">
              <span className="bottom-cart-items-count">
                {cart.items.reduce((acc, i) => acc + i.quantity, 0)} {cart.items.length === 1 ? 'item' : 'items'} added
              </span>
              <span className="bottom-cart-total-price">
                Total: ₹{cart.items.reduce((acc, i) => acc + (i.price * i.quantity), 0)}
              </span>
            </div>
            <button className="view-cart-button" onClick={() => { onClose(); onOpenCart(); }}>
              <span>View Cart</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
