import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  MapPin, 
  Phone, 
  Bike, 
  ChefHat, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Plus, 
  Eye,
  ShoppingBag
} from 'lucide-react';

export default function AdminOrders({ 
  orders, 
  onUpdateOrderStatus, 
  onSimulateNewOrder 
}) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return <span className="admin-status-badge confirmed">Order Confirmed</span>;
      case 'preparing':
        return <span className="admin-status-badge preparing">Kitchen Preparing</span>;
      case 'out_for_delivery':
        return <span className="admin-status-badge out_for_delivery">Out for Delivery</span>;
      case 'delivered':
        return <span className="admin-status-badge delivered">Delivered</span>;
      default:
        return <span className="admin-status-badge cancelled">Cancelled</span>;
    }
  };

  const filteredOrders = orders.filter(o => {
    if (statusFilter === 'active') {
      if (o.status === 'delivered' || o.status === 'cancelled') return false;
    } else if (statusFilter !== 'all' && o.status !== statusFilter) {
      return false;
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      const matchId = String(o.id).toLowerCase().includes(q);
      const matchName = o.customerName.toLowerCase().includes(q);
      const matchRest = o.restaurantName.toLowerCase().includes(q);
      const matchPhone = o.phone && o.phone.includes(q);
      if (!matchId && !matchName && !matchRest && !matchPhone) return false;
    }
    return true;
  });

  return (
    <div className="admin-orders-view animate-fade-in">
      
      {/* Top action toolbar */}
      <div className="admin-toolbar-row">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="admin-search-input-box">
            <Search size={16} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Search by Order ID, customer, restaurant..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ background: 'transparent', color: 'var(--text-muted)' }}>
                <X size={14} />
              </button>
            )}
          </div>

          <select 
            className="admin-select-input"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Orders Statuses</option>
            <option value="active">Active Orders Live</option>
            <option value="confirmed">Confirmed</option>
            <option value="preparing">Preparing</option>
            <option value="out_for_delivery">Out for Delivery</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <button className="admin-primary-btn" onClick={onSimulateNewOrder}>
          <Plus size={16} />
          <span>Simulate Incoming Order</span>
        </button>
      </div>

      {/* Orders Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Placed At</th>
              <th>Customer Details</th>
              <th>Restaurant</th>
              <th>Items Summary</th>
              <th>Total Bill</th>
              <th>Status</th>
              <th>Live Status Control</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((o) => (
              <tr key={o.id}>
                <td>
                  <strong style={{ color: 'var(--zomato-red)', fontSize: 14 }}>#{o.id}</strong>
                </td>
                <td>
                  <div style={{ fontSize: 12 }}>{o.time}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>Today</div>
                </td>
                <td>
                  <div style={{ fontWeight: 700 }}>{o.customerName}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{o.phone}</div>
                </td>
                <td>
                  <div style={{ fontWeight: 600 }}>{o.restaurantName}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{o.address?.split(',')[0]}</div>
                </td>
                <td>
                  <div style={{ fontSize: 12 }}>
                    {(o.items || []).map(i => `${i.quantity}x ${i.name}`).slice(0, 2).join(', ')}
                    {(o.items || []).length > 2 && ` +${o.items.length - 2} more`}
                  </div>
                </td>
                <td>
                  <strong style={{ fontSize: 14 }}>₹{o.total}</strong>
                </td>
                <td>{getStatusBadge(o.status)}</td>
                <td>
                  <select 
                    className="admin-select-input"
                    value={o.status}
                    onChange={(e) => onUpdateOrderStatus(o.id, e.target.value)}
                    style={{ 
                      padding: '4px 8px', 
                      fontSize: 12, 
                      fontWeight: 700,
                      borderColor: o.status === 'delivered' ? 'var(--zomato-green)' : 'var(--border-color)' 
                    }}
                  >
                    <option value="confirmed">1. Confirmed</option>
                    <option value="preparing">2. Preparing</option>
                    <option value="out_for_delivery">3. Out for Delivery</option>
                    <option value="delivered">4. Delivered</option>
                    <option value="cancelled">5. Cancelled</option>
                  </select>
                </td>
                <td>
                  <button 
                    className="admin-icon-btn"
                    onClick={() => setSelectedOrder(o)}
                    title="View full order details"
                  >
                    <Eye size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 14, fontSize: 12, color: 'var(--text-muted)' }}>
        Showing {filteredOrders.length} orders
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="admin-modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <div>
                <h2>Order #{selectedOrder.id} Details</h2>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  Placed on {selectedOrder.time}
                </span>
              </div>
              <button onClick={() => setSelectedOrder(null)} style={{ background: 'transparent', color: 'var(--text-muted)' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Customer and restaurant card */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ padding: 14, backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Customer Info
                  </div>
                  <div style={{ fontWeight: 700, marginTop: 4 }}>{selectedOrder.customerName}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{selectedOrder.phone}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
                    {selectedOrder.address || 'Doorstep delivery specified'}
                  </div>
                </div>

                <div style={{ padding: 14, backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Kitchen & Restaurant
                  </div>
                  <div style={{ fontWeight: 700, marginTop: 4 }}>{selectedOrder.restaurantName}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>
                    Current Status: {getStatusBadge(selectedOrder.status)}
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Dishes Ordered</h4>
                <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  {(selectedOrder.items || []).map((item, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        padding: '10px 14px',
                        borderBottom: idx < selectedOrder.items.length - 1 ? '1px solid var(--border-color)' : 'none',
                        backgroundColor: 'var(--bg-surface)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ 
                          width: 24, 
                          height: 24, 
                          borderRadius: 4, 
                          backgroundColor: 'var(--bg-tag)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontSize: 12,
                          fontWeight: 700 
                        }}>
                          {item.quantity}x
                        </span>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 13 }}>{item.name}</div>
                          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>₹{item.price} each</div>
                        </div>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>
                        ₹{(item.price || 0) * (item.quantity || 1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Summary */}
              <div style={{ padding: 14, backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700 }}>Total Paid by Customer</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--zomato-red)' }}>
                  ₹{selectedOrder.total}
                </span>
              </div>
            </div>

            <div className="admin-modal-actions">
              <button className="admin-cancel-btn" onClick={() => setSelectedOrder(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
