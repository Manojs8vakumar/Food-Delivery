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
import AdvancedFilterModal from './components/AdvancedFilterModal';
import AdminPortal from './admin/AdminPortal';
import AdminLogin from './admin/AdminLogin';

import { restaurants as initialRestaurants, locations, coupons as initialCoupons } from './data/mockData';

const sampleInitialOrders = [
  {
    id: 'CRV-894102',
    customerName: 'Priya Sharma',
    phone: '+91 98450 12345',
    address: 'Flat 402, Green Glen Layout, Bellandur, Bengaluru',
    restaurantName: 'The Royal Biryani House',
    restaurantId: 1,
    time: '12 mins ago',
    total: 640,
    status: 'out_for_delivery',
    items: [
      { name: 'Hyderabadi Dum Chicken Biryani', quantity: 1, price: 320 },
      { name: 'Royal Shahi Paneer Biryani', quantity: 1, price: 280 }
    ]
  },
  {
    id: 'CRV-761294',
    customerName: 'Rahul Verma',
    phone: '+91 97110 56789',
    address: 'B-12, Sector 18, Noida, Delhi NCR',
    restaurantName: "Domino's Pizza",
    restaurantId: 9,
    time: '24 mins ago',
    total: 549,
    status: 'preparing',
    items: [
      { name: 'Barbecue Pepper Chicken Pizza', quantity: 1, price: 429 },
      { name: 'Choco Lava Volcano Cake', quantity: 1, price: 129 }
    ]
  },
  {
    id: 'CRV-652901',
    customerName: 'Ananya Deshmukh',
    phone: '+91 99201 34567',
    address: '14th Floor, Hiranandani Gardens, Powai, Mumbai',
    restaurantName: 'Toit Craft Brewery & Gastro Pub',
    restaurantId: 57,
    time: '45 mins ago',
    total: 830,
    status: 'confirmed',
    items: [
      { name: 'Toit Tint-In-Wit Craft Wheat Beer', quantity: 1, price: 340 },
      { name: 'Smoked Bacon & Mozzarella Pizza', quantity: 1, price: 490 }
    ]
  },
  {
    id: 'CRV-512093',
    customerName: 'Karthik Reddy',
    phone: '+91 98850 78901',
    address: 'Road No 10, Jubilee Hills, Hyderabad',
    restaurantName: 'Paradise Biryani & Kebabs',
    restaurantId: 3,
    time: '1 hour ago',
    total: 420,
    status: 'delivered',
    items: [
      { name: 'Special Hyderabadi Mutton Dum Biryani', quantity: 1, price: 420 }
    ]
  }
];

export default function App() {
  // Current View Mode: 'customer' | 'admin'
  const [viewMode, setViewMode] = useState(() => {
    return window.location.hash === '#admin' 
      ? 'admin' 
      : (localStorage.getItem('crave_view_mode') || 'customer');
  });

  // Admin Session Authentication State
  const [adminUser, setAdminUser] = useState(() => {
    const saved = localStorage.getItem('crave_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  const handleAdminLoginSuccess = (userData) => {
    setAdminUser(userData);
    localStorage.setItem('crave_admin_user', JSON.stringify(userData));
    showToast(`Welcome Administrator ${userData.name}!`, 'success');
  };

  const handleAdminLogout = () => {
    setAdminUser(null);
    localStorage.removeItem('crave_admin_user');
    setViewMode('customer');
    showToast('Admin session ended. Signed out securely.', 'info');
  };

  useEffect(() => {
    localStorage.setItem('crave_view_mode', viewMode);
    if (viewMode === 'admin') {
      window.location.hash = '#admin';
    } else if (window.location.hash === '#admin') {
      window.location.hash = '';
    }
  }, [viewMode]);

  // Master Data States (editable by Admin)
  const [restaurantsList, setRestaurantsList] = useState(() => {
    const saved = localStorage.getItem('crave_restaurants');
    return saved ? JSON.parse(saved) : initialRestaurants;
  });

  useEffect(() => {
    localStorage.setItem('crave_restaurants', JSON.stringify(restaurantsList));
  }, [restaurantsList]);

  const [ordersList, setOrdersList] = useState(() => {
    const saved = localStorage.getItem('crave_orders');
    return saved ? JSON.parse(saved) : sampleInitialOrders;
  });

  useEffect(() => {
    localStorage.setItem('crave_orders', JSON.stringify(ordersList));
  }, [ordersList]);

  const [couponsList, setCouponsList] = useState(() => {
    const saved = localStorage.getItem('crave_coupons');
    return saved ? JSON.parse(saved) : initialCoupons;
  });

  useEffect(() => {
    localStorage.setItem('crave_coupons', JSON.stringify(couponsList));
  }, [couponsList]);

  // Theme State: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('crave_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('crave_theme', theme);
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

  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [costRange, setCostRange] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);

  // User State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('crave_user');
    return saved ? JSON.parse(saved) : null;
  });

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('crave_user', JSON.stringify(userData));
    showToast(`Welcome back, ${userData.name}!`, 'success');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('crave_user');
    showToast('Logged out successfully', 'info');
  };

  // Wishlist / Favorites
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('crave_favs');
    return saved ? JSON.parse(saved) : [1, 2, 4];
  });

  const toggleFavorite = (restaurantId) => {
    setFavorites(prev => {
      const exists = prev.includes(restaurantId);
      const updated = exists ? prev.filter(id => id !== restaurantId) : [...prev, restaurantId];
      localStorage.setItem('crave_favs', JSON.stringify(updated));
      showToast(exists ? 'Removed from favorites' : 'Added to favorites', 'info');
      return updated;
    });
  };

  // Cart State
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('crave_cart');
    return saved ? JSON.parse(saved) : { restaurant: null, items: [] };
  });

  useEffect(() => {
    localStorage.setItem('crave_cart', JSON.stringify(cart));
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

  const scrollToContent = () => {
    const el = document.getElementById('browse-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart Handlers
  const handleAddToCart = (restaurant, item) => {
    setCart(prev => {
      if (prev.restaurant && prev.restaurant.id !== restaurant.id && prev.items.length > 0) {
        if (!window.confirm(`Your cart already contains dishes from ${prev.restaurant.name}. Would you like to reset your cart to add items from ${restaurant.name}?`)) {
          return prev;
        }
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
    
    const newOrderId = `CRV-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrderPayload = {
      id: newOrderId,
      customerName: user?.name || 'Gourmet Foodie',
      phone: user?.phone || '+91 98765 43210',
      address: selectedLocation?.name || 'Connaught Place, New Delhi',
      restaurantName: cart.restaurant?.name || 'Crave Partner Kitchen',
      restaurantId: cart.restaurant?.id,
      time: 'Just now',
      total: orderData.total || cart.items.reduce((acc, i) => acc + (i.price * i.quantity), 0),
      status: 'confirmed',
      items: cart.items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price }))
    };

    setOrdersList(prev => [newOrderPayload, ...prev]);
    setActiveOrder(newOrderPayload);
    setCart({ restaurant: null, items: [] });
    setAppliedCoupon(null);
    showToast('Order placed successfully! Tracking live updates...', 'success');
  };

  // ==========================================
  // ADMIN ACTIONS HANDLERS
  // ==========================================
  const handleAddRestaurant = (newRest) => {
    const nextId = restaurantsList.reduce((max, r) => Math.max(max, r.id), 0) + 1;
    const fullRestaurant = {
      id: nextId,
      ...newRest,
      ratingCount: '100+',
      safetyBadged: true,
      banner: newRest.image,
      menu: [
        {
          id: `m_${nextId}_1`,
          name: `${newRest.name} Special Dish`,
          category: 'Chef Specials',
          price: Math.round(newRest.costForOne * 0.9),
          rating: 4.8,
          votes: 180,
          isVeg: newRest.isVeg,
          isBestseller: true,
          description: 'Signature specialty prepared fresh with premium ingredients.',
          image: newRest.image
        }
      ]
    };

    setRestaurantsList(prev => [fullRestaurant, ...prev]);
    showToast(`Added "${newRest.name}" to restaurants directory!`, 'success');
  };

  const handleUpdateRestaurant = (id, updatedFields) => {
    setRestaurantsList(prev => prev.map(r => r.id === id ? { ...r, ...updatedFields } : r));
    showToast('Restaurant details updated successfully!', 'success');
  };

  const handleDeleteRestaurant = (id) => {
    setRestaurantsList(prev => prev.filter(r => r.id !== id));
    showToast('Restaurant removed from directory', 'info');
  };

  const handleAddDish = (restaurantId, newDish) => {
    setRestaurantsList(prev => prev.map(r => {
      if (r.id === restaurantId) {
        const dishId = `m_${restaurantId}_${Date.now()}`;
        return {
          ...r,
          menu: [...(r.menu || []), { id: dishId, ...newDish }]
        };
      }
      return r;
    }));
    showToast(`Dish "${newDish.name}" added to menu!`, 'success');
  };

  const handleUpdateDish = (restaurantId, dishId, updatedDish) => {
    setRestaurantsList(prev => prev.map(r => {
      if (r.id === restaurantId) {
        return {
          ...r,
          menu: (r.menu || []).map(d => d.id === dishId ? { ...d, ...updatedDish } : d)
        };
      }
      return r;
    }));
    showToast('Dish details updated!', 'success');
  };

  const handleDeleteDish = (restaurantId, dishId) => {
    setRestaurantsList(prev => prev.map(r => {
      if (r.id === restaurantId) {
        return {
          ...r,
          menu: (r.menu || []).filter(d => d.id !== dishId)
        };
      }
      return r;
    }));
    showToast('Dish removed from menu', 'info');
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrdersList(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    if (activeOrder && activeOrder.id === orderId) {
      setActiveOrder(prev => ({ ...prev, status: newStatus }));
    }
    showToast(`Order #${orderId} status changed to "${newStatus.replace('_', ' ').toUpperCase()}"`, 'success');
  };

  const handleSimulateNewOrder = () => {
    const randomRest = restaurantsList[Math.floor(Math.random() * restaurantsList.length)] || restaurantsList[0];
    const simulatedOrderId = `CRV-${Math.floor(100000 + Math.random() * 900000)}`;
    const randomDish = randomRest.menu?.[0] || { name: 'Chef Special Platter', price: 340 };

    const simulatedOrder = {
      id: simulatedOrderId,
      customerName: ['Aditya Verma', 'Rohit Sen', 'Sneha Kapoor', 'Meera Nair'][Math.floor(Math.random() * 4)],
      phone: `+91 ${Math.floor(9000000000 + Math.random() * 999999999)}`,
      address: `${randomRest.cityId.toUpperCase()} Delivery Zone`,
      restaurantName: randomRest.name,
      restaurantId: randomRest.id,
      time: 'Just now',
      total: (randomDish.price || 300) + 40,
      status: 'confirmed',
      items: [
        { name: randomDish.name, quantity: 1, price: randomDish.price || 300 }
      ]
    };

    setOrdersList(prev => [simulatedOrder, ...prev]);
    showToast(`🔔 New Live Order received from ${simulatedOrder.customerName}!`, 'success');
  };

  const handleAddCoupon = (newCoupon) => {
    setCouponsList(prev => [newCoupon, ...prev]);
    showToast(`Coupon "${newCoupon.code}" published successfully!`, 'success');
  };

  const handleDeleteCoupon = (code) => {
    setCouponsList(prev => prev.filter(c => c.code !== code));
    showToast(`Coupon "${code}" deleted`, 'info');
  };

  // Filter Computation
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.rating4Plus) count++;
    if (filters.pureVeg) count++;
    if (filters.fastDelivery) count++;
    if (filters.offersOnly) count++;
    if (favoritesOnly) count++;
    if (costRange !== 'all') count++;
    if (selectedFoodCategory) count++;
    if (selectedBrand) count++;
    if (sortBy !== 'relevance') count++;
    return count;
  }, [filters, favoritesOnly, costRange, selectedFoodCategory, selectedBrand, sortBy]);

  const handleResetFilters = () => {
    setFilters({
      rating4Plus: false,
      pureVeg: false,
      fastDelivery: false,
      offersOnly: false
    });
    setFavoritesOnly(false);
    setCostRange('all');
    setSelectedFoodCategory(null);
    setSelectedBrand(null);
    setSortBy('relevance');
    setSearchQuery('');
  };

  // Filtered & Sorted Restaurants
  const filteredRestaurants = useMemo(() => {
    let result = [...restaurantsList];

    // 1. Service Type filter (Delivery, Dining Out, Nightlife)
    if (activeTab) {
      result = result.filter(r => {
        if (Array.isArray(r.serviceTypes)) {
          return r.serviceTypes.includes(activeTab);
        }
        return r.serviceType === activeTab;
      });
    }

    // 2. City / Location filter
    if (selectedLocation && selectedLocation.id !== 'all') {
      result = result.filter(r => r.cityId === selectedLocation.id);
    }

    // 3. Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(r => 
        r.name.toLowerCase().includes(q) ||
        r.address.toLowerCase().includes(q) ||
        r.cuisines.some(c => c.toLowerCase().includes(q)) ||
        (r.menu && r.menu.some(m => 
          m.name.toLowerCase().includes(q) || 
          m.category.toLowerCase().includes(q) ||
          (m.description && m.description.toLowerCase().includes(q))
        ))
      );
    }

    // 4. Food Inspiration category filter
    if (selectedFoodCategory) {
      const cat = selectedFoodCategory.toLowerCase();
      result = result.filter(r => 
        r.cuisines.some(c => c.toLowerCase().includes(cat)) ||
        (r.menu && r.menu.some(m => m.name.toLowerCase().includes(cat) || m.category.toLowerCase().includes(cat)))
      );
    }

    // 5. Brand filter
    if (selectedBrand) {
      result = result.filter(r => 
        r.name.toLowerCase().includes(selectedBrand.toLowerCase()) ||
        r.cuisines.some(c => c.toLowerCase().includes(selectedBrand.toLowerCase()))
      );
    }

    // 6. Rating 4.0+
    if (filters.rating4Plus) {
      result = result.filter(r => r.rating >= 4.0);
    }

    // 7. Pure Veg
    if (filters.pureVeg) {
      result = result.filter(r => r.isVeg);
    }

    // 8. Fast Delivery (<30 mins)
    if (filters.fastDelivery) {
      result = result.filter(r => {
        const mins = parseInt(r.deliveryTime);
        return !isNaN(mins) && mins <= 30;
      });
    }

    // 9. Offers Only
    if (filters.offersOnly) {
      result = result.filter(r => Boolean(r.discount || r.goldOffer));
    }

    // 10. Favorites Only
    if (favoritesOnly) {
      result = result.filter(r => favorites.includes(r.id));
    }

    // 11. Cost Range
    if (costRange === 'under250') {
      result = result.filter(r => r.costForOne < 250);
    } else if (costRange === '250to500') {
      result = result.filter(r => r.costForOne >= 250 && r.costForOne <= 500);
    } else if (costRange === 'above500') {
      result = result.filter(r => r.costForOne > 500);
    }

    // 12. Sorting
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
  }, [restaurantsList, activeTab, selectedLocation, searchQuery, selectedFoodCategory, selectedBrand, filters, favoritesOnly, costRange, sortBy, favorites]);

  const totalCartCount = cart.items.reduce((acc, i) => acc + i.quantity, 0);
  const totalCartPrice = cart.items.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  // If Admin View is active, check authentication
  if (viewMode === 'admin') {
    // If NOT authenticated as admin, show Admin Authentication Gate!
    if (!adminUser) {
      return (
        <div className="admin-root-container">
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast({ message: '', type: 'success' })} 
          />
          <AdminLogin
            onLoginSuccess={handleAdminLoginSuccess}
            onBackToStorefront={() => setViewMode('customer')}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>
      );
    }

    // Authenticated Admin Portal Suite
    return (
      <div className="admin-root-container">
        {/* Toast Notification */}
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ message: '', type: 'success' })} 
        />

        <AdminPortal
          restaurants={restaurantsList}
          orders={ordersList}
          coupons={couponsList}
          onAddRestaurant={handleAddRestaurant}
          onUpdateRestaurant={handleUpdateRestaurant}
          onDeleteRestaurant={handleDeleteRestaurant}
          onAddDish={handleAddDish}
          onUpdateDish={handleUpdateDish}
          onDeleteDish={handleDeleteDish}
          onUpdateOrderStatus={handleUpdateOrderStatus}
          onSimulateNewOrder={handleSimulateNewOrder}
          onAddCoupon={handleAddCoupon}
          onDeleteCoupon={handleDeleteCoupon}
          onSwitchToCustomerView={() => setViewMode('customer')}
          adminUser={adminUser}
          onAdminLogout={handleAdminLogout}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    );
  }

  // Otherwise render Customer Delivery Storefront
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
        onSelectRestaurant={(restaurant) => setSelectedRestaurant(restaurant)}
        onShowFavorites={() => {
          setFavoritesOnly(true);
          scrollToContent();
        }}
        onOpenPastOrders={() => {
          if (activeOrder) {
            // Already active order
          } else {
            showToast('Showing your live delivery tracking status', 'info');
            setActiveOrder(ordersList[0] || {
              restaurant: restaurantsList[0],
              items: restaurantsList[0].menu.slice(0, 2)
            });
          }
        }}
        onOpenAdmin={() => {
          setViewMode('admin');
          showToast('Switched to Crave Foodie Admin Portal', 'info');
        }}
      />

      {/* Hero Banner with Fiery Smoke Biryani GIF Background */}
      <HeroBanner
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectCuisine={(cuisine) => {
          setSearchQuery(cuisine);
          scrollToContent();
        }}
      />

      {/* Anchor for Smooth Scrolling from Hero */}
      <div id="browse-section"></div>

      {/* Signature Category Switcher Tabs */}
      <CategoryTabs 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          scrollToContent();
        }} 
      />

      {/* Main Body Content */}
      <main className="main-content-area">
        <div className="content-wrapper">
          
          {/* Inspiration For Your First Order Carousel */}
          <FoodInspiration
            selectedFoodCategory={selectedFoodCategory}
            onSelectCategory={(categoryTag) => {
              setSelectedFoodCategory(prev => prev === categoryTag ? null : categoryTag);
              scrollToContent();
            }}
          />

          {/* Top Brands Carousel */}
          <TopBrands
            selectedBrand={selectedBrand}
            onSelectBrand={(brandName) => {
              setSelectedBrand(prev => prev === brandName ? null : brandName);
              scrollToContent();
            }}
          />

          {/* Sticky Filter & Sort Bar */}
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
            costRange={costRange}
            setCostRange={setCostRange}
            favoritesOnly={favoritesOnly}
            setFavoritesOnly={setFavoritesOnly}
            activeFilterCount={activeFilterCount}
            onResetFilters={handleResetFilters}
            onOpenAdvancedFilters={() => setIsAdvancedFilterOpen(true)}
          />

          {/* Restaurant Grid */}
          <RestaurantList
            restaurants={filteredRestaurants}
            locationName={selectedLocation.name.split(',')[0]}
            activeTab={activeTab}
            onSelectRestaurant={(restaurant) => setSelectedRestaurant(restaurant)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onResetFilters={handleResetFilters}
            searchQuery={searchQuery}
            favoritesOnly={favoritesOnly}
            activeFilterCount={activeFilterCount}
          />

        </div>
      </main>

      {/* Advanced Filter Modal */}
      <AdvancedFilterModal
        isOpen={isAdvancedFilterOpen}
        onClose={() => setIsAdvancedFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
        costRange={costRange}
        setCostRange={setCostRange}
        favoritesOnly={favoritesOnly}
        setFavoritesOnly={setFavoritesOnly}
        onResetFilters={handleResetFilters}
        matchCount={filteredRestaurants.length}
      />

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
