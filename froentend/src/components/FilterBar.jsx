import React, { useState } from 'react';
import { SlidersHorizontal, Star, Zap, Percent, ArrowUpDown, X, Check, Heart } from 'lucide-react';

export default function FilterBar({
  filters,
  setFilters,
  sortBy,
  setSortBy,
  costRange,
  setCostRange,
  favoritesOnly,
  setFavoritesOnly,
  activeFilterCount,
  onResetFilters,
  onOpenAdvancedFilters
}) {
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const sortOptions = [
    { id: 'relevance', label: 'Relevance' },
    { id: 'rating', label: 'Rating: High to Low' },
    { id: 'deliveryTime', label: 'Delivery Time' },
    { id: 'costLowHigh', label: 'Cost: Low to High' },
    { id: 'costHighLow', label: 'Cost: High to Low' }
  ];

  const toggleFilter = (key) => {
    setFilters(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="filter-bar-container">
      <div className="filter-pills-row">
        
        {/* Advanced Filters Button */}
        <button 
          className={`filter-pill filter-primary-btn ${activeFilterCount > 0 ? 'active' : ''}`}
          onClick={onOpenAdvancedFilters}
          title="Open advanced filter options"
        >
          <SlidersHorizontal size={14} />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="filter-count-badge">{activeFilterCount}</span>
          )}
        </button>

        {/* Rating 4.0+ Toggle */}
        <button 
          className={`filter-pill ${filters.rating4Plus ? 'active' : ''}`}
          onClick={() => toggleFilter('rating4Plus')}
        >
          <Star size={14} className={filters.rating4Plus ? 'fill-star' : ''} />
          <span>Rating: 4.0+</span>
        </button>

        {/* Pure Veg Toggle */}
        <button 
          className={`filter-pill ${filters.pureVeg ? 'active' : ''}`}
          onClick={() => toggleFilter('pureVeg')}
        >
          <div className="veg-icon" style={{ width: 14, height: 14 }}>
            <div className="veg-dot" style={{ width: 6, height: 6 }}></div>
          </div>
          <span>Pure Veg</span>
        </button>

        {/* Fast Delivery (<30 mins) */}
        <button 
          className={`filter-pill ${filters.fastDelivery ? 'active' : ''}`}
          onClick={() => toggleFilter('fastDelivery')}
        >
          <Zap size={14} />
          <span>Fast Delivery (&lt;30m)</span>
        </button>

        {/* Great Offers */}
        <button 
          className={`filter-pill ${filters.offersOnly ? 'active' : ''}`}
          onClick={() => toggleFilter('offersOnly')}
        >
          <Percent size={14} />
          <span>Great Offers</span>
        </button>

        {/* Favorites Only Toggle */}
        <button 
          className={`filter-pill ${favoritesOnly ? 'active' : ''}`}
          onClick={() => setFavoritesOnly(!favoritesOnly)}
          title="Show only bookmarked favorite places"
        >
          <Heart size={14} className={favoritesOnly ? 'fill-heart' : ''} fill={favoritesOnly ? '#e23744' : 'none'} color={favoritesOnly ? '#e23744' : 'currentColor'} />
          <span>Favorites</span>
        </button>

        {/* Sort Dropdown */}
        <div className="sort-dropdown-container">
          <button 
            className="filter-pill sort-pill"
            onClick={() => setShowSortDropdown(!showSortDropdown)}
          >
            <ArrowUpDown size={14} />
            <span>Sort by: {sortOptions.find(o => o.id === sortBy)?.label || 'Relevance'}</span>
          </button>

          {showSortDropdown && (
            <div className="sort-dropdown-menu animate-fade-in">
              {sortOptions.map(option => (
                <div
                  key={option.id}
                  className={`sort-option-item ${sortBy === option.id ? 'active' : ''}`}
                  onClick={() => {
                    setSortBy(option.id);
                    setShowSortDropdown(false);
                  }}
                >
                  <span>{option.label}</span>
                  {sortBy === option.id && <Check size={16} className="check-icon" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Clear All Filters Button */}
        {activeFilterCount > 0 && (
          <button className="clear-all-pill" onClick={onResetFilters} title="Reset all filters">
            <X size={14} />
            <span>Clear all</span>
          </button>
        )}

      </div>
    </div>
  );
}
