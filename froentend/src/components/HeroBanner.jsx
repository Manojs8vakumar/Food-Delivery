import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  ChevronDown, 
  Flame, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowDown, 
  X,
  Layers
} from 'lucide-react';
import { locations } from '../data/mockData';

export const biryaniGifs = [
  {
    id: 'dum-handi',
    name: 'Fiery Dum Biryani Handi',
    url: 'https://media.giphy.com/media/dWn8ZqjihYvfTR3dHW/giphy.gif',
    caption: 'Slow-cooked Dum Biryani with aromatic fiery spices & smoke'
  },
  {
    id: 'sizzling-pot',
    name: 'Steaming Royal Biryani',
    url: 'https://media.giphy.com/media/rVIka1U4ZHTP0BgHww/giphy.gif',
    caption: 'Hot steaming basmati rice and rich marinated chicken'
  },
  {
    id: 'flame-dum',
    name: 'Clay Pot Sizzler Biryani',
    url: 'https://media.giphy.com/media/oaZ2J3kAt6fqM5b00w/giphy.gif',
    caption: 'Freshly opened handi releasing aromatic clouds of smoke'
  },
  {
    id: 'hyderabadi-feast',
    name: 'Hyderabadi Spiced Dum',
    url: 'https://media.giphy.com/media/VAwGebxz04nF25kHDo/giphy.gif',
    caption: 'Authentic Hyderabadi dum cooked over charcoal embers'
  }
];

export default function HeroBanner({
  selectedLocation,
  setSelectedLocation,
  searchQuery,
  setSearchQuery,
  onSelectCuisine
}) {
  const [activeGifIndex, setActiveGifIndex] = useState(0);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showSceneMenu, setShowSceneMenu] = useState(false);

  const activeGif = biryaniGifs[activeGifIndex];

  const quickCravings = [
    { label: '🔥 Dum Biryani', query: 'biryani' },
    { label: '🍗 Chicken Biryani', query: 'chicken biryani' },
    { label: '🍕 Woodfired Pizza', query: 'pizza' },
    { label: '🍔 Smashed Burger', query: 'burger' },
    { label: '🥘 North Indian Thali', query: 'thali' }
  ];

  const scrollToContent = () => {
    const el = document.getElementById('browse-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-banner-section">
      {/* Background Biryani GIF */}
      <div className="hero-bg-media-container">
        <img 
          src={activeGif.url} 
          alt="Steaming Hot Biryani Background" 
          className="hero-biryani-gif" 
        />
        
        {/* Layer 2: Fiery Smoke & Embers Atmospheric Overlay */}
        <div className="hero-smoke-overlay"></div>
        <div className="hero-fire-glow-layer"></div>

        {/* Animated Rising Steam / Embers Particles */}
        <div className="smoke-particle-system">
          <span className="smoke-particle p1"></span>
          <span className="smoke-particle p2"></span>
          <span className="smoke-particle p3"></span>
          <span className="smoke-particle p4"></span>
          <span className="smoke-particle p5"></span>
          <span className="smoke-particle p6"></span>
          <span className="fire-ember e1"></span>
          <span className="fire-ember e2"></span>
          <span className="fire-ember e3"></span>
          <span className="fire-ember e4"></span>
        </div>

        {/* Vignette & Contrast Gradients */}
        <div className="hero-dark-vignette"></div>
      </div>

      {/* Floating Scene Switcher Pill (Top Right) */}
      <div className="hero-scene-switcher">
        <button 
          className="scene-toggle-pill"
          onClick={() => setShowSceneMenu(!showSceneMenu)}
          title="Change Biryani animation scene"
        >
          <Flame size={14} className="flame-icon-animated" />
          <span>Scene: {activeGif.name}</span>
          <ChevronDown size={14} className={showSceneMenu ? 'rotate' : ''} />
        </button>

        {showSceneMenu && (
          <div className="scene-dropdown-menu animate-fade-in">
            <div className="scene-menu-header">
              <Flame size={14} />
              <span>Select Biryani Fire & Smoke Scene</span>
            </div>
            {biryaniGifs.map((bg, idx) => (
              <div
                key={bg.id}
                className={`scene-menu-item ${idx === activeGifIndex ? 'active' : ''}`}
                onClick={() => {
                  setActiveGifIndex(idx);
                  setShowSceneMenu(false);
                }}
              >
                <div className="scene-thumb-wrap">
                  <img src={bg.url} alt={bg.name} />
                </div>
                <div className="scene-item-text">
                  <strong>{bg.name}</strong>
                  <p>{bg.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Central Hero Content */}
      <div className="hero-center-content">
        <div className="content-wrapper hero-inner-wrapper">
          
          {/* Main Hero Branding */}
          <div className="hero-brand-header">
            <h1 className="hero-zomato-logo">crave foodie</h1>
            <p className="hero-tagline">
              Discover the best food & drinks in <strong>{selectedLocation.name.split(',')[0]}</strong>
            </p>
            <div className="hero-smoke-badge">
              <Flame size={16} className="fire-icon-pulse" />
              <span>Hot & Sizzling Dum Biryani Delivered Fresh to Your Doorstep</span>
            </div>
          </div>

          {/* Large Hero Search Box */}
          <div className="hero-search-container">
            {/* Location Dropdown */}
            <div className="hero-location-box">
              <button 
                type="button" 
                className="hero-location-btn"
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                <MapPin size={18} className="hero-pin-icon" />
                <span className="hero-location-text">{selectedLocation.name}</span>
                <ChevronDown size={16} className={`hero-chevron ${showLocationDropdown ? 'rotate' : ''}`} />
              </button>

              {showLocationDropdown && (
                <div className="hero-location-dropdown animate-fade-in">
                  <div className="hero-loc-header">Select Delivery City</div>
                  {locations.map(loc => (
                    <div 
                      key={loc.id} 
                      className={`hero-loc-item ${loc.id === selectedLocation.id ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setShowLocationDropdown(false);
                      }}
                    >
                      <MapPin size={15} />
                      <div>
                        <div className="loc-title">{loc.name}</div>
                        <div className="loc-sub">{loc.state}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="hero-search-divider"></div>

            {/* Main Search Input */}
            <div className="hero-input-box">
              <Search size={20} className="hero-search-icon" />
              <input 
                type="text" 
                placeholder="Search for fiery dum biryani, restaurant, cuisine or dish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="hero-clear-btn" 
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <button 
              className="hero-search-action-btn"
              onClick={scrollToContent}
            >
              <span>Explore</span>
            </button>
          </div>

          {/* Quick Trending Cravings Chips */}
          <div className="hero-cravings-row">
            <span className="cravings-label">Popular Cravings:</span>
            <div className="cravings-chips">
              {quickCravings.map((item) => (
                <button
                  key={item.query}
                  className="craving-chip"
                  onClick={() => {
                    setSearchQuery(item.query);
                    scrollToContent();
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Trust & Guarantee Badges */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <Clock size={16} className="trust-icon" />
              <span>30 Mins Express Delivery</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <Flame size={16} className="trust-icon flame" />
              <span>Piping Hot Guaranteed</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <ShieldCheck size={16} className="trust-icon green" />
              <span>100% Verified Kitchens</span>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <button 
            className="hero-scroll-down-btn" 
            onClick={scrollToContent}
            aria-label="Scroll to restaurant list"
          >
            <span>Order Online</span>
            <ArrowDown size={16} className="bounce-arrow" />
          </button>

        </div>
      </div>
    </section>
  );
}
