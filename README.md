# RasoiRush - Food Delivery Web Application 🍔🍕

> **"Live For Food"** - A modern, high-performance food discovery and delivery web application developed using **Java 21**, **Spring Boot**, **Thymeleaf**, **Tailwind CSS**, and **Alpine.js**, inspired by the Figma design.

---

## 🌟 Key Features

- **Atmospheric Hero Banner**: Dynamic city selector (*Bengaluru*) and dual search bar with real-time dish and restaurant autocomplete.
- **3 Discovery Modes**: 
  1. *Order Online* (Doorstep delivery with full menu ordering)
  2. *Dining Out* (Curated venues for dining experiences)
  3. *Nightlife & Clubs* (Bars, lounges, and late-night spots)
- **Dish Inspirations Carousel**: Quick-access category circles (*Biryani, Pizza, Burger, Thali, Rolls, South Indian, Desserts, Chinese*).
- **Curated Restaurant Pages**:
  - Filter by *Pure Veg*, *Rating 4.0+*, *Fast Delivery*.
  - Detailed menus grouped into sections (*Starters, Main Course, Breads, Desserts, Beverages*).
  - Dietary markers (*Veg green badge / Non-veg red triangle*) and bestseller tags.
- **Reactive Slide-Out Cart Drawer**:
  - `localStorage`-persisted cart state.
  - Live price calculation: item total, delivery fee, platform fee, 5% GST.
  - Coupon discount engine supporting `WELCOME50`, `RUSH100`, `FREEDEL`.
- **Checkout & Real-Time Tracking**:
  - Multi-step checkout with delivery address and payment modes (UPI, Cards, Cash on Delivery).
  - Live animated tracking stepper (*Order Placed -> Kitchen Preparing -> Out for Delivery -> Delivered*) with delivery partner contact card.
  - Past order archive at `/orders`.

---

## 🛠️ Tech Stack

- **Backend**: Java 21 LTS, Spring Boot 3/4, Spring MVC, Spring Data JPA, Hibernate 7
- **Database**: H2 In-Memory Database (`jdbc:h2:mem:fooddb`), H2 Web Console at `/h2-console`
- **Frontend**: Thymeleaf 3, Tailwind CSS 3, Alpine.js 3, Vanilla JS
- **Build Tool**: Apache Maven (`mvnw` / `mvnw.cmd`)

---

## 🚀 How to Run

### Option 1: One-Click Windows Script
Double-click [`run.bat`](run.bat) in the project folder.

### Option 2: Terminal / Command Prompt
```bash
.\mvnw.cmd spring-boot:run
```
Open **http://localhost:8080** in your browser.

### Option 3: In Eclipse IDE
1. Open Eclipse and go to **File -> Import... -> Maven -> Existing Maven Projects**.
2. Select `D:\Live For Food` as the Root Directory and click **Finish**.
3. Right-click [`DemoApplication.launch`](DemoApplication.launch) -> **Run As -> DemoApplication** (or right-click `DemoApplication.java` -> **Run As -> Java Application**).
