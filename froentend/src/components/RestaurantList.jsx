import React from 'react';
import RestaurantCard from './RestaurantCard';
import { Utensils, RotateCcw, Search, Sparkles } from 'lucide-react';

export default function RestaurantList({
  restaurants,
  locationName,
  activeTab = 'delivery',
  onSelectRestaurant,
  favorites,
  onToggleFavorite,
  onResetFilters,
  searchQuery,
  favoritesOnly,
  activeFilterCount
}) {
  const getTabHeading = () => {
    if (favoritesOnly) return 'Your Favorite Bookmarked Places';
    if (activeTab === 'dining') return `Dining Out Venues in ${locationName}`;
    if (activeTab === 'nightlife') return `Nightlife, Pubs & Bars in ${locationName}`;
    return `Delivery Restaurants in ${locationName}`;
  };

  return (
    <section className="restaurant-list-section" id="restaurants-list-container">
      <div className="section-title-wrapper">
        <div>
          <h2 className="restaurant-section-heading">
            {getTabHeading()}
          </h2>
          {searchQuery && (
            <p className="search-filter-active-note">
              Matching search: <strong>"{searchQuery}"</strong>
            </p>
          )}
        </div>
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
            {favoritesOnly 
              ? "You haven't added any restaurants to your favorites yet. Tap the heart icon on any restaurant to save it here!"
              : "We couldn't find any places matching your current search and filter criteria. Try adjusting your search term or clearing filters."}
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
