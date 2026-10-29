import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  Sun, 
  Moon, 
  ShoppingBag, 
  ChevronDown, 
  X, 
  LogOut, 
  ShieldCheck, 
  Heart, 
  Clock,
  Star,
  Utensils
} from 'lucide-react';
import { locations, restaurants } from '../data/mockData';

export default function Navbar({
  theme,
  toggleTheme,
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenAuth,
  user,
  onLogout,
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  onSelectRestaurant,
  onShowFavorites,
  onOpenPastOrders,
  onOpenAdmin
}) {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef(null);

  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(locationSearch.toLowerCase()) ||
    loc.state.toLowerCase().includes(locationSearch.toLowerCase())
  );

  // Close search suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute live autocomplete results
  const q = searchQuery.trim().toLowerCase();
  
  const matchingRestaurants = q.length >= 1
    ? restaurants.filter(r => 
        r.name.toLowerCase().includes(q) || 
        r.cuisines.some(c => c.toLowerCase().includes(q))
      ).slice(0, 4)
    : [];

  const matchingDishes = q.length >= 1
    ? restaurants.flatMap(r => 
        (r.menu || [])
          .filter(m => m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q))
          .map(m => ({ ...m, restaurantName: r.name, restaurant: r }))
      ).slice(0, 4)
    : [];

  const hasSuggestions = isSearchFocused && q.length >= 1 && (matchingRestaurants.length > 0 || matchingDishes.length > 0);

  const scrollToContent = () => {
    const el = document.getElementById('browse-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsSearchFocused(false);
      scrollToContent();
    }
  };

  const handleSelectRestaurantResult = (restaurant) => {
    setIsSearchFocused(false);
    if (onSelectRestaurant) {
      onSelectRestaurant(restaurant);
    } else {
      setSearchQuery(restaurant.name);
      scrollToContent();
    }
  };

  const handleSelectDishResult = (dish) => {
    setSearchQuery(dish.name);
    setIsSearchFocused(false);
    if (onSelectRestaurant && dish.restaurant) {
      onSelectRestaurant(dish.restaurant);
    } else {
      scrollToContent();
    }
  };

  return (
    <header className="navbar-header">
      <div className="content-wrapper">
        <div className="navbar-container">
          
          {/* Brand Logo */}
          <div className="navbar-brand-section">
            <a 
              href="#" 
              className="brand-logo" 
              onClick={(e) => { 
                e.preventDefault(); 
                setSearchQuery('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="brand-text">crave foodie</span>
              <span className="brand-dot"></span>
            </a>
          </div>

          {/* Unified Location & Search Bar */}
          <div className="navbar-search-wrapper" ref={searchContainerRef}>
            {/* Location Selector */}
            <div className="location-selector-box">
              <button 
                type="button" 
                className="location-btn"
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                <MapPin size={18} className="location-pin-icon" />
                <span className="selected-location-text">{selectedLocation.name.split(',')[0]}</span>
                <ChevronDown size={15} className={`chevron-icon ${showLocationDropdown ? 'rotate' : ''}`} />
              </button>

              {showLocationDropdown && (
                <div className="location-dropdown-panel animate-fade-in">
                  <div className="location-dropdown-header">
                    <span>Select Delivery Location</span>
                    <button onClick={() => setShowLocationDropdown(false)} className="close-dropdown-btn">
                      <X size={15} />
                    </button>
                  </div>
                  <div className="location-search-input-box">
                    <Search size={14} className="sub-search-icon" />
                    <input 
                      type="text" 
                      placeholder="Search for area, street name..." 
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)}
                      autoFocus
                    />
                  </div>
                  <div className="location-list">
                    {filteredLocations.map(loc => (
                      <div 
                        key={loc.id} 
                        className={`location-item ${loc.id === selectedLocation.id ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedLocation(loc);
                          setShowLocationDropdown(false);
                        }}
                      >
                        <MapPin size={15} />
                        <div>
                          <div className="loc-name">{loc.name}</div>
                          <div className="loc-state">{loc.state}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="search-divider"></div>

            {/* Main Search Input */}
            <div className="main-search-box">
              <Search size={19} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search for restaurant, cuisine or a dish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onKeyDown={handleSearchKeyDown}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')} 
                  className="clear-search-btn"
                  title="Clear search"
                >
                  <X size={16} />
                </button>
              )}

              {/* Autocomplete Suggestions Dropdown */}
              {hasSuggestions && (
                <div className="search-suggestions-dropdown animate-fade-in">
                  {/* Matching Restaurants */}
                  {matchingRestaurants.length > 0 && (
                    <div className="suggestion-section">
                      <div className="suggestion-section-title">
                        <Utensils size={13} />
                        <span>Restaurants</span>
                      </div>
                      {matchingRestaurants.map(r => (
                        <div 
                          key={r.id} 
                          className="suggestion-item restaurant-suggestion"
                          onClick={() => handleSelectRestaurantResult(r)}
                        >
                          <img src={r.image} alt={r.name} className="sug-thumb" />
                          <div className="sug-text">
                            <div className="sug-primary">{r.name}</div>
                            <div className="sug-sub">{r.cuisines.slice(0, 3).join(', ')} • {r.address.split(',')[0]}</div>
                          </div>
                          <div className="sug-rating">
                            <span>★ {r.rating}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Matching Dishes */}
                  {matchingDishes.length > 0 && (
                    <div className="suggestion-section">
                      <div className="suggestion-section-title">
                        <Search size={13} />
                        <span>Dishes</span>
                      </div>
                      {matchingDishes.map(d => (
                        <div 
                          key={d.id} 
                          className="suggestion-item dish-suggestion"
                          onClick={() => handleSelectDishResult(d)}
                        >
                          <div className={d.isVeg ? "veg-icon mini" : "non-veg-icon mini"}>
                            {d.isVeg ? <div className="veg-dot"></div> : <div className="non-veg-triangle"></div>}
                          </div>
                          <div className="sug-text">
                            <div className="sug-primary">{d.name}</div>
                            <div className="sug-sub">in {d.restaurantName}</div>
                          </div>
                          <div className="sug-price">₹{d.price}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="suggestions-footer" onClick={() => { setIsSearchFocused(false); scrollToContent(); }}>
                    <span>Press <strong>Enter</strong> to view all results</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Action Icons & Auth */}
          <div className="navbar-actions">
            
            {/* Quick Admin Portal Button */}
            <button 
              className="storefront-admin-pill" 
              onClick={onOpenAdmin}
              title="Launch Crave Foodie Admin Portal"
            >
              <ShieldCheck size={14} className="admin-shield-icon" />
              <span>Admin Portal</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <div className="theme-btn-inner light">
                  <Sun size={18} className="theme-icon sun-icon" />
                  <span className="theme-text">Light</span>
                </div>
              ) : (
                <div className="theme-btn-inner dark">
                  <Moon size={18} className="theme-icon moon-icon" />
                  <span className="theme-text">Dark</span>
                </div>
              )}
            </button>

            {/* Cart Button */}
            <button 
              onClick={onOpenCart} 
              className={`cart-button ${cartCount > 0 ? 'has-items' : ''}`}
              title="View Cart"
            >
              <div className="cart-icon-wrapper">
                <ShoppingBag size={20} />
                {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
              </div>
              {cartCount > 0 && (
                <span className="cart-total-badge">₹{cartTotal}</span>
              )}
            </button>

            {/* Auth Section */}
            {user ? (
              <div className="user-profile-box">
                <button 
                  className="user-profile-btn"
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                >
                  <div className="user-avatar-circle">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="user-name-label">{user.name.split(' ')[0]}</span>
                  <ChevronDown size={14} className={showUserDropdown ? 'rotate' : ''} />
                </button>

                {showUserDropdown && (
                  <div className="user-dropdown-panel animate-fade-in">
                    <div className="user-dropdown-info">
                      <p className="user-full-name">{user.name}</p>
                      <p className="user-email-text">{user.phone || user.email}</p>
                      <div className="gold-member-badge">
                        <ShieldCheck size={14} />
                        <span>Crave Foodie Gold Active</span>
                      </div>
                    </div>
                    <div className="user-dropdown-divider"></div>
                    <button className="user-dropdown-item" onClick={() => { setShowUserDropdown(false); onOpenCart(); }}>
                      <ShoppingBag size={16} />
                      <span>My Cart ({cartCount})</span>
                    </button>
                    <button 
                      className="user-dropdown-item" 
                      onClick={() => { 
                        setShowUserDropdown(false); 
                        if (onShowFavorites) onShowFavorites(); 
                        scrollToContent();
                      }}
                    >
                      <Heart size={16} />
                      <span>Favorite Places</span>
                    </button>
                    <button 
                      className="user-dropdown-item" 
                      onClick={() => { 
                        setShowUserDropdown(false); 
                        if (onOpenPastOrders) onOpenPastOrders(); 
                      }}
                    >
                      <Clock size={16} />
                      <span>Past Orders & Live Status</span>
                    </button>
                    <button 
                      className="user-dropdown-item" 
                      onClick={() => { 
                        setShowUserDropdown(false); 
                        if (onOpenAdmin) onOpenAdmin(); 
                      }}
                      style={{ color: 'var(--zomato-red)', fontWeight: 600 }}
                    >
                      <ShieldCheck size={16} />
                      <span>Admin Management Portal</span>
                    </button>
                    <div className="user-dropdown-divider"></div>
                    <button className="user-dropdown-item logout" onClick={() => { onLogout(); setShowUserDropdown(false); }}>
                      <LogOut size={16} />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons-group">
                <button 
                  className="login-btn"
                  onClick={() => onOpenAuth('login')}
                >
                  Log in
                </button>
                <button 
                  className="signup-btn"
                  onClick={() => onOpenAuth('signup')}
                >
                  Sign up
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </header>
  );
}
