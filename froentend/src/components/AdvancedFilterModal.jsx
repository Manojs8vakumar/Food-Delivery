import React, { useState } from 'react';
import { X, Check, Star, Zap, Percent, SlidersHorizontal, Heart, IndianRupee } from 'lucide-react';

export default function AdvancedFilterModal({
  isOpen,
  onClose,
  filters,
  setFilters,
  sortBy,
  setSortBy,
  costRange,
  setCostRange,
  favoritesOnly,
  setFavoritesOnly,
  onResetFilters,
  matchCount
}) {
  const [activeSection, setActiveSection] = useState('sort');

  if (!isOpen) return null;

  const sortOptions = [
    { id: 'relevance', label: 'Relevance (Default)' },
    { id: 'rating', label: 'Rating: High to Low' },
    { id: 'deliveryTime', label: 'Delivery Time: Fastest First' },
    { id: 'costLowHigh', label: 'Cost: Low to High' },
    { id: 'costHighLow', label: 'Cost: High to Low' }
  ];

  const costOptions = [
    { id: 'all', label: 'Any Cost' },
    { id: 'under250', label: 'Budget Friendly (Under ₹250)' },
    { id: '250to500', label: 'Mid-Range (₹250 - ₹500)' },
    { id: 'above500', label: 'Fine Dining / Premium (Above ₹500)' }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="advanced-filter-modal animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="filter-modal-header">
          <div className="filter-header-left">
            <SlidersHorizontal size={20} className="filter-header-icon" />
            <h2>Filters & Sort</h2>
          </div>
          <button className="filter-modal-close" onClick={onClose} aria-label="Close filters">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body: Left Sections / Right Options */}
        <div className="filter-modal-body">
          {/* Left Navigation */}
          <div className="filter-sections-nav">
            <button 
              className={`filter-nav-btn ${activeSection === 'sort' ? 'active' : ''}`}
              onClick={() => setActiveSection('sort')}
            >
              <span>Sort by</span>
              <span className="nav-subtext">{sortOptions.find(o => o.id === sortBy)?.label.split(':')[0]}</span>
            </button>

            <button 
              className={`filter-nav-btn ${activeSection === 'cost' ? 'active' : ''}`}
              onClick={() => setActiveSection('cost')}
            >
              <span>Cost for One</span>
              <span className="nav-subtext">{costRange === 'all' ? 'Any' : costRange}</span>
            </button>

            <button 
              className={`filter-nav-btn ${activeSection === 'rating' ? 'active' : ''}`}
              onClick={() => setActiveSection('rating')}
            >
              <span>Rating</span>
              <span className="nav-subtext">{filters.rating4Plus ? '4.0+' : 'Any'}</span>
            </button>

            <button 
              className={`filter-nav-btn ${activeSection === 'quick' ? 'active' : ''}`}
              onClick={() => setActiveSection('quick')}
            >
              <span>More Filters</span>
              <span className="nav-subtext">Veg, Speed, Offers</span>
            </button>
          </div>

          {/* Right Content */}
          <div className="filter-section-content">
            {/* Sort Section */}
            {activeSection === 'sort' && (
              <div className="filter-options-group animate-fade-in">
                <h3>Sort Restaurants By</h3>
                <div className="options-radio-list">
                  {sortOptions.map(opt => (
                    <label 
                      key={opt.id} 
                      className={`filter-radio-label ${sortBy === opt.id ? 'checked' : ''}`}
                    >
                      <input 
                        type="radio" 
                        name="sort_filter" 
                        checked={sortBy === opt.id}
                        onChange={() => setSortBy(opt.id)}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-text">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Cost Range Section */}
            {activeSection === 'cost' && (
              <div className="filter-options-group animate-fade-in">
                <h3>Cost for One Person</h3>
                <div className="options-radio-list">
                  {costOptions.map(opt => (
                    <label 
                      key={opt.id} 
                      className={`filter-radio-label ${costRange === opt.id ? 'checked' : ''}`}
                    >
                      <input 
                        type="radio" 
                        name="cost_filter" 
                        checked={costRange === opt.id}
                        onChange={() => setCostRange(opt.id)}
                      />
                      <span className="radio-custom"></span>
                      <span className="radio-text">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Rating Section */}
            {activeSection === 'rating' && (
              <div className="filter-options-group animate-fade-in">
                <h3>Minimum Rating</h3>
                <div className="rating-toggle-cards">
                  <div 
                    className={`rating-card-choice ${!filters.rating4Plus ? 'active' : ''}`}
                    onClick={() => setFilters(prev => ({ ...prev, rating4Plus: false }))}
                  >
                    <div className="rating-num">Any</div>
                    <span>All ratings included</span>
                  </div>

                  <div 
                    className={`rating-card-choice ${filters.rating4Plus ? 'active' : ''}`}
                    onClick={() => setFilters(prev => ({ ...prev, rating4Plus: true }))}
                  >
                    <div className="rating-num">
                      <span>4.0+</span>
                      <Star size={16} fill="currentColor" />
                    </div>
                    <span>Top rated & loved places</span>
                  </div>
                </div>
              </div>
            )}

            {/* More Filters Section */}
            {activeSection === 'quick' && (
              <div className="filter-options-group animate-fade-in">
                <h3>Quick Preferences</h3>
                <div className="checkbox-options-list">
                  
                  {/* Pure Veg */}
                  <label className={`checkbox-card-item ${filters.pureVeg ? 'active' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={filters.pureVeg}
                      onChange={(e) => setFilters(prev => ({ ...prev, pureVeg: e.target.checked }))}
                    />
                    <div className="checkbox-custom">
                      {filters.pureVeg && <Check size={14} />}
                    </div>
                    <div className="check-text-box">
                      <div className="check-title">
                        <span className="veg-indicator-box">
                          <span className="veg-green-dot"></span>
                        </span>
                        <strong>Pure Veg Only</strong>
                      </div>
                      <p>Show only 100% pure vegetarian kitchens & menus</p>
                    </div>
                  </label>

                  {/* Fast Delivery (<30 mins) */}
                  <label className={`checkbox-card-item ${filters.fastDelivery ? 'active' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={filters.fastDelivery}
                      onChange={(e) => setFilters(prev => ({ ...prev, fastDelivery: e.target.checked }))}
                    />
                    <div className="checkbox-custom">
                      {filters.fastDelivery && <Check size={14} />}
                    </div>
                    <div className="check-text-box">
                      <div className="check-title">
                        <Zap size={16} className="fast-icon" />
                        <strong>Fast Express Delivery (&lt;30 mins)</strong>
                      </div>
                      <p>Food prepared and delivered to your door within 30 minutes</p>
                    </div>
                  </label>

                  {/* Great Offers Only */}
                  <label className={`checkbox-card-item ${filters.offersOnly ? 'active' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={filters.offersOnly}
                      onChange={(e) => setFilters(prev => ({ ...prev, offersOnly: e.target.checked }))}
                    />
                    <div className="checkbox-custom">
                      {filters.offersOnly && <Check size={14} />}
                    </div>
                    <div className="check-text-box">
                      <div className="check-title">
                        <Percent size={16} className="offer-icon" />
                        <strong>Great Offers & Discounts</strong>
                      </div>
                      <p>Show places with 50% OFF, Crave Gold or exclusive deals</p>
                    </div>
                  </label>

                  {/* Favorites Only */}
                  <label className={`checkbox-card-item ${favoritesOnly ? 'active' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={favoritesOnly}
                      onChange={(e) => setFavoritesOnly(e.target.checked)}
                    />
                    <div className="checkbox-custom">
                      {favoritesOnly && <Check size={14} />}
                    </div>
                    <div className="check-text-box">
                      <div className="check-title">
                        <Heart size={16} className="fav-icon-fill" />
                        <strong>My Favorite Restaurants Only</strong>
                      </div>
                      <p>Show only places bookmarked into your favorites</p>
                    </div>
                  </label>

                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="filter-modal-footer">
          <button 
            type="button" 
            className="filter-clear-all-btn"
            onClick={onResetFilters}
          >
            Clear all
          </button>
          <button 
            type="button" 
            className="filter-apply-btn"
            onClick={onClose}
          >
            <span>Show {matchCount} Restaurants</span>
          </button>
        </div>

      </div>
    </div>
  );
}
