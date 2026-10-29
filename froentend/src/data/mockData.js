export const locations = [
  { id: 'delhi', name: 'Connaught Place, New Delhi', state: 'Delhi NCR' },
  { id: 'bangalore', name: 'Indiranagar, Bengaluru', state: 'Karnataka' },
  { id: 'mumbai', name: 'Bandra West, Mumbai', state: 'Maharashtra' },
  { id: 'hyderabad', name: 'Jubilee Hills, Hyderabad', state: 'Telangana' },
  { id: 'pune', name: 'Koregaon Park, Pune', state: 'Maharashtra' },
  { id: 'kolkata', name: 'Park Street, Kolkata', state: 'West Bengal' }
];

export const foodCategories = [
  {
    id: 'biryani',
    name: 'Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=80',
    tag: 'biryani'
  },
  {
    id: 'pizza',
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=80',
    tag: 'pizza'
  },
  {
    id: 'burger',
    name: 'Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80',
    tag: 'burger'
  },
  {
    id: 'thali',
    name: 'North Indian',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&auto=format&fit=crop&q=80',
    tag: 'north indian'
  },
  {
    id: 'rolls',
    name: 'Rolls & Wraps',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&auto=format&fit=crop&q=80',
    tag: 'rolls'
  },
  {
    id: 'noodles',
    name: 'Noodles & Chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&auto=format&fit=crop&q=80',
    tag: 'chinese'
  },
  {
    id: 'chicken',
    name: 'Fried Chicken',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=300&auto=format&fit=crop&q=80',
    tag: 'chicken'
  },
  {
    id: 'cake',
    name: 'Cakes & Desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&auto=format&fit=crop&q=80',
    tag: 'desserts'
  },
  {
    id: 'dosa',
    name: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=80',
    tag: 'south indian'
  },
  {
    id: 'icecream',
    name: 'Ice Cream',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300&auto=format&fit=crop&q=80',
    tag: 'ice cream'
  }
];

export const topBrands = [
  {
    id: 'b1',
    name: "Domino's Pizza",
    time: '25 min',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=200&auto=format&fit=crop&q=80',
    tag: 'pizza'
  },
  {
    id: 'b2',
    name: 'KFC',
    time: '30 min',
    image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=200&auto=format&fit=crop&q=80',
    tag: 'chicken'
  },
  {
    id: 'b3',
    name: "McDonald's",
    time: '20 min',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&auto=format&fit=crop&q=80',
    tag: 'burger'
  },
  {
    id: 'b4',
    name: 'Burger King',
    time: '28 min',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&auto=format&fit=crop&q=80',
    tag: 'burger'
  },
  {
    id: 'b5',
    name: "Haldiram's",
    time: '22 min',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&auto=format&fit=crop&q=80',
    tag: 'north indian'
  },
  {
    id: 'b6',
    name: 'Subway',
    time: '24 min',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=200&auto=format&fit=crop&q=80',
    tag: 'rolls'
  },
  {
    id: 'b7',
    name: 'Behrouz Biryani',
    time: '35 min',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&auto=format&fit=crop&q=80',
    tag: 'biryani'
  },
  {
    id: 'b8',
    name: 'Chaayos',
    time: '18 min',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&auto=format&fit=crop&q=80',
    tag: 'beverages'
  }
];

export const restaurants = [
  {
    id: 1,
    name: 'The Royal Biryani House',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&auto=format&fit=crop&q=80',
    rating: 4.4,
    ratingCount: '2.4k+',
    cuisines: ['Biryani', 'Mughlai', 'North Indian', 'Kebabs'],
    costForOne: 250,
    deliveryTime: '28 mins',
    distance: '2.5 km',
    isVeg: false,
    isPromoted: true,
    discount: '50% OFF up to ₹100',
    goldOffer: 'Flat 10% Extra OFF with Gold',
    safetyBadged: true,
    address: 'Shop 14, Inner Circle, Connaught Place, New Delhi',
    menu: [
      {
        id: 'm101',
        name: 'Hyderabadi Dum Chicken Biryani',
        category: 'Biryani',
        price: 320,
        rating: 4.6,
        votes: 820,
        isVeg: false,
        isBestseller: true,
        description: 'Authentic dum cooked long grain basmati rice layered with spiced marinated tender chicken and aromatics. Served with Mirchi ka Salan and Raita.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm102',
        name: 'Royal Shahi Paneer Biryani',
        category: 'Biryani',
        price: 280,
        rating: 4.3,
        votes: 420,
        isVeg: true,
        isBestseller: true,
        description: 'Tender cottage cheese cubes simmered in royal saffron spices, layered with basmati rice and fried onions.',
        image: 'https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm103',
        name: 'Murgh Malai Tikka (6 Pcs)',
        category: 'Starters',
        price: 340,
        rating: 4.7,
        votes: 310,
        isVeg: false,
        isBestseller: true,
        description: 'Creamy boneless chicken morsels infused with cheese, cardamom, and fresh coriander grilled to perfection in clay tandoor.',
        image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm104',
        name: 'Dal Makhani Bukhara Style',
        category: 'Main Course',
        price: 240,
        rating: 4.5,
        votes: 560,
        isVeg: true,
        isBestseller: false,
        description: 'Whole black lentils slow cooked over charcoal for 18 hours with butter and fresh cream.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm105',
        name: 'Butter Garlic Naan',
        category: 'Breads',
        price: 65,
        rating: 4.4,
        votes: 940,
        isVeg: true,
        isBestseller: false,
        description: 'Crisp and fluffy Indian bread brushed with melted butter and fresh roasted minced garlic.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm106',
        name: 'Kesari Phirni in Clay Pot',
        category: 'Desserts',
        price: 110,
        rating: 4.8,
        votes: 210,
        isVeg: true,
        isBestseller: true,
        description: 'Slow-cooked ground rice pudding infused with saffron, cardamom, and topped with pistachios.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 2,
    name: 'Pizzeria Bella Italia',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=80',
    rating: 4.6,
    ratingCount: '4.8k+',
    cuisines: ['Pizza', 'Italian', 'Pasta', 'Desserts'],
    costForOne: 350,
    deliveryTime: '22 mins',
    distance: '1.8 km',
    isVeg: false,
    isPromoted: false,
    discount: '40% OFF up to ₹80',
    goldOffer: 'Free Garlic Bread on orders > ₹399',
    safetyBadged: true,
    address: '42, Indiranagar 100ft Road, Bengaluru',
    menu: [
      {
        id: 'm201',
        name: 'Classic Margherita Pizza (11 inch)',
        category: 'Pizza',
        price: 360,
        rating: 4.7,
        votes: 1420,
        isVeg: true,
        isBestseller: true,
        description: 'San Marzano tomato sauce, fresh buffalo mozzarella, aromatic basil leaves, and extra virgin olive oil on hand-stretched sourdough.',
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm202',
        name: 'Fiery Pepperoni & Jalapeno Pizza',
        category: 'Pizza',
        price: 480,
        rating: 4.8,
        votes: 980,
        isVeg: false,
        isBestseller: true,
        description: 'Spicy Italian pepperoni slices, pickled jalapenos, mozzarella, and chili honey glaze.',
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm203',
        name: 'Truffle Cream Fettuccine Alfredo',
        category: 'Pasta',
        price: 390,
        rating: 4.5,
        votes: 380,
        isVeg: true,
        isBestseller: false,
        description: 'Handmade fettuccine pasta tossed in rich parmesan cream sauce infused with white truffle oil and wild mushrooms.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3d5d628178d?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm204',
        name: 'Cheesy Garlic Bread Sticks',
        category: 'Sides',
        price: 180,
        rating: 4.6,
        votes: 750,
        isVeg: true,
        isBestseller: true,
        description: 'Freshly baked sourdough sticks glazed with herb garlic butter and stuffed with molten mozzarella.',
        image: 'https://images.unsplash.com/photo-1573821663912-569905455b1a?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm205',
        name: 'Classic Espresso Tiramisu',
        category: 'Desserts',
        price: 220,
        rating: 4.9,
        votes: 520,
        isVeg: true,
        isBestseller: true,
        description: 'Italian savoiardi ladyfingers soaked in dark espresso and layered with mascarpone cream dusted with cocoa.',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 3,
    name: 'Burger Garage & Shakes',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&auto=format&fit=crop&q=80',
    rating: 4.3,
    ratingCount: '3.1k+',
    cuisines: ['Burgers', 'American', 'Fast Food', 'Shakes'],
    costForOne: 200,
    deliveryTime: '20 mins',
    distance: '1.2 km',
    isVeg: false,
    isPromoted: true,
    discount: 'FLAT ₹125 OFF',
    goldOffer: 'Complimentary Peri Peri Fries',
    safetyBadged: true,
    address: 'Sector 29, Cyber City Road, Gurugram',
    menu: [
      {
        id: 'm301',
        name: 'The Ultimate Smashed Cheeseburger',
        category: 'Burgers',
        price: 260,
        rating: 4.7,
        votes: 1120,
        isVeg: false,
        isBestseller: true,
        description: 'Double grilled beef patty, double melted cheddar cheese, caramelized onions, house secret sauce in toasted brioche bun.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm302',
        name: 'Crispy Paneer Makhani Burger',
        category: 'Burgers',
        price: 210,
        rating: 4.4,
        votes: 890,
        isVeg: true,
        isBestseller: true,
        description: 'Herb crusted paneer steak dipped in fiery makhani gravy, iceberg lettuce and mint mayo.',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm303',
        name: 'Peri Peri Crinkle Cut Fries',
        category: 'Sides',
        price: 130,
        rating: 4.5,
        votes: 670,
        isVeg: true,
        isBestseller: false,
        description: 'Golden crunchy crinkle cut fries tossed in spicy African peri-peri seasoning. Served with cheese dip.',
        image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm304',
        name: 'Nutella Belgian Thickshake',
        category: 'Shakes',
        price: 190,
        rating: 4.8,
        votes: 450,
        isVeg: true,
        isBestseller: true,
        description: 'Thick handcrafted shake blended with pure Nutella, rich dairy ice cream, and dark chocolate flakes.',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 4,
    name: 'Shree Krishna Pure Vegetarian',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1200&auto=format&fit=crop&q=80',
    rating: 4.5,
    ratingCount: '5.2k+',
    cuisines: ['North Indian', 'Thali', 'South Indian', 'Pure Veg'],
    costForOne: 180,
    deliveryTime: '25 mins',
    distance: '2.1 km',
    isVeg: true,
    isPromoted: false,
    discount: '30% OFF up to ₹75',
    goldOffer: 'Free Sweet Lassi with Deluxe Thali',
    safetyBadged: true,
    address: 'Linking Road, Bandra West, Mumbai',
    menu: [
      {
        id: 'm401',
        name: 'Special Maharaja Deluxe Thali',
        category: 'Thali',
        price: 320,
        rating: 4.8,
        votes: 1890,
        isVeg: true,
        isBestseller: true,
        description: 'Includes Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Gulab Jamun, Raita, and Salad.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm402',
        name: 'Mysore Masala Butter Dosa',
        category: 'South Indian',
        price: 160,
        rating: 4.6,
        votes: 1240,
        isVeg: true,
        isBestseller: true,
        description: 'Crisp golden crepe smeared with spicy red chutney, stuffed with potato masala and topped with butter. Served with 3 chutneys & sambar.',
        image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm403',
        name: 'Amritsari Chole with 2 Bhature',
        category: 'Main Course',
        price: 190,
        rating: 4.7,
        votes: 920,
        isVeg: true,
        isBestseller: true,
        description: 'Dark spicy chickpea curry cooked with roasted spices, served with fluffy deep fried bhature and pickled onions.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm404',
        name: 'Gulab Jamun (2 Pcs)',
        category: 'Desserts',
        price: 70,
        rating: 4.6,
        votes: 680,
        isVeg: true,
        isBestseller: false,
        description: 'Warm soft khoya dumplings soaked in saffron rose sugar syrup.',
        image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 5,
    name: 'Wok & Roll Pan Asian Bistro',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1200&auto=format&fit=crop&q=80',
    rating: 4.2,
    ratingCount: '1.9k+',
    cuisines: ['Chinese', 'Asian', 'Noodles', 'Momos', 'Thai'],
    costForOne: 280,
    deliveryTime: '32 mins',
    distance: '3.4 km',
    isVeg: false,
    isPromoted: false,
    discount: '20% OFF with code ASIAN20',
    goldOffer: 'Free Dim Sum basket on ₹499+',
    safetyBadged: true,
    address: 'Kalyani Nagar, Pune',
    menu: [
      {
        id: 'm501',
        name: 'Schezwan Chilli Hakka Noodles',
        category: 'Noodles',
        price: 240,
        rating: 4.4,
        votes: 670,
        isVeg: true,
        isBestseller: true,
        description: 'Wok tossed noodles with crunchy cabbage, bell peppers, carrots, spring onions in spicy house schezwan sauce.',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm502',
        name: 'Crispy Steamed Chicken Momos (6 Pcs)',
        category: 'Momos',
        price: 210,
        rating: 4.7,
        votes: 930,
        isVeg: false,
        isBestseller: true,
        description: 'Delicate handmade dumplings packed with juicy minced chicken and ginger scallions, served with spicy fire dip.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm503',
        name: 'Kung Pao Chicken with Cashews',
        category: 'Main Course',
        price: 330,
        rating: 4.5,
        votes: 420,
        isVeg: false,
        isBestseller: true,
        description: 'Diced chicken tossed with dry red chilies, bell peppers, scallions and toasted cashew nuts in sweet tangy sauce.',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm504',
        name: 'Thai Green Curry with Jasmine Rice',
        category: 'Main Course',
        price: 350,
        rating: 4.6,
        votes: 310,
        isVeg: true,
        isBestseller: false,
        description: 'Aromatic coconut milk broth infused with lemongrass, galangal, kaffir lime leaves and fresh vegetables.',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 6,
    name: 'Crispy Crunch Fried Chicken Co.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1200&auto=format&fit=crop&q=80',
    rating: 4.1,
    ratingCount: '2.7k+',
    cuisines: ['Fast Food', 'Chicken', 'Burgers', 'Wings'],
    costForOne: 220,
    deliveryTime: '26 mins',
    distance: '2.8 km',
    isVeg: false,
    isPromoted: false,
    discount: '50% OFF up to ₹100',
    goldOffer: 'Extra 15% OFF for Gold members',
    safetyBadged: true,
    address: 'Road No 36, Jubilee Hills, Hyderabad',
    menu: [
      {
        id: 'm601',
        name: 'Hot & Spicy Chicken Bucket (6 Pcs)',
        category: 'Chicken',
        price: 420,
        rating: 4.6,
        votes: 1100,
        isVeg: false,
        isBestseller: true,
        description: 'Triple-dredged chicken fried to golden crispy perfection with secret spicy herb seasoning.',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm602',
        name: 'Smoky BBQ Glazed Wings (8 Pcs)',
        category: 'Chicken',
        price: 290,
        rating: 4.5,
        votes: 560,
        isVeg: false,
        isBestseller: true,
        description: 'Crisp chicken wings tossed in rich hickory smoked BBQ sauce and sprinkled with sesame seeds.',
        image: 'https://images.unsplash.com/photo-1527477321055-436158a2b008?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm603',
        name: 'Crispy Zinger Chicken Burger',
        category: 'Burgers',
        price: 199,
        rating: 4.4,
        votes: 780,
        isVeg: false,
        isBestseller: false,
        description: 'Signature crispy chicken fillet with crunchy lettuce and creamy black pepper mayo.',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 7,
    name: 'Kolkata Kathi Rolls & Biryani',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1200&auto=format&fit=crop&q=80',
    rating: 4.5,
    ratingCount: '3.6k+',
    cuisines: ['Rolls', 'Street Food', 'Biryani', 'Fast Food'],
    costForOne: 150,
    deliveryTime: '19 mins',
    distance: '1.5 km',
    isVeg: false,
    isPromoted: true,
    discount: 'FLAT 25% OFF',
    goldOffer: 'Free beverage on orders > ₹249',
    safetyBadged: true,
    address: 'Park Street, Kolkata',
    menu: [
      {
        id: 'm701',
        name: 'Double Egg Double Chicken Kathi Roll',
        category: 'Rolls',
        price: 180,
        rating: 4.8,
        votes: 2100,
        isVeg: false,
        isBestseller: true,
        description: 'Flaky layered paratha lined with two eggs, stuffed with charcoal spiced chicken chunks, sliced onions, green chilies, and lime juice.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm702',
        name: 'Paneer Tikka Kathi Roll',
        category: 'Rolls',
        price: 150,
        rating: 4.4,
        votes: 830,
        isVeg: true,
        isBestseller: false,
        description: 'Tandoori roasted paneer with bell peppers, fresh mint chutney, and chaat masala wrapped in hot paratha.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm703',
        name: 'Kolkata Aloo Dum Biryani',
        category: 'Biryani',
        price: 210,
        rating: 4.5,
        votes: 620,
        isVeg: true,
        isBestseller: false,
        description: 'Fragrant light spiced rice with melt-in-mouth slow cooked Kolkata potato and boiled egg.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    id: 8,
    name: 'Sweet Tooth Bakery & Patisserie',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&auto=format&fit=crop&q=80',
    rating: 4.7,
    ratingCount: '4.1k+',
    cuisines: ['Bakery', 'Desserts', 'Cakes', 'Ice Cream'],
    costForOne: 190,
    deliveryTime: '24 mins',
    distance: '2.0 km',
    isVeg: true,
    isPromoted: false,
    discount: '40% OFF up to ₹100',
    goldOffer: 'Free choco lava cake on ₹350+',
    safetyBadged: true,
    address: 'Defence Colony Main Market, New Delhi',
    menu: [
      {
        id: 'm801',
        name: 'Belgian Dark Chocolate Truffle Cake (500g)',
        category: 'Cakes',
        price: 490,
        rating: 4.9,
        votes: 1540,
        isVeg: true,
        isBestseller: true,
        description: 'Silky rich 54% dark Belgian chocolate ganache layered with moist chocolate sponge.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm802',
        name: 'Warm Choco Lava Molten Cake',
        category: 'Desserts',
        price: 110,
        rating: 4.8,
        votes: 980,
        isVeg: true,
        isBestseller: true,
        description: 'Decadent individual chocolate cake with a gooey warm melted chocolate center that flows out.',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80'
      },
      {
        id: 'm803',
        name: 'New York Baked Blueberry Cheesecake Slice',
        category: 'Cakes',
        price: 230,
        rating: 4.7,
        votes: 610,
        isVeg: false,
        isBestseller: true,
        description: 'Creamy rich Philadelphia cheese on digestive butter biscuit base topped with wild blueberry compote.',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&auto=format&fit=crop&q=80'
      }
    ]
  }
];

export const coupons = [
  {
    code: 'CRAVE50',
    title: '50% OFF up to ₹100',
    minOrder: 199,
    discountPercent: 50,
    maxDiscount: 100,
    description: 'Valid on orders above ₹199'
  },
  {
    code: 'TASTY20',
    title: '20% OFF up to ₹150',
    minOrder: 299,
    discountPercent: 20,
    maxDiscount: 150,
    description: 'Valid on orders above ₹299'
  },
  {
    code: 'FREEDEL',
    title: 'Free Delivery',
    minOrder: 149,
    discountPercent: 0,
    freeDelivery: true,
    description: 'Save delivery fee on orders above ₹149'
  },
  {
    code: 'GOLD10',
    title: '10% Extra Gold Discount',
    minOrder: 100,
    discountPercent: 10,
    maxDiscount: 50,
    description: 'Exclusive Crave Foodie Gold offer'
  }
];
