package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.model.Restaurant;
import com.example.demo.service.RestaurantService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class HomeController {

    private final RestaurantService restaurantService;

    public HomeController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/")
    public String index(@RequestParam(value = "mode", defaultValue = "delivery") String mode,
                        @RequestParam(value = "search", required = false) String search,
                        @RequestParam(value = "category", required = false) String category,
                        @RequestParam(value = "vegOnly", defaultValue = "false") boolean vegOnly,
                        @RequestParam(value = "rating4Plus", defaultValue = "false") boolean rating4Plus,
                        Model model) {
        
        List<Category> categories = restaurantService.getAllCategories();
        List<Restaurant> restaurants;

        if (search != null && !search.isBlank()) {
            restaurants = restaurantService.search(search);
        } else if (category != null && !category.isBlank()) {
            restaurants = restaurantService.search(category);
        } else {
            restaurants = restaurantService.getRestaurantsByMode(mode);
        }

        if (vegOnly) {
            restaurants = restaurants.stream().filter(Restaurant::isPureVeg).toList();
        }
        if (rating4Plus) {
            restaurants = restaurants.stream().filter(r -> r.getRating() != null && r.getRating() >= 4.0).toList();
        }

        model.addAttribute("categories", categories);
        model.addAttribute("restaurants", restaurants);
        model.addAttribute("currentMode", mode);
        model.addAttribute("searchQuery", search != null ? search : "");
        model.addAttribute("selectedCategory", category != null ? category : "");
        model.addAttribute("vegOnly", vegOnly);
        model.addAttribute("rating4Plus", rating4Plus);
        model.addAttribute("selectedCity", "Bengaluru");

        return "index";
    }
}
