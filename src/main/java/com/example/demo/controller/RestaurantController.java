package com.example.demo.controller;

import com.example.demo.model.MenuItem;
import com.example.demo.model.Restaurant;
import com.example.demo.service.RestaurantService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.*;
import java.util.stream.Collectors;

@Controller
public class RestaurantController {

    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/restaurant/{slug}")
    public String restaurantDetail(@PathVariable("slug") String slug, Model model) {
        Optional<Restaurant> restaurantOpt = restaurantService.getRestaurantBySlug(slug);
        if (restaurantOpt.isEmpty()) {
            return "redirect:/";
        }

        Restaurant restaurant = restaurantOpt.get();
        // Group menu items by categoryName
        Map<String, List<MenuItem>> menuByCategory = restaurant.getMenuItems().stream()
                .collect(Collectors.groupingBy(
                        item -> item.getCategoryName() != null ? item.getCategoryName() : "Specials",
                        LinkedHashMap::new,
                        Collectors.toList()
                ));

        model.addAttribute("restaurant", restaurant);
        model.addAttribute("menuByCategory", menuByCategory);
        return "restaurant";
    }
}
