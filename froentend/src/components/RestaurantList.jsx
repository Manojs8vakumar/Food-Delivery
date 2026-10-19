import React from 'react';
import RestaurantCard from './RestaurantCard';
import { Utensils, RotateCcw } from 'lucide-react';

export default function RestaurantList({
  restaurants,
  locationName,
  onSelectRestaurant,
  favorites,
  onToggleFavorite,
  onResetFilters
}) {
  return (
    <section className="restaurant-list-section">
      <div className="section-title-wrapper">
        <h2 className="restaurant-section-heading">
          Delivery Restaurants in {locationName}
        </h2>
        <span className="results-count-text">
          {restaurants.length} {restaurants.length === 1 ? 'place' : 'places'} available
        </span>
      </div>

      {restaurants.length === 0 ? (
        <div className="no-results-state animate-fade-in">
          <div className="no-results-icon-box">
            <Utensils size={48} className="empty-utensils-icon" />
          </div>
          <h3 className="no-results-title">No matching restaurants found</h3>
          <p className="no-results-subtitle">
            We couldn't find any places matching your current search and filter criteria. Try adjusting or clearing your filters.
          </p>
          <button className="reset-filters-btn" onClick={onResetFilters}>
            <RotateCcw size={16} />
            <span>Reset all filters</span>
          </button>
        </div>
      ) : (
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onSelectRestaurant={onSelectRestaurant}
              isFavorite={favorites.includes(restaurant.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
