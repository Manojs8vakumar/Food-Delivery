package com.example.demo.repository;

import com.example.demo.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Optional<Restaurant> findBySlug(String slug);

    List<Restaurant> findByIsDeliveryTrue();
    List<Restaurant> findByIsDiningTrue();
    List<Restaurant> findByIsNightlifeTrue();

    @Query("SELECT r FROM Restaurant r WHERE " +
           "LOWER(r.name) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(r.cuisines) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(r.area) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<Restaurant> searchRestaurants(@Param("query") String query);

    @Query("SELECT r FROM Restaurant r JOIN r.menuItems m WHERE " +
           "LOWER(m.name) LIKE LOWER(CONCAT('%', :dish, '%'))")
    List<Restaurant> findRestaurantsByDishName(@Param("dish") String dish);
}
