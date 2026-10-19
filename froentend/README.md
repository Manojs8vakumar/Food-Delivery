# Food Delivery Frontend (Zomato Clone)

A modern, responsive, and feature-packed frontend for a food delivery platform inspired by **Zomato**, built using **HTML5, CSS3, and React 18**. Includes complete **Dark Mode** and **Light Mode** support with live state persistence.

---

## 🌟 Key Features

### 1. 🌓 Dark & Light Mode
- Signature Zomato styling in both Light mode (clean crimson and white) and Dark mode (deep OLED dark `#121214` and `#1c1c22`).
- Seamless toggle switch in the navbar with animated Sun & Moon icons.
- Automatic theme persistence via `localStorage`.

### 2. 📍 Location & Search Bar
- Dual search interface:
  - **Location selector**: Choose from major cities and localities (Connaught Place, Indiranagar, Bandra West, Jubilee Hills, etc.).
  - **Live Search**: Instant search matching restaurant names, cuisines, and dish items.

### 3. 🛵 Signature Zomato Navigation Tabs
- **Delivery** (scooter icon with signature red highlight)
- **Dining Out** (fork & knife icon)
- **Nightlife** (cocktail icon)

### 4. 🍛 Inspiration for Your First Order
- Circular dish categories (Biryani, Pizza, Burger, North Indian, Rolls, Chinese, Chicken, Desserts, Dosa, Ice Cream) with smooth carousel scrolling and instant filtering.

### 5. 🏷️ Top Brands
- Domino's Pizza, KFC, McDonald's, Burger King, Haldiram's, Subway, Behrouz Biryani, Chaayos with delivery times.

### 6. ⚡ Filter & Sort Bar
- **Filters Count Badge**
- **Rating 4.0+**
- **Pure Veg** filter with green badge
- **Fast Delivery (<30 mins)**
- **Great Offers**
- **Sort By**: Relevance, Rating: High to Low, Delivery Time, Cost: Low to High, Cost: High to Low.

### 7. 🏪 Restaurant Cards & Menu Modal
- Discount tags (e.g. `50% OFF up to ₹100`), delivery time badges, safety verified badges, and **Zomato Gold** offer ribbons.
- Favorite heart toggle button.
- Detailed restaurant menu modal with dish descriptions, high-resolution imagery, bestseller tags, Veg/Non-Veg indicators, and interactive `[-] [count] [+]` quantity steppers.

### 8. 🛒 Interactive Cart Drawer & Promo Codes
- Slide-over cart drawer with live calculations.
- Promo codes with instant discount application:
  - `ZOMATO50`: 50% OFF up to ₹100
  - `TASTY20`: 20% OFF up to ₹150
  - `FREEDEL`: Free delivery
  - `GOLD10`: Extra 10% Gold discount
- Delivery partner tip selection (₹20, ₹30, ₹50).
- Transparent bill breakdown (Item total, Delivery fee, Platform fee, GST taxes, Discount).

### 9. 🚚 Live Order Simulation & Tracking Modal
- Multi-step live tracking:
  1. Order Confirmed
  2. Food is Being Prepared
  3. Out for Delivery (with delivery hero details, bike number, and call button)
  4. Order Delivered
- Interactive progress bar and next-step simulator.

### 10. 👤 Authentication Modal
- Phone number OTP login / signup simulation.
- One-click **Demo Login** for testing.

---

## 📁 Project Structure

```
Food Delivery/
└── froentend/
    ├── index.html              # HTML5 entry template with Plus Jakarta Sans fonts
    ├── package.json            # React 18, Vite, Lucide React dependencies
    ├── vite.config.js          # Vite build and dev configuration
    ├── run-dev.bat             # 1-Click launcher script for Windows
    ├── dist/                   # Production-ready compiled build
    └── src/
        ├── main.jsx            # React root mount
        ├── App.jsx             # Main state coordinator (theme, cart, filters, modal)
        ├── App.css             # Main styling, layout, modals, animations & responsive queries
        ├── index.css           # Design tokens, CSS variables (light/dark)
        ├── data/
        │   └── mockData.js     # Comprehensive restaurant, dishes, coupons and location data
        └── components/
            ├── Navbar.jsx              # Header with logo, dual search, theme toggle & auth
            ├── CategoryTabs.jsx        # Delivery / Dining Out / Nightlife switcher
            ├── FoodInspiration.jsx     # First order inspiration carousel
            ├── TopBrands.jsx           # Top restaurant chains carousel
            ├── FilterBar.jsx           # Filter pills and sort dropdown
            ├── RestaurantCard.jsx      # Restaurant card with rating & badges
            ├── RestaurantList.jsx      # Grid of restaurants with empty state
            ├── RestaurantMenuModal.jsx # Detailed menu modal with item steppers
            ├── CartDrawer.jsx          # Slide-out cart with promos & bill summary
            ├── OrderTrackingModal.jsx  # Live order simulation modal
            ├── AuthModal.jsx           # Login/Signup & Demo authentication
            ├── Footer.jsx              # Zomato footer with links & app badges
            └── Toast.jsx               # Feedback notifications
```

---

## 🚀 How to Run

### Option 1: Double-click Launcher
Double-click `run-dev.bat` inside the `froentend` folder.

### Option 2: Using Terminal
```bash
cd froentend
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed).

### Option 3: Production Build
```bash
npm run build
```
The compiled files are located in `froentend/dist/`.
