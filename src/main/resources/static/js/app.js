// General Application JS for RasoiRush

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

// Live Search component logic for Alpine.js
function liveSearchComponent() {
  return {
    query: '',
    resultsOpen: false,
    restaurants: [],
    dishes: [],
    loading: false,

    async fetchSuggestions() {
      if (!this.query || this.query.trim().length < 2) {
        this.resultsOpen = false;
        this.restaurants = [];
        this.dishes = [];
        return;
      }
      this.loading = true;
      try {
        const res = await fetch(`/api/search/suggestions?q=${encodeURIComponent(this.query.trim())}`);
        const data = await res.json();
        this.restaurants = data.restaurants || [];
        this.dishes = data.dishes || [];
        this.resultsOpen = (this.restaurants.length > 0 || this.dishes.length > 0);
      } catch (err) {
        console.error('Search error', err);
      } finally {
        this.loading = false;
      }
    },

    selectResult(url) {
      window.location.href = url;
    }
  };
}
