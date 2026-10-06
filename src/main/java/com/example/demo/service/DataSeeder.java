package com.example.demo.service;

import com.example.demo.model.Category;
import com.example.demo.model.MenuItem;
import com.example.demo.model.Restaurant;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.RestaurantRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final RestaurantRepository restaurantRepository;

    public DataSeeder(CategoryRepository categoryRepository, RestaurantRepository restaurantRepository) {
        this.categoryRepository = categoryRepository;
        this.restaurantRepository = restaurantRepository;
    }

    @Override
    public void run(String... args) {
        if (categoryRepository.count() > 0) {
            return; // Already seeded
        }

        // Seed Categories matching the Figma design circle carousel
        List<Category> categories = Arrays.asList(
                new Category("Biryani", "biryani", "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80", 28),
                new Category("Pizza", "pizza", "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80", 34),
                new Category("Burger", "burger", "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80", 22),
                new Category("Thali", "thali", "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=300&q=80", 15),
                new Category("North Indian", "north-indian", "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&q=80", 40),
                new Category("Rolls", "rolls", "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&q=80", 19),
                new Category("South Indian", "south-indian", "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&q=80", 25),
                new Category("Desserts", "desserts", "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&q=80", 30),
                new Category("Chinese", "chinese", "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&q=80", 26)
        );
        categoryRepository.saveAll(categories);

        // Seed Restaurants
        // 1. Meghana Foods
        Restaurant r1 = new Restaurant(
                "Meghana Foods",
                "meghana-foods",
                "Bengaluru's Most Beloved Biryani Destination",
                "Biryani, Andhra, North Indian, Seafood",
                4.5,
                "15.8k+ ratings",
                25,
                2.3,
                BigDecimal.valueOf(500),
                "544, 100 Feet Rd, Near CMH Road, Indiranagar",
                "Indiranagar",
                "Bengaluru",
                "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
                "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1400&q=80",
                "50% OFF up to ₹100",
                false,
                true,
                true,
                false
        );

        r1.addMenuItem(new MenuItem("Meghana Special Chicken Biryani", "Fragrant dum basmati rice layered with spicy boneless chicken pieces and aromatic spices.", BigDecimal.valueOf(340), false, true, 4.8, "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", "Biryani & Rice", r1));
        r1.addMenuItem(new MenuItem("Paneer Butter Masala", "Cottage cheese cubes simmered in a rich velvety tomato, butter, and cashew gravy.", BigDecimal.valueOf(280), true, false, 4.6, "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80", "Main Course", r1));
        r1.addMenuItem(new MenuItem("Chicken 65", "Crispy deep-fried chicken tossed in fiery red Andhra spices and fresh curry leaves.", BigDecimal.valueOf(290), false, true, 4.7, "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&q=80", "Starters", r1));
        r1.addMenuItem(new MenuItem("Butter Garlic Naan", "Tandoori flatbread brushed generously with salted butter and roasted garlic flakes.", BigDecimal.valueOf(65), true, false, 4.5, "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", "Breads", r1));
        r1.addMenuItem(new MenuItem("Royal Gulab Jamun (2 Pcs)", "Soft khoya dumplings dipped in saffron rose scented sugar syrup.", BigDecimal.valueOf(90), true, false, 4.9, "https://images.unsplash.com/photo-1589119908995-c6837fa14d48?w=400&q=80", "Desserts", r1));

        // 2. Truffles
        Restaurant r2 = new Restaurant(
                "Truffles",
                "truffles",
                "Craft Burgers, Crispy Steaks & Thick Shakes",
                "Burgers, American, Continental, Desserts",
                4.6,
                "22k+ ratings",
                30,
                3.1,
                BigDecimal.valueOf(450),
                "St. Marks Road, Ashok Nagar",
                "Central Bengaluru",
                "Bengaluru",
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
                "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1400&q=80",
                "Flat ₹100 OFF",
                false,
                true,
                true,
                false
        );

        r2.addMenuItem(new MenuItem("All American Cheese Burger", "Juicy grilled patty stacked with melted cheddar, fresh lettuce, gherkins and secret truffle sauce.", BigDecimal.valueOf(260), false, true, 4.9, "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", "Burgers", r2));
        r2.addMenuItem(new MenuItem("Crunchy Veggie Supreme Burger", "Crispy crumb coated spiced potato and herb patty with chipotle mayo.", BigDecimal.valueOf(190), true, false, 4.4, "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&q=80", "Burgers", r2));
        r2.addMenuItem(new MenuItem("Peri Peri French Fries", "Golden crisp potato batons dusted with tangy African bird's eye chilli seasoning.", BigDecimal.valueOf(140), true, true, 4.6, "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&q=80", "Starters", r2));
        r2.addMenuItem(new MenuItem("Ferrero Rocher Thick Shake", "Decadent hazelnut chocolate ice cream blended with crushed Ferrero pralines.", BigDecimal.valueOf(210), true, true, 4.8, "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80", "Beverages", r2));

        // 3. The Rameshwaram Cafe
        Restaurant r3 = new Restaurant(
                "The Rameshwaram Cafe",
                "the-rameshwaram-cafe",
                "Bengaluru's Authentic Pure Veg Ghee Roast Haven",
                "South Indian, Pure Veg, Filter Coffee",
                4.8,
                "45k+ ratings",
                15,
                1.5,
                BigDecimal.valueOf(250),
                "12th Main Rd, HAL 2nd Stage, Indiranagar",
                "Indiranagar",
                "Bengaluru",
                "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
                "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1400&q=80",
                "Pure Veg Special",
                true,
                true,
                true,
                false
        );

        r3.addMenuItem(new MenuItem("Ghee Podi Masala Dosa", "Crispy golden crepe roasted in pure desi ghee, layered with spicy gunpowder podi and potato bhaji.", BigDecimal.valueOf(145), true, true, 4.9, "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&q=80", "South Indian", r3));
        r3.addMenuItem(new MenuItem("Steamed Button Idli (4 Pcs)", "Melt-in-mouth steamed rice cakes dipped in piping hot aromatic sambar and fresh coconut chutney.", BigDecimal.valueOf(80), true, true, 4.8, "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80", "South Indian", r3));
        r3.addMenuItem(new MenuItem("Crispy Medu Vada (2 Pcs)", "Traditional crunchy lentil fritters tempered with whole peppercorns and ginger.", BigDecimal.valueOf(70), true, false, 4.7, "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", "South Indian", r3));
        r3.addMenuItem(new MenuItem("Traditional Filter Coffee", "Strong chicory brewed South Indian coffee frothed with thick steaming milk.", BigDecimal.valueOf(45), true, true, 4.9, "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80", "Beverages", r3));

        // 4. Empire Restaurant
        Restaurant r4 = new Restaurant(
                "Empire Restaurant",
                "empire-restaurant",
                "The Taste of Bengaluru - Nightlife & Late Night Feasts",
                "Mughlai, North Indian, Kebabs, Biryani",
                4.3,
                "35k+ ratings",
                20,
                2.8,
                BigDecimal.valueOf(550),
                "Church Street, Off MG Road",
                "MG Road",
                "Bengaluru",
                "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80",
                "Free Delivery",
                false,
                true,
                true,
                true
        );

        r4.addMenuItem(new MenuItem("Empire Special Chicken Shawarma", "Tender roasted chicken strips wrapped in warm kuboos with garlic toum sauce.", BigDecimal.valueOf(170), false, true, 4.7, "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&q=80", "Starters", r4));
        r4.addMenuItem(new MenuItem("Ghee Rice & Butter Chicken Combo", "Aromatic jeera ghee rice served with tender chicken tikka in luscious buttery tomato gravy.", BigDecimal.valueOf(320), false, true, 4.8, "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80", "Main Course", r4));
        r4.addMenuItem(new MenuItem("Tandoori Chicken (Half)", "Chicken on the bone marinated in spiced yogurt and charred to perfection in clay oven.", BigDecimal.valueOf(260), false, false, 4.6, "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&q=80", "Starters", r4));

        // 5. Toit Brewpub & Kitchen
        Restaurant r5 = new Restaurant(
                "Toit Brewpub & Kitchen",
                "toit-brewpub",
                "Iconic Craft Brews, Woodfired Pizzas & Dining Atmosphere",
                "Italian, Woodfired Pizza, Continental, Craft Beers",
                4.7,
                "19k+ ratings",
                35,
                3.8,
                BigDecimal.valueOf(1200),
                "298, 100 Feet Rd, Near BDA Complex, Indiranagar",
                "Indiranagar",
                "Bengaluru",
                "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80",
                "Top Dining Experience",
                false,
                true,
                true,
                true
        );

        r5.addMenuItem(new MenuItem("Tintin Toit Classic Pizza (11\")", "Handcrafted crust loaded with San Marzano tomatoes, fresh mozzarella, sundried tomatoes and fresh basil.", BigDecimal.valueOf(480), true, true, 4.9, "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", "Pizza", r5));
        r5.addMenuItem(new MenuItem("Smoked Barbecue Chicken Pizza", "Thin crust pizza topped with smoked pulled chicken, red onions, jalapeños and mozzarella.", BigDecimal.valueOf(540), false, true, 4.8, "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", "Pizza", r5));
        r5.addMenuItem(new MenuItem("Loaded Cheesy Nachos", "Crisp tortilla chips baked with cheddar, jalapeños, salsa picante, sour cream and guacamole.", BigDecimal.valueOf(320), true, false, 4.5, "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80", "Starters", r5));

        // 6. Corner House Ice Cream
        Restaurant r6 = new Restaurant(
                "Corner House Ice Cream",
                "corner-house",
                "Bengaluru's Sweet Tooth Tradition Since 1982",
                "Desserts, Ice Cream, Shakes, Waffles",
                4.9,
                "50k+ ratings",
                15,
                1.9,
                BigDecimal.valueOf(300),
                "1st Block, Jayanagar",
                "Jayanagar",
                "Bengaluru",
                "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
                "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1400&q=80",
                "Best In Desserts",
                true,
                true,
                true,
                false
        );

        r6.addMenuItem(new MenuItem("Death By Chocolate (DBC)", "Warm chocolate sponge topped with double scoops of vanilla ice cream, hot fudge sauce and toasted peanuts.", BigDecimal.valueOf(240), true, true, 5.0, "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80", "Desserts", r6));
        r6.addMenuItem(new MenuItem("Trilogy Sundae", "Three scoops of assorted fruit and berry ice creams layered with fresh cream, fruits and strawberry coulis.", BigDecimal.valueOf(220), true, false, 4.8, "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80", "Desserts", r6));
        r6.addMenuItem(new MenuItem("Hot Butterscotch Sundae", "Vanilla scoops swimming in golden butterscotch praline and warm caramel sauce.", BigDecimal.valueOf(190), true, false, 4.7, "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&q=80", "Desserts", r6));

        restaurantRepository.saveAll(Arrays.asList(r1, r2, r3, r4, r5, r6));
    }
}
