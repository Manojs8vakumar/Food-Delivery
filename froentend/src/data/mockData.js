export const locations = [
  {
    "id": "all",
    "name": "All Locations / Cities",
    "state": "Pan India"
  },
  {
    "id": "delhi",
    "name": "Connaught Place, New Delhi",
    "state": "Delhi NCR"
  },
  {
    "id": "bangalore",
    "name": "Indiranagar, Bengaluru",
    "state": "Karnataka"
  },
  {
    "id": "mumbai",
    "name": "Bandra West, Mumbai",
    "state": "Maharashtra"
  },
  {
    "id": "hyderabad",
    "name": "Jubilee Hills, Hyderabad",
    "state": "Telangana"
  },
  {
    "id": "pune",
    "name": "Koregaon Park, Pune",
    "state": "Maharashtra"
  },
  {
    "id": "kolkata",
    "name": "Park Street, Kolkata",
    "state": "West Bengal"
  }
];

export const foodCategories = [
  {
    "id": "biryani",
    "name": "Biryani",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=80",
    "tag": "biryani"
  },
  {
    "id": "pizza",
    "name": "Pizza",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=80",
    "tag": "pizza"
  },
  {
    "id": "burger",
    "name": "Burger",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80",
    "tag": "burger"
  },
  {
    "id": "thali",
    "name": "North Indian",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&auto=format&fit=crop&q=80",
    "tag": "north indian"
  },
  {
    "id": "rolls",
    "name": "Rolls & Wraps",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&auto=format&fit=crop&q=80",
    "tag": "rolls"
  },
  {
    "id": "chinese",
    "name": "Chinese & Momos",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&auto=format&fit=crop&q=80",
    "tag": "chinese"
  },
  {
    "id": "chicken",
    "name": "Fried Chicken",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=300&auto=format&fit=crop&q=80",
    "tag": "chicken"
  },
  {
    "id": "desserts",
    "name": "Cakes & Desserts",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&auto=format&fit=crop&q=80",
    "tag": "desserts"
  },
  {
    "id": "southindian",
    "name": "South Indian",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=80",
    "tag": "south indian"
  },
  {
    "id": "icecream",
    "name": "Ice Cream",
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300&auto=format&fit=crop&q=80",
    "tag": "ice cream"
  }
];

export const topBrands = [
  {
    "id": "b1",
    "name": "Domino's Pizza",
    "time": "25 min",
    "image": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=200&auto=format&fit=crop&q=80",
    "tag": "pizza"
  },
  {
    "id": "b2",
    "name": "KFC",
    "time": "28 min",
    "image": "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=200&auto=format&fit=crop&q=80",
    "tag": "chicken"
  },
  {
    "id": "b3",
    "name": "McDonald's",
    "time": "20 min",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&auto=format&fit=crop&q=80",
    "tag": "burger"
  },
  {
    "id": "b4",
    "name": "Burger King",
    "time": "26 min",
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&auto=format&fit=crop&q=80",
    "tag": "burger"
  },
  {
    "id": "b5",
    "name": "Haldiram's",
    "time": "22 min",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&auto=format&fit=crop&q=80",
    "tag": "north indian"
  },
  {
    "id": "b6",
    "name": "Subway",
    "time": "24 min",
    "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=200&auto=format&fit=crop&q=80",
    "tag": "rolls"
  },
  {
    "id": "b7",
    "name": "Behrouz Biryani",
    "time": "35 min",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&auto=format&fit=crop&q=80",
    "tag": "biryani"
  },
  {
    "id": "b8",
    "name": "Chaayos",
    "time": "18 min",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&auto=format&fit=crop&q=80",
    "tag": "beverages"
  }
];

export const restaurants = [
  {
    "id": 1,
    "name": "The Royal Biryani House",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Biryani",
      "Mughlai",
      "North Indian",
      "Kebabs"
    ],
    "costForOne": 250,
    "deliveryTime": "28 mins",
    "distance": "2.5 km",
    "rating": 4.5,
    "ratingCount": "2.4k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "50% OFF up to ₹100",
    "goldOffer": "Flat 10% Extra OFF with Gold",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_1_1",
        "name": "Hyderabadi Dum Chicken Biryani",
        "category": "Biryani",
        "price": 320,
        "rating": 4.7,
        "votes": 940,
        "isVeg": false,
        "isBestseller": true,
        "description": "Aromatic basmati rice layered with spiced marinated tender chicken slow cooked on charcoal.",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_1_2",
        "name": "Royal Shahi Paneer Biryani",
        "category": "Biryani",
        "price": 280,
        "rating": 4.4,
        "votes": 510,
        "isVeg": true,
        "isBestseller": true,
        "description": "Fresh malai paneer cubes simmered in royal saffron spices with long grain basmati rice.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_1_3",
        "name": "Murgh Malai Tikka (6 Pcs)",
        "category": "Starters",
        "price": 340,
        "rating": 4.8,
        "votes": 420,
        "isVeg": false,
        "isBestseller": true,
        "description": "Creamy boneless chicken morsels infused with cheese and cardamom grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_1_4",
        "name": "Dal Makhani Bukhara Style",
        "category": "Main Course",
        "price": 240,
        "rating": 4.6,
        "votes": 760,
        "isVeg": true,
        "isBestseller": false,
        "description": "Overnight charcoal simmered black lentils finished with cream and white butter.",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_1_5",
        "name": "Butter Garlic Naan",
        "category": "Breads",
        "price": 65,
        "rating": 4.5,
        "votes": 1200,
        "isVeg": true,
        "isBestseller": false,
        "description": "Fresh tandoor baked bread brushed with roasted garlic butter.",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_1_6",
        "name": "Kesari Phirni in Clay Pot",
        "category": "Desserts",
        "price": 110,
        "rating": 4.9,
        "votes": 380,
        "isVeg": true,
        "isBestseller": true,
        "description": "Saffron rice pudding chilled in earthen clay pots topped with pistachios.",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 2,
    "name": "Behrouz Biryani",
    "cityId": "bangalore",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Biryani",
      "Mughlai",
      "North Indian",
      "Desserts"
    ],
    "costForOne": 350,
    "deliveryTime": "35 mins",
    "distance": "3.2 km",
    "rating": 4.4,
    "ratingCount": "4.8k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "40% OFF with code CRAVE50",
    "goldOffer": "Free Gulab Jamun on orders > ₹399",
    "safetyBadged": true,
    "address": "Indiranagar 100ft Road, Bengaluru",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_2_1",
        "name": "Dum Gosht Mutton Biryani",
        "category": "Biryani",
        "price": 460,
        "rating": 4.7,
        "votes": 1450,
        "isVeg": false,
        "isBestseller": true,
        "description": "Tender baby mutton marinated in secret Persian spices dum cooked with royal basmati rice.",
        "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_2_2",
        "name": "Subz-e-Biryani",
        "category": "Biryani",
        "price": 310,
        "rating": 4.3,
        "votes": 620,
        "isVeg": true,
        "isBestseller": false,
        "description": "Carrots, beans, florets and fresh cottage cheese in rich golden spiced rice.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_2_3",
        "name": "Lazeez Bhuna Murgh Biryani",
        "category": "Biryani",
        "price": 380,
        "rating": 4.6,
        "votes": 890,
        "isVeg": false,
        "isBestseller": true,
        "description": "Juicy chicken cooked in bhuna masala gravy layered under fragrant aromatic rice.",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_2_4",
        "name": "Falafel-e-Khaas (5 Pcs)",
        "category": "Starters",
        "price": 190,
        "rating": 4.4,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Crispy herb chickpea fritters served with garlic curd dip.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_2_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_2_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_2_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_2_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 3,
    "name": "Paradise Biryani & Kebabs",
    "cityId": "hyderabad",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Biryani",
      "Hyderabadi",
      "Kebabs",
      "Mughlai"
    ],
    "costForOne": 260,
    "deliveryTime": "24 mins",
    "distance": "1.9 km",
    "rating": 4.6,
    "ratingCount": "8.2k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "30% OFF up to ₹75",
    "goldOffer": "Free Double ka Meetha on ₹400+",
    "safetyBadged": true,
    "address": "Road No 36, Jubilee Hills, Hyderabad",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_3_1",
        "name": "Special Hyderabadi Mutton Dum Biryani",
        "category": "Biryani",
        "price": 420,
        "rating": 4.8,
        "votes": 2900,
        "isVeg": false,
        "isBestseller": true,
        "description": "Legendary Nizami recipe of dum cooking marinated meat with aromatic basmati rice.",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_3_2",
        "name": "Hyderabadi Chicken Dum Biryani",
        "category": "Biryani",
        "price": 340,
        "rating": 4.7,
        "votes": 3400,
        "isVeg": false,
        "isBestseller": true,
        "description": "Succulent chicken pieces slow cooked in seal handi with spices and mint.",
        "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_3_3",
        "name": "Pathar Ka Gosht (Mutton Kebab)",
        "category": "Starters",
        "price": 390,
        "rating": 4.6,
        "votes": 610,
        "isVeg": false,
        "isBestseller": true,
        "description": "Tenderized mutton strips slow grilled on hot granite stone.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_3_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_3_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_3_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_3_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 4,
    "name": "Bawarchi Hyderabadi Dum",
    "cityId": "hyderabad",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Biryani",
      "North Indian",
      "Tandoori",
      "Chinese"
    ],
    "costForOne": 220,
    "deliveryTime": "26 mins",
    "distance": "2.8 km",
    "rating": 4.3,
    "ratingCount": "5.1k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "FLAT ₹50 OFF",
    "goldOffer": "Flat 10% Extra OFF with Gold",
    "safetyBadged": true,
    "address": "Banjara Hills, Hyderabad",
    "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_4_1",
        "name": "Bawarchi Chicken Biryani Family Pack",
        "category": "Biryani",
        "price": 680,
        "rating": 4.5,
        "votes": 1800,
        "isVeg": false,
        "isBestseller": true,
        "description": "Huge portion serving 3-4 people with salan, raita and boiled eggs.",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_4_2",
        "name": "Tandoori Chicken Full",
        "category": "Starters",
        "price": 380,
        "rating": 4.6,
        "votes": 940,
        "isVeg": false,
        "isBestseller": true,
        "description": "Whole chicken marinated in yogurt and tandoori masala grilled in clay oven.",
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_4_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_4_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_4_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_4_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 5,
    "name": "Dindigul Thalappakatti",
    "cityId": "bangalore",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Biryani",
      "South Indian",
      "Chettinad"
    ],
    "costForOne": 280,
    "deliveryTime": "29 mins",
    "distance": "3.1 km",
    "rating": 4.4,
    "ratingCount": "3.2k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "20% OFF with code CRAVE50",
    "goldOffer": "Free beverage on orders > ₹299",
    "safetyBadged": true,
    "address": "Koramangala 5th Block, Bengaluru",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_5_1",
        "name": "Thalappakatti Mutton Biryani",
        "category": "Biryani",
        "price": 410,
        "rating": 4.7,
        "votes": 1240,
        "isVeg": false,
        "isBestseller": true,
        "description": "Signature seeraga samba rice cooked with tender local mountain goat and fresh ground spices.",
        "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_5_2",
        "name": "Chicken 65 Pepper Fry",
        "category": "Starters",
        "price": 260,
        "rating": 4.5,
        "votes": 880,
        "isVeg": false,
        "isBestseller": true,
        "description": "Crispy fried spicy chicken tossed with curry leaves and cracked peppercorns.",
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_5_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_5_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_5_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_5_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 6,
    "name": "Kolkata Biryani & Kathi Co.",
    "cityId": "kolkata",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Biryani",
      "Rolls",
      "Bengali",
      "Street Food"
    ],
    "costForOne": 180,
    "deliveryTime": "20 mins",
    "distance": "1.4 km",
    "rating": 4.5,
    "ratingCount": "4.6k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "30% OFF up to ₹80",
    "goldOffer": "Free Aloo Roll on ₹350+",
    "safetyBadged": true,
    "address": "Park Street, Kolkata",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_6_1",
        "name": "Kolkata Special Chicken Biryani with Aloo",
        "category": "Biryani",
        "price": 260,
        "rating": 4.8,
        "votes": 2400,
        "isVeg": false,
        "isBestseller": true,
        "description": "Light fragrant saffron rice cooked with tender chicken, boiled egg and melt-in-mouth Kolkata potato.",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_6_2",
        "name": "Double Egg Double Chicken Kathi Roll",
        "category": "Rolls",
        "price": 180,
        "rating": 4.9,
        "votes": 3100,
        "isVeg": false,
        "isBestseller": true,
        "description": "Crisp paratha lined with 2 eggs, loaded with smoky charcoal chicken and onions.",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_6_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_6_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_6_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_6_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 7,
    "name": "Shahi Dawat Dum Biryani",
    "cityId": "mumbai",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Biryani",
      "Mughlai",
      "Kebabs"
    ],
    "costForOne": 230,
    "deliveryTime": "25 mins",
    "distance": "2.1 km",
    "rating": 4.2,
    "ratingCount": "1.8k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "40% OFF",
    "goldOffer": "Flat 10% Extra OFF with Gold",
    "safetyBadged": true,
    "address": "Bandra West, Mumbai",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_7_1",
        "name": "Awadhi Murg Dum Biryani",
        "category": "Biryani",
        "price": 310,
        "rating": 4.4,
        "votes": 610,
        "isVeg": false,
        "isBestseller": true,
        "description": "Lucknowi style mild spiced biryani sealed with dough and cooked in dum.",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_7_2",
        "name": "Galouti Kebab (4 Pcs)",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 450,
        "isVeg": false,
        "isBestseller": true,
        "description": "Melt in mouth minced mutton kebabs spiced with 16 royal aromatics.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_7_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_7_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_7_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_7_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 8,
    "name": "Biryani Blues - Handi Specialists",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Biryani",
      "Hyderabadi",
      "North Indian"
    ],
    "costForOne": 270,
    "deliveryTime": "26 mins",
    "distance": "2.3 km",
    "rating": 4.3,
    "ratingCount": "3.9k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "FLAT ₹100 OFF",
    "goldOffer": "Free Masala Chaas with Handi",
    "safetyBadged": true,
    "address": "Sector 29, Gurugram / Delhi NCR",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_8_1",
        "name": "Claypot Chicken Dum Biryani",
        "category": "Biryani",
        "price": 350,
        "rating": 4.5,
        "votes": 1100,
        "isVeg": false,
        "isBestseller": true,
        "description": "Delivered in real earthen handi packed with spicy chicken and mint.",
        "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_8_2",
        "name": "Fiery Chicken 65 Biryani",
        "category": "Biryani",
        "price": 330,
        "rating": 4.3,
        "votes": 720,
        "isVeg": false,
        "isBestseller": false,
        "description": "Biryani rice infused with crunchy deep fried chicken 65 pieces.",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_8_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_8_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_8_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_8_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 9,
    "name": "Domino's Pizza",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Pizza",
      "Fast Food",
      "Italian",
      "Desserts"
    ],
    "costForOne": 200,
    "deliveryTime": "20 mins",
    "distance": "1.1 km",
    "rating": 4.4,
    "ratingCount": "12k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "50% OFF up to ₹100",
    "goldOffer": "Free Garlic Bread on orders > ₹399",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_9_1",
        "name": "Peppy Paneer Cheese Burst Pizza",
        "category": "Pizza",
        "price": 380,
        "rating": 4.6,
        "votes": 4100,
        "isVeg": true,
        "isBestseller": true,
        "description": "Flavorful paneer, crisp capsicum and spicy red paprika with molten cheese crust.",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_9_2",
        "name": "Chicken Pepperoni Large Pizza",
        "category": "Pizza",
        "price": 490,
        "rating": 4.7,
        "votes": 3200,
        "isVeg": false,
        "isBestseller": true,
        "description": "Loaded with slices of spicy chicken pepperoni and 100% real mozzarella.",
        "image": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_9_3",
        "name": "Stuffed Garlic Breadsticks",
        "category": "Sides",
        "price": 160,
        "rating": 4.8,
        "votes": 5600,
        "isVeg": true,
        "isBestseller": true,
        "description": "Baked garlic bread filled with melted cheese, sweet corn and jalapenos.",
        "image": "https://images.unsplash.com/photo-1573821663912-569905455b1a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_9_4",
        "name": "Choco Lava Cake",
        "category": "Desserts",
        "price": 110,
        "rating": 4.9,
        "votes": 6800,
        "isVeg": true,
        "isBestseller": true,
        "description": "Warm chocolate cake with molten chocolate gooey lava center.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_9_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_9_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_9_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_9_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 10,
    "name": "Pizzeria Bella Italia",
    "cityId": "bangalore",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Pizza",
      "Italian",
      "Pasta",
      "Desserts"
    ],
    "costForOne": 350,
    "deliveryTime": "22 mins",
    "distance": "1.8 km",
    "rating": 4.6,
    "ratingCount": "4.8k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "40% OFF up to ₹80",
    "goldOffer": "Free Tiramisu with Gourmet Pizza",
    "safetyBadged": true,
    "address": "Indiranagar 100ft Road, Bengaluru",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_10_1",
        "name": "Classic Margherita Sourdough Pizza",
        "category": "Pizza",
        "price": 360,
        "rating": 4.7,
        "votes": 1420,
        "isVeg": true,
        "isBestseller": true,
        "description": "San Marzano tomato sauce, fresh buffalo mozzarella and basil on 48-hr fermented sourdough.",
        "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_10_2",
        "name": "Truffle Cream Fettuccine Alfredo",
        "category": "Pasta",
        "price": 390,
        "rating": 4.5,
        "votes": 380,
        "isVeg": true,
        "isBestseller": false,
        "description": "Handmade pasta tossed in aged parmesan sauce infused with white truffle oil.",
        "image": "https://images.unsplash.com/photo-1621996346565-e3d5d628178d?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_10_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_10_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_10_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_10_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 11,
    "name": "Pizza Hut",
    "cityId": "mumbai",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Pizza",
      "Fast Food",
      "Pasta",
      "Garlic Bread"
    ],
    "costForOne": 230,
    "deliveryTime": "25 mins",
    "distance": "2.0 km",
    "rating": 4.2,
    "ratingCount": "7.1k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "FLAT ₹125 OFF",
    "goldOffer": "Flat 10% Extra OFF with Gold",
    "safetyBadged": true,
    "address": "Bandra West, Mumbai",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_11_1",
        "name": "Veggie Supreme Pan Pizza",
        "category": "Pizza",
        "price": 340,
        "rating": 4.4,
        "votes": 2100,
        "isVeg": true,
        "isBestseller": true,
        "description": "Signature crispy golden pan crust topped with mushrooms, olives, corn and peppers.",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_11_2",
        "name": "Spicy Chicken Sausage Pizza",
        "category": "Pizza",
        "price": 390,
        "rating": 4.5,
        "votes": 1600,
        "isVeg": false,
        "isBestseller": true,
        "description": "Loaded with smoked chicken sausage, red paprika and melted cheese.",
        "image": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_11_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_11_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_11_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_11_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 12,
    "name": "Tossin Woodfired Pizza",
    "cityId": "delhi",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Pizza",
      "Italian",
      "Salads",
      "Beverages"
    ],
    "costForOne": 400,
    "deliveryTime": "28 mins",
    "distance": "2.6 km",
    "rating": 4.6,
    "ratingCount": "2.9k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "25% OFF",
    "goldOffer": "Free Mocktail with 12\" Pizza",
    "safetyBadged": true,
    "address": "Greater Kailash, New Delhi",
    "image": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_12_1",
        "name": "Peri Peri Chicken Woodfired Pizza",
        "category": "Pizza",
        "price": 460,
        "rating": 4.8,
        "votes": 980,
        "isVeg": false,
        "isBestseller": true,
        "description": "Wood oven baked thin crust with roasted peri peri chicken and sundried tomatoes.",
        "image": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_12_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_12_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_12_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_12_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 13,
    "name": "Ovenstory Pizza",
    "cityId": "pune",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Pizza",
      "Fast Food",
      "Cheesy Garlic Bread"
    ],
    "costForOne": 220,
    "deliveryTime": "24 mins",
    "distance": "1.9 km",
    "rating": 4.3,
    "ratingCount": "3.6k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "50% OFF up to ₹100",
    "goldOffer": "Complimentary Garlic Bread",
    "safetyBadged": true,
    "address": "Koregaon Park, Pune",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_13_1",
        "name": "Picante Paneer 4-Cheese Pizza",
        "category": "Pizza",
        "price": 370,
        "rating": 4.5,
        "votes": 1200,
        "isVeg": true,
        "isBestseller": true,
        "description": "Choice of chipotle or peri-peri cheese base with spicy paneer chunks.",
        "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_13_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_13_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_13_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_13_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 14,
    "name": "La Pino'z Giant Slices",
    "cityId": "bangalore",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Pizza",
      "Italian",
      "Fast Food"
    ],
    "costForOne": 190,
    "deliveryTime": "21 mins",
    "distance": "1.6 km",
    "rating": 4.1,
    "ratingCount": "4.2k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "Buy 1 Get 1 on Mediums",
    "goldOffer": "Extra 10% Gold Discount",
    "safetyBadged": true,
    "address": "Koramangala, Bengaluru",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_14_1",
        "name": "Kaspian Chicken Monster Slice",
        "category": "Pizza",
        "price": 290,
        "rating": 4.3,
        "votes": 850,
        "isVeg": false,
        "isBestseller": true,
        "description": "Huge slice topped with grilled chicken, sweet corn and red paprika.",
        "image": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_14_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_14_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_14_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_14_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 15,
    "name": "Jamie's Italian & Pasta Bar",
    "cityId": "mumbai",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Italian",
      "Pizza",
      "Pasta",
      "Wine & Dine"
    ],
    "costForOne": 500,
    "deliveryTime": "30 mins",
    "distance": "2.9 km",
    "rating": 4.7,
    "ratingCount": "2.1k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "15% OFF for Dine-In",
    "goldOffer": "Free Glass of House Wine",
    "safetyBadged": true,
    "address": "Bandra Kurla Complex, Mumbai",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d628178d?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1621996346565-e3d5d628178d?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_15_1",
        "name": "Handcrafted Truffle Tagliatelle",
        "category": "Pasta",
        "price": 540,
        "rating": 4.9,
        "votes": 620,
        "isVeg": true,
        "isBestseller": true,
        "description": "Silky egg pasta ribbons in aged butter and shaved black truffle.",
        "image": "https://images.unsplash.com/photo-1621996346565-e3d5d628178d?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_15_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_15_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_15_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_15_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 16,
    "name": "Burger King",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Burgers",
      "American",
      "Fast Food",
      "Shakes"
    ],
    "costForOne": 210,
    "deliveryTime": "22 mins",
    "distance": "1.5 km",
    "rating": 4.3,
    "ratingCount": "9.8k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "60% OFF up to ₹120",
    "goldOffer": "Free King Fries on ₹299+",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_16_1",
        "name": "Crispy Chicken Whopper",
        "category": "Burgers",
        "price": 230,
        "rating": 4.6,
        "votes": 3400,
        "isVeg": false,
        "isBestseller": true,
        "description": "Flame grilled chicken patty with lettuce, ripe tomato and creamy mayo.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_16_2",
        "name": "Veg Whopper with Double Patty",
        "category": "Burgers",
        "price": 199,
        "rating": 4.4,
        "votes": 2900,
        "isVeg": true,
        "isBestseller": true,
        "description": "Signature flame grilled vegetable double patty with crunchy gherkins.",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_16_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_16_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_16_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_16_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 17,
    "name": "McDonald's",
    "cityId": "mumbai",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Burgers",
      "Fast Food",
      "Fries",
      "Beverages"
    ],
    "costForOne": 190,
    "deliveryTime": "18 mins",
    "distance": "1.0 km",
    "rating": 4.4,
    "ratingCount": "15k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "FLAT 20% OFF",
    "goldOffer": "Free McFlurry on ₹399+",
    "safetyBadged": true,
    "address": "Linking Road, Bandra West, Mumbai",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_17_1",
        "name": "McSpicy Chicken Burger",
        "category": "Burgers",
        "price": 189,
        "rating": 4.7,
        "votes": 5200,
        "isVeg": false,
        "isBestseller": true,
        "description": "Tender and juicy chicken patty marinated in spicy batter with crisp lettuce.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_17_2",
        "name": "World Famous French Fries (Large)",
        "category": "Sides",
        "price": 125,
        "rating": 4.8,
        "votes": 8900,
        "isVeg": true,
        "isBestseller": true,
        "description": "Golden salty crisp fries cooked in 100% vegetable oil.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_17_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_17_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_17_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_17_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 18,
    "name": "Burger Garage & Shakes",
    "cityId": "bangalore",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Burgers",
      "American",
      "Shakes",
      "Fast Food"
    ],
    "costForOne": 250,
    "deliveryTime": "25 mins",
    "distance": "2.1 km",
    "rating": 4.5,
    "ratingCount": "3.1k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "FLAT ₹125 OFF",
    "goldOffer": "Complimentary Peri Peri Fries",
    "safetyBadged": true,
    "address": "Indiranagar, Bengaluru",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_18_1",
        "name": "The Ultimate Smashed Cheeseburger",
        "category": "Burgers",
        "price": 280,
        "rating": 4.8,
        "votes": 1120,
        "isVeg": false,
        "isBestseller": true,
        "description": "Double grilled patty, double melted cheddar, caramelized onions in brioche bun.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_18_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_18_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_18_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_18_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 19,
    "name": "Wendy's Classic Burgers",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Burgers",
      "Fast Food",
      "Shakes"
    ],
    "costForOne": 200,
    "deliveryTime": "23 mins",
    "distance": "1.7 km",
    "rating": 4.2,
    "ratingCount": "2.4k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "30% OFF",
    "goldOffer": "Free Frosty Dessert on ₹300+",
    "safetyBadged": true,
    "address": "Janpath, New Delhi",
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_19_1",
        "name": "Spicy Barbecue Baconator",
        "category": "Burgers",
        "price": 299,
        "rating": 4.5,
        "votes": 780,
        "isVeg": false,
        "isBestseller": true,
        "description": "Smoky BBQ chicken bacon burger with melted American cheese.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_19_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_19_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_19_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_19_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 20,
    "name": "The Big Bang Burger Joint",
    "cityId": "pune",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Burgers",
      "American",
      "Wings",
      "Fries"
    ],
    "costForOne": 270,
    "deliveryTime": "27 mins",
    "distance": "2.4 km",
    "rating": 4.6,
    "ratingCount": "1.9k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "20% OFF with code CRAVE50",
    "goldOffer": "Free Onion Rings basket",
    "safetyBadged": true,
    "address": "Koregaon Park, Pune",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_20_1",
        "name": "Monster Triple Patty Burger",
        "category": "Burgers",
        "price": 390,
        "rating": 4.7,
        "votes": 530,
        "isVeg": false,
        "isBestseller": true,
        "description": "Loaded triple burger with cheese layers and house secret barbecue relish.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_20_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_20_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_20_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_20_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 21,
    "name": "Carl's Jr Charbroiled Burgers",
    "cityId": "hyderabad",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Burgers",
      "American",
      "Fast Food"
    ],
    "costForOne": 240,
    "deliveryTime": "24 mins",
    "distance": "2.0 km",
    "rating": 4.3,
    "ratingCount": "2.1k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "FLAT ₹75 OFF",
    "goldOffer": "Flat 10% Extra OFF with Gold",
    "safetyBadged": true,
    "address": "Hitech City, Hyderabad",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_21_1",
        "name": "Western BBQ Charbroiled Chicken",
        "category": "Burgers",
        "price": 270,
        "rating": 4.5,
        "votes": 610,
        "isVeg": false,
        "isBestseller": true,
        "description": "Smoky charbroiled chicken patty with onion rings and tang BBQ sauce.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_21_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_21_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_21_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_21_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 22,
    "name": "Haldiram's",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "North Indian",
      "Street Food",
      "Thali",
      "Sweets",
      "Pure Veg"
    ],
    "costForOne": 180,
    "deliveryTime": "22 mins",
    "distance": "1.2 km",
    "rating": 4.6,
    "ratingCount": "16k+",
    "isVeg": true,
    "isPromoted": true,
    "discount": "40% OFF up to ₹80",
    "goldOffer": "Free Rasgulla with Special Thali",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_22_1",
        "name": "Executive Deluxe Thali",
        "category": "Thali",
        "price": 340,
        "rating": 4.8,
        "votes": 4100,
        "isVeg": true,
        "isBestseller": true,
        "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Pulao, 2 Laccha Parathas, Gulab Jamun, Raita.",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_22_2",
        "name": "Chole Bhature (2 Pcs)",
        "category": "Street Food",
        "price": 180,
        "rating": 4.9,
        "votes": 7800,
        "isVeg": true,
        "isBestseller": true,
        "description": "Fluffy large bhature served with rich dark spiced Amritsari chole and pickled chillies.",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_22_3",
        "name": "Raj Kachori Chaat",
        "category": "Street Food",
        "price": 140,
        "rating": 4.8,
        "votes": 3600,
        "isVeg": true,
        "isBestseller": true,
        "description": "Crisp king kachori filled with sprouts, curd, chutneys and pomegranate.",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_22_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_22_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_22_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_22_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 23,
    "name": "Punjab Grill - Royal Heritage",
    "cityId": "mumbai",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "North Indian",
      "Mughlai",
      "Tandoori",
      "Biryani"
    ],
    "costForOne": 450,
    "deliveryTime": "32 mins",
    "distance": "3.5 km",
    "rating": 4.7,
    "ratingCount": "3.8k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "20% OFF with code CRAVE50",
    "goldOffer": "Free Dahi Ke Kebab on ₹500+",
    "safetyBadged": true,
    "address": "Bandra West, Mumbai",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_23_1",
        "name": "Murgh Makhani (Butter Chicken)",
        "category": "Main Course",
        "price": 460,
        "rating": 4.9,
        "votes": 1800,
        "isVeg": false,
        "isBestseller": true,
        "description": "Tandoor roasted shredded chicken simmered in rich creamy velvety tomato gravy.",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_23_2",
        "name": "Paneer Tikka Multani",
        "category": "Starters",
        "price": 380,
        "rating": 4.6,
        "votes": 790,
        "isVeg": true,
        "isBestseller": false,
        "description": "Melt-in-mouth paneer cubes coated in herb yogurt and baked in clay tandoor.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_23_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_23_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_23_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_23_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 24,
    "name": "Shree Krishna Pure Vegetarian",
    "cityId": "mumbai",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "North Indian",
      "Thali",
      "Pure Veg",
      "Street Food"
    ],
    "costForOne": 170,
    "deliveryTime": "21 mins",
    "distance": "1.3 km",
    "rating": 4.5,
    "ratingCount": "5.2k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "30% OFF up to ₹75",
    "goldOffer": "Free Sweet Lassi with Deluxe Thali",
    "safetyBadged": true,
    "address": "Linking Road, Bandra West, Mumbai",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_24_1",
        "name": "Maharaja Pure Veg Feast Thali",
        "category": "Thali",
        "price": 310,
        "rating": 4.8,
        "votes": 1980,
        "isVeg": true,
        "isBestseller": true,
        "description": "Full platter with Shahi Paneer, Dal Tadka, Veg Jalfrezi, Rice, 3 Butter Rotis, Gulab Jamun.",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_24_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_24_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_24_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_24_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 25,
    "name": "Bikanervala Traditional Feast",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "North Indian",
      "Sweets",
      "Chaat",
      "Pure Veg"
    ],
    "costForOne": 190,
    "deliveryTime": "24 mins",
    "distance": "1.8 km",
    "rating": 4.3,
    "ratingCount": "6.4k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "FLAT ₹50 OFF",
    "goldOffer": "Free Rasmalai on ₹299+",
    "safetyBadged": true,
    "address": "Karol Bagh, New Delhi",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_25_1",
        "name": "Special Dal Baati Churma Thali",
        "category": "Thali",
        "price": 290,
        "rating": 4.6,
        "votes": 1200,
        "isVeg": true,
        "isBestseller": true,
        "description": "Traditional baked wheat dumplings immersed in pure desi ghee with spicy dal.",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_25_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_25_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_25_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_25_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 26,
    "name": "Moti Mahal Delux Tandoori Trail",
    "cityId": "delhi",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "North Indian",
      "Mughlai",
      "Tandoori"
    ],
    "costForOne": 380,
    "deliveryTime": "30 mins",
    "distance": "2.8 km",
    "rating": 4.5,
    "ratingCount": "4.1k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "25% OFF",
    "goldOffer": "Flat 10% Extra OFF with Gold",
    "safetyBadged": true,
    "address": "Daryaganj / Central Delhi",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_26_1",
        "name": "Original 1920 Butter Chicken",
        "category": "Main Course",
        "price": 440,
        "rating": 4.9,
        "votes": 2600,
        "isVeg": false,
        "isBestseller": true,
        "description": "The historic recipe invented by Moti Mahal. Velvety rich tomato gravy with smoked tandoori chicken.",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_26_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_26_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_26_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_26_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 27,
    "name": "Gulab Sweets & North Indian",
    "cityId": "kolkata",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "North Indian",
      "Sweets",
      "Thali",
      "Pure Veg"
    ],
    "costForOne": 160,
    "deliveryTime": "19 mins",
    "distance": "1.2 km",
    "rating": 4.2,
    "ratingCount": "2.8k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "30% OFF",
    "goldOffer": "Free Rasgulla piece",
    "safetyBadged": true,
    "address": "Salt Lake, Kolkata",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_27_1",
        "name": "Kolkata Special Veg Mini Thali",
        "category": "Thali",
        "price": 199,
        "rating": 4.4,
        "votes": 940,
        "isVeg": true,
        "isBestseller": true,
        "description": "Paneer Makhani, Dal Fry, Jeera Rice and 2 Tawa Rotis.",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_27_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_27_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_27_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_27_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 28,
    "name": "Karim's Mughlai Heritage",
    "cityId": "delhi",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Mughlai",
      "North Indian",
      "Kebabs",
      "Biryani"
    ],
    "costForOne": 360,
    "deliveryTime": "32 mins",
    "distance": "3.4 km",
    "rating": 4.7,
    "ratingCount": "8.9k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "15% OFF for Gold members",
    "goldOffer": "Complimentary Shahi Kheer",
    "safetyBadged": true,
    "address": "Old Delhi / Jama Masjid Area",
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_28_1",
        "name": "Karim Special Mutton Nihari",
        "category": "Main Course",
        "price": 460,
        "rating": 4.9,
        "votes": 3400,
        "isVeg": false,
        "isBestseller": true,
        "description": "Overnight slow cooked shank meat in rich aromatic stew.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_28_2",
        "name": "Seekh Kebab Roll",
        "category": "Starters",
        "price": 240,
        "rating": 4.8,
        "votes": 2100,
        "isVeg": false,
        "isBestseller": true,
        "description": "Minced spiced mutton charcoal skewers wrapped in roomali roti.",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_28_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_28_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_28_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_28_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 29,
    "name": "Saravana Bhavan Classic Veg",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "South Indian",
      "Pure Veg",
      "Dosa",
      "Idli"
    ],
    "costForOne": 190,
    "deliveryTime": "23 mins",
    "distance": "1.6 km",
    "rating": 4.6,
    "ratingCount": "7.8k+",
    "isVeg": true,
    "isPromoted": true,
    "discount": "25% OFF with code CRAVE50",
    "goldOffer": "Free Filter Coffee with Meals",
    "safetyBadged": true,
    "address": "Janpath, Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_29_1",
        "name": "Ghee Roast Masala Dosa",
        "category": "Dosa",
        "price": 180,
        "rating": 4.9,
        "votes": 3200,
        "isVeg": true,
        "isBestseller": true,
        "description": "Crispy paper thin crepe roasted in pure cow ghee, filled with spiced potato masala. Served with 3 coconut chutneys and sambar.",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_29_2",
        "name": "Steamed Button Idli with Ghee Podi (14 Pcs)",
        "category": "Idli",
        "price": 140,
        "rating": 4.7,
        "votes": 1900,
        "isVeg": true,
        "isBestseller": true,
        "description": "Mini soft rice cakes soaked in hot spicy gunpowder podi and melted ghee.",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_29_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_29_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_29_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_29_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 30,
    "name": "Sagar Ratna Dosa Express",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "South Indian",
      "Dosa",
      "Thali",
      "Pure Veg"
    ],
    "costForOne": 180,
    "deliveryTime": "22 mins",
    "distance": "1.5 km",
    "rating": 4.4,
    "ratingCount": "5.6k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "40% OFF up to ₹80",
    "goldOffer": "Free Rava Kesari on ₹350+",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_30_1",
        "name": "Rava Onion Masala Dosa",
        "category": "Dosa",
        "price": 190,
        "rating": 4.6,
        "votes": 1800,
        "isVeg": true,
        "isBestseller": true,
        "description": "Semolina crisp net crepe with finely chopped onions, green chillies and potato filling.",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_30_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_30_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_30_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_30_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 31,
    "name": "Murugan Idli Shop & Podi Dosa",
    "cityId": "bangalore",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "South Indian",
      "Idli",
      "Dosa",
      "Pure Veg"
    ],
    "costForOne": 150,
    "deliveryTime": "20 mins",
    "distance": "1.4 km",
    "rating": 4.7,
    "ratingCount": "4.9k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "30% OFF",
    "goldOffer": "Free Filter Coffee on ₹250+",
    "safetyBadged": true,
    "address": "Indiranagar, Bengaluru",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_31_1",
        "name": "Famous Madurai Fluffy Mallipoo Idli (2 Pcs)",
        "category": "Idli",
        "price": 90,
        "rating": 4.9,
        "votes": 2800,
        "isVeg": true,
        "isBestseller": true,
        "description": "Ultra-soft jasmine petal soft idlis served with spicy coriander chutney and piping hot sambar.",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_31_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_31_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_31_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_31_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 32,
    "name": "Vidyarthi Bhavan Crispy Dosa",
    "cityId": "bangalore",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "South Indian",
      "Dosa",
      "Coffee",
      "Pure Veg"
    ],
    "costForOne": 140,
    "deliveryTime": "25 mins",
    "distance": "2.7 km",
    "rating": 4.8,
    "ratingCount": "9.4k+",
    "isVeg": true,
    "isPromoted": true,
    "discount": "15% OFF for Crave VIP",
    "goldOffer": "Priority Seating for Gold Members",
    "safetyBadged": true,
    "address": "Gandhi Bazaar / Basavanagudi, Bengaluru",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_32_1",
        "name": "Heritage Thick Butter Masala Dosa",
        "category": "Dosa",
        "price": 130,
        "rating": 4.9,
        "votes": 4500,
        "isVeg": true,
        "isBestseller": true,
        "description": "Crisp outside and pillow soft inside drenched in melted butter.",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_32_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_32_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_32_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_32_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 33,
    "name": "Woodlands South Indian Kitchen",
    "cityId": "hyderabad",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "South Indian",
      "Thali",
      "Dosa",
      "Pure Veg"
    ],
    "costForOne": 170,
    "deliveryTime": "24 mins",
    "distance": "2.0 km",
    "rating": 4.3,
    "ratingCount": "3.1k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "FLAT ₹60 OFF",
    "goldOffer": "Free Buttermilk with Thali",
    "safetyBadged": true,
    "address": "Banjara Hills, Hyderabad",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_33_1",
        "name": "South Indian Special Banana Leaf Meal",
        "category": "Thali",
        "price": 260,
        "rating": 4.6,
        "votes": 1200,
        "isVeg": true,
        "isBestseller": true,
        "description": "Rice, Sambar, Rasam, Poriyal, Kootu, Appalam, Curd, Payasam.",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_33_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_33_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_33_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_33_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 34,
    "name": "Wok & Roll Pan Asian Bistro",
    "cityId": "pune",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Chinese",
      "Asian",
      "Noodles",
      "Momos",
      "Thai"
    ],
    "costForOne": 280,
    "deliveryTime": "32 mins",
    "distance": "3.4 km",
    "rating": 4.3,
    "ratingCount": "2.9k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "20% OFF with code CRAVE50",
    "goldOffer": "Free Dim Sum basket on ₹499+",
    "safetyBadged": true,
    "address": "Kalyani Nagar, Pune",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_34_1",
        "name": "Schezwan Chilli Hakka Noodles",
        "category": "Noodles",
        "price": 240,
        "rating": 4.4,
        "votes": 670,
        "isVeg": true,
        "isBestseller": true,
        "description": "Wok tossed noodles with crunchy cabbage, bell peppers and spring onions in house sauce.",
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_34_2",
        "name": "Crispy Steamed Chicken Momos (6 Pcs)",
        "category": "Momos",
        "price": 210,
        "rating": 4.7,
        "votes": 930,
        "isVeg": false,
        "isBestseller": true,
        "description": "Delicate handmade dumplings packed with juicy minced chicken and ginger scallions.",
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_34_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_34_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_34_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_34_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 35,
    "name": "Mainland China Dumplings & Wok",
    "cityId": "mumbai",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Chinese",
      "Pan-Asian",
      "Dim Sum",
      "Seafood"
    ],
    "costForOne": 550,
    "deliveryTime": "34 mins",
    "distance": "3.8 km",
    "rating": 4.7,
    "ratingCount": "3.5k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "15% OFF for Gold members",
    "goldOffer": "Free Jasmine Tea service",
    "safetyBadged": true,
    "address": "Bandra West, Mumbai",
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_35_1",
        "name": "Prawn & Chive Har Gow Dim Sum (4 Pcs)",
        "category": "Dim Sum",
        "price": 420,
        "rating": 4.9,
        "votes": 890,
        "isVeg": false,
        "isBestseller": true,
        "description": "Translucent steamed crystal dumpling stuffed with plump tiger prawns.",
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_35_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_35_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_35_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_35_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 36,
    "name": "Berco's Chinese & Thai",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Chinese",
      "Thai",
      "Noodles",
      "Asian"
    ],
    "costForOne": 290,
    "deliveryTime": "26 mins",
    "distance": "2.2 km",
    "rating": 4.4,
    "ratingCount": "5.8k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "40% OFF up to ₹80",
    "goldOffer": "Free Chicken Sweet Corn Soup",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_36_1",
        "name": "Chilli Chicken Gravy with Fried Rice Combo",
        "category": "Combos",
        "price": 340,
        "rating": 4.6,
        "votes": 1450,
        "isVeg": false,
        "isBestseller": true,
        "description": "Classic diced chicken with capsicum and green chillies served with egg fried rice.",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_36_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_36_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_36_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_36_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 37,
    "name": "Wow! Momo & Steamed Delights",
    "cityId": "kolkata",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Momos",
      "Chinese",
      "Tibetan",
      "Fast Food"
    ],
    "costForOne": 160,
    "deliveryTime": "19 mins",
    "distance": "1.2 km",
    "rating": 4.3,
    "ratingCount": "8.1k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "50% OFF up to ₹100",
    "goldOffer": "Extra 2 Pcs Pan Fried Momos",
    "safetyBadged": true,
    "address": "Park Street, Kolkata",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_37_1",
        "name": "Chicken Cheese Pan Fried Momos in Schezwan",
        "category": "Momos",
        "price": 220,
        "rating": 4.7,
        "votes": 2900,
        "isVeg": false,
        "isBestseller": true,
        "description": "Crispy bottom pan fried momos tossed in fiery spicy red schezwan gravy.",
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_37_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_37_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_37_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_37_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 38,
    "name": "Mamagoto Asian Street Food",
    "cityId": "bangalore",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Pan-Asian",
      "Japanese",
      "Thai",
      "Cocktails"
    ],
    "costForOne": 480,
    "deliveryTime": "30 mins",
    "distance": "2.8 km",
    "rating": 4.6,
    "ratingCount": "3.4k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "20% OFF for Diners",
    "goldOffer": "Free Crispy Lotus Stem on ₹600+",
    "safetyBadged": true,
    "address": "Indiranagar 12th Main, Bengaluru",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_38_1",
        "name": "Soggy Thai Basil Fried Rice with Chicken",
        "category": "Main Course",
        "price": 420,
        "rating": 4.8,
        "votes": 1100,
        "isVeg": false,
        "isBestseller": true,
        "description": "Aromatic Jasmine rice stir fried with holy basil, fiery bird eye chillies and tender chicken.",
        "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_38_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_38_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_38_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_38_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 39,
    "name": "Dragon Noodles & Dimsum House",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Chinese",
      "Noodles",
      "Momos"
    ],
    "costForOne": 210,
    "deliveryTime": "23 mins",
    "distance": "1.9 km",
    "rating": 4.2,
    "ratingCount": "2.2k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "30% OFF",
    "goldOffer": "Free Veg Spring Rolls",
    "safetyBadged": true,
    "address": "Hauz Khas, New Delhi",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_39_1",
        "name": "Chicken Pad Thai Glass Noodles",
        "category": "Noodles",
        "price": 290,
        "rating": 4.5,
        "votes": 680,
        "isVeg": false,
        "isBestseller": true,
        "description": "Flat rice noodles tossed in tamarind palm sugar sauce with peanuts and bean sprouts.",
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_39_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_39_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_39_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_39_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 40,
    "name": "KFC",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Fast Food",
      "Chicken",
      "Burgers",
      "Wings"
    ],
    "costForOne": 230,
    "deliveryTime": "25 mins",
    "distance": "1.8 km",
    "rating": 4.4,
    "ratingCount": "11k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "40% OFF with code CRAVE50",
    "goldOffer": "Extra 2 Pcs Hot & Crispy on ₹499+",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_40_1",
        "name": "Hot & Crispy Chicken Bucket (6 Pcs)",
        "category": "Chicken",
        "price": 440,
        "rating": 4.8,
        "votes": 4800,
        "isVeg": false,
        "isBestseller": true,
        "description": "Signature secret 11 herbs & spices crispy fried juicy chicken.",
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_40_2",
        "name": "Classic Zinger Chicken Burger",
        "category": "Burgers",
        "price": 199,
        "rating": 4.7,
        "votes": 3900,
        "isVeg": false,
        "isBestseller": true,
        "description": "Extra crunchy double dredged whole chicken breast fillet with lettuce and mayo.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_40_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_40_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_40_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_40_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 41,
    "name": "Crispy Crunch Fried Chicken Co.",
    "cityId": "hyderabad",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Fast Food",
      "Chicken",
      "Burgers",
      "Wings"
    ],
    "costForOne": 220,
    "deliveryTime": "26 mins",
    "distance": "2.8 km",
    "rating": 4.2,
    "ratingCount": "2.7k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "50% OFF up to ₹100",
    "goldOffer": "Extra 15% OFF for Gold members",
    "safetyBadged": true,
    "address": "Road No 36, Jubilee Hills, Hyderabad",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_41_1",
        "name": "Smoky BBQ Glazed Wings (8 Pcs)",
        "category": "Chicken",
        "price": 290,
        "rating": 4.5,
        "votes": 560,
        "isVeg": false,
        "isBestseller": true,
        "description": "Crisp chicken wings tossed in rich hickory smoked BBQ sauce with toasted sesame.",
        "image": "https://images.unsplash.com/photo-1527477321055-436158a2b008?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_41_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_41_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_41_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_41_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 42,
    "name": "Popeyes Louisiana Kitchen",
    "cityId": "bangalore",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Chicken",
      "Burgers",
      "American",
      "Fast Food"
    ],
    "costForOne": 260,
    "deliveryTime": "24 mins",
    "distance": "2.0 km",
    "rating": 4.5,
    "ratingCount": "3.9k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "25% OFF",
    "goldOffer": "Complimentary Cajun Fries",
    "safetyBadged": true,
    "address": "Koramangala, Bengaluru",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_42_1",
        "name": "Famous Cajun Spicy Chicken Sandwich",
        "category": "Burgers",
        "price": 240,
        "rating": 4.8,
        "votes": 1900,
        "isVeg": false,
        "isBestseller": true,
        "description": "Buttermilk battered crisp chicken breast with spicy cajun mayo and pickles in brioche.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_42_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_42_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_42_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_42_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 43,
    "name": "Leon's Burgers & Glazed Wings",
    "cityId": "bangalore",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Burgers",
      "Wings",
      "Fast Food",
      "Shakes"
    ],
    "costForOne": 230,
    "deliveryTime": "21 mins",
    "distance": "1.7 km",
    "rating": 4.4,
    "ratingCount": "4.6k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "FLAT ₹80 OFF",
    "goldOffer": "Free Lemon Iced Tea on ₹300+",
    "safetyBadged": true,
    "address": "Indiranagar, Bengaluru",
    "image": "https://images.unsplash.com/photo-1527477321055-436158a2b008?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1527477321055-436158a2b008?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_43_1",
        "name": "Fiery Peri Peri Chicken Wings (10 Pcs)",
        "category": "Chicken",
        "price": 320,
        "rating": 4.7,
        "votes": 1400,
        "isVeg": false,
        "isBestseller": true,
        "description": "Tender bone-in wings dusted with African peri peri spice.",
        "image": "https://images.unsplash.com/photo-1527477321055-436158a2b008?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_43_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_43_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_43_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_43_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 44,
    "name": "Subway",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Healthy Food",
      "Salads",
      "Rolls",
      "Sandwiches"
    ],
    "costForOne": 210,
    "deliveryTime": "20 mins",
    "distance": "1.1 km",
    "rating": 4.3,
    "ratingCount": "8.4k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "30% OFF with code CRAVE50",
    "goldOffer": "Free Cookie with Sub Combo",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_44_1",
        "name": "Paneer Tikka Sub (15 cm)",
        "category": "Sandwiches",
        "price": 230,
        "rating": 4.6,
        "votes": 2800,
        "isVeg": true,
        "isBestseller": true,
        "description": "Tandoori marinated paneer with fresh veggies and mint mayo on multigrain bread.",
        "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_44_2",
        "name": "Roasted Chicken Breast Sub (15 cm)",
        "category": "Sandwiches",
        "price": 260,
        "rating": 4.7,
        "votes": 3100,
        "isVeg": false,
        "isBestseller": true,
        "description": "Lean juicy chicken breast with olives, jalapenos, cucumbers and sweet onion sauce.",
        "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_44_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_44_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_44_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_44_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 45,
    "name": "Salad Days Healthy Organic Bowls",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Healthy Food",
      "Salads",
      "Bowls",
      "Smoothies"
    ],
    "costForOne": 310,
    "deliveryTime": "27 mins",
    "distance": "2.5 km",
    "rating": 4.6,
    "ratingCount": "3.1k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "20% OFF",
    "goldOffer": "Free Cold Pressed Juice on ₹400+",
    "safetyBadged": true,
    "address": "DLF Cyber City / Delhi NCR",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_45_1",
        "name": "Mediterranean Falafel & Quinoa Bowl",
        "category": "Bowls",
        "price": 340,
        "rating": 4.8,
        "votes": 940,
        "isVeg": true,
        "isBestseller": true,
        "description": "Crisp falafels, fluffy organic quinoa, roasted beetroot hummus and feta dressing.",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_45_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_45_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_45_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_45_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 46,
    "name": "Faasos Royal Wraps & Rolls",
    "cityId": "mumbai",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Rolls",
      "Fast Food",
      "North Indian"
    ],
    "costForOne": 180,
    "deliveryTime": "22 mins",
    "distance": "1.6 km",
    "rating": 4.3,
    "ratingCount": "6.7k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "50% OFF up to ₹100",
    "goldOffer": "Free Chocolate Mousse with Signature Roll",
    "safetyBadged": true,
    "address": "Bandra West, Mumbai",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_46_1",
        "name": "Jumbo Chicken Tikka & Cheese Wrap",
        "category": "Rolls",
        "price": 220,
        "rating": 4.6,
        "votes": 2400,
        "isVeg": false,
        "isBestseller": true,
        "description": "Chargrilled chicken chunks rolled with melted cheese and mint mayo in flaky paratha.",
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_46_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_46_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_46_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_46_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 47,
    "name": "EatFit Calorie-Counted Bowls",
    "cityId": "bangalore",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Healthy Food",
      "North Indian",
      "Bowls",
      "Salads"
    ],
    "costForOne": 190,
    "deliveryTime": "23 mins",
    "distance": "1.9 km",
    "rating": 4.4,
    "ratingCount": "4.9k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "FLAT ₹75 OFF",
    "goldOffer": "Free High Protein Buttermilk",
    "safetyBadged": true,
    "address": "Koramangala, Bengaluru",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_47_1",
        "name": "Zero Butter Dal Makhani & Jeera Rice Bowl",
        "category": "Bowls",
        "price": 210,
        "rating": 4.7,
        "votes": 1600,
        "isVeg": true,
        "isBestseller": true,
        "description": "High fiber black dal prepared with cold pressed olive oil and unpolished rice.",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_47_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_47_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_47_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_47_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 48,
    "name": "Sweet Tooth Bakery & Patisserie",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Bakery",
      "Desserts",
      "Cakes",
      "Ice Cream"
    ],
    "costForOne": 210,
    "deliveryTime": "24 mins",
    "distance": "2.0 km",
    "rating": 4.7,
    "ratingCount": "4.1k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "40% OFF up to ₹100",
    "goldOffer": "Free Choco Lava on ₹350+",
    "safetyBadged": true,
    "address": "Defence Colony, New Delhi",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_48_1",
        "name": "Belgian Dark Chocolate Truffle Cake (500g)",
        "category": "Cakes",
        "price": 490,
        "rating": 4.9,
        "votes": 1540,
        "isVeg": true,
        "isBestseller": true,
        "description": "Silky rich 54% dark Belgian chocolate ganache layered with moist chocolate sponge.",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_48_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_48_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_48_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_48_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 49,
    "name": "Theobroma Brownies & Pastries",
    "cityId": "mumbai",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Bakery",
      "Desserts",
      "Pastries"
    ],
    "costForOne": 240,
    "deliveryTime": "20 mins",
    "distance": "1.5 km",
    "rating": 4.8,
    "ratingCount": "6.9k+",
    "isVeg": true,
    "isPromoted": true,
    "discount": "20% OFF with code CRAVE50",
    "goldOffer": "Free Overload Brownie on ₹400+",
    "safetyBadged": true,
    "address": "Colaba / Bandra, Mumbai",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_49_1",
        "name": "Overload Walnut Brownie",
        "category": "Desserts",
        "price": 120,
        "rating": 4.9,
        "votes": 3800,
        "isVeg": true,
        "isBestseller": true,
        "description": "Dense fudgy pure chocolate brownie packed with toasted Californian walnuts.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_49_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_49_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_49_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_49_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 50,
    "name": "Baskin Robbins 31 Flavors",
    "cityId": "bangalore",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Ice Cream",
      "Desserts",
      "Shakes"
    ],
    "costForOne": 170,
    "deliveryTime": "18 mins",
    "distance": "1.2 km",
    "rating": 4.5,
    "ratingCount": "5.1k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "30% OFF",
    "goldOffer": "Free Waffle Cone upgrade",
    "safetyBadged": true,
    "address": "Indiranagar, Bengaluru",
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_50_1",
        "name": "Mississippi Mud Premium Tub (450ml)",
        "category": "Ice Cream",
        "price": 340,
        "rating": 4.8,
        "votes": 1900,
        "isVeg": true,
        "isBestseller": true,
        "description": "Rich chocolate fudge ribbon in creamy chocolate ice cream with brownie chunks.",
        "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_50_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_50_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_50_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_50_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 51,
    "name": "Naturals Artisanal Ice Cream",
    "cityId": "mumbai",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Ice Cream",
      "Desserts",
      "Pure Veg"
    ],
    "costForOne": 150,
    "deliveryTime": "19 mins",
    "distance": "1.4 km",
    "rating": 4.9,
    "ratingCount": "12k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "FLAT ₹50 OFF",
    "goldOffer": "Free Scoop with 500ml Tub",
    "safetyBadged": true,
    "address": "Juhu / Bandra, Mumbai",
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_51_1",
        "name": "Original Tender Coconut Scoop",
        "category": "Ice Cream",
        "price": 95,
        "rating": 5,
        "votes": 6200,
        "isVeg": true,
        "isBestseller": true,
        "description": "Crafted with fresh real Malabar tender coconut malai and milk. No artificial colors or preservatives.",
        "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_51_2",
        "name": "Alphonso Mango Real Fruit Ice Cream",
        "category": "Ice Cream",
        "price": 95,
        "rating": 4.9,
        "votes": 4800,
        "isVeg": true,
        "isBestseller": true,
        "description": "Made from pure Ratnagiri Alphonso mango pulp.",
        "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_51_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_51_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_51_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_51_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 52,
    "name": "The Belgian Waffle Co.",
    "cityId": "pune",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery"
    ],
    "cuisines": [
      "Desserts",
      "Waffles",
      "Bakery"
    ],
    "costForOne": 180,
    "deliveryTime": "20 mins",
    "distance": "1.5 km",
    "rating": 4.6,
    "ratingCount": "4.8k+",
    "isVeg": true,
    "isPromoted": false,
    "discount": "40% OFF up to ₹80",
    "goldOffer": "Free Vanilla Ice Cream Scoop",
    "safetyBadged": true,
    "address": "FC Road, Pune",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_52_1",
        "name": "Triple Chocolate Crispy Waff-wich",
        "category": "Waffles",
        "price": 170,
        "rating": 4.8,
        "votes": 2300,
        "isVeg": true,
        "isBestseller": true,
        "description": "Dark, milk and white chocolate spread stuffed in fresh hot golden waffle.",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_52_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_52_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_52_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_52_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 53,
    "name": "Chaayos",
    "cityId": "delhi",
    "serviceType": "delivery",
    "serviceTypes": [
      "delivery",
      "dining"
    ],
    "cuisines": [
      "Beverages",
      "Street Food",
      "Snacks",
      "Tea"
    ],
    "costForOne": 160,
    "deliveryTime": "18 mins",
    "distance": "1.0 km",
    "rating": 4.5,
    "ratingCount": "7.2k+",
    "isVeg": true,
    "isPromoted": true,
    "discount": "30% OFF with code CRAVE50",
    "goldOffer": "Free Bun Maska on ₹250+",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_53_1",
        "name": "Kullhad Chai with Elaichi & Ginger",
        "category": "Beverages",
        "price": 110,
        "rating": 4.9,
        "votes": 4100,
        "isVeg": true,
        "isBestseller": true,
        "description": "Steaming hot spiced milk tea served in fragrant baked earthen clay kullhad.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_53_2",
        "name": "Crispy Bun Maska with Amul Butter",
        "category": "Snacks",
        "price": 90,
        "rating": 4.7,
        "votes": 2800,
        "isVeg": true,
        "isBestseller": true,
        "description": "Toasted soft bakery bun slathered generously with salted Amul butter.",
        "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_53_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_53_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_53_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_53_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 54,
    "name": "Starbucks Coffee & Bakery",
    "cityId": "mumbai",
    "serviceType": "dining",
    "serviceTypes": [
      "dining",
      "delivery"
    ],
    "cuisines": [
      "Beverages",
      "Coffee",
      "Bakery",
      "Sandwiches"
    ],
    "costForOne": 320,
    "deliveryTime": "22 mins",
    "distance": "1.6 km",
    "rating": 4.6,
    "ratingCount": "9.1k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "15% OFF for Crave VIP",
    "goldOffer": "Free Extra Espresso Shot",
    "safetyBadged": true,
    "address": "Bandra West, Mumbai",
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_54_1",
        "name": "Java Chip Frappuccino",
        "category": "Beverages",
        "price": 340,
        "rating": 4.8,
        "votes": 3400,
        "isVeg": true,
        "isBestseller": true,
        "description": "Coffee blended with chocolate chips, milk and ice, topped with whipped cream and mocha drizzle.",
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_54_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_54_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_54_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_54_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 55,
    "name": "Lord of the Drinks Pub & Grill",
    "cityId": "delhi",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Cocktails",
      "Finger Food",
      "Continental"
    ],
    "costForOne": 650,
    "deliveryTime": "35 mins",
    "distance": "2.5 km",
    "rating": 4.6,
    "ratingCount": "5.4k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "25% OFF on Table Reservations",
    "goldOffer": "1+1 on Cocktails for Gold Members",
    "safetyBadged": true,
    "address": "Connaught Place, New Delhi",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_55_1",
        "name": "Smoky Barbecue Pork Ribs / Wings",
        "category": "Bar Bites",
        "price": 480,
        "rating": 4.7,
        "votes": 890,
        "isVeg": false,
        "isBestseller": true,
        "description": "Slow smoked juicy ribs glazed in Jack Daniels barbecue sauce.",
        "image": "https://images.unsplash.com/photo-1527477321055-436158a2b008?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_55_2",
        "name": "Craft IPA Brew Jug (1.5L)",
        "category": "Drinks",
        "price": 690,
        "rating": 4.8,
        "votes": 1200,
        "isVeg": true,
        "isBestseller": true,
        "description": "House craft Indian Pale Ale freshly poured from taproom barrel.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_55_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_55_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_55_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_55_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 56,
    "name": "Social - Taproom & Eatery",
    "cityId": "bangalore",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Cocktails",
      "Bar Bites",
      "Continental"
    ],
    "costForOne": 550,
    "deliveryTime": "30 mins",
    "distance": "2.1 km",
    "rating": 4.7,
    "ratingCount": "7.8k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "20% OFF Table Bill",
    "goldOffer": "Complimentary Loaded Nachos",
    "safetyBadged": true,
    "address": "Church Street, Bengaluru",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_56_1",
        "name": "Death by Chocolate LIIT Cocktail",
        "category": "Drinks",
        "price": 460,
        "rating": 4.9,
        "votes": 1900,
        "isVeg": true,
        "isBestseller": true,
        "description": "High potency cocktail with 5 spirits, chocolate liqueur and cola float.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_56_2",
        "name": "Loaded Chilli Cheese Fries Extravaganza",
        "category": "Bar Bites",
        "price": 290,
        "rating": 4.8,
        "votes": 2400,
        "isVeg": true,
        "isBestseller": true,
        "description": "Crisp fries smothered in molten cheddar, jalapenos and sour cream.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_56_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_56_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_56_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_56_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 57,
    "name": "Toit Craft Brewery & Gastro Pub",
    "cityId": "bangalore",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Craft Beer",
      "Woodfired Pizza",
      "Pubs"
    ],
    "costForOne": 600,
    "deliveryTime": "32 mins",
    "distance": "2.4 km",
    "rating": 4.9,
    "ratingCount": "11k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "10% OFF with Gold",
    "goldOffer": "Free Craft Beer Sampler (4x100ml)",
    "safetyBadged": true,
    "address": "100ft Road, Indiranagar, Bengaluru",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_57_1",
        "name": "Toit Tint-In-Wit Craft Wheat Beer",
        "category": "Drinks",
        "price": 340,
        "rating": 4.9,
        "votes": 3100,
        "isVeg": true,
        "isBestseller": true,
        "description": "Authentic Belgian Witbier infused with coriander seeds and fresh orange peel.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_57_2",
        "name": "Smoked Bacon & Mozzarella Pizza",
        "category": "Bar Bites",
        "price": 490,
        "rating": 4.8,
        "votes": 1800,
        "isVeg": false,
        "isBestseller": true,
        "description": "Crispy smoked bacon strips, roasted garlic and molten mozzarella on woodfired crust.",
        "image": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_57_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_57_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_57_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_57_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 58,
    "name": "Byg Brewski Brewing Company",
    "cityId": "bangalore",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Craft Beer",
      "Cocktails",
      "Bar Bites",
      "Continental"
    ],
    "costForOne": 700,
    "deliveryTime": "35 mins",
    "distance": "3.1 km",
    "rating": 4.8,
    "ratingCount": "14k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "15% OFF with Crave Pay",
    "goldOffer": "Free Craft Brew Sampler",
    "safetyBadged": true,
    "address": "Hennur Ring Road, Bengaluru",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_58_1",
        "name": "Byg Hefeweizen Craft Wheat Beer",
        "category": "Drinks",
        "price": 360,
        "rating": 4.9,
        "votes": 2600,
        "isVeg": true,
        "isBestseller": true,
        "description": "Traditional German wheat beer with notes of clove and banana.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_58_2",
        "name": "Crispy Pork Belly Skewers",
        "category": "Bar Bites",
        "price": 460,
        "rating": 4.8,
        "votes": 1100,
        "isVeg": false,
        "isBestseller": true,
        "description": "Glazed tender pork belly charred with sweet chilli and sesame.",
        "image": "https://images.unsplash.com/photo-1527477321055-436158a2b008?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_58_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_58_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_58_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_58_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 59,
    "name": "Monkey Bar & Kitchen",
    "cityId": "delhi",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Gastropub",
      "Cocktails",
      "Finger Food"
    ],
    "costForOne": 600,
    "deliveryTime": "30 mins",
    "distance": "2.8 km",
    "rating": 4.7,
    "ratingCount": "6.2k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "20% OFF Table Bill",
    "goldOffer": "1+1 on Selected Cocktails",
    "safetyBadged": true,
    "address": "Vasant Kunj, New Delhi",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_59_1",
        "name": "Mangaa Vodka Cocktail",
        "category": "Drinks",
        "price": 420,
        "rating": 4.8,
        "votes": 1850,
        "isVeg": true,
        "isBestseller": true,
        "description": "Signature raw mango and vodka blend with sweet-sour cumin rim.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_59_2",
        "name": "Butterfly Chicken Tenders with Mayo",
        "category": "Bar Bites",
        "price": 340,
        "rating": 4.7,
        "votes": 1200,
        "isVeg": false,
        "isBestseller": true,
        "description": "Crispy crumb coated tender chicken strips served with house dip.",
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_59_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_59_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_59_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_59_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 60,
    "name": "Breeze Lounge & Skybar",
    "cityId": "mumbai",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Mediterranean",
      "Cocktails",
      "Wine"
    ],
    "costForOne": 850,
    "deliveryTime": "40 mins",
    "distance": "3.5 km",
    "rating": 4.8,
    "ratingCount": "4.9k+",
    "isVeg": true,
    "isPromoted": true,
    "discount": "Flat ₹200 OFF on ₹1200",
    "goldOffer": "Free Dessert with Gold",
    "safetyBadged": true,
    "address": "Powai, Mumbai",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_60_1",
        "name": "Smoked Jalapeno Cheese Poppers",
        "category": "Bar Bites",
        "price": 380,
        "rating": 4.8,
        "votes": 850,
        "isVeg": true,
        "isBestseller": true,
        "description": "Molten cheddar and jalapeno filled crispy bite sized poppers.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_60_2",
        "name": "Sunset Sangria Pitcher (1L)",
        "category": "Drinks",
        "price": 790,
        "rating": 4.9,
        "votes": 1400,
        "isVeg": true,
        "isBestseller": true,
        "description": "Red wine infused with citrus fruits, apples and cinnamon liqueur.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_60_ext1",
        "name": "Chef Special Paneer Platter",
        "category": "Starters",
        "price": 240,
        "rating": 4.6,
        "votes": 480,
        "isVeg": true,
        "isBestseller": false,
        "description": "Tender marinated paneer cubes grilled with bell peppers.",
        "image": "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_60_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_60_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_60_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 61,
    "name": "10 Downing Street English Pub",
    "cityId": "hyderabad",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Pubs",
      "Continental",
      "Finger Food"
    ],
    "costForOne": 550,
    "deliveryTime": "28 mins",
    "distance": "2.0 km",
    "rating": 4.6,
    "ratingCount": "8.1k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "25% OFF with code CRAVE50",
    "goldOffer": "Free Chicken Wings with 2 Pints",
    "safetyBadged": true,
    "address": "Begumpet, Hyderabad",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_61_1",
        "name": "Crispy Fish & Chips Basket",
        "category": "Bar Bites",
        "price": 420,
        "rating": 4.7,
        "votes": 1600,
        "isVeg": false,
        "isBestseller": true,
        "description": "Beer battered golden fish fillet served with fries and tartar sauce.",
        "image": "https://images.unsplash.com/photo-1527477321055-436158a2b008?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_61_2",
        "name": "Classic Draught Stout Pint (500ml)",
        "category": "Drinks",
        "price": 310,
        "rating": 4.8,
        "votes": 1900,
        "isVeg": true,
        "isBestseller": true,
        "description": "Smooth creamy Irish stout with roasted malt notes and velvety head.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_61_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_61_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_61_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_61_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 62,
    "name": "High Spirits Cafe & Live Bar",
    "cityId": "pune",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Bar Bites",
      "Cocktails",
      "Burgers"
    ],
    "costForOne": 500,
    "deliveryTime": "25 mins",
    "distance": "1.8 km",
    "rating": 4.8,
    "ratingCount": "9.3k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "20% OFF Table Bill",
    "goldOffer": "Free Nachos on ₹500+",
    "safetyBadged": true,
    "address": "Koregaon Park, Pune",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_62_1",
        "name": "Spicy Honey Glazed Wings (8 Pcs)",
        "category": "Bar Bites",
        "price": 340,
        "rating": 4.8,
        "votes": 2100,
        "isVeg": false,
        "isBestseller": true,
        "description": "Crispy fried chicken wings drenched in sweet spicy honey sauce.",
        "image": "https://images.unsplash.com/photo-1527477321055-436158a2b008?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_62_2",
        "name": "High Spirits Long Island Iced Tea",
        "category": "Drinks",
        "price": 410,
        "rating": 4.9,
        "votes": 3200,
        "isVeg": true,
        "isBestseller": true,
        "description": "Five-spirit punch with fresh lime and cola over crushed ice.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_62_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_62_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_62_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_62_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 63,
    "name": "Someplace Else Live Music Pub",
    "cityId": "kolkata",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Pubs",
      "Continental",
      "Snacks"
    ],
    "costForOne": 550,
    "deliveryTime": "27 mins",
    "distance": "2.1 km",
    "rating": 4.7,
    "ratingCount": "5.9k+",
    "isVeg": false,
    "isPromoted": false,
    "discount": "15% OFF for Crave VIP",
    "goldOffer": "1+1 on House Beers",
    "safetyBadged": true,
    "address": "The Park Hotel, Park Street, Kolkata",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_63_1",
        "name": "Golden Crispy Chicken Cutlet",
        "category": "Bar Bites",
        "price": 290,
        "rating": 4.7,
        "votes": 940,
        "isVeg": false,
        "isBestseller": true,
        "description": "Spiced minced chicken patty crumbed and deep fried with mustard.",
        "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_63_2",
        "name": "Chilled Premium Lager Pitcher",
        "category": "Drinks",
        "price": 580,
        "rating": 4.8,
        "votes": 1450,
        "isVeg": true,
        "isBestseller": true,
        "description": "Crisp, golden sparkling lager poured fresh from draft tap.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_63_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_63_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_63_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_63_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    "id": 64,
    "name": "Effingut Brewhouse",
    "cityId": "pune",
    "serviceType": "nightlife",
    "serviceTypes": [
      "nightlife",
      "dining"
    ],
    "cuisines": [
      "Nightlife",
      "Craft Beer",
      "Pub Bites",
      "Barbecue"
    ],
    "costForOne": 650,
    "deliveryTime": "30 mins",
    "distance": "2.6 km",
    "rating": 4.9,
    "ratingCount": "10k+",
    "isVeg": false,
    "isPromoted": true,
    "discount": "Flat 20% OFF with Gold",
    "goldOffer": "Free Craft Sampler with Order",
    "safetyBadged": true,
    "address": "Koregaon Park, Pune",
    "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "banner": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop&q=80",
    "menu": [
      {
        "id": "m_64_1",
        "name": "Apple Cider Craft Brew (500ml)",
        "category": "Drinks",
        "price": 330,
        "rating": 4.9,
        "votes": 2800,
        "isVeg": true,
        "isBestseller": true,
        "description": "Crisp semi-sweet cider fermented with Himalayan apples.",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_64_2",
        "name": "Loaded Barbecue Chicken Nachos",
        "category": "Bar Bites",
        "price": 360,
        "rating": 4.8,
        "votes": 1500,
        "isVeg": false,
        "isBestseller": true,
        "description": "Tortilla chips heaped with smoked BBQ chicken, salsa and cheese.",
        "image": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_64_ext1",
        "name": "Signature Grilled Kebab Duo",
        "category": "Starters",
        "price": 290,
        "rating": 4.6,
        "votes": 480,
        "isVeg": false,
        "isBestseller": false,
        "description": "Tender marinated succulent kebabs grilled to perfection.",
        "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_64_ext2",
        "name": "Chef Special Beverage Cooler",
        "category": "Beverages",
        "price": 99,
        "rating": 4.5,
        "votes": 310,
        "isVeg": true,
        "isBestseller": false,
        "description": "Chilled refreshing mint lemon cooler prepared fresh.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_64_ext3",
        "name": "Crispy Seasoned Golden Fries",
        "category": "Sides",
        "price": 120,
        "rating": 4.6,
        "votes": 520,
        "isVeg": true,
        "isBestseller": false,
        "description": "Hot crunchy salted potato fries with spicy garlic dip.",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=400&auto=format&fit=crop&q=80"
      },
      {
        "id": "m_64_ext4",
        "name": "Warm Choco Fudge Brownie",
        "category": "Desserts",
        "price": 130,
        "rating": 4.8,
        "votes": 890,
        "isVeg": true,
        "isBestseller": true,
        "description": "Gooey walnut brownie warmed and served with dark chocolate drizzle.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80"
      }
    ]
  }
];

export const coupons = [
  {
    "code": "CRAVE50",
    "title": "50% OFF up to ₹100",
    "minOrder": 199,
    "discountPercent": 50,
    "maxDiscount": 100,
    "description": "Valid on orders above ₹199"
  },
  {
    "code": "TASTY20",
    "title": "20% OFF up to ₹150",
    "minOrder": 299,
    "discountPercent": 20,
    "maxDiscount": 150,
    "description": "Valid on orders above ₹299"
  },
  {
    "code": "FREEDEL",
    "title": "Free Delivery",
    "minOrder": 149,
    "discountPercent": 0,
    "freeDelivery": true,
    "description": "Save delivery fee on orders above ₹149"
  },
  {
    "code": "GOLD10",
    "title": "10% Extra Gold Discount",
    "minOrder": 100,
    "discountPercent": 10,
    "maxDiscount": 50,
    "description": "Exclusive Crave Foodie Gold offer"
  }
];
