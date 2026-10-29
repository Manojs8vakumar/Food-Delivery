import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Star, 
  MapPin, 
  X, 
  Check, 
  Sparkles,
  ExternalLink,
  Utensils
} from 'lucide-react';
import { locations } from '../data/mockData';

export default function AdminRestaurants({ 
  restaurants, 
  onAddRestaurant, 
  onUpdateRestaurant, 
  onDeleteRestaurant,
  onNavigateToMenu 
}) {
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRestaurant, setEditingRestaurant] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    cityId: 'delhi',
    serviceType: 'delivery',
    cuisines: 'Biryani, North Indian',
    costForOne: 250,
    deliveryTime: '25 mins',
    rating: 4.5,
    address: 'Connaught Place, New Delhi',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop&q=80',
    isVeg: false,
    isPromoted: false,
    discount: '20% OFF with code CRAVE50'
  });

  const openAddModal = () => {
    setEditingRestaurant(null);
    setFormData({
      name: '',
      cityId: 'delhi',
      serviceType: 'delivery',
      cuisines: 'North Indian, Mughlai',
      costForOne: 300,
      deliveryTime: '28 mins',
      rating: 4.5,
      address: 'Connaught Place, New Delhi',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop&q=80',
      isVeg: false,
      isPromoted: false,
      discount: '30% OFF up to ₹75'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (restaurant) => {
    setEditingRestaurant(restaurant);
    setFormData({
      name: restaurant.name,
      cityId: restaurant.cityId,
      serviceType: restaurant.serviceType || 'delivery',
      cuisines: restaurant.cuisines.join(', '),
      costForOne: restaurant.costForOne,
      deliveryTime: restaurant.deliveryTime,
      rating: restaurant.rating,
      address: restaurant.address,
      image: restaurant.image,
      isVeg: restaurant.isVeg,
      isPromoted: Boolean(restaurant.isPromoted),
      discount: restaurant.discount || ''
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const cuisineArray = formData.cuisines
      .split(',')
      .map(c => c.trim())
      .filter(Boolean);

    const restaurantPayload = {
      ...formData,
      cuisines: cuisineArray.length > 0 ? cuisineArray : ['Multi-Cuisine'],
      costForOne: Number(formData.costForOne) || 250,
      rating: Number(formData.rating) || 4.5,
      serviceTypes: formData.serviceType === 'nightlife' ? ['nightlife', 'dining'] :
                    formData.serviceType === 'dining' ? ['dining', 'delivery'] : ['delivery', 'dining']
    };

    if (editingRestaurant) {
      onUpdateRestaurant(editingRestaurant.id, restaurantPayload);
    } else {
      onAddRestaurant(restaurantPayload);
    }

    setIsModalOpen(false);
  };

  // Filter computation
  const filtered = restaurants.filter(r => {
    if (cityFilter !== 'all' && r.cityId !== cityFilter) return false;
    if (serviceFilter !== 'all') {
      const matchService = Array.isArray(r.serviceTypes) 
        ? r.serviceTypes.includes(serviceFilter)
        : r.serviceType === serviceFilter;
      if (!matchService) return false;
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      const matchName = r.name.toLowerCase().includes(q);
      const matchAddr = r.address.toLowerCase().includes(q);
      const matchCuisine = r.cuisines.some(c => c.toLowerCase().includes(q));
      if (!matchName && !matchAddr && !matchCuisine) return false;
    }
    return true;
  });

  return (
    <div className="admin-restaurants-view animate-fade-in">
      
      {/* Toolbar */}
      <div className="admin-toolbar-row">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Search box */}
          <div className="admin-search-input-box">
            <Search size={16} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Search restaurant or cuisine..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ background: 'transparent', color: 'var(--text-muted)' }}>
                <X size={14} />
              </button>
            )}
          </div>

          {/* City Filter */}
          <select 
            className="admin-select-input"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          >
            {locations.map(loc => (
              <option key={loc.id} value={loc.id}>
                {loc.name.split(',')[0]}
              </option>
            ))}
          </select>

          {/* Service Type Filter */}
          <select 
            className="admin-select-input"
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
          >
            <option value="all">All Service Types</option>
            <option value="delivery">Delivery</option>
            <option value="dining">Dining Out</option>
            <option value="nightlife">Nightlife</option>
          </select>
        </div>

        <button className="admin-primary-btn" onClick={openAddModal}>
          <Plus size={16} />
          <span>Add Restaurant</span>
        </button>
      </div>

      {/* Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Restaurant</th>
              <th>City</th>
              <th>Cuisines</th>
              <th>Cost for One</th>
              <th>Rating</th>
              <th>Menu Items</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id}>
                <td>
                  <strong>#{r.id}</strong>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img 
                      src={r.image} 
                      alt={r.name} 
                      style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover' }} 
                    />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{r.address}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span style={{ textTransform: 'capitalize', fontWeight: 600 }}>{r.cityId}</span>
                </td>
                <td>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                    {r.cuisines.slice(0, 3).join(', ')}
                  </div>
                </td>
                <td>
                  <strong>₹{r.costForOne}</strong>
                </td>
                <td>
                  <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: 3, 
                    backgroundColor: 'var(--zomato-green)', 
                    color: '#fff', 
                    fontWeight: 700, 
                    fontSize: 11, 
                    padding: '2px 6px', 
                    borderRadius: 4 
                  }}>
                    <span>{r.rating}</span>
                    <Star size={10} fill="currentColor" />
                  </div>
                </td>
                <td>
                  <button 
                    onClick={() => onNavigateToMenu(r.id)}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: 4, 
                      fontSize: 12, 
                      fontWeight: 600, 
                      color: 'var(--zomato-red)',
                      background: 'var(--zomato-red-light)',
                      padding: '4px 8px',
                      borderRadius: 4
                    }}
                    title="Click to manage menu dishes"
                  >
                    <Utensils size={12} />
                    <span>{r.menu ? r.menu.length : 0} Dishes</span>
                  </button>
                </td>
                <td>
                  {r.isPromoted ? (
                    <span style={{ 
                      fontSize: 10, 
                      fontWeight: 700, 
                      color: '#d97706', 
                      backgroundColor: '#fef3c7', 
                      padding: '2px 6px', 
                      borderRadius: 4 
                    }}>
                      PROMOTED
                    </span>
                  ) : (
                    <span style={{ 
                      fontSize: 10, 
                      fontWeight: 700, 
                      color: 'var(--zomato-green)', 
                      backgroundColor: 'var(--zomato-green-light)', 
                      padding: '2px 6px', 
                      borderRadius: 4 
                    }}>
                      ACTIVE
                    </span>
                  )}
                </td>
                <td>
                  <div className="admin-action-btn-group">
                    <button 
                      className="admin-icon-btn edit" 
                      onClick={() => openEditModal(r)}
                      title="Edit restaurant details"
                    >
                      <Edit size={14} />
                    </button>
                    <button 
                      className="admin-icon-btn delete" 
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete "${r.name}"?`)) {
                          onDeleteRestaurant(r.id);
                        }
                      }}
                      title="Delete restaurant"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 14, fontSize: 12, color: 'var(--text-muted)' }}>
        Showing {filtered.length} of {restaurants.length} total restaurants
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>{editingRestaurant ? `Edit "${editingRestaurant.name}"` : 'Add New Restaurant'}</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', color: 'var(--text-muted)' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="admin-form-group">
                <label>Restaurant Name *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Royal Nawabi Kitchen"
                  required
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>City Location *</label>
                  <select 
                    value={formData.cityId}
                    onChange={(e) => setFormData({ ...formData, cityId: e.target.value })}
                  >
                    <option value="delhi">Delhi NCR</option>
                    <option value="bangalore">Bengaluru</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="pune">Pune</option>
                    <option value="kolkata">Kolkata</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Primary Service Type</label>
                  <select 
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="delivery">Delivery</option>
                    <option value="dining">Dining Out</option>
                    <option value="nightlife">Nightlife</option>
                  </select>
                </div>
              </div>

              <div className="admin-form-group">
                <label>Cuisines (comma separated)</label>
                <input 
                  type="text" 
                  value={formData.cuisines}
                  onChange={(e) => setFormData({ ...formData, cuisines: e.target.value })}
                  placeholder="e.g. Biryani, Mughlai, North Indian"
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Cost for One (₹)</label>
                  <input 
                    type="number" 
                    value={formData.costForOne}
                    onChange={(e) => setFormData({ ...formData, costForOne: e.target.value })}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label>Delivery Time</label>
                  <input 
                    type="text" 
                    value={formData.deliveryTime}
                    onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                    placeholder="e.g. 25 mins"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Street Address</label>
                <input 
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Full locality and street"
                />
              </div>

              <div className="admin-form-group">
                <label>Image URL</label>
                <input 
                  type="url" 
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label>Discount / Promo Text</label>
                <input 
                  type="text" 
                  value={formData.discount}
                  onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                  placeholder="e.g. 50% OFF up to ₹100"
                />
              </div>

              <div style={{ display: 'flex', gap: 20, margin: '14px 0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.isVeg}
                    onChange={(e) => setFormData({ ...formData, isVeg: e.target.checked })}
                  />
                  <span>Pure Vegetarian</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.isPromoted}
                    onChange={(e) => setFormData({ ...formData, isPromoted: e.target.checked })}
                  />
                  <span>Promoted Listing</span>
                </label>
              </div>

              <div className="admin-modal-actions">
                <button 
                  type="button" 
                  className="admin-cancel-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="admin-primary-btn">
                  {editingRestaurant ? 'Save Changes' : 'Create Restaurant'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
