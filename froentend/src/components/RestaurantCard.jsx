import React from 'react';
import { Star, Heart, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function RestaurantCard({ 
  restaurant, 
  onSelectRestaurant, 
  isFavorite, 
  onToggleFavorite 
}) {
  const getRatingBadgeClass = (rating) => {
    if (rating >= 4.0) return 'rating-high';
    if (rating >= 3.5) return 'rating-medium';
    return 'rating-avg';
  };

  return (
    <div 
      className="restaurant-card"
      onClick={() => onSelectRestaurant(restaurant)}
    >
      {/* Image & Badges */}
      <div className="card-image-box">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="restaurant-img" 
          loading="lazy" 
        />
        
        {/* Promoted Tag */}
        {restaurant.isPromoted && (
          <span className="promoted-badge">Promoted</span>
        )}

        {/* Discount Ribbon */}
        {restaurant.discount && (
          <div className="discount-tag">
            <span>{restaurant.discount}</span>
          </div>
        )}

        {/* Delivery Time Badge */}
        <div className="delivery-time-pill">
          <Clock size={12} />
          <span>{restaurant.deliveryTime}</span>
        </div>

        {/* Favorite Heart Button */}
        <button
          className={`card-heart-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(restaurant.id);
          }}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-label="Favorite button"
        >
          <Heart size={18} fill={isFavorite ? '#e23744' : 'none'} color={isFavorite ? '#e23744' : '#ffffff'} />
        </button>
      </div>

      {/* Info Container */}
      <div className="card-content-box">
        {/* Row 1: Name & Rating */}
        <div className="card-title-row">
          <h3 className="restaurant-name" title={restaurant.name}>
            {restaurant.name}
          </h3>
          <div className={`rating-badge ${getRatingBadgeClass(restaurant.rating)}`}>
            <span>{restaurant.rating}</span>
            <Star size={11} className="rating-star-icon" fill="currentColor" />
          </div>
        </div>

        {/* Row 2: Cuisines & Cost */}
        <div className="card-cuisine-row">
          <p className="cuisine-list" title={restaurant.cuisines.join(', ')}>
            {restaurant.cuisines.join(', ')}
          </p>
          <span className="cost-for-one">₹{restaurant.costForOne} for one</span>
        </div>

        {/* Row 3: Distance & Pure Veg badge */}
        <div className="card-meta-row">
          <div className="meta-left">
            {restaurant.isVeg && (
              <span className="veg-badge-pill">
                <div className="veg-icon" style={{ width: 12, height: 12 }}>
                  <div className="veg-dot" style={{ width: 5, height: 5 }}></div>
                </div>
                <span>Pure Veg</span>
              </span>
            )}
            <span className="distance-text">{restaurant.distance}</span>
          </div>

          {restaurant.safetyBadged && (
            <span className="safety-badge" title="Follows all safety standards">
              <ShieldCheck size={13} />
              <span>Safety Verified</span>
            </span>
          )}
        </div>

        {/* Row 4: Zomato Gold Offer Strip */}
        {restaurant.goldOffer && (
          <div className="gold-offer-strip">
            <Sparkles size={13} className="gold-icon" />
            <span className="gold-text">{restaurant.goldOffer}</span>
          </div>
        )}
      </div>
    </div>
  );
}
