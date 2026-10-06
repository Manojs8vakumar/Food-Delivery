// Global Cart Store for RasoiRush Food Delivery

const CartStore = {
  items: [],
  restaurantName: '',
  restaurantId: null,
  couponCode: '',
  discountAmount: 0,

  init() {
    try {
      const saved = localStorage.getItem('rasoirush_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.items = parsed.items || [];
        this.restaurantName = parsed.restaurantName || '';
        this.restaurantId = parsed.restaurantId || null;
        this.couponCode = parsed.couponCode || '';
        this.discountAmount = parsed.discountAmount || 0;
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    }
    this.broadcast();
  },

  save() {
    try {
      localStorage.setItem('rasoirush_cart', JSON.stringify({
        items: this.items,
        restaurantName: this.restaurantName,
        restaurantId: this.restaurantId,
        couponCode: this.couponCode,
        discountAmount: this.discountAmount
      }));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
    this.broadcast();
  },

  broadcast() {
    window.dispatchEvent(new CustomEvent('cart-updated', {
      detail: {
        items: this.items,
        count: this.getTotalCount(),
        subtotal: this.getSubtotal(),
        deliveryFee: this.getDeliveryFee(),
        platformFee: this.getPlatformFee(),
        tax: this.getTax(),
        discountAmount: this.discountAmount,
        total: this.getTotal(),
        restaurantName: this.restaurantName
      }
    }));
  },

  addItem(item, restaurantName, restaurantId) {
    // If cart has items from another restaurant, ask or switch
    if (this.restaurantId && this.restaurantId !== restaurantId && this.items.length > 0) {
      if (!confirm(`Your cart already contains items from "${this.restaurantName}". Would you like to reset your cart to add items from "${restaurantName}"?`)) {
        return false;
      }
      this.clearCart();
    }

    this.restaurantName = restaurantName || this.restaurantName;
    this.restaurantId = restaurantId || this.restaurantId;

    const existingIndex = this.items.findIndex(i => i.id === item.id);
    if (existingIndex > -1) {
      this.items[existingIndex].quantity += 1;
    } else {
      this.items.push({
        id: item.id,
        name: item.name,
        price: parseFloat(item.price),
        quantity: 1,
        isVeg: item.isVeg,
        imageUrl: item.imageUrl || ''
      });
    }

    this.save();
    return true;
  },

  updateQuantity(id, delta) {
    const index = this.items.findIndex(i => i.id === id);
    if (index > -1) {
      this.items[index].quantity += delta;
      if (this.items[index].quantity <= 0) {
        this.items.splice(index, 1);
      }
    }
    if (this.items.length === 0) {
      this.restaurantName = '';
      this.restaurantId = null;
      this.couponCode = '';
      this.discountAmount = 0;
    }
    this.save();
  },

  getItemQuantity(id) {
    const item = this.items.find(i => i.id === id);
    return item ? item.quantity : 0;
  },

  getTotalCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getDeliveryFee() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 400 ? 0 : 35;
  },

  getPlatformFee() {
    return this.items.length > 0 ? 7 : 0;
  },

  getTax() {
    return Math.round(this.getSubtotal() * 0.05); // 5% GST
  },

  applyCoupon(code) {
    const clean = (code || '').trim().toUpperCase();
    const subtotal = this.getSubtotal();

    if (clean === 'WELCOME50' || clean === 'RUSH100') {
      if (subtotal < 199) {
        return { success: false, message: 'Minimum order amount for this coupon is ₹199.' };
      }
      this.couponCode = clean;
      this.discountAmount = Math.min(100, Math.round(subtotal * 0.5));
      this.save();
      return { success: true, message: `Coupon ${clean} applied! You saved ₹${this.discountAmount}` };
    } else if (clean === 'FREEDEL') {
      this.couponCode = clean;
      this.discountAmount = this.getDeliveryFee();
      this.save();
      return { success: true, message: `Free delivery coupon applied!` };
    } else {
      return { success: false, message: 'Invalid coupon code. Try WELCOME50 or RUSH100.' };
    }
  },

  removeCoupon() {
    this.couponCode = '';
    this.discountAmount = 0;
    this.save();
  },

  getTotal() {
    const sub = this.getSubtotal();
    if (sub === 0) return 0;
    const total = sub + this.getDeliveryFee() + this.getPlatformFee() + this.getTax() - this.discountAmount;
    return Math.max(0, Math.round(total));
  },

  clearCart() {
    this.items = [];
    this.restaurantName = '';
    this.restaurantId = null;
    this.couponCode = '';
    this.discountAmount = 0;
    this.save();
  }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  CartStore.init();
});
