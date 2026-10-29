import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Utensils, 
  Pizza, 
  ShoppingBag, 
  Tag, 
  ArrowLeft, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Store,
  Layers,
  Settings
} from 'lucide-react';

import AdminDashboard from './AdminDashboard';
import AdminRestaurants from './AdminRestaurants';
import AdminMenu from './AdminMenu';
import AdminOrders from './AdminOrders';
import AdminCoupons from './AdminCoupons';
import './admin.css';

export default function AdminPortal({
  restaurants,
  orders,
  coupons,
  onAddRestaurant,
  onUpdateRestaurant,
  onDeleteRestaurant,
  onAddDish,
  onUpdateDish,
  onDeleteDish,
  onUpdateOrderStatus,
  onSimulateNewOrder,
  onAddCoupon,
  onDeleteCoupon,
  onSwitchToCustomerView,
  theme,
  toggleTheme
}) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [menuTargetRestaurantId, setMenuTargetRestaurantId] = useState(null);

  const activeOrdersCount = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;

  const handleNavigateToMenu = (restaurantId) => {
    setMenuTargetRestaurantId(restaurantId);
    setActiveTab('menu');
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return { title: 'Executive Overview', sub: 'Key business metrics, sales insights and recent order dispatches' };
      case 'restaurants':
        return { title: 'Restaurant Directory', sub: `Manage all ${restaurants.length} partner kitchens, locations and listings` };
      case 'menu':
        return { title: 'Menu Item Manager', sub: 'Edit dish prices, categories, pure-veg tags and bestsellers' };
      case 'orders':
        return { title: 'Live Order Dispatch Board', sub: 'Monitor, assign and advance live incoming customer deliveries' };
      case 'coupons':
        return { title: 'Marketing & Promo Coupons', sub: 'Create discount codes and seasonal promotional campaigns' };
      default:
        return { title: 'Admin Workspace', sub: 'Crave Foodie management suite' };
    }
  };

  const { title, sub } = getPageTitle();

  return (
    <div className="admin-layout-root">
      
      {/* Sidebar Navigation */}
      <aside className="admin-sidebar">
        {/* Brand header */}
        <div className="admin-sidebar-header">
          <div className="admin-brand">
            <div className="admin-brand-icon">CF</div>
            <div className="admin-brand-text">
              <span className="admin-brand-title">crave foodie</span>
              <span className="admin-badge">Admin Suite</span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="admin-nav-menu">
          <div className="admin-nav-category">Main Operations</div>

          <button 
            className={`admin-nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </button>

          <button 
            className={`admin-nav-btn ${activeTab === 'restaurants' ? 'active' : ''}`}
            onClick={() => setActiveTab('restaurants')}
          >
            <Utensils size={18} />
            <span>Restaurants</span>
            <span className="admin-nav-badge">{restaurants.length}</span>
          </button>

          <button 
            className={`admin-nav-btn ${activeTab === 'menu' ? 'active' : ''}`}
            onClick={() => setActiveTab('menu')}
          >
            <Pizza size={18} />
            <span>Menu Dishes</span>
          </button>

          <button 
            className={`admin-nav-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingBag size={18} />
            <span>Live Orders</span>
            {activeOrdersCount > 0 && (
              <span className="admin-nav-badge">{activeOrdersCount}</span>
            )}
          </button>

          <div className="admin-nav-category">Growth & Promos</div>

          <button 
            className={`admin-nav-btn ${activeTab === 'coupons' ? 'active' : ''}`}
            onClick={() => setActiveTab('coupons')}
          >
            <Tag size={18} />
            <span>Coupons & Offers</span>
            <span className="admin-nav-badge" style={{ backgroundColor: '#2563eb' }}>{coupons.length}</span>
          </button>
        </nav>

        {/* Sidebar Footer with Back to Storefront */}
        <div className="admin-sidebar-footer">
          <button 
            className="admin-back-storefront-btn"
            onClick={onSwitchToCustomerView}
            title="Return to customer delivery storefront"
          >
            <Store size={16} />
            <span>Back to Storefront</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace */}
      <div className="admin-main-wrapper">
        
        {/* Top Navbar */}
        <header className="admin-top-bar">
          <div className="admin-top-left">
            <div className="admin-page-title-box">
              <h1>{title}</h1>
              <p>{sub}</p>
            </div>
          </div>

          <div className="admin-top-right">
            {/* Live Status indicator */}
            <div className="admin-live-pulse">
              <span className="pulse-dot"></span>
              <span>Kitchens Online</span>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button 
              onClick={toggleTheme} 
              className="admin-icon-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Quick Switch to Storefront Button */}
            <button 
              className="storefront-admin-pill"
              onClick={onSwitchToCustomerView}
              title="Preview Customer App"
            >
              <Store size={14} className="admin-shield-icon" />
              <span>Customer View</span>
            </button>

            {/* Admin User Profile */}
            <div className="admin-user-profile-pill">
              <div className="admin-avatar">AD</div>
              <div className="admin-user-info">
                <span className="admin-user-name">Admin Officer</span>
                <span className="admin-user-role">Super Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Tab Content */}
        <main className="admin-page-content">
          {activeTab === 'dashboard' && (
            <AdminDashboard
              restaurants={restaurants}
              orders={orders}
              onNavigateTab={setActiveTab}
              onUpdateOrderStatus={onUpdateOrderStatus}
            />
          )}

          {activeTab === 'restaurants' && (
            <AdminRestaurants
              restaurants={restaurants}
              onAddRestaurant={onAddRestaurant}
              onUpdateRestaurant={onUpdateRestaurant}
              onDeleteRestaurant={onDeleteRestaurant}
              onNavigateToMenu={handleNavigateToMenu}
            />
          )}

          {activeTab === 'menu' && (
            <AdminMenu
              restaurants={restaurants}
              selectedRestaurantId={menuTargetRestaurantId}
              onSelectRestaurantId={setMenuTargetRestaurantId}
              onAddDish={onAddDish}
              onUpdateDish={onUpdateDish}
              onDeleteDish={onDeleteDish}
            />
          )}

          {activeTab === 'orders' && (
            <AdminOrders
              orders={orders}
              onUpdateOrderStatus={onUpdateOrderStatus}
              onSimulateNewOrder={onSimulateNewOrder}
            />
          )}

          {activeTab === 'coupons' && (
            <AdminCoupons
              coupons={coupons}
              onAddCoupon={onAddCoupon}
              onDeleteCoupon={onDeleteCoupon}
            />
          )}
        </main>

      </div>

    </div>
  );
}
