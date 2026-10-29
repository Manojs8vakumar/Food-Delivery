import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Sun, 
  Moon, 
  ShoppingBag, 
  User, 
  ChevronDown, 
  X, 
  LogOut, 
  ShieldCheck, 
  Heart, 
  Clock 
} from 'lucide-react';
import { locations } from '../data/mockData';

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
  setSelectedLocation
}) {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');

  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(locationSearch.toLowerCase()) ||
    loc.state.toLowerCase().includes(locationSearch.toLowerCase())
  );

  return (
    <header className="navbar-header">
      <div className="content-wrapper">
        <div className="navbar-container">
          
          {/* Brand Logo */}
          <div className="navbar-brand-section">
            <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); setSearchQuery(''); }}>
              <span className="brand-text">crave foodie</span>
              <span className="brand-dot"></span>
            </a>
          </div>

          {/* Unified Location & Search Bar */}
          <div className="navbar-search-wrapper">
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
                placeholder="Search for restaurant, cuisine or a dish"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
            </div>
          </div>

          {/* Right Action Icons & Auth */}
          <div className="navbar-actions">
            
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
                    <button className="user-dropdown-item" onClick={() => setShowUserDropdown(false)}>
                      <Heart size={16} />
                      <span>Favorite Places</span>
                    </button>
                    <button className="user-dropdown-item" onClick={() => setShowUserDropdown(false)}>
                      <Clock size={16} />
                      <span>Past Orders</span>
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
