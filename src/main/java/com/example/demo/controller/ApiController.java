package com.example.demo.controller;

import com.example.demo.model.MenuItem;
import com.example.demo.model.Order;
import com.example.demo.model.OrderItem;
import com.example.demo.model.Restaurant;
import com.example.demo.repository.MenuItemRepository;
import com.example.demo.repository.RestaurantRepository;
import com.example.demo.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.*;

@RestController
@RequestMapping("/api")
public class ApiController {

    private final RestaurantRepository restaurantRepository;
    private final MenuItemRepository menuItemRepository;
    private final OrderService orderService;

    public ApiController(RestaurantRepository restaurantRepository,
                         MenuItemRepository menuItemRepository,
                         OrderService orderService) {
        this.restaurantRepository = restaurantRepository;
        this.menuItemRepository = menuItemRepository;
        this.orderService = orderService;
    }

    @GetMapping("/search/suggestions")
    public ResponseEntity<Map<String, Object>> searchSuggestions(@RequestParam("q") String query) {
        Map<String, Object> result = new HashMap<>();
        if (query == null || query.trim().length() < 2) {
            result.put("restaurants", Collections.emptyList());
            result.put("dishes", Collections.emptyList());
            return ResponseEntity.ok(result);
        }

        String q = query.trim();
        List<Restaurant> restaurants = restaurantRepository.searchRestaurants(q).stream().limit(5).toList();
        List<MenuItem> dishes = menuItemRepository.findByNameContainingIgnoreCase(q).stream().limit(5).toList();

        List<Map<String, Object>> restList = restaurants.stream().map(r -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", r.getId());
            map.put("name", r.getName());
            map.put("slug", r.getSlug());
            map.put("cuisines", r.getCuisines());
            map.put("rating", r.getRating());
            map.put("image", r.getImageUrl());
            return map;
        }).toList();

        List<Map<String, Object>> dishList = dishes.stream().map(d -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", d.getId());
            map.put("name", d.getName());
            map.put("price", d.getPrice());
            map.put("isVeg", d.isVeg());
            map.put("restaurantName", d.getRestaurant() != null ? d.getRestaurant().getName() : "");
            map.put("restaurantSlug", d.getRestaurant() != null ? d.getRestaurant().getSlug() : "");
            return map;
        }).toList();

        result.put("restaurants", restList);
        result.put("dishes", dishList);
        return ResponseEntity.ok(result);
    }

    public static class OrderRequest {
        public String customerName;
        public String customerPhone;
        public String deliveryAddress;
        public String paymentMethod;
        public String restaurantName;
        public Long restaurantId;
        public BigDecimal discount;
        public List<CartItemDto> items;

        public static class CartItemDto {
            public Long id;
            public String name;
            public BigDecimal price;
            public Integer quantity;
            public boolean isVeg;
        }
    }

    @PostMapping("/orders/place")
    public ResponseEntity<Map<String, Object>> placeOrder(@RequestBody OrderRequest req) {
        List<OrderItem> items = new ArrayList<>();
        if (req.items != null) {
            for (OrderRequest.CartItemDto itemDto : req.items) {
                OrderItem oi = new OrderItem(
                        itemDto.id,
                        itemDto.name,
                        itemDto.price,
                        itemDto.quantity != null ? itemDto.quantity : 1,
                        itemDto.isVeg
                );
                items.add(oi);
            }
        }

        Order order = orderService.createOrder(
                req.customerName,
                req.customerPhone,
                req.deliveryAddress,
                req.paymentMethod,
                req.restaurantName,
                req.restaurantId,
                items,
                req.discount
        );

        Map<String, Object> res = new HashMap<>();
        res.put("success", true);
        res.put("orderNumber", order.getOrderNumber());
        res.put("totalAmount", order.getTotalAmount());
        return ResponseEntity.ok(res);
    }

    @GetMapping("/orders/{orderNumber}/status")
    public ResponseEntity<Map<String, Object>> getOrderStatus(@PathVariable("orderNumber") String orderNumber) {
        Optional<Order> orderOpt = orderService.getOrderByNumber(orderNumber);
        if (orderOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Order o = orderOpt.get();
        Map<String, Object> res = new HashMap<>();
        res.put("orderNumber", o.getOrderNumber());
        res.put("status", o.getStatus());
        res.put("createdAt", o.getCreatedAt());
        res.put("totalAmount", o.getTotalAmount());
        res.put("restaurantName", o.getRestaurantName());
        res.put("etaMinutes", o.getEstimatedDeliveryMinutes());
        return ResponseEntity.ok(res);
    }
}
