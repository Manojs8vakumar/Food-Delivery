import React from 'react';
import { 
  DollarSign, 
  ShoppingBag, 
  Utensils, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
  Star,
  MapPin
} from 'lucide-react';

export default function AdminDashboard({ 
  restaurants, 
  orders, 
  onNavigateTab,
  onUpdateOrderStatus 
}) {
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0) + 142850; // include historical revenue
  const totalOrdersCount = orders.length + 384;
  const activeOrdersCount = orders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;
  const totalDishesCount = restaurants.reduce((sum, r) => sum + (r.menu ? r.menu.length : 0), 0);

  // Top 5 restaurants by rating & volume
  const topRestaurants = [...restaurants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return <span className="admin-status-badge confirmed">Confirmed</span>;
      case 'preparing':
        return <span className="admin-status-badge preparing">Preparing</span>;
      case 'out_for_delivery':
        return <span className="admin-status-badge out_for_delivery">Out for Delivery</span>;
      case 'delivered':
        return <span className="admin-status-badge delivered">Delivered</span>;
      default:
        return <span className="admin-status-badge cancelled">Cancelled</span>;
    }
  };

  return (
    <div className="admin-dashboard-view animate-fade-in">
      
      {/* KPI Cards Row */}
      <div className="admin-kpi-grid">
        <div className="admin-kpi-card">
          <div className="kpi-info-col">
            <h3>Total Revenue</h3>
            <div className="kpi-main-number">₹{totalRevenue.toLocaleString('en-IN')}</div>
            <div className="kpi-trend positive">
              <TrendingUp size={14} />
              <span>+18.4% from last week</span>
            </div>
          </div>
          <div className="kpi-icon-bubble green">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="admin-kpi-card">
          <div className="kpi-info-col">
            <h3>Total Orders</h3>
            <div className="kpi-main-number">{totalOrdersCount}</div>
            <div className="kpi-trend positive">
              <TrendingUp size={14} />
              <span>{activeOrdersCount} live right now</span>
            </div>
          </div>
          <div className="kpi-icon-bubble red">
            <ShoppingBag size={24} />
          </div>
        </div>

        <div className="admin-kpi-card">
          <div className="kpi-info-col">
            <h3>Active Restaurants</h3>
            <div className="kpi-main-number">{restaurants.length}</div>
            <div className="kpi-trend neutral">
              <MapPin size={14} />
              <span>Across 6 top cities</span>
            </div>
          </div>
          <div className="kpi-icon-bubble blue">
            <Utensils size={24} />
          </div>
        </div>

        <div className="admin-kpi-card">
          <div className="kpi-info-col">
            <h3>Menu Dishes Listed</h3>
            <div className="kpi-main-number">{totalDishesCount}</div>
            <div className="kpi-trend positive">
              <Star size={14} />
              <span>Avg rating 4.6 ★</span>
            </div>
          </div>
          <div className="kpi-icon-bubble purple">
            <Users size={24} />
          </div>
        </div>
      </div>

      {/* Main 2-Column Split */}
      <div className="admin-dashboard-two-col">
        
        {/* Left: Recent Orders Table */}
        <div className="admin-card-panel">
          <div className="admin-panel-header">
            <div>
              <h2>Recent Orders Dispatch</h2>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                Live orders received from customer web applications
              </p>
            </div>
            <button 
              className="admin-primary-btn"
              onClick={() => onNavigateTab('orders')}
            >
              <span>Manage All ({orders.length})</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Restaurant</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Quick Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 6).map((order) => (
                  <tr key={order.id}>
                    <td>
                      <strong style={{ color: 'var(--zomato-red)' }}>#{order.id}</strong>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{order.time}</div>
                    </td>
                    <td>
                      <strong>{order.customerName}</strong>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{order.phone}</div>
                    </td>
                    <td>
                      <div>{order.restaurantName}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{order.items?.length || 1} items</div>
                    </td>
                    <td>
                      <strong>₹{order.total}</strong>
                    </td>
                    <td>{getStatusBadge(order.status)}</td>
                    <td>
                      <select 
                        className="admin-select-input"
                        value={order.status}
                        onChange={(e) => onUpdateOrderStatus(order.id, e.target.value)}
                        style={{ padding: '4px 8px', fontSize: 12 }}
                      >
                        <option value="confirmed">Confirmed</option>
                        <option value="preparing">Preparing</option>
                        <option value="out_for_delivery">Out for Delivery</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Top Performing Restaurants */}
        <div className="admin-card-panel">
          <div className="admin-panel-header">
            <h2>Top Rated Kitchens</h2>
            <button 
              className="admin-cancel-btn"
              onClick={() => onNavigateTab('restaurants')}
            >
              View All
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {topRestaurants.map((r, idx) => (
              <div 
                key={r.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 12, 
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div 
                  style={{ 
                    width: 24, 
                    fontWeight: 800, 
                    fontSize: 14, 
                    color: idx < 3 ? 'var(--zomato-red)' : 'var(--text-muted)' 
                  }}
                >
                  #{idx + 1}
                </div>
                <img 
                  src={r.image} 
                  alt={r.name} 
                  style={{ width: 42, height: 42, borderRadius: 8, objectFit: 'cover' }} 
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                    {r.cuisines[0]} • {r.address.split(',')[0]}
                  </div>
                </div>
                <div 
                  style={{ 
                    backgroundColor: 'var(--zomato-green)', 
                    color: '#fff', 
                    fontWeight: 700, 
                    fontSize: 11, 
                    padding: '2px 6px', 
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3
                  }}
                >
                  <span>{r.rating}</span>
                  <Star size={10} fill="currentColor" />
                </div>
              </div>
            ))}
          </div>

          {/* Quick System Info */}
          <div style={{ marginTop: 24, padding: 16, backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>
              <ShieldCheck size={16} color="var(--zomato-green)" />
              <span>Platform Health: Operational</span>
            </div>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>
              All 6 city delivery zones running at 99.8% on-time SLA. Payment gateway connected with 0 failed settlements.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
