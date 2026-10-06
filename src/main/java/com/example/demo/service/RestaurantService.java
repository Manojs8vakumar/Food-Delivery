package com.example.demo.service;

import com.example.demo.model.Category;
import com.example.demo.model.Restaurant;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.RestaurantRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final CategoryRepository categoryRepository;

    public RestaurantService(RestaurantRepository restaurantRepository, CategoryRepository categoryRepository) {
        this.restaurantRepository = restaurantRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Optional<Restaurant> getRestaurantBySlug(String slug) {
        return restaurantRepository.findBySlug(slug);
    }

    public Optional<Restaurant> getRestaurantById(Long id) {
        return restaurantRepository.findById(id);
    }

    public List<Restaurant> getRestaurantsByMode(String mode) {
        if ("dining".equalsIgnoreCase(mode)) {
            return restaurantRepository.findByIsDiningTrue();
        } else if ("nightlife".equalsIgnoreCase(mode)) {
            return restaurantRepository.findByIsNightlifeTrue();
        } else {
            return restaurantRepository.findByIsDeliveryTrue();
        }
    }

    public List<Restaurant> search(String query) {
        if (query == null || query.trim().isEmpty()) {
            return restaurantRepository.findAll();
        }
        String clean = query.trim();
        List<Restaurant> byNameOrCuisine = restaurantRepository.searchRestaurants(clean);
        List<Restaurant> byDish = restaurantRepository.findRestaurantsByDishName(clean);
        // Combine without duplicates
        return java.util.stream.Stream.concat(byNameOrCuisine.stream(), byDish.stream())
                .distinct()
                .toList();
    }
}
