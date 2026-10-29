import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Star, 
  X, 
  Check, 
  Utensils, 
  Filter 
} from 'lucide-react';

export default function AdminMenu({ 
  restaurants, 
  selectedRestaurantId, 
  onSelectRestaurantId,
  onAddDish,
  onUpdateDish,
  onDeleteDish
}) {
  const [selectedRestId, setSelectedRestId] = useState(selectedRestaurantId || (restaurants[0]?.id || 1));
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [vegFilter, setVegFilter] = useState('all');

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDish, setEditingDish] = useState(null);

  // Form State
  const [dishForm, setDishForm] = useState({
    name: '',
    category: 'Biryani',
    price: 250,
    rating: 4.6,
    isVeg: false,
    isBestseller: false,
    description: '',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80'
  });

  const activeRestaurant = restaurants.find(r => r.id === Number(selectedRestId)) || restaurants[0];
  const menuItems = activeRestaurant ? (activeRestaurant.menu || []) : [];

  const categories = ['All', ...new Set(menuItems.map(m => m.category))];

  const openAddDish = () => {
    setEditingDish(null);
    setDishForm({
      name: '',
      category: categories[1] || 'Main Course',
      price: 220,
      rating: 4.7,
      isVeg: activeRestaurant?.isVeg || false,
      isBestseller: false,
      description: 'Prepared fresh with chef signature herbs and aromatic spices.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=80'
    });
    setIsModalOpen(true);
  };

  const openEditDish = (dish) => {
    setEditingDish(dish);
    setDishForm({
      name: dish.name,
      category: dish.category,
      price: dish.price,
      rating: dish.rating || 4.5,
      isVeg: dish.isVeg,
      isBestseller: Boolean(dish.isBestseller),
      description: dish.description || '',
      image: dish.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=80'
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!dishForm.name.trim()) return;

    const payload = {
      ...dishForm,
      price: Number(dishForm.price) || 199,
      rating: Number(dishForm.rating) || 4.5,
      votes: editingDish?.votes || 120
    };

    if (editingDish) {
      onUpdateDish(activeRestaurant.id, editingDish.id, payload);
    } else {
      onAddDish(activeRestaurant.id, payload);
    }

    setIsModalOpen(false);
  };

  // Filter computation
  const filteredDishes = menuItems.filter(item => {
    if (categoryFilter !== 'All' && item.category !== categoryFilter) return false;
    if (vegFilter === 'veg' && !item.isVeg) return false;
    if (vegFilter === 'nonveg' && item.isVeg) return false;
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchDesc = item.description && item.description.toLowerCase().includes(q);
      if (!matchName && !matchCat && !matchDesc) return false;
    }
    return true;
  });

  return (
    <div className="admin-menu-view animate-fade-in">
      
      {/* Restaurant Selector Header */}
      <div className="admin-card-panel" style={{ marginBottom: 24, padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {activeRestaurant && (
              <img 
                src={activeRestaurant.image} 
                alt={activeRestaurant.name}
                style={{ width: 56, height: 56, borderRadius: 10, objectFit: 'cover' }} 
              />
            )}
            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Select Active Restaurant to Manage Menu
              </label>
              <select 
                className="admin-select-input"
                value={selectedRestId}
                onChange={(e) => {
                  setSelectedRestId(e.target.value);
                  if (onSelectRestaurantId) onSelectRestaurantId(Number(e.target.value));
                }}
                style={{ fontSize: 15, fontWeight: 700, marginTop: 4, minWidth: 280 }}
              >
                {restaurants.map(r => (
                  <option key={r.id} value={r.id}>
                    {r.name} ({r.menu?.length || 0} dishes) - {r.cityId.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button className="admin-primary-btn" onClick={openAddDish}>
              <Plus size={16} />
              <span>Add Dish to Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="admin-toolbar-row">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="admin-search-input-box">
            <Search size={16} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Search dish name or ingredient..." 
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
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select 
            className="admin-select-input"
            value={vegFilter}
            onChange={(e) => setVegFilter(e.target.value)}
          >
            <option value="all">All Diets (Veg & Non-Veg)</option>
            <option value="veg">Pure Veg Only</option>
            <option value="nonveg">Non-Veg Only</option>
          </select>
        </div>

        <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>
          {filteredDishes.length} dishes found
        </div>
      </div>

      {/* Menu Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Dish</th>
              <th>Category</th>
              <th>Type</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDishes.map((dish) => (
              <tr key={dish.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover' }} 
                    />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{dish.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', maxWidth: 320, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {dish.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span style={{ 
                    backgroundColor: 'var(--bg-tag)', 
                    padding: '3px 8px', 
                    borderRadius: 4, 
                    fontSize: 12, 
                    fontWeight: 600 
                  }}>
                    {dish.category}
                  </span>
                </td>
                <td>
                  {dish.isVeg ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: '#2e7d32' }}>
                      <span style={{ width: 10, height: 10, borderRadius: 2, border: '1.5px solid #2e7d32', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#2e7d32' }}></span>
                      </span>
                      <span>Veg</span>
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: '#e23744' }}>
                      <span style={{ width: 10, height: 10, borderRadius: 2, border: '1.5px solid #e23744', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderBottom: '5px solid #e23744' }}></span>
                      </span>
                      <span>Non-Veg</span>
                    </span>
                  )}
                </td>
                <td>
                  <strong style={{ fontSize: 14 }}>₹{dish.price}</strong>
                </td>
                <td>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontWeight: 700, fontSize: 12, color: 'var(--zomato-green)' }}>
                    <span>★ {dish.rating || 4.5}</span>
                  </div>
                </td>
                <td>
                  {dish.isBestseller && (
                    <span style={{ 
                      fontSize: 10, 
                      fontWeight: 700, 
                      color: '#b45309', 
                      backgroundColor: '#fef3c7', 
                      padding: '2px 6px', 
                      borderRadius: 4 
                    }}>
                      BESTSELLER
                    </span>
                  )}
                </td>
                <td>
                  <div className="admin-action-btn-group">
                    <button 
                      className="admin-icon-btn edit" 
                      onClick={() => openEditDish(dish)}
                      title="Edit dish"
                    >
                      <Edit size={14} />
                    </button>
                    <button 
                      className="admin-icon-btn delete" 
                      onClick={() => {
                        if (window.confirm(`Delete dish "${dish.name}" from ${activeRestaurant.name}?`)) {
                          onDeleteDish(activeRestaurant.id, dish.id);
                        }
                      }}
                      title="Delete dish"
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

      {/* Add / Edit Dish Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="admin-modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>{editingDish ? `Edit "${editingDish.name}"` : `Add Dish to ${activeRestaurant.name}`}</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', color: 'var(--text-muted)' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="admin-form-group">
                <label>Dish Name *</label>
                <input 
                  type="text" 
                  value={dishForm.name}
                  onChange={(e) => setDishForm({ ...dishForm, name: e.target.value })}
                  placeholder="e.g. Charcoal Smoked Butter Chicken"
                  required
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Category *</label>
                  <input 
                    type="text" 
                    value={dishForm.category}
                    onChange={(e) => setDishForm({ ...dishForm, category: e.target.value })}
                    placeholder="e.g. Starters, Main Course, Biryani"
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label>Price (₹) *</label>
                  <input 
                    type="number" 
                    value={dishForm.price}
                    onChange={(e) => setDishForm({ ...dishForm, price: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Description</label>
                <textarea 
                  rows="3"
                  value={dishForm.description}
                  onChange={(e) => setDishForm({ ...dishForm, description: e.target.value })}
                  placeholder="Brief tasty description of ingredients and preparation..."
                ></textarea>
              </div>

              <div className="admin-form-group">
                <label>Photo URL</label>
                <input 
                  type="url" 
                  value={dishForm.image}
                  onChange={(e) => setDishForm({ ...dishForm, image: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: 20, margin: '14px 0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={dishForm.isVeg}
                    onChange={(e) => setDishForm({ ...dishForm, isVeg: e.target.checked })}
                  />
                  <span>Pure Vegetarian</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={dishForm.isBestseller}
                    onChange={(e) => setDishForm({ ...dishForm, isBestseller: e.target.checked })}
                  />
                  <span>Mark as Bestseller</span>
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
                  {editingDish ? 'Save Dish' : 'Add to Menu'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
