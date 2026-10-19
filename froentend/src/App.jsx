import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import CategoryTabs from './components/CategoryTabs';
import FoodInspiration from './components/FoodInspiration';
import TopBrands from './components/TopBrands';
import FilterBar from './components/FilterBar';
import RestaurantList from './components/RestaurantList';
import RestaurantMenuModal from './components/RestaurantMenuModal';
import CartDrawer from './components/CartDrawer';
import OrderTrackingModal from './components/OrderTrackingModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import Toast from './components/Toast';
import HeroBanner from './components/HeroBanner';

import { restaurants as initialRestaurants, locations } from './data/mockData';

export default function App() {
  // Theme State: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('zomato_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('zomato_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Location State
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  // Main Active Tab: 'delivery' | 'dining' | 'nightlife'
  const [activeTab, setActiveTab] = useState('delivery');

  // Search & Category Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFoodCategory, setSelectedFoodCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Filters State
  const [filters, setFilters] = useState({
    rating4Plus: false,
    pureVeg: false,
    fastDelivery: false,
    offersOnly: false
  });

  const [sortBy, setSortBy] = useState('relevance');

  // User State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('zomato_user');
    return saved ? JSON.parse(saved) : null;
  });

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('zomato_user', JSON.stringify(userData));
    showToast(`Welcome back, ${userData.name}!`, 'success');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('zomato_user');
    showToast('Logged out successfully', 'info');
  };

  // Wishlist / Favorites
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('zomato_favs');
    return saved ? JSON.parse(saved) : [1, 2];
  });

  const toggleFavorite = (restaurantId) => {
    setFavorites(prev => {
      const exists = prev.includes(restaurantId);
      const updated = exists ? prev.filter(id => id !== restaurantId) : [...prev, restaurantId];
      localStorage.setItem('zomato_favs', JSON.stringify(updated));
      showToast(exists ? 'Removed from favorites' : 'Added to favorites', 'info');
      return updated;
    });
  };

  // Cart State
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('zomato_cart');
    return saved ? JSON.parse(saved) : { restaurant: null, items: [] };
  });

  useEffect(() => {
    localStorage.setItem('zomato_cart', JSON.stringify(cart));
  }, [cart]);

  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Modals & Drawers
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });
  const [activeOrder, setActiveOrder] = useState(null);

  // Toast Notification State
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(prev => prev.message === message ? { message: '', type: 'success' } : prev);
    }, 3500);
  };

  // Cart Handlers
  const handleAddToCart = (restaurant, item) => {
    setCart(prev => {
      // Check if item belongs to same restaurant
      if (prev.restaurant && prev.restaurant.id !== restaurant.id && prev.items.length > 0) {
        if (!window.confirm(`Your cart already contains dishes from ${prev.restaurant.name}. Would you like to reset your cart to add items from ${restaurant.name}?`)) {
          return prev;
        }
        // User agreed to reset
        return {
          restaurant,
          items: [{ ...item, quantity: 1 }]
        };
      }

      const existingItemIndex = prev.items.findIndex(i => i.id === item.id);
      let updatedItems;

      if (existingItemIndex > -1) {
        updatedItems = prev.items.map((i, idx) => 
          idx === existingItemIndex ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedItems = [...prev.items, { ...item, quantity: 1 }];
      }

      showToast(`Added "${item.name}" to cart`, 'success');
      return {
        restaurant,
        items: updatedItems
      };
    });
  };

  const handleUpdateCartQuantity = (itemId, newQuantity) => {
    setCart(prev => {
      if (newQuantity <= 0) {
        const remaining = prev.items.filter(i => i.id !== itemId);
        return {
          restaurant: remaining.length === 0 ? null : prev.restaurant,
          items: remaining
        };
      }
      return {
        ...prev,
        items: prev.items.map(i => i.id === itemId ? { ...i, quantity: newQuantity } : i)
      };
    });
  };

  const handleClearCart = () => {
    setCart({ restaurant: null, items: [] });
    setAppliedCoupon(null);
    showToast('Cart cleared', 'info');
  };

  const handleCheckout = (orderData) => {
    setIsCartOpen(false);
    setActiveOrder(orderData);
    setCart({ restaurant: null, items: [] });
    setAppliedCoupon(null);
    showToast('Order placed successfully! Tracking live updates...', 'success');
  };

  // Filter Computation
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.rating4Plus) count++;
    if (filters.pureVeg) count++;
    if (filters.fastDelivery) count++;
    if (filters.offersOnly) count++;
    if (selectedFoodCategory) count++;
    if (selectedBrand) count++;
    if (sortBy !== 'relevance') count++;
    return count;
  }, [filters, selectedFoodCategory, selectedBrand, sortBy]);

  const handleResetFilters = () => {
    setFilters({
      rating4Plus: false,
      pureVeg: false,
      fastDelivery: false,
      offersOnly: false
    });
    setSelectedFoodCategory(null);
    setSelectedBrand(null);
    setSortBy('relevance');
    setSearchQuery('');
  };

  // Filtered & Sorted Restaurants
  const filteredRestaurants = useMemo(() => {
    let result = [...initialRestaurants];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(r => 
        r.name.toLowerCase().includes(q) ||
        r.cuisines.some(c => c.toLowerCase().includes(q)) ||
        r.menu.some(m => m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q))
      );
    }

    // Inspiration category filter
    if (selectedFoodCategory) {
      const cat = selectedFoodCategory.toLowerCase();
      result = result.filter(r => 
        r.cuisines.some(c => c.toLowerCase().includes(cat)) ||
        r.menu.some(m => m.name.toLowerCase().includes(cat) || m.category.toLowerCase().includes(cat))
      );
    }

    // Brand filter
    if (selectedBrand) {
      result = result.filter(r => 
        r.name.toLowerCase().includes(selectedBrand.toLowerCase()) ||
        r.cuisines.some(c => c.toLowerCase().includes(selectedBrand.toLowerCase()))
      );
    }

    // Rating 4.0+
    if (filters.rating4Plus) {
      result = result.filter(r => r.rating >= 4.0);
    }

    // Pure Veg
    if (filters.pureVeg) {
      result = result.filter(r => r.isVeg);
    }

    // Fast Delivery (< 30 mins)
    if (filters.fastDelivery) {
      result = result.filter(r => {
        const mins = parseInt(r.deliveryTime);
        return !isNaN(mins) && mins <= 25;
      });
    }

    // Offers Only
    if (filters.offersOnly) {
      result = result.filter(r => Boolean(r.discount));
    }

    // Sorting
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'deliveryTime') {
      result.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));
    } else if (sortBy === 'costLowHigh') {
      result.sort((a, b) => a.costForOne - b.costForOne);
    } else if (sortBy === 'costHighLow') {
      result.sort((a, b) => b.costForOne - a.costForOne);
    }

    return result;
  }, [searchQuery, selectedFoodCategory, selectedBrand, filters, sortBy]);

  const totalCartCount = cart.items.reduce((acc, i) => acc + i.quantity, 0);
  const totalCartPrice = cart.items.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  return (
    <div className="app-container">
      {/* Toast Notification */}
      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: 'success' })} 
      />

      {/* Top Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartCount={totalCartCount}
        cartTotal={totalCartPrice}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
        user={user}
        onLogout={handleLogout}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />

      {/* Hero Banner with Fiery Smoke Biryani GIF Background */}
      <HeroBanner
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectCuisine={(cuisine) => setSearchQuery(cuisine)}
      />

      {/* Anchor for Smooth Scrolling from Hero */}
      <div id="browse-section"></div>

      {/* Zomato Signature Category Switcher Tabs */}
      <CategoryTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Body Content */}
      <main className="main-content-area">
        <div className="content-wrapper">
          
          {/* Inspiration For Your First Order Carousel */}
          <FoodInspiration
            selectedFoodCategory={selectedFoodCategory}
            onSelectCategory={(categoryTag) => {
              setSelectedFoodCategory(prev => prev === categoryTag ? null : categoryTag);
            }}
          />

          {/* Top Brands Carousel */}
          <TopBrands
            selectedBrand={selectedBrand}
            onSelectBrand={(brandName) => {
              setSelectedBrand(prev => prev === brandName ? null : brandName);
            }}
          />

          {/* Sticky Filter & Sort Bar */}
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
            activeFilterCount={activeFilterCount}
            onResetFilters={handleResetFilters}
          />

          {/* Restaurant Grid */}
          <RestaurantList
            restaurants={filteredRestaurants}
            locationName={selectedLocation.name.split(',')[0]}
            onSelectRestaurant={(restaurant) => setSelectedRestaurant(restaurant)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onResetFilters={handleResetFilters}
          />

        </div>
      </main>

      {/* Restaurant Menu Modal */}
      {selectedRestaurant && (
        <RestaurantMenuModal
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
          cart={cart}
          onAddToCart={handleAddToCart}
          onUpdateCartQuantity={handleUpdateCartQuantity}
          onOpenCart={() => setIsCartOpen(true)}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onClearCart={handleClearCart}
        onCheckout={handleCheckout}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={(c) => {
          setAppliedCoupon(c);
          showToast(`Coupon "${c.code}" applied!`, 'success');
        }}
        onRemoveCoupon={() => {
          setAppliedCoupon(null);
          showToast('Coupon removed', 'info');
        }}
      />

      {/* Live Order Tracking Modal */}
      {activeOrder && (
        <OrderTrackingModal
          order={activeOrder}
          onClose={() => setActiveOrder(null)}
          onOrderAgain={() => setActiveOrder(null)}
        />
      )}

      {/* Authentication Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ isOpen: false, mode: 'login' })}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
