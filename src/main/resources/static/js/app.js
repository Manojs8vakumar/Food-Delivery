// General Application JS for Live For Food

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-emerald-600' : (type === 'error' ? 'bg-rose-600' : 'bg-gray-800');
  toast.className = `flex items-center gap-3 px-4 py-3 text-white text-sm font-medium rounded-xl shadow-xl transform transition-all duration-300 translate-y-4 opacity-0 ${bgClass}`;
  
  const icon = type === 'success' ? 
    `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>` : 
    `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Main Reactive Component for Live For Food
function foodHubApp() {
  return {
    currentMode: 'delivery', // 'delivery', 'dining', 'nightlife'
    selectedCategory: '',
    vegOnly: false,
    rating4Plus: false,
    fastDelivery: false,
    searchQuery: '',
    selectedCity: 'Bengaluru',
    cityDropdownHero: false,
    restaurants: [],
    loading: true,

    // Live search popup
    query: '',
    resultsOpen: false,
    searchRestaurants: [],
    searchDishes: [],

    async init() {
      // Listen to navbar city change
      window.addEventListener('city-changed', (e) => {
        this.selectedCity = e.detail;
      });

      // Load all restaurants
      try {
        const res = await fetch('/api/restaurants');
        this.restaurants = await res.json();
      } catch (e) {
        console.error('Error fetching restaurants', e);
      } finally {
        this.loading = false;
      }
    },

    setMode(mode) {
      this.currentMode = mode;
      this.selectedCategory = '';
    },

    toggleCategory(catName) {
      if (this.selectedCategory === catName) {
        this.selectedCategory = '';
      } else {
        this.selectedCategory = catName;
      }
    },

    clearAllFilters() {
      this.selectedCategory = '';
      this.vegOnly = false;
      this.rating4Plus = false;
      this.fastDelivery = false;
      this.searchQuery = '';
      this.query = '';
    },

    get filteredRestaurants() {
      return this.restaurants.filter(r => {
        // Mode filter
        const isDining = (r.dining !== undefined) ? r.dining : r.isDining;
        const isNightlife = (r.nightlife !== undefined) ? r.nightlife : r.isNightlife;
        const isDelivery = (r.delivery !== undefined) ? r.delivery : r.isDelivery;
        const isPureVeg = (r.pureVeg !== undefined) ? r.pureVeg : r.isPureVeg;

        if (this.currentMode === 'dining' && !isDining) return false;
        if (this.currentMode === 'nightlife' && !isNightlife) return false;
        if (this.currentMode === 'delivery' && !isDelivery) return false;

        // Veg filter
        if (this.vegOnly && !isPureVeg) return false;

        // Rating filter
        if (this.rating4Plus && (r.rating || 0) < 4.0) return false;

        // Fast delivery filter (< 25 min)
        if (this.fastDelivery && (r.deliveryTimeMin || 99) > 25) return false;

        // Category filter
        if (this.selectedCategory) {
          const cat = this.selectedCategory.toLowerCase();
          const cuisines = (r.cuisines || '').toLowerCase();
          const name = (r.name || '').toLowerCase();
          if (!cuisines.includes(cat) && !name.includes(cat)) return false;
        }

        // Search query filter
        if (this.searchQuery) {
          const q = this.searchQuery.toLowerCase();
          const name = (r.name || '').toLowerCase();
          const cuisines = (r.cuisines || '').toLowerCase();
          const area = (r.area || '').toLowerCase();
          if (!name.includes(q) && !cuisines.includes(q) && !area.includes(q)) return false;
        }

        return true;
      });
    },

    async fetchSuggestions() {
      this.searchQuery = this.query;
      if (!this.query || this.query.trim().length < 2) {
        this.resultsOpen = false;
        this.searchRestaurants = [];
        this.searchDishes = [];
        return;
      }
      try {
        const res = await fetch(`/api/search/suggestions?q=${encodeURIComponent(this.query.trim())}`);
        const data = await res.json();
        this.searchRestaurants = data.restaurants || [];
        this.searchDishes = data.dishes || [];
        this.resultsOpen = (this.searchRestaurants.length > 0 || this.searchDishes.length > 0);
      } catch (err) {
        console.error('Search error', err);
      }
    }
  };
}
